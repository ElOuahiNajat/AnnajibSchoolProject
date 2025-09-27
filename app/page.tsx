import { Header } from "@/components/header"
import { SchoolDefinition } from "@/components/school-definition" // Added import for new school definition component
import { HeroSection } from "@/components/hero-section"
import { ImageSlideshow } from "@/components/image-slideshow"
import { EducationLevels } from "@/components/education-levels"
import { Activities } from "@/components/activities"
import { News } from "@/components/news"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <SchoolDefinition /> {/* Added school definition section after header */}
        <HeroSection />
        <ImageSlideshow />
        <EducationLevels />
        <Activities />
        <News />
      </main>
      <Footer />
    </div>
  )
}
