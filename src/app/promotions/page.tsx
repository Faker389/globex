import { Navigation } from "@/components/navigation"
import { PromotionsList } from "@/components/promotions-list"

export default function PromotionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-8">
        <div className="container mx-auto px-4 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">Wszystkie Promocje</h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Przeglądaj wszystkie nasze aktualne oferty wakacyjne i znajdź swoje wymarzone wakacje w najlepszej cenie.
          </p>
        </div>
        <PromotionsList />
      </main>
    </div>
  )
}
