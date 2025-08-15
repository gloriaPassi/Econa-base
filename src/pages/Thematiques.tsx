import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Play, Star, Clock, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const thematiques = [
  {
    id: "eau",
    title: "L'Eau Précieuse d'Afrique",
    description: "Découvre les enjeux de l'eau sur le continent africain et deviens un gardien de cette ressource vitale",
    image: "/api/placeholder/400/250",
    difficulty: "Débutant",
    duration: "45 min",
    points: 150,
    progress: 0,
    color: "bg-accent",
    chapters: [
      "Le cycle de l'eau en Afrique",
      "Sources traditionnelles et modernes",
      "Conservation et purification",
      "Projet : Système de récupération d'eau"
    ]
  },
  {
    id: "dechets",
    title: "Zéro Déchet, Maximum d'Impact",
    description: "Transforme-toi en héros du recyclage et apprends à créer de la valeur à partir des déchets",
    image: "/api/placeholder/400/250",
    difficulty: "Facile",
    duration: "40 min",
    points: 120,
    progress: 0,
    color: "bg-primary",
    chapters: [
      "Types de déchets en Afrique",
      "Art du recyclage créatif",
      "Compostage traditionnel",
      "Projet : Poubelle intelligente"
    ]
  },
  {
    id: "foret",
    title: "Gardiens de la Forêt Africaine",
    description: "Explore la biodiversité exceptionnelle des forêts africaines et deviens leur protecteur",
    image: "/api/placeholder/400/250",
    difficulty: "Intermédiaire",
    duration: "50 min",
    points: 180,
    progress: 0,
    color: "bg-earth",
    chapters: [
      "Écosystèmes forestiers africains",
      "Faune et flore endémiques",
      "Déforestation et solutions",
      "Projet : Aire protégée virtuelle"
    ]
  },
  {
    id: "energie",
    title: "Énergie Solaire d'Afrique",
    description: "Harness le pouvoir du soleil africain pour créer un avenir énergétique durable",
    image: "/api/placeholder/400/250",
    difficulty: "Intermédiaire",
    duration: "55 min",
    points: 200,
    progress: 0,
    color: "bg-secondary",
    chapters: [
      "Potentiel solaire africain",
      "Technologies adaptées",
      "Systèmes autonomes",
      "Projet : Village solaire"
    ]
  },
  {
    id: "biodiversite",
    title: "Biodiversité : Trésor Africain",
    description: "Découvre la richesse unique de la faune et flore africaines et participe à leur conservation",
    image: "/api/placeholder/400/250",
    difficulty: "Avancé",
    duration: "60 min",
    points: 250,
    progress: 0,
    color: "bg-tertiary",
    chapters: [
      "Espèces emblématiques",
      "Écosystèmes uniques",
      "Conservation communautaire",
      "Projet : Réserve numérique"
    ]
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Débutant":
    case "Facile":
      return "bg-primary text-primary-foreground";
    case "Intermédiaire":
      return "bg-secondary text-secondary-foreground";
    case "Avancé":
      return "bg-tertiary text-tertiary-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export default function Thematiques() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-8 pb-20">
        {/* Header */}
        <div className="bg-surface/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-comfortaa text-foreground mb-6">
              Thématiques Éducatives
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-quicksand">
              Plonge dans des aventures écologiques passionnantes adaptées à la réalité africaine. 
              Chaque thématique propose un parcours complet avec jeux, défis et projets créatifs.
            </p>
          </div>
        </div>

        {/* Thématiques Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {thematiques.map((theme, index) => (
              <Card 
                key={theme.id} 
                className="group overflow-hidden hover:shadow-card transition-smooth border-2 hover:border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className={`h-48 ${theme.color} relative`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
                    <div className="absolute inset-0 african-pattern opacity-30"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className={getDifficultyColor(theme.difficulty)}>
                        {theme.difficulty}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h2 className="text-2xl font-bold font-comfortaa mb-2">
                        {theme.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {theme.duration}
                        </span>
                        <span className="flex items-center">
                          <Trophy className="h-4 w-4 mr-1" />
                          {theme.points} pts
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardDescription className="font-quicksand text-base">
                    {theme.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Progress */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progression</span>
                      <span className="font-medium">{theme.progress}%</span>
                    </div>
                    <Progress value={theme.progress} className="h-2" />
                  </div>

                  {/* Chapitres */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 font-comfortaa">
                      Programme :
                    </h4>
                    <ul className="space-y-2">
                      {theme.chapters.map((chapter, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {chapter}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3 pt-4">
                    <Button 
                      className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                      variant="outline"
                      asChild
                    >
                      <Link to={`/thematiques/${theme.id}`}>
                        <BookOpen className="h-4 w-4 mr-2" />
                        Découvrir
                      </Link>
                    </Button>
                    
                    {theme.progress > 0 && (
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary hover:text-primary-foreground hover:bg-primary"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Continuer
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16 p-8 rounded-2xl bg-surface/50">
            <h3 className="text-2xl font-bold font-comfortaa text-foreground mb-4">
              Prêt pour l'Aventure ?
            </h3>
            <p className="text-muted-foreground mb-6 font-quicksand">
              Commence par n'importe quelle thématique et progresse à ton rythme !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="button-gradient text-white shadow-button" asChild>
                <Link to="/thematiques/eau">
                  <Star className="h-5 w-5 mr-2" />
                  Commencer par l'Eau
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/jeux">
                  Voir les Jeux & Quiz
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}