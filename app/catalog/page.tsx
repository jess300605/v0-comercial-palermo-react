"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Trash2, Loader2 } from "lucide-react"
import Link from "next/link"
import { api } from "@/lib/api"

interface Product {
  id: number
  name: string
  description?: string
  code?: string
  price?: number
  sale_price?: number
  ideal_stock?: number
  image?: string
}

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await api.getProducts()

      if (response.error) {
        setError(response.error)
        return
      }

      if (response.data) {
        setProducts(response.data)
      }
    } catch (err) {
      setError("Error al cargar los productos")
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteProduct = async (id: number) => {
    if (!confirm("¿Está seguro de eliminar este producto?")) return

    try {
      const response = await api.deleteProduct(id)

      if (response.error) {
        alert("Error al eliminar el producto: " + response.error)
        return
      }

      // Recargar productos después de eliminar
      loadProducts()
    } catch (err) {
      alert("Error al eliminar el producto")
    }
  }

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
            </div>
          </div>

          {loading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-12 h-12 animate-spin text-green-600" />
            </div>
          )}

          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

          {/* Products Grid */}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg hover:border-green-500 hover:shadow-lg transition-all duration-200 group"
                >
                  <div className="aspect-square mb-4 flex items-center justify-center relative">
                    <img
                      src={product.image || "/placeholder.svg?height=200&width=200"}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain"
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                      <Link href={`/products/edit/${product.id}`}>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        onClick={() => handleDeleteProduct(product.id)}
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-center text-lg font-semibold text-gray-800">{product.name}</h3>
                  {product.price && <p className="text-center text-green-600 font-bold mt-2">${product.price}</p>}
                </div>
              ))}
            </div>
          )}

          {!loading && !error && products.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <p className="text-xl">No hay productos disponibles</p>
              <Link href="/products/new">
                <Button className="mt-4 bg-green-700 hover:bg-green-800 text-white">Agregar primer producto</Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
