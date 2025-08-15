import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Trophy, 
  Star, 
  Calendar, 
  Target, 
  Zap, 
  Leaf, 
  Droplets, 
  Recycle, 
  TreePine, 
  Edit,
  Settings,
  Award
} from "lucide-react";

const userStats = {
  name: "Amina Koffi",
  username: "amina_eco_hero",
  level: 5,
  totalPoints: 1250,
  pointsToNextLevel: 250,
  joinDate: "Mars 2024",
  badges: 8,
  projectsCompleted: 3,
  gamesPlayed: 15
};

const badges = [
  {
    id: "first-steps",
    title: "Premiers Pas",
    description: "Première connexion à EconaLab",
    icon: Leaf,
    color: "text-primary",
    bgColor: "bg-primary/10",
    earned: true,
    date: "Mars 2024"
  },
  {
    id: "water-guardian",
    title: "Gardien de l'Eau",
    description: "Thématique Eau complétée",
    icon: Droplets,
    color: "text-accent",
    bgColor: "bg-accent/10",
    earned: true,
    date: "Mars 2024"
  },
  {
    id: "recycling-master",
    title: "Maître du Recyclage",
    description: "10 jeux de tri réussis",
    icon: Recycle,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    earned: true,
    date: "Avril 2024"
  },
  {
    id: "forest-protector",
    title: "Protecteur de la Forêt",
    description: "Thématique Forêt complétée",
    icon: TreePine,
    color: "text-earth",
    bgColor: "bg-earth/10",
    earned: false,
    date: null
  },
  {
    id: "quiz-champion",
    title: "Champion des Quiz",
    description: "Score parfait à 5 quiz",
    icon: Trophy,
    color: "text-tertiary",
    bgColor: "bg-tertiary/10",
    earned: false,
    date: null
  },
  {
    id: "creative-genius",
    title: "Génie Créatif",
    description: "5 projets créés dans l'atelier",
    icon: Star,
    color: "text-primary",
    bgColor: "bg-primary/10",
    earned: false,
    date: null
  }
];

const recentActivity = [
  {
    type: "quiz",
    title: "Quiz Expert de l'Eau",
    score: "18/20",
    points: 180,
    date: "Il y a 2 jours"
  },
  {
    type: "game",
    title: "Tri des Déchets Magique",
    score: "Niveau 8",
    points: 80,
    date: "Il y a 3 jours"
  },
  {
    type: "project",
    title: "Collecteur d'Eau de Pluie",
    score: "Terminé",
    points: 200,
    date: "Il y a 1 semaine"
  }
];

const thematiqueProgress = [
  { name: "L'Eau Précieuse", progress: 100, color: "bg-accent" },
  { name: "Zéro Déchet", progress: 75, color: "bg-primary" },
  { name: "Gardiens de la Forêt", progress: 40, color: "bg-earth" },
  { name: "Énergie Verte", progress: 20, color: "bg-secondary" },
  { name: "Biodiversité Africaine", progress: 0, color: "bg-tertiary" }
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case "quiz":
      return Trophy;
    case "game":
      return Target;
    case "project":
      return Star;
    default:
      return Target;
  }
};

export default function Profil() {
  const progressToNextLevel = ((userStats.totalPoints % 500) / 500) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-8 pb-20">
        {/* Header Profile */}
        <div className="bg-surface/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Avatar */}
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-primary shadow-card">
                  <AvatarImage src="/api/placeholder/128/128" alt="Avatar" />
                  <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                    AK
                  </AvatarFallback>
                </Avatar>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-background"
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>

              {/* Info utilisateur */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
                  <h1 className="text-3xl font-bold font-comfortaa text-foreground">
                    {userStats.name}
                  </h1>
                  <Badge variant="outline" className="text-primary border-primary">
                    Niveau {userStats.level}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground font-quicksand mb-4">
                  @{userStats.username} • Membre depuis {userStats.joinDate}
                </p>

                {/* Stats rapides */}
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary font-comfortaa">
                      {userStats.totalPoints}
                    </div>
                    <div className="text-sm text-muted-foreground">Points Total</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary font-comfortaa">
                      {userStats.badges}
                    </div>
                    <div className="text-sm text-muted-foreground">Badges</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-tertiary font-comfortaa">
                      {userStats.projectsCompleted}
                    </div>
                    <div className="text-sm text-muted-foreground">Projets</div>
                  </div>
                </div>

                {/* Progression niveau */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progression vers niveau {userStats.level + 1}</span>
                    <span className="font-medium">{userStats.pointsToNextLevel} points restants</span>
                  </div>
                  <Progress value={progressToNextLevel} className="h-3" />
                </div>

                <Button className="button-gradient text-white shadow-button">
                  <Settings className="h-4 w-4 mr-2" />
                  Personnaliser le profil
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne principale */}
            <div className="lg:col-span-2 space-y-8">
              {/* Badges & Récompenses */}
              <section>
                <h2 className="text-2xl font-bold font-comfortaa text-foreground mb-6">
                  Badges & Récompenses
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {badges.map((badge, index) => {
                    const Icon = badge.icon;
                    
                    return (
                      <Card 
                        key={badge.id} 
                        className={`text-center p-4 transition-smooth hover:shadow-card ${
                          badge.earned 
                            ? 'border-primary/20 bg-card' 
                            : 'border-muted bg-muted/30 opacity-60'
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className={`w-12 h-12 rounded-full ${badge.bgColor} flex items-center justify-center mx-auto mb-3`}>
                          <Icon className={`h-6 w-6 ${badge.color}`} />
                        </div>
                        <h3 className="font-semibold text-sm font-comfortaa mb-1">
                          {badge.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-2">
                          {badge.description}
                        </p>
                        {badge.earned && badge.date && (
                          <Badge variant="outline" className="text-xs">
                            {badge.date}
                          </Badge>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </section>

              {/* Activité récente */}
              <section>
                <h2 className="text-2xl font-bold font-comfortaa text-foreground mb-6">
                  Activité Récente
                </h2>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => {
                    const Icon = getActivityIcon(activity.type);
                    
                    return (
                      <Card 
                        key={index} 
                        className="p-4 hover:shadow-card transition-smooth"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold font-comfortaa">
                              {activity.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {activity.score} • +{activity.points} points
                            </p>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {activity.date}
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Progression thématiques */}
              <section>
                <h3 className="text-xl font-bold font-comfortaa text-foreground mb-4">
                  Progression par Thématique
                </h3>
                <div className="space-y-4">
                  {thematiqueProgress.map((theme, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{theme.name}</span>
                        <span className="text-muted-foreground">{theme.progress}%</span>
                      </div>
                      <Progress value={theme.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </section>

              {/* Objectifs */}
              <section>
                <h3 className="text-xl font-bold font-comfortaa text-foreground mb-4">
                  Objectifs du Mois
                </h3>
                <Card className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">Completer 2 thématiques</div>
                        <Progress value={50} className="h-2 mt-1" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Zap className="h-5 w-5 text-secondary" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">Gagner 500 points</div>
                        <Progress value={75} className="h-2 mt-1" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-tertiary" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">Débloquer 3 badges</div>
                        <Progress value={33} className="h-2 mt-1" />
                      </div>
                    </div>
                  </div>
                </Card>
              </section>

              {/* Récompenses spéciales */}
              <section>
                <h3 className="text-xl font-bold font-comfortaa text-foreground mb-4">
                  Éco-héros du Mois
                </h3>
                <Card className="p-4 text-center card-gradient text-white">
                  <Trophy className="h-12 w-12 mx-auto mb-3 opacity-90" />
                  <h4 className="font-bold mb-2">Tu es en bonne voie !</h4>
                  <p className="text-sm opacity-90">
                    Continue tes efforts pour devenir l'éco-héros du mois d'EconaLab !
                  </p>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}