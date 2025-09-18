"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewProductPage() {
  const [formData, setFormData] = useState({
    description: "",
    code: "",
    price: "",
    salePrice: "",
    idealStock: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = () => {
    console.log("Producto a ingresar:", formData)
    // Aquí iría la lógica para guardar el producto
  }

  const handleExit = () => {
    // Aquí iría la lógica para salir/cancelar
    console.log("Salir del formulario")
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header currentPage="catálogo de productos" />

      <main className="flex-1 p-8 flex items-center justify-center">
        <div className="bg-green-600 rounded-3xl p-8 w-full max-w-4xl">
          <h1 className="text-white text-3xl font-bold text-center mb-8">PRODUCTO NUEVO</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Image Upload */}
            <div className="space-y-6">
              <div>
                <label className="text-white text-xl font-bold block mb-4">IMAGEN DE PRODUCTO</label>
                <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer hover:bg-green-400 transition-colors">
                  <Plus className="w-8 h-8 text-white" />
                </div>
              </div>

              <div>
                <label className="text-white text-xl font-bold block mb-4">DESCRIPCIÓN</label>
                <Input
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className="w-full h-12 rounded-full px-6 text-lg"
                  placeholder="Descripción del producto"
                />
              </div>
            </div>

            {/* Right Column - Form Fields */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-xl font-bold block mb-4">CÓDIGO</label>
                  <Input
                    value={formData.code}
                    onChange={(e) => handleInputChange("code", e.target.value)}
                    className="w-full h-12 rounded-full px-6 text-lg"
                    placeholder="Código"
                  />
                </div>
                <div>
                  <label className="text-white text-xl font-bold block mb-4">PRECIO</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg font-bold">$</span>
                    <Input
                      value={formData.price}
                      onChange={(e) => handleInputChange("price", e.target.value)}
                      className="w-full h-12 rounded-full pl-8 pr-6 text-lg"
                      placeholder="0.00"
                      type="number"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white text-xl font-bold block mb-4">PRECIO DE VENTA</label>
                  <Input
                    value={formData.salePrice}
                    onChange={(e) => handleInputChange("salePrice", e.target.value)}
                    className="w-full h-12 rounded-full px-6 text-lg"
                    placeholder="Precio de venta"
                    type="number"
                  />
                </div>
                <div>
                  <label className="text-white text-xl font-bold block mb-4">STOCK IDEAL</label>
                  <Input
                    value={formData.idealStock}
                    onChange={(e) => handleInputChange("idealStock", e.target.value)}
                    className="w-full h-12 rounded-full px-6 text-lg"
                    placeholder="Stock ideal"
                    type="number"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-8 mt-12">
            <Button
              onClick={handleSubmit}
              className="bg-green-800 hover:bg-green-900 text-white px-12 py-4 text-xl font-bold rounded-lg"
            >
              INGRESAR
            </Button>
            <Button
              onClick={handleExit}
              variant="outline"
              className="bg-green-800 hover:bg-green-900 text-white border-green-800 px-12 py-4 text-xl font-bold rounded-lg"
            >
              SALIR
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
