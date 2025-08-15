import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-illustration.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden african-pattern min-h-[80vh] flex items-center">
      {/* Background gradients */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/20 to-background/40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <div className="text-center lg:text-left space-y-8">
            <div className="slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-comfortaa text-white leading-tight">
                Bienvenue dans
                <span className="block text-secondary text-shadow-soft bounce-gentle inline-block">
                  EconaLab
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mt-6 leading-relaxed font-quicksand">
                L'aventure écologique interactive qui inspire les jeunes africains 
                à protéger leur environnement avec créativité et fierté culturelle.
              </p>
            </div>

            {/* Call to actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start slide-up">
              <Button
                asChild
                size="lg"
                className="button-gradient text-white font-semibold shadow-button hover:shadow-lg transition-bounce text-lg px-8 py-4 h-auto"
              >
                <Link to="/thematiques" className="flex items-center space-x-2">
                  <span>Commencer l'aventure</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-4 h-auto"
              >
                <Play className="h-5 w-5 mr-2" />
                Voir la démo
              </Button>
            </div>

            {/* Stats rapides */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20 slide-up">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary font-comfortaa">5+</div>
                <div className="text-sm text-white/80">Thématiques</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary font-comfortaa">20+</div>
                <div className="text-sm text-white/80">Jeux & Quiz</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary font-comfortaa">∞</div>
                <div className="text-sm text-white/80">Créativité</div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="relative z-10 float-soft">
              <img
                src={heroImage}
                alt="Enfants africains apprenant l'écologie"
                className="w-full h-auto rounded-2xl shadow-card"
              />
              
              {/* Éléments décoratifs animés */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full opacity-80 pulse-soft"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-tertiary rounded-full opacity-70 bounce-gentle"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-accent rounded-full opacity-60 float-soft"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Motifs décoratifs */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}