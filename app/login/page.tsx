"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { api } from "@/lib/api"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleLogin = async () => {
    setError("")
    setLoading(true)

    try {
      const response = await api.login(formData.email, formData.password)

      if (response.error) {
        setError(response.error)
        return
      }

      if (response.data?.token) {
        localStorage.setItem("auth_token", response.data.token)
        localStorage.setItem("user", JSON.stringify(response.data.user))
        router.push("/catalog")
      }
    } catch (err) {
      setError("Error al iniciar sesión. Por favor intente nuevamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <Header currentPage="login" />

      <main className="flex-1 p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-gradient-to-b from-green-700 to-green-800 rounded-3xl p-12 shadow-2xl">
            <h1 className="text-white text-3xl font-bold text-center mb-8">Iniciar Sesión</h1>

            {/* User Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <User className="w-12 h-12 text-green-700" />
              </div>
            </div>

            {error && <div className="bg-red-500 text-white p-3 rounded-lg mb-4 text-center">{error}</div>}

            {/* Form Fields */}
            <div className="space-y-6">
              <div>
                <label className="text-white text-lg font-semibold block mb-3 text-center">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full h-12 rounded-full px-6 text-lg text-center border-0 shadow-inner"
                  placeholder="correo@ejemplo.com"
                  disabled={loading}
                />
              </div>

              <div>
                <label className="text-white text-lg font-semibold block mb-3 text-center">Contraseña</label>
                <Input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="w-full h-12 rounded-full px-6 text-lg text-center border-0 shadow-inner"
                  placeholder="Ingrese su contraseña"
                  disabled={loading}
                  onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                />
              </div>
            </div>

            {/* Login Button */}
            <div className="flex justify-center mt-10">
              <Button
                onClick={handleLogin}
                disabled={loading}
                className="bg-green-900 hover:bg-green-950 text-white px-12 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
              >
                {loading ? "Ingresando..." : "Ingresar"}
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
