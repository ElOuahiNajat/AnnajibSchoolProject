import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
  <img
    src="/logoAnnajib.PNG"
    alt="Logo"
    className="w-6 h-6 object-contain"
  />
</div>

              <div>
                <h3 className="font-bold text-foreground">Établissement scolaire Annajib</h3>
                <p className="text-sm text-muted-foreground">École Privée</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {"L'excellence éducative. Nous accompagnons chaque élève de la crèche au baccalauréat."}
            </p>
            <div className="flex gap-2">
          

              
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Liens Rapides</h4>
            <div className="space-y-2">
              <a href="#accueil" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Accueil
              </a>
              <a href="#cycles" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Nos Cycles
              </a>
              <a href="#activites" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Activités
              </a>
             
              
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <div className="space-y-2">
              
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Espace Élèves
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Transport
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Soutien Scolaire
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Informations</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  Lotissement Les Palmiers
                  <br />
                  Oulad Ayad, Maroc
                </div>
              </div>
              <div className="flex items-center gap-3">
  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
  <span className="text-sm text-muted-foreground">05234-44022</span>
</div>

<div className="flex items-center gap-3">
  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
  <span className="text-sm text-muted-foreground">et.annajib@gmail.com</span>
</div>

<div className="flex items-center gap-3">
  <Facebook className="h-4 w-4 text-primary flex-shrink-0" />
  <a
    href="https://www.facebook.com/Houssinehammadi12/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-muted-foreground hover:underline"
  >
    Suivez-nous sur Facebook
  </a>
</div>

            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2025 Établissement scolaire annajib. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
