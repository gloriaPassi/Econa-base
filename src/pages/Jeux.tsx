import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Trophy, Star, Clock, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const jeux = [
  {
    id: "tri-dechets",
    title: "Tri des Déchets Magique",
    description: "Aide Koffi à trier les déchets de son village en glissant-déposant les objets",
    type: "Drag & Drop",
    difficulty: "Facile",
    duration: "5 min",
    points: 50,
    bestScore: 0,
    category: "Déchets",
    color: "bg-primary"
  },
  {
    id: "economie-eau",
    title: "Défi Économie d'Eau",
    description: "Collecte un maximum de gouttes d'eau en évitant le gaspillage",
    type: "Collecte",
    difficulty: "Moyen",
    duration: "8 min",
    points: 80,
    bestScore: 0,
    category: "Eau",
    color: "bg-accent"
  },
  {
    id: "puzzle-biodiversite",
    title: "Puzzle de la Savane",
    description: "Reconstitue l'écosystème de la savane africaine",
    type: "Puzzle",
    difficulty: "Moyen",
    duration: "10 min",
    points: 100,
    bestScore: 0,
    category: "Biodiversité",
    color: "bg-tertiary"
  },
  {
    id: "energie-solaire",
    title: "Centrale Solaire Express",
    description: "Construis rapidement une centrale solaire avant le coucher du soleil",
    type: "Rapidité",
    difficulty: "Difficile",
    duration: "6 min",
    points: 120,
    bestScore: 0,
    category: "Énergie",
    color: "bg-secondary"
  },
  {
    id: "quiz-foret",
    title: "Quiz de la Forêt Africaine",
    description: "Teste tes connaissances sur les arbres et animaux d'Afrique",
    type: "Quiz",
    difficulty: "Moyen",
    duration: "7 min",
    points: 90,
    bestScore: 0,
    category: "Forêt",
    color: "bg-earth"
  },
  {
    id: "memory-animaux",
    title: "Memory des Animaux",
    description: "Retrouve les paires d'animaux africains en mémorisant leur position",
    type: "Mémoire",
    difficulty: "Facile",
    duration: "5 min",
    points: 60,
    bestScore: 0,
    category: "Biodiversité",
    color: "bg-tertiary"
  }
];

const quiz = [
  {
    id: "quiz-general",
    title: "Quiz Éco-Héros Africain",
    description: "Questions sur tous les thèmes environnementaux d'Afrique",
    questions: 20,
    difficulty: "Mixte",
    duration: "15 min",
    points: 200,
    category: "Général"
  },
  {
    id: "quiz-eau",
    title: "Expert de l'Eau",
    description: "Tout sur l'eau en Afrique : sources, conservation, technologies",
    questions: 15,
    difficulty: "Moyen",
    duration: "10 min",
    points: 150,
    category: "Eau"
  },
  {
    id: "quiz-culture",
    title: "Écologie & Culture Africaine",
    description: "Lies environnement et traditions africaines",
    questions: 12,
    difficulty: "Difficile",
    duration: "8 min",
    points: 180,
    category: "Culture"
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Facile":
      return "bg-primary text-primary-foreground";
    case "Moyen":
      return "bg-secondary text-secondary-foreground";
    case "Difficile":
      return "bg-tertiary text-tertiary-foreground";
    case "Mixte":
      return "bg-accent text-accent-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Drag & Drop":
      return Target;
    case "Collecte":
      return Star;
    case "Puzzle":
      return Gamepad2;
    case "Rapidité":
      return Zap;
    case "Quiz":
      return Trophy;
    case "Mémoire":
      return Star;
    default:
      return Gamepad2;
  }
};

export default function Jeux() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-8 pb-20">
        {/* Header */}
        <div className="bg-surface/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-comfortaa text-foreground mb-6">
              Jeux & Quiz Éducatifs
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-quicksand">
              Apprends en t'amusant avec nos jeux interactifs et quiz conçus spécialement 
              pour découvrir l'écologie africaine de manière ludique et engageante.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Mini-Jeux Section */}
          <section className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold font-comfortaa text-foreground mb-4">
                Mini-Jeux Interactifs
              </h2>
              <p className="text-muted-foreground font-quicksand">
                Des jeux courts et amusants pour renforcer tes connaissances écologiques
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jeux.map((jeu, index) => {
                const TypeIcon = getTypeIcon(jeu.type);
                
                return (
                  <Card 
                    key={jeu.id} 
                    className="group hover:shadow-card transition-smooth border-2 hover:border-primary/20 overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`h-32 ${jeu.color} relative`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
                      <div className="absolute inset-0 african-pattern opacity-30"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className={getDifficultyColor(jeu.difficulty)}>
                          {jeu.difficulty}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center space-x-2">
                          <TypeIcon className="h-5 w-5" />
                          <span className="text-sm">{jeu.type}</span>
                        </div>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-lg font-comfortaa group-hover:text-primary transition-smooth">
                        {jeu.title}
                      </CardTitle>
                      <CardDescription className="font-quicksand">
                        {jeu.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {jeu.duration}
                        </span>
                        <span className="flex items-center">
                          <Trophy className="h-4 w-4 mr-1" />
                          {jeu.points} pts
                        </span>
                      </div>

                      {jeu.bestScore > 0 && (
                        <div className="text-sm">
                          <span className="text-muted-foreground">Meilleur score : </span>
                          <span className="font-semibold text-primary">{jeu.bestScore} pts</span>
                        </div>
                      )}

                      <Button 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                        variant="outline"
                        asChild
                      >
                        <Link to={`/jeux/${jeu.id}`}>
                          <Gamepad2 className="h-4 w-4 mr-2" />
                          Jouer
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Quiz Section */}
          <section>
            <div className="mb-8">
              <h2 className="text-3xl font-bold font-comfortaa text-foreground mb-4">
                Quiz de Connaissances
              </h2>
              <p className="text-muted-foreground font-quicksand">
                Teste et approfondit tes connaissances avec nos quiz thématiques
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quiz.map((quizItem, index) => (
                <Card 
                  key={quizItem.id} 
                  className="group hover:shadow-card transition-smooth border-2 hover:border-accent/20"
                  style={{ animationDelay: `${(jeux.length + index) * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce">
                      <Trophy className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-comfortaa group-hover:text-accent transition-smooth">
                      {quizItem.title}
                    </CardTitle>
                    <CardDescription className="font-quicksand">
                      {quizItem.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <Badge className={getDifficultyColor(quizItem.difficulty)}>
                        {quizItem.difficulty}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {quizItem.questions} questions
                      </span>
                    </div>

                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {quizItem.duration}
                      </span>
                      <span className="flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        {quizItem.points} pts max
                      </span>
                    </div>

                    <Button 
                      className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-smooth"
                      variant="outline"
                      asChild
                    >
                      <Link to={`/quiz/${quizItem.id}`}>
                        <Trophy className="h-4 w-4 mr-2" />
                        Commencer le Quiz
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Stats et encouragement */}
          <div className="mt-16 text-center p-8 rounded-2xl bg-surface/50">
            <h3 className="text-2xl font-bold font-comfortaa text-foreground mb-4">
              Défie-toi et Progresse !
            </h3>
            <p className="text-muted-foreground mb-6 font-quicksand">
              Chaque jeu et quiz te fait gagner des points et débloquer de nouveaux défis. 
              Continue pour devenir un véritable éco-héros africain !
            </p>
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-comfortaa">0</div>
                <div className="text-sm text-muted-foreground">Points Total</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary font-comfortaa">0</div>
                <div className="text-sm text-muted-foreground">Jeux Joués</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-tertiary font-comfortaa">0</div>
                <div className="text-sm text-muted-foreground">Quiz Réussis</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}