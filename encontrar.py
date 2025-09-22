# --- COMEÇO DO SCRIPT ATUALIZADO: encontrar_arquivos.py ---
import os

def gerar_arvore_diretorios(diretorio_busca, prefixo='', pastas_para_ocultar=None):
    """
    Gera uma string representando a estrutura de árvore de um diretório.
    O conteúdo de pastas especificadas será ocultado.
    """
    if pastas_para_ocultar is None:
        pastas_para_ocultar = {'.git', 'node_modules'}
    
    try:
        # Ordenar para garantir que pastas apareçam antes de arquivos com o mesmo prefixo
        itens = sorted(os.listdir(diretorio_busca), key=lambda x: (os.path.isdir(os.path.join(diretorio_busca, x)), x))
    except FileNotFoundError:
        return ""
    except PermissionError:
        return f"{prefixo}├── [Acesso Negado]\n"
        
    arvore_str = ""
    ponteiros = ['├── '] * (len(itens) - 1) + ['└── ']

    for ponteiro, nome_item in zip(ponteiros, itens):
        caminho_completo = os.path.join(diretorio_busca, nome_item)
        arvore_str += f"{prefixo}{ponteiro}{nome_item}\n"
        
        extensao = '│   ' if ponteiro == '├── ' else '    '
        if os.path.isdir(caminho_completo):
            if nome_item in pastas_para_ocultar:
                arvore_str += f"{prefixo}{extensao}└── [Conteúdo oculto]\n"
            else:
                arvore_str += gerar_arvore_diretorios(caminho_completo, prefixo + extensao, pastas_para_ocultar)
            
    return arvore_str

def encontrar_e_copiar_arquivos(diretorio_busca, arquivo_saida):
    """
    Lista a estrutura de diretórios e o conteúdo de todos os arquivos relevantes
    para um único arquivo de saída.
    """
    # 1. Pastas para ignorar completamente na busca de arquivos
    pastas_excluidas = {
        '.git', 
        '__pycache__', 
        'node_modules',
        # --- PASTAS ADICIONADAS PARA O PROJETO DELPHI ---
        'Win32',          # Pasta de saída do compilador
        '__history',      # Cache e histórico da IDE Delphi
        '__recovery',     # Arquivos de recuperação da IDE
        'modules'         # Pasta de dependências (contém o Horse)
    }
    
    # Pastas para MOSTRAR na árvore, mas OCULTAR o conteúdo na árvore
    # É bom manter 'modules' e 'Win32' aqui para que a estrutura fique clara
    pastas_para_ocultar_arvore = {'.git', '__pycache__', 'node_modules', 'modules', 'Win32'}
    
    # 2. Excluir arquivos específicos pelo nome
    arquivos_excluidos = {
        'resultado_completo.txt', # O próprio arquivo de saída
        'encontrar.py',  # O próprio script
        'favicon.ico',
        # --- ARQUIVOS ADICIONADOS PARA O PROJETO DELPHI ---
        'boss-lock.json' # Arquivo de lock de dependências, boss.json é suficiente
    }

    # 3. Excluir arquivos por extensão (mais robusto para binários)
    extensoes_excluidas = {
        '.dcu', '.exe', '.map', '.drc', '.res', '.obj', '.o', # Compilados e de build
        '.png', '.jpg', '.jpeg', '.gif', '.ico',             # Imagens
        '.docx', '.pdf',                                     # Documentos
        '.zip', '.rar', '.7z'                                # Arquivos compactados
    }

    encodings_para_tentar = ['utf-8', 'latin-1', 'cp1252']

    with open(arquivo_saida, 'w', encoding='utf-8') as saida:
        saida.write("--- ESTRUTURA DE DIRETÓRIOS ---\n\n")
        nome_diretorio_raiz = os.path.basename(os.path.abspath(diretorio_busca))
        saida.write(f"{nome_diretorio_raiz}/\n")
        arvore = gerar_arvore_diretorios(diretorio_busca, pastas_para_ocultar=pastas_para_ocultar_arvore)
        saida.write(arvore)
        saida.write("\n\n--- CONTEÚDO DOS ARQUIVOS DO PROJETO ---\n\n")

        for pasta_raiz, dirs, arquivos in os.walk(diretorio_busca):
            # Modifica a lista de diretórios 'in-place' para o os.walk não entrar neles
            dirs[:] = [d for d in dirs if d not in pastas_excluidas]

            for nome_arquivo in sorted(arquivos):
                if nome_arquivo in arquivos_excluidos:
                    continue
                
                # Checa se a extensão do arquivo deve ser excluída
                if any(nome_arquivo.lower().endswith(ext) for ext in extensoes_excluidas):
                    continue

                caminho_completo = os.path.join(pasta_raiz, nome_arquivo)
                caminho_relativo = os.path.relpath(caminho_completo, diretorio_busca).replace(os.sep, '/')
                
                saida.write(f"--- COMEÇO DO ARQUIVO: {caminho_relativo} ---\n\n")

                conteudo = None
                for encoding in encodings_para_tentar:
                    try:
                        with open(caminho_completo, 'r', encoding=encoding) as f:
                            conteudo = f.read()
                            break 
                    except (UnicodeDecodeError, IOError):
                        continue
                    except Exception as e:
                        conteudo = f"NÃO FOI POSSÍVEL LER O ARQUIVO. ERRO: {e}"
                        break
                
                if conteudo is not None:
                    saida.write(f"{conteudo.strip()}\n\n")
                else:
                    saida.write(f"[CONTEÚDO BINÁRIO OU ILEGÍVEL]\n\n")

                saida.write(f"--- FINAL DO ARQUIVO: {caminho_relativo} ---\n\n")

    print(f"Busca concluída. Os resultados foram salvos em '{arquivo_saida}'.")

if __name__ == '__main__':
    diretorio_para_buscar = '.'
    arquivo_de_saida = 'resultado_completo.txt'
    encontrar_e_copiar_arquivos(diretorio_para_buscar, arquivo_de_saida)

# --- FINAL DO SCRIPT ATUALIZADO ---