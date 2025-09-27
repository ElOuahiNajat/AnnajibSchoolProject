import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, BookOpen, Heart, Target, Eye } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              À Propos de Notre École
            </h1>
            <div className="text-2xl md:text-3xl font-semibold text-primary mb-2" dir="rtl">
              مؤسسة مجموعة مدارس النجيب
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Une institution d'excellence dédiée à l'épanouissement et à la réussite de chaque élève, de la crèche au
              baccalauréat.
            </p>
          </div>
        </div>

        {/* Founder Section */}
       <div className="mb-16">
  <Card className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-[#fdfaf6] via-white to-[#f5efe6] border border-[#e5dcc3]">
    <CardContent className="p-0">
      <div className="flex items-center justify-center p-10 md:p-14">
        <div className="max-w-2xl animate-fade-in-up">
          
          {/* Badge */}
          <Badge className="w-fit mb-4 px-4 py-1 text-sm font-medium bg-gradient-to-r from-[#d4b483] to-[#c9a46c] text-white rounded-full shadow-sm">
            Fondateur
          </Badge>

          {/* Nom */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3e2f1c] mb-6 tracking-tight">
            Houssine Hammadi
          </h2>

          {/* Texte principal */}
          <p className="text-[#5a4633] text-lg leading-relaxed mb-6">
            Visionnaire passionné par l’éducation, 
            <span className="font-semibold text-[#3e2f1c]"> Houssine Hammadi</span> 
            a fondé notre institution avec la conviction profonde que chaque enfant mérite 
            une éducation de qualité. Fort de plus de 
            <span className="font-semibold text-[#3e2f1c]"> </span>
            Il a créé un environnement d’apprentissage exceptionnel qui allie tradition et innovation.
          </p>

          {/* Texte secondaire */}
          <p className="text-[#5a4633] leading-relaxed">
            Sa philosophie repose sur le 
            <span className="font-semibold text-[#3e2f1c]"> développement harmonieux</span> 
            de la personnalité de l’enfant, l’
            <span className="font-semibold text-[#3e2f1c]"> excellence académique</span> 
            et l’<span className="font-semibold text-[#3e2f1c]"> ouverture sur le monde</span>.
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
</div>


        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Notre Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Offrir une éducation d'excellence qui développe le potentiel unique de chaque élève, cultive les valeurs
              humaines et prépare les citoyens de demain à relever les défis d'un monde en constante évolution.
            </p>
          </Card>

          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Notre Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Être reconnue comme l'institution éducative de référence, formant des individus épanouis, créatifs et
              responsables, capables de contribuer positivement à la société et de s'adapter aux enjeux du futur.
            </p>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Excellence Académique</h3>
              <p className="text-muted-foreground">
                Nous visons l'excellence dans tous les domaines d'apprentissage, encourageant nos élèves à donner le
                meilleur d'eux-mêmes.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Bienveillance</h3>
              <p className="text-muted-foreground">
                Un environnement chaleureux et sécurisant où chaque élève se sent valorisé et accompagné dans son
                développement.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Respect & Diversité</h3>
              <p className="text-muted-foreground">
                Le respect mutuel et la célébration de la diversité culturelle sont au cœur de notre communauté
                éducative.
              </p>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-primary/5 rounded-2xl p-8 mb-16">
          
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Rejoignez Notre Communauté Éducative</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Découvrez comment nous pouvons accompagner votre enfant vers la réussite et l'épanouissement personnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
