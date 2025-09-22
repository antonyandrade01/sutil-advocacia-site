"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Shield, Award, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/abstract-legal-pattern.png')] bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Main Heading */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Especialista em <span className="text-secondary">Cobrança</span> e
              <span className="text-secondary"> Execução</span> de Créditos
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in-up-delay-1">
            <p className="text-xl md:text-2xl mb-8 opacity-90 text-pretty">
              Dificuldade em receber pagamentos devidos?
              <br className="hidden md:block" />
              Recupere seus créditos com segurança jurídica e eficiência.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
              Análise Gratuita do Caso
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg bg-transparent"
              onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up-delay-3 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mx-auto mb-4">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">100%</h3>
              <p className="opacity-90">Segurança Jurídica</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mx-auto mb-4">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">+5 Anos</h3>
              <p className="opacity-90">de Experiência</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">+500</h3>
              <p className="opacity-90">Casos Resolvidos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
