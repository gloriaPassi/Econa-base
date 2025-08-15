import { BookOpen, Droplets, Recycle, TreePine, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const thematiques = [
  {
    id: "eau",
    title: "L'Eau Précieuse",
    description: "Découvre l'importance de l'eau et comment la protéger en Afrique",
    icon: Droplets,
    color: "text-accent",
    bgColor: "bg-accent/10",
    progress: 0
  },
  {
    id: "dechets",
    title: "Zéro Déchet",
    description: "Apprends à réduire, réutiliser et recycler tes déchets",
    icon: Recycle,
    color: "text-primary",
    bgColor: "bg-primary/10",
    progress: 0
  },
  {
    id: "foret",
    title: "Gardiens de la Forêt",
    description: "Protège les forêts africaines et leur biodiversité unique",
    icon: TreePine,
    color: "text-earth",
    bgColor: "bg-earth/10",
    progress: 0
  },
  {
    id: "energie",
    title: "Énergie Verte",
    description: "Explore les énergies renouvelables adaptées à l'Afrique",
    icon: Zap,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    progress: 0
  },
  {
    id: "biodiversite",
    title: "Biodiversité Africaine",
    description: "Découvre et protège la faune et flore exceptionnelles",
    icon: Users,
    color: "text-tertiary",
    bgColor: "bg-tertiary/10",
    progress: 0
  }
];

export function ThematiquesPreview() {
  return (
    <section className="py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-comfortaa text-foreground mb-4">
            Explore nos Thématiques
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-quicksand">
            Chaque thématique est une aventure complète avec des histoires, 
            jeux et défis adaptés à la réalité africaine.
          </p>
        </div>

        {/* Grille des thématiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {thematiques.map((theme, index) => {
            const Icon = theme.icon;
            
            return (
              <Card 
                key={theme.id} 
                className="group hover:shadow-card transition-smooth cursor-pointer border-2 hover:border-primary/20 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className={`mx-auto w-16 h-16 rounded-full ${theme.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce`}>
                    <Icon className={`h-8 w-8 ${theme.color}`} />
                  </div>
                  <CardTitle className="text-xl font-comfortaa group-hover:text-primary transition-smooth">
                    {theme.title}
                  </CardTitle>
                  <CardDescription className="font-quicksand">
                    {theme.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Barre de progression */}
                  <div className="w-full bg-muted rounded-full h-2 mb-4">
                    <div 
                      className="bg-primary h-2 rounded-full transition-smooth" 
                      style={{ width: `${theme.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Progression</span>
                    <span>{theme.progress}%</span>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                    asChild
                  >
                    <Link to={`/thematiques/${theme.id}`}>
                      <BookOpen className="h-4 w-4 mr-2" />
                      Découvrir
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="button-gradient text-white shadow-button hover:shadow-lg transition-bounce font-semibold px-8"
            asChild
          >
            <Link to="/thematiques">
              Voir toutes les thématiques
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}