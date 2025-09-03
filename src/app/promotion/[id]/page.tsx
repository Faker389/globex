import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { PromotionDetail } from "@/components/promotion-detail"

// Extended promotion data with detailed information
const promotionsData = [
  {
    id: 1,
    title: "Greckie Wyspy - Raj na Ziemi za Mniej Niż Myślisz!",
    price: "od 1,299 zł",
    originalPrice: "1,899 zł",
    image: "/beautiful-greek-islands-with-blue-water-and-white-.png",
    description: "Odkryj magię greckich wysp z naszą ekskluzywną ofertą!",
    location: "Grecja",
    duration: "7 dni / 6 nocy",
    departureDate: "15 czerwca - 30 września 2024",
    longDescription:
      "Zanurz się w niepowtarzalnej atmosferze greckich wysp, gdzie błękitne wody Morza Egejskiego spotykają się z białymi domkami i malowniczymi uliczkami. Nasza oferta obejmuje pobyt w komfortowym hotelu z widokiem na morze, śniadania oraz kolacje w lokalnych tawernach, gdzie skosztujecie autentycznej kuchni greckiej.",
    highlights: [
      "Zakwaterowanie w 4-gwiazdkowym hotelu z basenem",
      "Śniadania i kolacje w cenie",
      "Transfer z lotniska w obie strony",
      "Wycieczka do starożytnych ruin Akropolu",
      "Rejs po wyspach z degustacją lokalnych win",
      "Przewodnik mówiący po polsku",
      "Ubezpieczenie turystyczne",
    ],
    included: [
      "Przelot z Warszawy, Krakowa lub Gdańska",
      "Bagaż podręczny i rejestrowany",
      "Zakwaterowanie w pokoju 2-osobowym",
      "Wyżywienie: śniadania i kolacje",
      "Transfery lotniskowe",
      "Opieka pilota",
    ],
    gallery: [
      "/beautiful-greek-islands-with-blue-water-and-white-.png",
      "/greek-island-sunset.png",
      "/greek-taverna-food.png",
      "/ancient-greek-ruins.png",
    ],
  },
  {
    id: 2,
    title: "Tajlandia - Egzotyczny Raj w Zasięgu Ręki!",
    price: "od 2,199 zł",
    originalPrice: "2,899 zł",
    image: "/tropical-thailand-beach-with-palm-trees-and-crysta.png",
    description: "Przeżyj niezapomnianą przygodę w krainie uśmiechu!",
    location: "Tajlandia",
    duration: "10 dni / 9 nocy",
    departureDate: "1 października - 31 marca 2025",
    longDescription:
      "Odkryj egzotyczną Tajlandię - krainę złotych świątyń, tropikalnych plaż i niesamowitej kuchni. Nasza wycieczka zabierze Cię w podróż przez Bangkok, starożytne Ayutthaya oraz rajskie plaże Phuket. Doświadcz prawdziwej tajskiej gościnności i poznaj fascynującą kulturę tego wyjątkowego kraju.",
    highlights: [
      "Zwiedzanie Bangkoku z przewodnikiem",
      "Wycieczka do pływającego targu",
      "Wizyta w świątyni Wat Pho",
      "Relaks na plażach Phuket",
      "Tradycyjny masaż tajski",
      "Degustacja autentycznej kuchni tajskiej",
      "Wycieczka do wysp Phi Phi",
    ],
    included: [
      "Przelot z przesiadką",
      "Zakwaterowanie w hotelach 3-4*",
      "Śniadania codziennie",
      "Transfery według programu",
      "Wycieczki z przewodnikiem",
      "Ubezpieczenie",
    ],
    gallery: [
      "/tropical-thailand-beach-with-palm-trees-and-crysta.png",
      "/bangkok-temple-golden.png",
      "/thai-floating-market.png",
      "/phi-phi-islands.png",
    ],
  },
  {
    id: 3,
    title: "Hiszpania - Słońce, Plaże i Flamenco!",
    price: "od 899 zł",
    originalPrice: "1,299 zł",
    image: "/spanish-coastal-town-with-beautiful-beaches-and-ar.png",
    description: "Zanurz się w hiszpańskiej kulturze i ciesz się słońcem!",
    location: "Hiszpania",
    duration: "5 dni / 4 noce",
    departureDate: "Maj - Październik 2024",
    longDescription:
      "Przeżyj niezapomniane chwile w słonecznej Hiszpanii! Nasza wycieczka łączy relaks na pięknych plażach Costa del Sol z odkrywaniem bogatej kultury andaluzyjskiej. Odwiedź malownicze miasteczka, skosztuj tapas i doświadcz prawdziwego flamenco w jego ojczyźnie.",
    highlights: [
      "Pobyt w Maladze lub okolicach",
      "Wycieczka do Sewilli",
      "Pokaz flamenco",
      "Degustacja tapas i sangrii",
      "Czas wolny na plażach Costa del Sol",
      "Zwiedzanie Alhambry w Granadzie",
      "Spacer po malowniczej Rondzie",
    ],
    included: [
      "Przelot bezpośredni",
      "Hotel 3* ze śniadaniami",
      "Transfer z lotniska",
      "Wycieczki fakultatywne",
      "Opieka polskiego pilota",
    ],
    gallery: [
      "/spanish-coastal-town-with-beautiful-beaches-and-ar.png",
      "/flamenco-dancer-spain.png",
      "/alhambra-granada.png",
      "/spanish-tapas.png",
    ],
  },
  {
    id: 4,
    title: "Włochy - Romantyczne Wakacje Marzeń!",
    price: "od 1,599 zł",
    originalPrice: "2,199 zł",
    image: "/romantic-italian-coastline-with-colorful-houses-an.png",
    description: "Odkryj piękno Włoch i skosztuj prawdziwej dolce vita!",
    location: "Włochy",
    duration: "8 dni / 7 nocy",
    departureDate: "Kwiecień - Październik 2024",
    longDescription:
      "Włochy to kraj, który zachwyca na każdym kroku - od romantycznych kanałów Wenecji, przez renesansową Florencję, aż po wieczne miasto Rzym. Nasza wycieczka to idealne połączenie sztuki, historii, kultury i niepowtarzalnej kuchni włoskiej. Przeżyj prawdziwą dolce vita!",
    highlights: [
      "Zwiedzanie Rzymu z Watykanem",
      "Romantyczna Wenecja z przejażdżką gondolą",
      "Florencja - kolebka renesansu",
      "Degustacja autentycznej kuchni włoskiej",
      "Zwiedzanie Koloseum i Forum Romanum",
      "Wizyta w Kaplicy Sykstyńskiej",
      "Spacer po Ponte Vecchio",
    ],
    included: [
      "Przelot + autokar",
      "Noclegi w hotelach 3-4*",
      "Śniadania i 3 kolacje",
      "Zwiedzanie z przewodnikiem",
      "Wstępy do muzeów",
      "Ubezpieczenie",
    ],
    gallery: [
      "/romantic-italian-coastline-with-colorful-houses-an.png",
      "/colosseum-rome.png",
      "/venice-gondola-canal.png",
      "/florence-duomo.png",
    ],
  },
  {
    id: 5,
    title: "Turcja - Orientalny Czar i Lazurowe Wybrzeże!",
    price: "od 1,099 zł",
    originalPrice: "1,599 zł",
    image: "/turkish-riviera-with-turquoise-water-and-ancient-a.png",
    description: "Połączenie historii, kultury i przepięknych plaż!",
    location: "Turcja",
    duration: "7 dni / 6 nocy",
    departureDate: "Maj - Październik 2024",
    longDescription:
      "Turcja to fascynujące połączenie Wschodu i Zachodu, gdzie nowoczesność spotyka się z tradycją. Odkryj magię Stambułu z jego meczętami i bazarami, a następnie zrelaksuj się na pięknych plażach Riwiery Tureckiej. To podróż, która zostanie w Twojej pamięci na zawsze.",
    highlights: [
      "Zwiedzanie Stambułu",
      "Hagia Sophia i Błękitny Meczet",
      "Wielki Bazar i Bazar Egipski",
      "Rejs po Bosforze",
      "Relaks na Riwierze Tureckiej",
      "Turecka łaźnia hammam",
      "Degustacja kuchni tureckiej",
    ],
    included: [
      "Przelot bezpośredni",
      "Hotel 4* all inclusive",
      "Transfery lotniskowe",
      "Wycieczka do Stambułu",
      "Opieka polskiego pilota",
      "Ubezpieczenie",
    ],
    gallery: [
      "/turkish-riviera-with-turquoise-water-and-ancient-a.png",
      "/hagia-sophia-istanbul.png",
      "/turkish-bazaar-spices.png",
      "/bosphorus-bridge.png",
    ],
  },
  {
    id: 6,
    title: "Chorwacja - Adriatyckie Perły Tuż za Rogiem!",
    price: "od 799 zł",
    originalPrice: "1,199 zł",
    image: "/croatian-coastline-with-clear-blue-water-and-histo.png",
    description: "Odkryj najpiękniejsze zakątki Adriatyku!",
    location: "Chorwacja",
    duration: "6 dni / 5 nocy",
    departureDate: "Czerwiec - Wrzesień 2024",
    longDescription:
      "Chorwacja to prawdziwa perła Adriatyku, która zachwyca krystalicznie czystym morzem, malowniczymi miasteczkami i bogatą historią. Odkryj średniowieczny Dubrownik, spaceruj po Splicie z pałacem Dioklecjana i zrelaksuj się na jednych z najpiękniejszych plaż Europy.",
    highlights: [
      "Zwiedzanie Dubrownika - Perły Adriatyku",
      "Split z pałacem Dioklecjana",
      "Wycieczka na wyspy Hvar lub Korčula",
      "Kąpiele w krystalicznie czystym morzu",
      "Degustacja chorwackich win",
      "Spacer murami obronnymi Dubrownika",
      "Czas wolny na plażach",
    ],
    included: [
      "Transport autokarem",
      "Noclegi w hotelach 3*",
      "Śniadania",
      "Zwiedzanie z przewodnikiem",
      "Opieka pilota",
      "Ubezpieczenie",
    ],
    gallery: [
      "/croatian-coastline-with-clear-blue-water-and-histo.png",
      "/dubrovnik-old-town-walls.png",
      "/split-diocletian-palace.png",
      "/placeholder.svg?height=400&width=600",
    ],
  },
]


export default async function PromotionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const promotionId = Number.parseInt(id)
  const promotion = promotionsData.find((p) => p.id === promotionId)

  if (!promotion) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PromotionDetail promotion={promotion} />
    </div>
  )
}

export function generateStaticParams() {
  return promotionsData.map((promotion) => ({
    id: promotion.id.toString(),
  }))
}
