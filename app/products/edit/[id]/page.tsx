"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Plus, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { api } from "@/lib/api"

export default function EditProductPage() {
  const router = useRouter()
  const params = useParams()
  const productId = params.id as string

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    code: "",
    price: "",
    sale_price: "",
    ideal_stock: "",
    image: "",
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    loadProduct()
  }, [productId])

  const loadProduct = async () => {
    try {
      const response = await api.getProduct(Number.parseInt(productId))

      if (response.error) {
        setError(response.error)
        return
      }

      if (response.data) {
        setFormData({
          name: response.data.name || "",
          description: response.data.description || "",
          code: response.data.code || "",
          price: response.data.price?.toString() || "",
          sale_price: response.data.sale_price?.toString() || "",
          ideal_stock: response.data.ideal_stock?.toString() || "",
          image: response.data.image || "",
        })
      }
    } catch (err) {
      setError("Error al cargar el producto")
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async () => {
    setError("")
    setSaving(true)

    if (!formData.name || !formData.price) {
      setError("Por favor complete los campos obligatorios (Nombre y Precio)")
      setSaving(false)
      return
    }

    try {
      const response = await api.updateProduct(Number.parseInt(productId), {
        name: formData.name,
        description: formData.description,
        code: formData.code,
        price: Number.parseFloat(formData.price),
        sale_price: formData.sale_price ? Number.parseFloat(formData.sale_price) : null,
        ideal_stock: formData.ideal_stock ? Number.parseInt(formData.ideal_stock) : null,
        image: formData.image,
      })

      if (response.error) {
        setError(response.error)
        return
      }

      router.push("/catalog")
    } catch (err) {
      setError("Error al actualizar el producto")
    } finally {
      setSaving(false)
    }
  }

  const handleExit = () => {
    router.push("/catalog")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header currentPage="catálogo de productos" />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="w-12 h-12 animate-spin text-green-600" />
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header currentPage="catálogo de productos" />

      <main className="flex-1 p-8 flex items-center justify-center">
        <div className="bg-green-600 rounded-3xl p-8 w-full max-w-4xl">
          <h1 className="text-white text-3xl font-bold text-center mb-8">EDITAR PRODUCTO</h1>

          {error && <div className="bg-red-500 text-white p-3 rounded-lg mb-4 text-center">{error}</div>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="text-white text-xl font-bold block mb-4">NOMBRE *</label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full h-12 rounded-full px-6 text-lg"
                  placeholder="Nombre del producto"
                  disabled={saving}
                />
              </div>

              <div>
                <label className="text-white text-xl font-bold block mb-4">IMAGEN DE PRODUCTO</label>
                <div className="flex items-center gap-4">
                  <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer hover:bg-green-400 transition-colors">
                    <Plus className="w-8 h-8 text-white" />
                  </div>
                  <Input
                    value={formData.image}
                    onChange={(e) => handleInputChange("image", e.target.value)}
                    className="flex-1 h-12 rounded-full px-6 text-lg"
                    placeholder="URL de la imagen"
                    disabled={saving}
                  />
                </div>
              </div>

              <div>
                <label className="text-white text-xl font-bold block mb-4">DESCRIPCIÓN</label>
                <Input
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className="w-full h-12 rounded-full px-6 text-lg"
                  placeholder="Descripción del producto"
                  disabled={saving}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-xl font-bold block mb-4">CÓDIGO</label>
                  <Input
                    value={formData.code}
                    onChange={(e) => handleInputChange("code", e.target.value)}
                    className="w-full h-12 rounded-full px-6 text-lg"
                    placeholder="Código"
                    disabled={saving}
                  />
                </div>
                <div>
                  <label className="text-white text-xl font-bold block mb-4">PRECIO *</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg font-bold">$</span>
                    <Input
                      value={formData.price}
                      onChange={(e) => handleInputChange("price", e.target.value)}
                      className="w-full h-12 rounded-full pl-8 pr-6 text-lg"
                      placeholder="0.00"
                      type="number"
                      step="0.01"
                      disabled={saving}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-xl font-bold block mb-4">PRECIO DE VENTA</label>
                  <Input
                    value={formData.sale_price}
                    onChange={(e) => handleInputChange("sale_price", e.target.value)}
                    className="w-full h-12 rounded-full px-6 text-lg"
                    placeholder="Precio de venta"
                    type="number"
                    step="0.01"
                    disabled={saving}
                  />
                </div>
                <div>
                  <label className="text-white text-xl font-bold block mb-4">STOCK IDEAL</label>
                  <Input
                    value={formData.ideal_stock}
                    onChange={(e) => handleInputChange("ideal_stock", e.target.value)}
                    className="w-full h-12 rounded-full px-6 text-lg"
                    placeholder="Stock ideal"
                    type="number"
                    disabled={saving}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-8 mt-12">
            <Button
              onClick={handleSubmit}
              disabled={saving}
              className="bg-green-800 hover:bg-green-900 text-white px-12 py-4 text-xl font-bold rounded-lg disabled:opacity-50"
            >
              {saving ? "GUARDANDO..." : "ACTUALIZAR"}
            </Button>
            <Button
              onClick={handleExit}
              disabled={saving}
              variant="outline"
              className="bg-green-800 hover:bg-green-900 text-white border-green-800 px-12 py-4 text-xl font-bold rounded-lg"
            >
              CANCELAR
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
