"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "fr" | "ar" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.programs": "Programmes",
    "nav.activities": "Activités",
    "nav.news": "Actualités",

    // Hero Section
    "hero.title": "Excellence Éducative",
    "hero.subtitle": "Nous croyons que chaque enfant mérite un avenir prometteur. C’est pourquoi nous nous engageons à façonner leur avenir avec passion et dévouement, en leur offrant un environnement éducatif stimulant, bienveillant et adapté à leurs besoins. Notre mission est d’accompagner chaque élève dans son parcours, en valorisant ses talents et en l’encourageant à atteindre son plein potentiel." ,
    // School Definition
    "school.definition.title": "Notre Vision Éducative",
    "school.definition.text":
      "Une école privée d'excellence qui forme les leaders de demain à travers un enseignement personnalisé et des valeurs fortes.",

    // Education Levels
    "education.title": "Nos Niveaux d'Enseignement",
    "education.primary": "Primaire",
    "education.primary.desc": "Fondations solides pour l'apprentissage",
    "education.middle": "Collège",
    "education.middle.desc": "Développement des compétences essentielles",
    "education.high": "Lycée",
    "education.high.desc": "Préparation à l'excellence universitaire",

    // Activities
    "activities.title": "Nos Activités",
    "activities.sports": "Sports",
    "activities.arts": "Arts",
    "activities.sciences": "Sciences",

    // News
    "news.title": "Actualités",

    // Footer
    "footer.rights": "Tous droits réservés.",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "حولنا",
    "nav.programs": "البرامج",
    "nav.activities": "الأنشطة",
    "nav.news": "الأخبار",
    "nav.student.portal": "بوابة الطالب",
    "nav.parent.portal": "بوابة الأهل",

    // Hero Section
    "hero.title": "التميز التعليمي",
    "hero.subtitle": "نشكل مستقبل أطفالكم بشغف وتفان",
    "hero.cta": "اكتشف برامجنا",

    // School Definition
    "school.definition.title": "رؤيتنا التعليمية",
    "school.definition.text": "مدرسة خاصة متميزة تعد قادة المستقبل من خلال التعليم المخصص والقيم القوية.",

    // Education Levels
    "education.title": "مستويات التعليم",
    "education.primary": "الابتدائي",
    "education.primary.desc": "أسس قوية للتعلم",
    "education.middle": "المتوسط",
    "education.middle.desc": "تطوير المهارات الأساسية",
    "education.high": "الثانوي",
    "education.high.desc": "التحضير للتميز الجامعي",

    // Activities
    "activities.title": "أنشطتنا",
    "activities.sports": "الرياضة",
    "activities.arts": "الفنون",
    "activities.sciences": "العلوم",

    // News
    "news.title": "الأخبار",
    "news.read.more": "اقرأ المزيد",

    // Footer
    "footer.subscribe": "اشترك",
    "footer.rights": "جميع الحقوق محفوظة.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.programs": "Programs",
    "nav.activities": "Activities",
    "nav.news": "News",
    "nav.student.portal": "Student Portal",
    "nav.parent.portal": "Parent Portal",

    // Hero Section
    "hero.title": "Educational Excellence",
    "hero.subtitle": "Shaping your children's future with passion and dedication",
    "hero.cta": "Discover our programs",

    // School Definition
    "school.definition.title": "Our Educational Vision",
    "school.definition.text":
      "A private school of excellence that trains tomorrow's leaders through personalized teaching and strong values.",

    // Education Levels
    "education.title": "Our Education Levels",
    "education.primary": "Primary",
    "education.primary.desc": "Strong foundations for learning",
    "education.middle": "Middle School",
    "education.middle.desc": "Development of essential skills",
    "education.high": "High School",
    "education.high.desc": "Preparation for university excellence",

    // Activities
    "activities.title": "Our Activities",
    "activities.sports": "Sports",
    "activities.arts": "Arts",
    "activities.sciences": "Sciences",

    // News
    "news.title": "News",
    "news.read.more": "Read more",

    // Footer
    "footer.subscribe": "Subscribe",
    "footer.rights": "All rights reserved.",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && ["fr", "ar", "en"].includes(saved)) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
