import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Heart, 
  Leaf, 
  Users, 
  Globe,
  MessageCircle,
  HelpCircle
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "Écris-nous tes questions ou suggestions",
    contact: "hello@econalab.com",
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    icon: Phone,
    title: "Téléphone",
    description: "Appelle-nous pour une aide immédiate",
    contact: "+33 1 23 45 67 89",
    color: "text-secondary",
    bgColor: "bg-secondary/10"
  },
  {
    icon: MapPin,
    title: "Adresse",
    description: "Notre bureau de développement",
    contact: "Paris, France",
    color: "text-tertiary",
    bgColor: "bg-tertiary/10"
  }
];

const faqItems = [
  {
    question: "À partir de quel âge peut-on utiliser EconaLab ?",
    answer: "EconaLab est conçu pour les enfants de 8 à 14 ans, avec des contenus adaptés à chaque tranche d'âge."
  },
  {
    question: "Les contenus sont-ils vraiment adaptés à l'Afrique ?",
    answer: "Oui ! Tous nos contenus intègrent des exemples, solutions et défis spécifiques au continent africain."
  },
  {
    question: "L'application fonctionne-t-elle hors ligne ?",
    answer: "Certaines activités peuvent être utilisées hors ligne une fois téléchargées, idéal pour les zones à faible connectivité."
  },
  {
    question: "Comment suivre les progrès de mon enfant ?",
    answer: "Le profil utilisateur permet de suivre les badges gagnés, points obtenus et thématiques complétées."
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-8 pb-20">
        {/* Header */}
        <div className="bg-surface/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-comfortaa text-foreground mb-6">
              Contactez-nous
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-quicksand">
              Nous sommes là pour répondre à toutes vos questions sur EconaLab. 
              N'hésitez pas à nous écrire, nous adorons échanger avec notre communauté !
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div>
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-comfortaa text-foreground flex items-center">
                    <MessageCircle className="h-6 w-6 mr-2 text-primary" />
                    Envoyez-nous un message
                  </CardTitle>
                  <CardDescription className="font-quicksand">
                    Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="font-quicksand">Prénom</Label>
                      <Input id="firstName" placeholder="Votre prénom" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="font-quicksand">Nom</Label>
                      <Input id="lastName" placeholder="Votre nom" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-quicksand">Email</Label>
                    <Input id="email" type="email" placeholder="votre@email.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-quicksand">Sujet</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisissez un sujet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Question générale</SelectItem>
                        <SelectItem value="technical">Problème technique</SelectItem>
                        <SelectItem value="content">Suggestion de contenu</SelectItem>
                        <SelectItem value="partnership">Partenariat</SelectItem>
                        <SelectItem value="press">Presse & Médias</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-quicksand">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Décrivez-nous votre question ou suggestion..." 
                      rows={6}
                    />
                  </div>

                  <Button 
                    className="w-full button-gradient text-white shadow-button hover:shadow-lg transition-bounce font-semibold"
                    size="lg"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Envoyer le message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Informations et FAQ */}
            <div className="space-y-8">
              {/* Informations de contact */}
              <section>
                <h2 className="text-2xl font-bold font-comfortaa text-foreground mb-6">
                  Autres moyens de contact
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    
                    return (
                      <Card 
                        key={index} 
                        className="p-4 hover:shadow-card transition-smooth"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-full ${info.bgColor} flex items-center justify-center`}>
                            <Icon className={`h-6 w-6 ${info.color}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold font-comfortaa text-foreground">
                              {info.title}
                            </h3>
                            <p className="text-sm text-muted-foreground font-quicksand mb-1">
                              {info.description}
                            </p>
                            <p className="font-medium text-primary">
                              {info.contact}
                            </p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-2xl font-bold font-comfortaa text-foreground mb-6 flex items-center">
                  <HelpCircle className="h-6 w-6 mr-2 text-primary" />
                  Questions Fréquentes
                </h2>
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <Card 
                      key={index} 
                      className="p-4"
                      style={{ animationDelay: `${(contactInfo.length + index) * 0.1}s` }}
                    >
                      <h3 className="font-semibold font-comfortaa text-foreground mb-2">
                        {item.question}
                      </h3>
                      <p className="text-muted-foreground font-quicksand">
                        {item.answer}
                      </p>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Mission statement */}
              <section>
                <Card className="p-6 card-gradient text-white">
                  <div className="text-center">
                    <Leaf className="h-12 w-12 mx-auto mb-4 opacity-90" />
                    <h3 className="text-xl font-bold font-comfortaa mb-4">
                      Notre Mission
                    </h3>
                    <p className="font-quicksand leading-relaxed opacity-90">
                      EconaLab s'engage à sensibiliser les jeunes africains à la protection 
                      de l'environnement en valorisant leur culture et en stimulant leur créativité. 
                      Ensemble, construisons un avenir plus vert pour l'Afrique !
                    </p>
                  </div>
                </Card>
              </section>
            </div>
          </div>

          {/* Section équipe */}
          <section className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-comfortaa text-foreground mb-4">
                Rencontrez l'Équipe
              </h2>
              <p className="text-lg text-muted-foreground font-quicksand">
                Une équipe passionnée dédiée à l'éducation environnementale en Afrique
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6 hover:shadow-card transition-smooth">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-comfortaa mb-2">Équipe Pédagogique</h3>
                <p className="text-muted-foreground font-quicksand">
                  Experts en éducation environnementale et culture africaine
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-card transition-smooth">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-lg font-bold font-comfortaa mb-2">Développeurs</h3>
                <p className="text-muted-foreground font-quicksand">
                  Créateurs de technologies éducatives innovantes et accessibles
                </p>
              </Card>

              <Card className="text-center p-6 hover:shadow-card transition-smooth">
                <div className="w-16 h-16 bg-tertiary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-tertiary" />
                </div>
                <h3 className="text-lg font-bold font-comfortaa mb-2">Communauté</h3>
                <p className="text-muted-foreground font-quicksand">
                  Parents, enseignants et enfants qui font vivre EconaLab
                </p>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}