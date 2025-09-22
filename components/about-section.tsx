import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Shield } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: CheckCircle,
      title: "Experiência Comprovada",
      description:
        "Atendimento prestativo, com foco em explicar ao cliente sobre seus direitos e buscar o melhor resultado no menor tempo possível.",
    },
    {
      icon: Shield,
      title: "Compromisso com Resultados",
      description:
        "Buscamos soluções jurídicas adequadas para cada situação, respeitando sempre os direitos e necessidades do cliente.",
    },
    {
      icon: Clock,
      title: "Agilidade nos Processos",
      description:
        "Processos otimizados e acompanhamento constante para garantir a recuperação eficiente dos seus créditos.",
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description:
        "Cada caso é tratado com dedicação individual, oferecendo soluções customizadas para suas necessidades específicas.",
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que escolher o <span className="text-primary">Escritório Sutil</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              O escritório Sutil conduz cada demanda com dedicação, seriedade e respeito às particularidades de cada
              cliente.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-card rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-6">
              Comunicação Clara e Transparente
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Prezamos pela comunicação clara e transparente, oferecendo informações detalhadas sobre cada etapa do
                  processo.
                </p>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Nosso compromisso é atuar com ética e responsabilidade, sempre buscando as melhores soluções para
                  nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
