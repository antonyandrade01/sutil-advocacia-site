"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, CheckCircle } from "lucide-react"

export function CTASection() {
  const problems = [
    "Clientes que não pagam suas dívidas?",
    "Contratos não cumpridos?",
    "Notas promissórias em atraso?",
    "Dificuldade para recuperar créditos?",
    "Processos de cobrança complexos?",
    "Devedores que se esquivam do pagamento?",
  ]

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Você está enfrentando algum <span className="text-secondary">destes problemas</span>?
          </h2>

          <p className="text-xl md:text-2xl mb-12 opacity-90">
            E quer saber se algum direito seu <strong>foi desrespeitado</strong>?
          </p>

          {/* Problems List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-center space-x-3 text-left">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/90">{problem}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Não deixe seus direitos serem desrespeitados!</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Agende uma <strong>análise gratuita</strong> do seu caso e descubra como podemos ajudar você a recuperar o
              que é seu por direito.
            </p>

            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-12 py-6 text-xl font-semibold"
              onClick={() =>
                window.open(
                  "https://wa.me/554398323533?text=Olá%2C%20gostaria%20de%20agendar%20uma%20análise%20gratuita%20do%20meu%20caso.",
                  "_blank",
                )
              }
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              SIM! QUERO FALAR COM O ESPECIALISTA
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <div className="text-primary-foreground/80">Gratuito</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">24h</div>
              <div className="text-primary-foreground/80">Resposta Rápida</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">+5</div>
              <div className="text-primary-foreground/80">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
