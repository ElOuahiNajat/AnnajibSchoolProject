"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Phone, Mail, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/hooks/use-language"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>05234-44022</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>et.annajib@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:flex gap-2">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/20">
            </Button>
           
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
  <img
    src="/logoAnnajib.PNG"
    alt="Logo"
    className="w-8 h-8 object-contain"
  />
</div>

            <div>
              <h1 className="text-xl font-bold text-foreground">مدارس النجيب</h1>
              <p className="text-sm text-muted-foreground">École Privée d'Excellence</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              {t("nav.home")}
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              {t("nav.about")}
            </Link>
            <Link href="/#cycles" className="text-foreground hover:text-primary transition-colors">
              {t("nav.programs")}
            </Link>
            <Link href="/#activites" className="text-foreground hover:text-primary transition-colors">
              {t("nav.activities")}
            </Link>
           
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden bg-transparent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/#cycles"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.programs")}
              </Link>
              <Link
                href="/#activites"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.activities")}
              </Link>
              <Link
                href="/#actualites"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.news")}
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                
                <Button size="sm" className="justify-start">
                  {t("footer.subscribe")}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
