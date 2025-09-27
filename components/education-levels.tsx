"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"

const levels = [
  {
    title: "Maternelle",
    description: "De 3 à 6 ans - Éveil et développement des tout-petits",
    icon: "🧸",
    color: "bg-pink-100 text-pink-700 dark:bg-pink-900/20 dark:text-pink-300",
    image: "/mater.PNG",
    features: ["Éveil sensoriel", "Jeux éducatifs", "Socialisation", "Créativité"],
  },
  {
    title: "Primaire",
    description: "De 6 à 11 ans - Apprentissages fondamentaux",
    icon: "📚",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300",
    image: "/prim.PNG",
    features: ["Lecture & Écriture", "Mathématiques", "Sciences", "Langues"],
  },
  {
    title: "Collège",
    description: "De 11 à 15 ans - Approfondissement des connaissances",
    icon: "🔬",
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300",
    image: "/college.PNG",
    features: ["Sciences expérimentales", "Langues vivantes", "Histoire-Géo", "Arts"],
  },
  {
    title: "Lycée",
    description: "De 15 à 18 ans - Préparation au Baccalauréat",
    icon: "🎓",
    color: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300",
    image: "/lycee.PNG",
    features: ["Spécialisations", "Prépa Bac", "Orientation", "Excellence"],
  },
]

export function EducationLevels() {
  const { t } = useLanguage()

  return (
    <section id="cycles" className="py-20 bg-background animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up animation-delay-200">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">{t("education.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            De la crèche au baccalauréat, nous accompagnons chaque élève dans son parcours éducatif avec excellence et
            bienveillance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-300 overflow-hidden animate-scale-in animation-delay-${(index + 1) * 200}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={level.image || "/placeholder.svg"}
                  alt={level.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${level.color} mb-4`}>
                  <span className="text-2xl">{level.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{level.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{level.description}</p>

                <div className="space-y-2 mb-6">
                  {level.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

              
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
