"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"

export function SchoolDefinition() {
  const { t } = useLanguage()

  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat animate-fade-in-up"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/s1.PNG')",
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
         <Card className="bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg shadow-2xl border border-white/20 animate-scale-in animation-delay-200">
  <CardContent className="p-8 md:p-12 text-white">
    <div className="text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up animation-delay-400">
        مؤسسة النجيب
      </h2>
      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8 animate-fade-in-up animation-delay-600">
        Établissement scolaire Annajib
      </h3>

      <div className="prose prose-lg max-w-none leading-relaxed animate-fade-in-up animation-delay-800 text-white">
        <p className="text-lg md:text-xl mb-6">{t("school.definition.text")}</p>

        <p className="text-base md:text-lg mb-6">
          Fondée par <strong>Houssine Hammadi</strong>, notre institution s'engage à offrir une éducation de
          qualité supérieure, alliant tradition et modernité. Nous cultivons l'excellence académique tout en
          développant les valeurs humaines et citoyennes de nos élèves.
        </p>

        <p className="text-base md:text-lg">
          Avec des programmes pédagogiques innovants, des infrastructures modernes et une équipe enseignante
          qualifiée, nous préparons nos élèves à devenir les leaders de demain dans un monde en constante
          évolution.
        </p>
      </div>
    </div>
  </CardContent>
</Card>


        </div>
      </div>
    </section>
  )
}
