import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Trash2 } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Sofá",
    image: "/orange-sofa-with-pillows.jpg",
  },
  {
    id: 2,
    name: "Mesa",
    image: "/wooden-dining-table.png",
  },
  {
    id: 3,
    name: "Cómoda",
    image: "/wooden-chest-of-drawers.jpg",
  },
  {
    id: 4,
    name: "Lámpara",
    image: "/yellow-table-lamp.jpg",
  },
  {
    id: 5,
    name: "Cama",
    image: "/single-bed-with-red-blanket.jpg",
  },
]

const additionalProducts = [
  {
    id: 6,
    name: "Silla de Oficina",
    image: "/modern-office-chair.png",
  },
  {
    id: 7,
    name: "Estantería",
    image: "/wooden-bookshelf.png",
  },
  {
    id: 8,
    name: "Mesa de Centro",
    image: "/modern-living-room-coffee-table.png",
  },
  {
    id: 9,
    name: "Armario",
    image: "/wooden-wardrobe.png",
  },
  {
    id: 10,
    name: "Escritorio",
    image: "/modern-desk.png",
  },
]

export default function CatalogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header currentPage="catálogo de productos" />

      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Catálogo de Productos</h1>
            <div className="flex gap-3">
              <Link href="/products/new">
                <Button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Agregar Producto
                </Button>
              </Link>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                <Trash2 className="w-5 h-5" />
                Eliminar Producto
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg hover:border-green-500 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="aspect-square mb-4 flex items-center justify-center relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <h3 className="text-center text-lg font-semibold text-gray-800">{product.name}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Más Productos</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {additionalProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg hover:border-green-500 hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="aspect-square mb-4 flex items-center justify-center relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain"
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-center text-lg font-semibold text-gray-800">{product.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
