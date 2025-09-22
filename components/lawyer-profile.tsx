"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, GraduationCap, Briefcase, Award } from "lucide-react"

export function LawyerProfile() {
  return (
    <section id="advogado" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Conheça o <span className="text-primary">Dr. Gabriel Sutil</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sócio fundador do escritório, especialista em Direito Empresarial e recuperação de créditos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img
                    src="/professional-lawyer-portrait-gabriel-sutil.jpg"
                    alt="Dr. Gabriel Sutil - Advogado"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="order-1 lg:order-2">
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-6">Dr. Gabriel Sutil</h3>

                  <div className="space-y-6 mb-8">
                    <p className="text-muted-foreground leading-relaxed">
                      Sócio fundador do escritório, atua com foco em Direito Empresarial, especialmente em matérias
                      relacionadas à cobrança extrajudicial e judicial, execução de títulos e recuperação de créditos.
                    </p>

                    <p className="text-muted-foreground leading-relaxed">
                      Possui pós-graduação em Direito Tributário e formação em Letras – Português, o que contribui para
                      a clareza na comunicação e precisão técnica na elaboração de peças jurídicas.
                    </p>
                  </div>

                  {/* Qualifications */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-card-foreground mb-1">Formação</h4>
                      <p className="text-sm text-muted-foreground">Direito + Letras</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-card-foreground mb-1">Especialização</h4>
                      <p className="text-sm text-muted-foreground">Direito Tributário</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-card-foreground mb-1">Experiência</h4>
                      <p className="text-sm text-muted-foreground">+5 Anos</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() =>
                      window.open(
                        "https://wa.me/554398323533?text=Olá%2C%20gostaria%20de%20agendar%20uma%20análise%20gratuita%20do%20meu%20caso.",
                        "_blank",
                      )
                    }
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Fale com o Dr. Gabriel Sutil
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
