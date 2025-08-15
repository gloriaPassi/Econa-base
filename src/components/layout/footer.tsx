import { Link } from "react-router-dom";
import { Leaf, Heart, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface/50 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et mission */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-comfortaa text-primary">
                EconaLab
              </span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Une plateforme éducative interactive qui inspire les enfants africains 
              à protéger leur environnement tout en célébrant leur culture.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 text-tertiary" />
              <span>Créé avec passion pour l'Afrique et la planète</span>
            </div>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 font-comfortaa">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/thematiques" className="text-muted-foreground hover:text-primary transition-smooth">
                  Thématiques
                </Link>
              </li>
              <li>
                <Link to="/jeux" className="text-muted-foreground hover:text-primary transition-smooth">
                  Jeux & Quiz
                </Link>
              </li>
              <li>
                <Link to="/atelier" className="text-muted-foreground hover:text-primary transition-smooth">
                  Atelier Créatif
                </Link>
              </li>
              <li>
                <Link to="/profil" className="text-muted-foreground hover:text-primary transition-smooth">
                  Mon Profil
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 font-comfortaa">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contact
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground flex items-center space-x-2">
                  <Globe className="h-4 w-4" />
                  <span>Français | English</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur et copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 EconaLab. Tous droits réservés. 
            <span className="mx-2">•</span>
            Éduquer, Inspirer, Préserver.
          </p>
        </div>
      </div>
    </footer>
  );
}