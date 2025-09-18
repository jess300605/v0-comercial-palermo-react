"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleLogin = () => {
    console.log("Intentando login:", formData)
    // Aquí iría la lógica de autenticación
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header currentPage="login" />

      <main className="flex-1 p-8 flex items-center justify-center">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Information */}
          <div className="text-center lg:text-left">
            <p className="text-2xl text-gray-800 leading-relaxed">
              <span className="font-bold">teniendo en cuenta que tendremos dos usuarios cliente y administrador</span>
            </p>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex justify-center">
            <div className="bg-green-700 rounded-3xl p-12 w-full max-w-md">
              <h1 className="text-white text-3xl font-bold text-center mb-8">longin</h1>

              {/* User Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <User className="w-12 h-12 text-green-700" />
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                <div>
                  <label className="text-white text-xl font-bold block mb-4 text-center">contraseña</label>
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="w-full h-14 rounded-full px-6 text-lg text-center"
                    placeholder="Ingrese su contraseña"
                  />
                </div>

                <div>
                  <label className="text-white text-xl font-bold block mb-4 text-center">usuario</label>
                  <Input
                    value={formData.username}
                    onChange={(e) => handleInputChange("username", e.target.value)}
                    className="w-full h-14 rounded-full px-6 text-lg text-center"
                    placeholder="Ingrese su usuario"
                  />
                </div>
              </div>

              {/* Login Button */}
              <div className="flex justify-center mt-12">
                <Button
                  onClick={handleLogin}
                  className="bg-green-800 hover:bg-green-900 text-white px-16 py-4 text-xl font-bold rounded-lg"
                >
                  Ingresar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
