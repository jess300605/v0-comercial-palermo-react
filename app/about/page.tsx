import Header from "@/components/header"
import Footer from "@/components/footer"
import { Target, Users, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage="nosotros" />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">Sobre Nosotros</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Más de 20 años brindando calidad y estilo para tu hogar
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Misión</h3>
              <p className="text-sm text-muted-foreground">Ofrecer muebles de calidad que transformen espacios</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Equipo</h3>
              <p className="text-sm text-muted-foreground">Profesionales dedicados a tu satisfacción</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Calidad</h3>
              <p className="text-sm text-muted-foreground">Productos certificados y garantizados</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Pasión</h3>
              <p className="text-sm text-muted-foreground">Amor por el diseño y la decoración</p>
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Nuestra Historia</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Comercial Palermo nació en 2003 con el sueño de ofrecer muebles de calidad a precios accesibles. Desde
                entonces, hemos crecido hasta convertirnos en una de las mueblerías más confiables de la región.
              </p>
              <p>
                Nuestro compromiso es brindar productos que combinen funcionalidad, diseño y durabilidad. Trabajamos con
                los mejores proveedores para garantizar la satisfacción de nuestros clientes.
              </p>
              <p>
                Hoy contamos con un amplio catálogo que incluye muebles para sala, comedor, dormitorio y oficina, además
                de accesorios decorativos que complementan cualquier espacio.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
