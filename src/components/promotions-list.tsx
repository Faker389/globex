"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Star, TrendingUp } from "lucide-react"

const promotions = [
  {
    id: 1,
    title: "Greckie Wyspy - Raj na Ziemi za Mniej Niż Myślisz!",
    price: "od 1,299 zł",
    originalPrice: "1,899 zł",
    image: "/beautiful-greek-islands-with-blue-water-and-white-.png",
    description: "Odkryj magię greckich wysp z naszą ekskluzywną ofertą!",
    location: "Grecja",
    duration: "7 dni",
    rating: 4.8,
    isPopular: true,
    discount: "30%",
  },
  {
    id: 2,
    title: "Tajlandia - Egzotyczny Raj w Zasięgu Ręki!",
    price: "od 2,199 zł",
    originalPrice: "2,899 zł",
    image: "/tropical-thailand-beach-with-palm-trees-and-crysta.png",
    description: "Przeżyj niezapomnianą przygodę w krainie uśmiechu!",
    location: "Tajlandia",
    duration: "10 dni",
    rating: 4.9,
    isPopular: false,
    discount: "25%",
  },
  {
    id: 3,
    title: "Hiszpania - Słońce, Plaże i Flamenco!",
    price: "od 899 zł",
    originalPrice: "1,299 zł",
    image: "/spanish-coastal-town-with-beautiful-beaches-and-ar.png",
    description: "Zanurz się w hiszpańskiej kulturze i ciesz się słońcem!",
    location: "Hiszpania",
    duration: "5 dni",
    rating: 4.7,
    isPopular: true,
    discount: "35%",
  },
  {
    id: 4,
    title: "Włochy - Romantyczne Wakacje Marzeń!",
    price: "od 1,599 zł",
    originalPrice: "2,199 zł",
    image: "/romantic-italian-coastline-with-colorful-houses-an.png",
    description: "Odkryj piękno Włoch i skosztuj prawdziwej dolce vita!",
    location: "Włochy",
    duration: "8 dni",
    rating: 4.8,
    isPopular: false,
    discount: "28%",
  },
  {
    id: 5,
    title: "Turcja - Orientalny Czar i Lazurowe Wybrzeże!",
    price: "od 1,099 zł",
    originalPrice: "1,599 zł",
    image: "/turkish-riviera-with-turquoise-water-and-ancient-a.png",
    description: "Połączenie historii, kultury i przepięknych plaż!",
    location: "Turcja",
    duration: "7 dni",
    rating: 4.6,
    isPopular: false,
    discount: "32%",
  },
  {
    id: 6,
    title: "Chorwacja - Adriatyckie Perły Tuż za Rogiem!",
    price: "od 799 zł",
    originalPrice: "1,199 zł",
    image: "/croatian-coastline-with-clear-blue-water-and-histo.png",
    description: "Odkryj najpiękniejsze zakątki Adriatyku!",
    location: "Chorwacja",
    duration: "6 dni",
    rating: 4.7,
    isPopular: true,
    discount: "40%",
  },
]

export function PromotionsList() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <TrendingUp className="w-4 h-4" />
            Najgorętsze oferty
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Najlepsze Oferty Wakacyjne
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Wybierz spośród naszych starannie wyselekcjonowanych promocji i zarezerwuj swoje wymarzone wakacje już dziś!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((promotion, index) => (
            <motion.div
              key={promotion.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="h-full group"
            >
              <Card className="h-full flex flex-col bg-card border-border hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                {promotion.isPopular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="absolute top-4 left-4 z-10"
                  >
                    <Badge className="bg-secondary text-secondary-foreground shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Popularne
                    </Badge>
                  </motion.div>
                )}

                <CardHeader className="p-0 relative">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <motion.img
                      src={promotion.image || "/placeholder.svg"}
                      alt={promotion.location}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <motion.div
                      className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-xs line-through opacity-70">{promotion.originalPrice}</div>
                      <div>{promotion.price}</div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="absolute bottom-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold"
                    >
                      -{promotion.discount}
                    </motion.div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 p-6">
                  <CardTitle className="text-lg font-bold text-card-foreground mb-2 text-balance group-hover:text-primary transition-colors duration-300">
                    {promotion.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm mb-4 text-pretty">{promotion.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-secondary font-medium">
                        <MapPin className="w-4 h-4 mr-1" />
                        {promotion.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {promotion.duration}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(promotion.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground ml-1">
                        {promotion.rating} ({Math.floor(Math.random() * 200) + 50} opinii)
                      </span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Link href={`/promotion/${promotion.id}`} className="w-full">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        Zobacz więcej
                        <motion.span
                          className="ml-2 inline-block"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                          →
                        </motion.span>
                      </Button>
                    </motion.div>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
