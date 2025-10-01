import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Phone, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage="inicio" />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-3">Contáctanos</h1>
            <p className="text-muted-foreground">Estamos aquí para ayudarte</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Location Card */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Ubicación</h3>
              <p className="text-sm text-muted-foreground">Av. Principal 1234</p>
              <p className="text-sm text-muted-foreground">Buenos Aires, Argentina</p>
            </div>

            {/* Phone Card */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Teléfono</h3>
              <p className="text-sm text-muted-foreground">Tel: 4545-4545</p>
              <p className="text-sm text-muted-foreground">WhatsApp: +54 9 11 4545-4545</p>
            </div>

            {/* Schedule Card */}
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Horarios</h3>
              <p className="text-sm text-muted-foreground">Lun - Vie: 9:00 - 18:00</p>
              <p className="text-sm text-muted-foreground">Sáb: 9:00 - 13:00</p>
            </div>
          </div>

          {/* Map */}
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center border border-border">
            <p className="text-muted-foreground">Mapa de ubicación</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
