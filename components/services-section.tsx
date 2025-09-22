"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Handshake, Gavel, FileCheck, Search, Building2, MessageCircle } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: FileText,
      title: "Cobrança Extrajudicial",
      description:
        "Envio de notificações e tentativas de acordo amigável, com formalização de compromissos de pagamento e acompanhamento das negociações.",
      features: ["Notificações formais", "Acordos amigáveis", "Acompanhamento personalizado"],
    },
    {
      icon: Handshake,
      title: "Negociação Direta com Devedores",
      description:
        "Contato estruturado com devedores, buscando soluções que atendam às condições legais e possibilitem a recuperação do crédito.",
      features: ["Contato direto", "Soluções personalizadas", "Recuperação eficiente"],
    },
    {
      icon: Gavel,
      title: "Cobrança Judicial / Execução de Crédito",
      description:
        "Ações de execução de contratos, notas promissórias e outros títulos, além do cumprimento de sentença e medidas de penhora de bens e contas bancárias.",
      features: ["Execução de títulos", "Penhora de bens", "Cumprimento de sentença"],
    },
    {
      icon: FileCheck,
      title: "Acordos Durante o Processo",
      description:
        "Formalização de parcelamentos, acordos e confissões de dívida, sempre observando a legislação vigente e os direitos das partes.",
      features: ["Parcelamentos", "Confissão de dívida", "Formalização legal"],
    },
    {
      icon: Search,
      title: "Medidas Judiciais Complementares",
      description:
        "Adoção de ações como desconsideração da personalidade jurídica, fraude contra credores, bloqueio de bens e investigação patrimonial.",
      features: ["Desconsideração jurídica", "Investigação patrimonial", "Bloqueio de bens"],
    },
    {
      icon: Building2,
      title: "Gestão de Carteira de Cobrança (Empresas)",
      description:
        "Atuação contínua e organizada na recuperação de créditos, com acompanhamento de resultados e relatórios periódicos.",
      features: ["Gestão contínua", "Relatórios periódicos", "Acompanhamento de resultados"],
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Oferecemos soluções completas para recuperação de créditos, desde negociações extrajudiciais até execuções
              complexas.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Precisa recuperar seus créditos?</h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e receba uma análise gratuita do seu caso. Vamos encontrar a melhor estratégia
                para recuperar o que é seu por direito.
              </p>
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg"
                onClick={() =>
                  window.open(
                    "https://wa.me/554398323533?text=Olá%2C%20gostaria%20de%20agendar%20uma%20análise%20gratuita%20do%20meu%20caso.",
                    "_blank",
                  )
                }
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale Conosco Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
