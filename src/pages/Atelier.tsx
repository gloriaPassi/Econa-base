import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Plus, Save, Share2, Eye, Lightbulb, Code, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const projetsModeles = [
  {
    id: "jardin-ecole",
    title: "Jardin Scolaire Intelligent",
    description: "Crée un système de gestion automatique pour un jardin d'école",
    difficulty: "Débutant",
    duration: "20 min",
    type: "Agriculture",
    image: "/api/placeholder/300/200",
    color: "bg-primary"
  },
  {
    id: "tri-dechets",
    title: "Système de Tri Automatique",
    description: "Conçois une machine qui trie automatiquement les déchets",
    difficulty: "Intermédiaire",
    duration: "30 min",
    type: "Recyclage",
    image: "/api/placeholder/300/200",
    color: "bg-secondary"
  },
  {
    id: "panneau-solaire",
    title: "Mini Centrale Solaire",
    description: "Simule une installation solaire pour alimenter un village",
    difficulty: "Avancé",
    duration: "45 min",
    type: "Énergie",
    image: "/api/placeholder/300/200",
    color: "bg-tertiary"
  },
  {
    id: "filtre-eau",
    title: "Purificateur d'Eau Artisanal",
    description: "Construis un système de filtration d'eau avec des matériaux locaux",
    difficulty: "Intermédiaire",
    duration: "25 min",
    type: "Eau",
    image: "/api/placeholder/300/200",
    color: "bg-accent"
  }
];

const mesProjets = [
  {
    id: "projet-1",
    title: "Mon Jardin Connecté",
    description: "Système d'arrosage automatique avec capteurs",
    status: "En cours",
    progress: 65,
    lastModified: "Il y a 2 jours"
  },
  {
    id: "projet-2",
    title: "Collecteur d'Eau de Pluie",
    description: "Installation pour récupérer l'eau de pluie",
    status: "Terminé",
    progress: 100,
    lastModified: "Il y a 1 semaine"
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Débutant":
      return "bg-primary text-primary-foreground";
    case "Intermédiaire":
      return "bg-secondary text-secondary-foreground";
    case "Avancé":
      return "bg-tertiary text-tertiary-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "En cours":
      return "bg-secondary text-secondary-foreground";
    case "Terminé":
      return "bg-primary text-primary-foreground";
    case "Brouillon":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export default function Atelier() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-8 pb-20">
        {/* Header */}
        <div className="bg-surface/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-comfortaa text-foreground mb-6">
              Atelier Créatif No-Code
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-quicksand mb-8">
              Donne vie à tes idées écologiques avec nos outils no-code simplifiés. 
              Crée, simule et partage tes solutions pour un monde plus vert !
            </p>
            
            <Button 
              size="lg" 
              className="button-gradient text-white shadow-button hover:shadow-lg transition-bounce font-semibold px-8"
            >
              <Plus className="h-5 w-5 mr-2" />
              Nouveau Projet
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Mes Projets */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold font-comfortaa text-foreground mb-2">
                  Mes Projets
                </h2>
                <p className="text-muted-foreground font-quicksand">
                  Continue tes créations ou commence quelque chose de nouveau
                </p>
              </div>
              <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                <Eye className="h-4 w-4 mr-2" />
                Voir tout
              </Button>
            </div>

            {mesProjets.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {mesProjets.map((projet, index) => (
                  <Card 
                    key={projet.id} 
                    className="group hover:shadow-card transition-smooth border-2 hover:border-primary/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg font-comfortaa group-hover:text-primary transition-smooth">
                          {projet.title}
                        </CardTitle>
                        <Badge className={getStatusColor(projet.status)}>
                          {projet.status}
                        </Badge>
                      </div>
                      <CardDescription className="font-quicksand">
                        {projet.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Progression</span>
                          <span className="font-medium">{projet.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-smooth" 
                            style={{ width: `${projet.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        Modifié {projet.lastModified}
                      </div>

                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                        >
                          <Palette className="h-4 w-4 mr-2" />
                          Éditer
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border-2 border-dashed border-border rounded-lg">
                <Lightbulb className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Aucun projet pour le moment
                </h3>
                <p className="text-muted-foreground mb-4">
                  Commence ton premier projet écologique dès maintenant !
                </p>
                <Button className="button-gradient text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Créer mon premier projet
                </Button>
              </div>
            )}
          </section>

          {/* Projets Modèles */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold font-comfortaa text-foreground mb-4">
                Projets Modèles
              </h2>
              <p className="text-muted-foreground font-quicksand">
                Inspire-toi de ces projets prêts à personnaliser selon tes besoins
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projetsModeles.map((projet, index) => (
                <Card 
                  key={projet.id} 
                  className="group hover:shadow-card transition-smooth border-2 hover:border-primary/20 overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-40 ${projet.color} relative`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
                    <div className="absolute inset-0 african-pattern opacity-30"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className={getDifficultyColor(projet.difficulty)}>
                        {projet.difficulty}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm opacity-90">{projet.type}</div>
                      <div className="text-xs opacity-75">{projet.duration}</div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg font-comfortaa group-hover:text-primary transition-smooth">
                      {projet.title}
                    </CardTitle>
                    <CardDescription className="font-quicksand">
                      {projet.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <Button 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                      variant="outline"
                    >
                      <Code className="h-4 w-4 mr-2" />
                      Utiliser ce modèle
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Outils & Fonctionnalités */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold font-comfortaa text-foreground mb-4">
                Outils de Création
              </h2>
              <p className="text-muted-foreground font-quicksand">
                Découvre les outils simples pour donner vie à tes idées
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-6 hover:shadow-card transition-smooth">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-comfortaa mb-2">
                  Blocs Visuels
                </h3>
                <p className="text-muted-foreground font-quicksand">
                  Assemble des blocs comme des Lego pour créer tes systèmes
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-card transition-smooth">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold font-comfortaa mb-2">
                  IA Assistant
                </h3>
                <p className="text-muted-foreground font-quicksand">
                  Demande des suggestions et de l'aide pour tes projets
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-card transition-smooth">
                <div className="w-16 h-16 bg-tertiary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 className="h-8 w-8 text-tertiary" />
                </div>
                <h3 className="text-xl font-semibold font-comfortaa mb-2">
                  Partage Sécurisé
                </h3>
                <p className="text-muted-foreground font-quicksand">
                  Montre tes créations à tes amis et ta famille
                </p>
              </Card>
            </div>
          </section>

          {/* Call to action */}
          <div className="mt-16 text-center p-8 rounded-2xl card-gradient text-white">
            <h3 className="text-2xl font-bold font-comfortaa mb-4">
              Prêt à Créer pour la Planète ?
            </h3>
            <p className="text-lg opacity-90 mb-6 font-quicksand">
              Chaque projet que tu crées peut inspirer d'autres enfants à agir pour l'environnement. 
              Deviens un inventeur écologique !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 hover:bg-white/20">
                <Lightbulb className="h-5 w-5 mr-2" />
                Voir le tutoriel
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Plus className="h-5 w-5 mr-2" />
                Commencer à créer
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}