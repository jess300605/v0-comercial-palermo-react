import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Phone, Clock, Navigation } from "lucide-react"

const branches = [
  {
    id: 1,
    name: "Sucursal Centro",
    address: "Av. Corrientes 1234, CABA",
    phone: "4545-4545",
    schedule: "Lun-Vie: 9:00-18:00, Sáb: 9:00-13:00",
    coordinates: { lat: -34.6037, lng: -58.3816 },
  },
  {
    id: 2,
    name: "Sucursal Palermo",
    address: "Av. Santa Fe 2345, Palermo",
    phone: "4646-4646",
    schedule: "Lun-Vie: 9:00-19:00, Sáb: 9:00-14:00",
    coordinates: { lat: -34.5875, lng: -58.4157 },
  },
  {
    id: 3,
    name: "Sucursal Belgrano",
    address: "Av. Cabildo 3456, Belgrano",
    phone: "4747-4747",
    schedule: "Lun-Vie: 9:00-18:00, Sáb: 9:00-13:00",
    coordinates: { lat: -34.5627, lng: -58.4558 },
  },
]

export default function BranchesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage="sucursales" />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-3">Nuestras Sucursales</h1>
            <p className="text-muted-foreground">Visítanos en cualquiera de nuestras ubicaciones</p>
          </div>

          {/* Branches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {branches.map((branch) => (
              <div
                key={branch.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">{branch.name}</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{branch.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{branch.phone}</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{branch.schedule}</p>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                  <Navigation className="w-4 h-4" />
                  Cómo llegar
                </button>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center border border-border">
            <p className="text-muted-foreground">Mapa con todas las sucursales</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
