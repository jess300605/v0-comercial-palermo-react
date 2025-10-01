"use client"
import Link from "next/link"
import { User, Menu } from "lucide-react"

const navItems = [
  { name: "inicio", href: "/" },
  { name: "catálogo", href: "/catalog" },
  { name: "ofertas", href: "/offers" },
  { name: "nosotros", href: "/about" },
  { name: "sucursales", href: "/branches" },
]

interface HeaderProps {
  currentPage?: string
}

export default function Header({ currentPage = "inicio" }: HeaderProps) {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo minimalista */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-colors">
              <span className="text-sm font-bold text-primary">P</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-semibold text-foreground">Palermo</div>
              <div className="text-xs text-muted-foreground">Muebles & Decoración</div>
            </div>
          </Link>

          {/* Navigation minimalista */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  currentPage === item.name ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Ingresar</span>
            </Link>
            <button className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
