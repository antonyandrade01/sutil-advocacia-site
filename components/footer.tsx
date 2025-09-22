import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold text-lg">GS</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Gabriel Sutil</h3>
                  <p className="text-sm opacity-90">Advocacia</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Especialista em cobrança e execução de créditos. Recupere o que é seu por direito com segurança
                jurídica.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-secondary" />
                  <span className="text-primary-foreground/80">(43) 9 8323-3533</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-secondary" />
                  <span className="text-primary-foreground/80">WhatsApp</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-secondary" />
                  <span className="text-primary-foreground/80">contato@sutiladvocacia.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="text-primary-foreground/80">Londrina, PR</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Serviços</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Cobrança Extrajudicial</li>
                <li>Execução de Créditos</li>
                <li>Negociação com Devedores</li>
                <li>Acordos Judiciais</li>
                <li>Gestão de Carteira</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/60">
              Copyright © 2025 - Gabriel Sutil Advocacia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
