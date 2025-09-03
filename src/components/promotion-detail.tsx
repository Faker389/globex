"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, Check, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Promotion {
  id: number
  title: string
  price: string
  originalPrice: string
  image: string
  description: string
  location: string
  duration: string
  departureDate: string
  longDescription: string
  highlights: string[]
  included: string[]
  gallery: string[]
}

interface PromotionDetailProps {
  promotion: Promotion
}

export function PromotionDetail({ promotion }: PromotionDetailProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={promotion.image || "/placeholder.svg"}
          alt={promotion.location}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance"
            >
              {promotion.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center gap-4 text-lg"
            >
              <span className="line-through text-white/70">{promotion.originalPrice}</span>
              <span className="text-primary font-bold text-2xl">{promotion.price}</span>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Link href="/">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Powrót do ofert
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Destynacja</p>
                        <p className="font-semibold">{promotion.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Czas trwania</p>
                        <p className="font-semibold">{promotion.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Terminy</p>
                        <p className="font-semibold text-sm">{promotion.departureDate}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Opis wycieczki</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{promotion.longDescription}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Najważniejsze atrakcje</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {promotion.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* What's Included */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>W cenie zawarte</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {promotion.included.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Galeria</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {promotion.gallery.map((image, index) => (
                      <div key={index} className="relative overflow-hidden rounded-lg aspect-video">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${promotion.location} ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-4"
            >
              <Card className="border-primary/20">
                <CardHeader className="text-center">
                  <div className="space-y-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Oferta specjalna
                    </Badge>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground line-through">{promotion.originalPrice}</p>
                      <p className="text-3xl font-bold text-primary">{promotion.price}</p>
                      <p className="text-sm text-muted-foreground">za osobę</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <a
                      href="https://wakacje.pl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Zobacz ofertę
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>

                  <div className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground">Lub zadzwoń i zarezerwuj telefonicznie</p>
                    <p className="font-semibold text-secondary">📞 +48 123 456 789</p>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>✅ Możliwość płatności ratami</p>
                      <p>✅ Bezpłatna anulacja do 14 dni</p>
                      <p>✅ Gwarancja najniższej ceny</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
