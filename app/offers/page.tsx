import Header from "@/components/header"
import Footer from "@/components/footer"
import { Tag, Clock, TrendingDown } from "lucide-react"
import Image from "next/image"

const offers = [
  {
    id: 1,
    name: "Sofá Moderno",
    originalPrice: 89999,
    discountPrice: 64999,
    discount: 28,
    image: "/orange-sofa-with-pillows.jpg",
    endDate: "2025-01-31",
  },
  {
    id: 2,
    name: "Mesa de Comedor",
    originalPrice: 45999,
    discountPrice: 32999,
    discount: 28,
    image: "/wooden-dining-table.png",
    endDate: "2025-01-31",
  },
  {
    id: 3,
    name: "Cómoda de Madera",
    originalPrice: 35999,
    discountPrice: 25999,
    discount: 28,
    image: "/wooden-chest-of-drawers.jpg",
    endDate: "2025-01-31",
  },
  {
    id: 4,
    name: "Lámpara de Mesa",
    originalPrice: 12999,
    discountPrice: 8999,
    discount: 31,
    image: "/yellow-table-lamp.jpg",
    endDate: "2025-01-31",
  },
]

export default function OffersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage="ofertas" />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-4">
              <Tag className="w-4 h-4" />
              <span className="text-sm font-medium">Ofertas Especiales</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-3">Descuentos Increíbles</h1>
            <p className="text-muted-foreground">Aprovecha nuestras promociones por tiempo limitado</p>
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all group"
              >
                {/* Discount Badge */}
                <div className="relative">
                  <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-bold z-10">
                    -{offer.discount}%
                  </div>
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    <Image
                      src={offer.image || "/placeholder.svg"}
                      alt={offer.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-3">{offer.name}</h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <TrendingDown className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground line-through">
                        ${offer.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-primary">${offer.discountPrice.toLocaleString()}</div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <Clock className="w-3 h-3" />
                    <span>Válido hasta {offer.endDate}</span>
                  </div>

                  <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Info Banner */}
          <div className="mt-12 bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
            <p className="text-accent font-medium">
              ¡Nuevas ofertas cada semana! Suscríbete para recibir notificaciones
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
