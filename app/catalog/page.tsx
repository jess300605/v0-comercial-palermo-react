import Header from "@/components/header"
import Footer from "@/components/footer"

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

export default function CatalogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header currentPage="catálogo de productos" />

      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border-2 border-dashed border-gray-400 p-6 rounded-lg hover:border-green-500 transition-colors cursor-pointer"
              >
                <div className="aspect-square mb-4 flex items-center justify-center">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-center text-lg font-medium text-gray-800">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
