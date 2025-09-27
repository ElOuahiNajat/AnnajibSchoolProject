"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const activities = [
  {
    title: "Arts & Créativité",
    description: "Ateliers de théâtre pour développer l’expression personnelle des enfants.",
    image: "/e2.PNG",
    category: "Arts",
    participants: "élèves",
  },
  {
    title: "Arts & Créativité",
    description: "Peinture, théâtre pour exprimer la créativité de chaque enfant.",
    image: "/e3.PNG",
    category: "Arts",
    participants: "élèves",
  },
  {
    title: "Arts & Créativité",
    description: "Activités artistiques : peinture, théâtre et exploration de l’artisanat pour éveiller la sensibilité artistique.",
    image: "/e4.PNG",
    category: "Arts",
    participants: "élèves",
  },
  {
    title: "Arts & Créativité ",
    description: "Artisanat exploratoire pour encourager la créativité et la curiosité des enfants.",
    image: "/a1.PNG",
    category: "Arts",
    participants: "élèves",
  },
  {
    title: "Arts & Créativité ",
    description: "Ateliers créatifs avec artisanat pour stimuler l’imagination.",
    image: "/a2.PNG",
    category: "Arts",
    participants: "Toutes classes",
  },
  {
  title: "Journée Nationale de la Sécurité Routière",
  description: "Ateliers et activités pour sensibiliser les élèves à la sécurité routière.",
  image: "/a3.PNG",
  category: "Éducation",
  participants: "Toutes classes",
},

  {
  title: "Sensibilisation au Coronavirus",
  description: "Ateliers et activités pour informer les élèves sur les mesures de prévention et l’hygiène face au virus.",
  image: "/a4.PNG",
  category: "Santé",
  participants: "Toutes classes",
},
{
  title: "Camp de Formation pour l’Olympiade d’Informatique",
  description: "Ateliers et entraînements pour former et préparer les étudiants à exceller en informatique et en compétitions.",
  image: "/a5.PNG", // tu peux remplacer par l'image d'un étudiant gagnant ou d'un PC
  category: "Informatique",
  participants: "Étudiants sélectionnés",
},

  {
  title: "Atelier de Théâtre et Éloquence",
  description: "Ateliers pour développer la confiance, la prise de parole en public et la créativité à travers le théâtre.",
  image: "/a6.PNG", // tu peux remplacer par l'image d'une scène de théâtre ou élèves en action
  category: "Arts & Communication",
  participants: "Toutes classes",
},

  {
  title: "Atelier de Calcul Mental Rapide",
  description: "Exercices et jeux pour développer la rapidité et la précision en calcul mental chez les élèves.",
  image: "/a7.PNG", // tu peux remplacer par une image illustrant le calcul mental
  category: "Mathématiques",
  participants: "Toutes classes",
},

]

export function Activities() {
  const { t } = useLanguage()

  return (
    <section id="activites" className="py-20 bg-muted/30 animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up animation-delay-200">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("activities.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un large éventail d'activités pour épanouir nos élèves et développer leurs talents dans tous les domaines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-300 overflow-hidden animate-fade-in-up animation-delay-${Math.min((index + 1) * 200, 800)}`}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {activity.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{activity.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{activity.description}</p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 text-primary" />
                  <span>{activity.participants}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
