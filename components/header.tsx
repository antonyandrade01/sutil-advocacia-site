"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-sm shadow-lg" : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-lg">GS</span>
            </div>
            <div className="text-primary-foreground">
              <h1 className="font-bold text-lg">Gabriel Sutil</h1>
              <p className="text-xs opacity-90">Advocacia</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-primary-foreground hover:text-secondary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-primary-foreground hover:text-secondary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-primary-foreground hover:text-secondary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("advogado")}
              className="text-primary-foreground hover:text-secondary transition-colors"
            >
              Advogado
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-primary-foreground hover:text-secondary transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              onClick={() => window.open("tel:+554398323533", "_self")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Ligar
            </Button>
            <Button
              size="sm"
              className="bg-secondary hover:bg-secondary/90"
              onClick={() =>
                window.open(
                  "https://wa.me/554398323533?text=Olá%2C%20gostaria%20de%20agendar%20uma%20análise%20gratuita%20do%20meu%20caso.",
                  "_blank",
                )
              }
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary border-t border-primary-foreground/20">
            <nav className="py-4 space-y-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left px-4 py-2 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="block w-full text-left px-4 py-2 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="block w-full text-left px-4 py-2 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("advogado")}
                className="block w-full text-left px-4 py-2 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Advogado
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block w-full text-left px-4 py-2 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contato
              </button>
              <div className="px-4 py-2 space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                  onClick={() => window.open("tel:+554398323533", "_self")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar Agora
                </Button>
                <Button
                  size="sm"
                  className="w-full bg-secondary hover:bg-secondary/90"
                  onClick={() =>
                    window.open(
                      "https://wa.me/554398323533?text=Olá%2C%20gostaria%20de%20agendar%20uma%20análise%20gratuita%20do%20meu%20caso.",
                      "_blank",
                    )
                  }
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
