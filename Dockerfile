# --- Estágio 1: Build ---
# Este estágio irá instalar todas as dependências, construir o projeto e preparar os arquivos para produção.
FROM node:20-alpine AS builder

# Instala o pnpm
RUN npm install -g pnpm

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de definição de pacotes
COPY package.json pnpm-lock.yaml ./

# Instala TODAS as dependências (devDependencies são necessárias para o build)
# --frozen-lockfile garante que a instalação use exatamente o que está no lockfile
RUN pnpm install --frozen-lockfile

# Copia o restante do código-fonte da aplicação
COPY . .

# Executa o script de build do Next.js
RUN pnpm build


# --- Estágio 2: Produção ---
# Este estágio cria a imagem final, que é leve e contém apenas o necessário para rodar o site.
FROM node:20-alpine AS runner
WORKDIR /app

# Instala o pnpm
RUN npm install -g pnpm

# Define o ambiente como produção, o que otimiza o Next.js
ENV NODE_ENV=production

# Cria um usuário e grupo não-root para segurança
RUN addgroup --system --gid 1001 nextjs
RUN adduser --system --uid 1001 nextjs

# Copia apenas os artefatos necessários do estágio 'builder'
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/public ./public
# Atribui a propriedade dos arquivos de build ao nosso novo usuário
COPY --from=builder --chown=nextjs:nextjs /app/.next ./.next
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Instala SOMENTE as dependências de produção a partir do lockfile
RUN pnpm install --prod --frozen-lockfile

# Muda para o usuário não-root
USER nextjs

# Expõe a porta 3333
ENV PORT=3333
EXPOSE 3333

# O comando para iniciar a aplicação
CMD ["pnpm", "start"]