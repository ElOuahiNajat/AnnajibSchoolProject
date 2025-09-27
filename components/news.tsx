"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const news = [
  {
    title: "Rentrée Scolaire 2024-2025",
    excerpt: "Toutes les informations importantes pour bien préparer la rentrée de vos enfants.",
    date: "2024-08-15",
    image: "/placeholder-tnwhv.png",
    category: "Actualités",
  },
  {
    title: "Journée Portes Ouvertes",
    excerpt: "Venez découvrir notre établissement et rencontrer nos équipes pédagogiques.",
    date: "2024-09-10",
    image: "/placeholder-c88cj.png",
    category: "Événements",
  },
  {
    title: "Concours de Sciences",
    excerpt: "Nos élèves brillent au concours régional de sciences avec 3 prix remportés.",
    date: "2024-09-05",
    image: "/placeholder-d402r.png",
    category: "Réussites",
  },
  {
    title: "Nouveau Laboratoire",
    excerpt: "Inauguration de notre nouveau laboratoire de sciences équipé des dernières technologies.",
    date: "2024-08-30",
    image: "/modern-science-laboratory-with-advanced-equipment-.jpg",
    category: "Infrastructure",
  },
]

export function News() {
  const { t } = useLanguage()

  return (
    <section id="actualites" className="py-20 bg-background">
      
    </section>
  )
}
