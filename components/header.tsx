"use client"
import Link from "next/link"
import { User } from "lucide-react"

const navItems = [
  { name: "inicio", href: "/", active: false },
  { name: "login", href: "/login", active: false },
  { name: "sobre nosotros", href: "/about", active: false },
  { name: "catálogo de productos", href: "/catalog", active: false },
  { name: "ofertas", href: "/offers", active: false },
  { name: "sucursal y mas", href: "/branches", active: false },
]

interface HeaderProps {
  currentPage?: string
}

export default function Header({ currentPage = "inicio" }: HeaderProps) {
  return (
    <header className="bg-white border-b-2 border-purple-400">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-20 h-20 rounded-full border-4 border-green-700 flex items-center justify-center bg-white">
            <div className="text-center">
              <div className="text-xs font-bold text-green-700">PALERMO</div>
              <div className="text-xs text-yellow-500">Muebles y más...</div>
              <div className="text-xs text-green-700">Tel 4545-4545</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 mx-8">
          <div className="flex bg-green-700 rounded">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-3 text-white text-sm font-medium hover:bg-green-600 transition-colors ${
                  currentPage === item.name ? "bg-green-600" : ""
                } ${item.name === "login" ? "text-red-400" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* User Icons */}
        <div className="flex gap-2">
          <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </header>
  )
}
