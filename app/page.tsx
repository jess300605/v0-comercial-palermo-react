import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Phone, Calendar, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header currentPage="inicio" />

      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="border-b-2 border-dashed border-gray-400 py-2">
                    <span className="text-gray-600">Dirección de la sucursal</span>
                  </div>
                  <div className="border-b-2 border-dashed border-gray-400 py-2">
                    <span className="text-gray-600">Ciudad, Código Postal</span>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="border-b-2 border-dashed border-gray-400 py-2">
                    <span className="text-gray-600">Teléfono: 4545-4545</span>
                  </div>
                  <div className="border-b-2 border-dashed border-gray-400 py-2">
                    <span className="text-gray-600">WhatsApp: +54 9 11 4545-4545</span>
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Calendar className="w-16 h-16 text-red-500" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="border-b-2 border-dashed border-gray-400 py-2">
                    <span className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</span>
                  </div>
                  <div className="border-b-2 border-dashed border-gray-400 py-2">
                    <span className="text-gray-600">Sábados: 9:00 - 13:00</span>
                  </div>
                  <div className="border-b-2 border-dashed border-gray-400 py-2">
                    <span className="text-gray-600">Domingos: Cerrado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Mapa de ubicación</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
