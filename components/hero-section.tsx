"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="accueil" className="relative bg-gradient-to-br from-card to-muted py-20 animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left animation-delay-200">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance animate-fade-in-up animation-delay-400">
                {t("hero.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-600">
                {t("hero.subtitle")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-800">
              
              
            </div>

            
          </div>

          <div className="relative animate-fade-in-right animation-delay-400">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/e5.PNG"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-4 rounded-xl shadow-lg">
              <div className="text-xs opacity-90">Excellence éducative</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
