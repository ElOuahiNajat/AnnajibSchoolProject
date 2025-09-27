"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/espace1.jpg",
    
  },
  {
    id: 2,
    image: "/espace2.jpg",
    },
  {
    id: 3,
    image: "/espace3.jpg",
     },
  {
    id: 4,
    image: "/espace4.jpg",
      },
  {
    id: 5,
    image: "/espace5.jpg",
     },

  {
    id: 5,
    image: "/espace6.jpg",
   },

  {
    id: 5,
    image: "/espace7.jpg",
   },

  
]

export function ImageSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Découvrez notre école</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explorez nos installations modernes et nos espaces d'apprentissage conçus pour l'épanouissement de nos
            élèves
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
            <img
              src={slides[currentSlide].image || "/espace1.jpg"}
              className="w-full h-full object-cover transition-opacity duration-500"
            />

            {/* Overlay with content */}
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-8 text-white">
              </div>
            </div>

            {/* Navigation arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
