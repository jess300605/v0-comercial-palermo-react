const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"

interface ApiResponse<T> {
  data?: T
  message?: string
  error?: string
}

class ApiService {
  private getHeaders(includeAuth = true): HeadersInit {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      Accept: "application/json",
    }

    if (includeAuth) {
      const token = localStorage.getItem("auth_token")
      if (token) {
        headers["Authorization"] = `Bearer ${token}`
      }
    }

    return headers
  }

  async request<T>(endpoint: string, options: RequestInit = {}, includeAuth = true): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: this.getHeaders(includeAuth),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Error en la petición")
      }

      return { data, message: data.message }
    } catch (error) {
      console.error("[v0] API Error:", error)
      return {
        error: error instanceof Error ? error.message : "Error desconocido",
      }
    }
  }

  // Auth endpoints
  async login(email: string, password: string) {
    return this.request<{ token: string; user: any }>(
      "/login",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
      },
      false,
    )
  }

  async logout() {
    const response = await this.request("/logout", { method: "POST" })
    localStorage.removeItem("auth_token")
    localStorage.removeItem("user")
    return response
  }

  async register(userData: any) {
    return this.request(
      "/register",
      {
        method: "POST",
        body: JSON.stringify(userData),
      },
      false,
    )
  }

  // Products endpoints
  async getProducts() {
    return this.request<any[]>("/products", { method: "GET" })
  }

  async getProduct(id: number) {
    return this.request<any>(`/products/${id}`, { method: "GET" })
  }

  async createProduct(productData: any) {
    return this.request<any>("/products", {
      method: "POST",
      body: JSON.stringify(productData),
    })
  }

  async updateProduct(id: number, productData: any) {
    return this.request<any>(`/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(productData),
    })
  }

  async deleteProduct(id: number) {
    return this.request(`/products/${id}`, { method: "DELETE" })
  }

  // User endpoints
  async getCurrentUser() {
    return this.request<any>("/user", { method: "GET" })
  }
}

export const api = new ApiService()
