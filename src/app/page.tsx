import { Navigation } from "../components/navigation"
import { HeroSection } from "../components/hero-section"
import { PromotionsList } from "../components/promotions-list"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <PromotionsList />
      </main>
    </div>
  )
}
