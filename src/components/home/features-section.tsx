import { Gamepad2, Palette, Trophy, Sparkles } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Jeux Interactifs",
    description: "Des mini-jeux éducatifs inspirés de la culture africaine pour apprendre en s'amusant",
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    icon: Palette,
    title: "Atelier Créatif",
    description: "Crée tes propres solutions écologiques avec des outils no-code adaptés aux enfants",
    color: "text-tertiary",
    bgColor: "bg-tertiary/10"
  },
  {
    icon: Trophy,
    title: "Badges & Récompenses",
    description: "Gagne des points, badges et débloquer des avatars inspirés de la culture africaine",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: Sparkles,
    title: "Progression Personnalisée",
    description: "Suis tes progrès et découvre des défis adaptés à ton niveau d'apprentissage",
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-comfortaa text-foreground mb-4">
            Une Expérience Unique
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-quicksand">
            EconaLab combine pédagogie moderne, culture africaine et gamification 
            pour créer une expérience d'apprentissage inoubliable.
          </p>
        </div>

        {/* Grille des fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div 
                key={feature.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:shadow-card transition-smooth hover:border-primary/20"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-bounce`}>
                    <Icon className={`h-7 w-7 ${feature.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold font-comfortaa text-foreground mb-3 group-hover:text-primary transition-smooth">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-quicksand">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section culturelle */}
        <div className="mt-20 p-8 rounded-2xl card-gradient text-white text-center">
          <h3 className="text-2xl font-bold font-comfortaa mb-4">
            Célébrons l'Afrique et sa Nature
          </h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto font-quicksand leading-relaxed">
            Chaque activité d'EconaLab intègre des éléments de la riche culture africaine : 
            motifs traditionnels, histoires locales, biodiversité unique et solutions innovantes 
            adaptées au continent. Apprendre en étant fier de ses racines !
          </p>
        </div>
      </div>
    </section>
  );
}