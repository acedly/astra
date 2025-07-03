import { useState, useEffect } from "react"
import { Container, Icons } from "@/components"
import { buttonVariants } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"
import UserButton from "@/components/auth/UserButton"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const { user } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="px-4 fixed top-0 left-0 right-0 w-full h-16 bg-black z-50 border-b border-border backdrop-blur-lg">
      <Container reverse>
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
          <div className="flex items-start">
            <Link to="/" className="flex items-center gap-2">
              <Icons.logo className="w-8 h-8" />
              <span className="text-lg font-medium">Kluis</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center justify-center gap-8">
              <Link to="#" className="hover:text-foreground/80 text-sm">About</Link>
              <Link to="#" className="hover:text-foreground/80 text-sm">Pricing</Link>
              <Link to="#" className="hover:text-foreground/80 text-sm">Features</Link>
              <Link to="#" className="hover:text-foreground/80 text-sm">Contact</Link>
              {user && (
                <Link to="/dashboard" className="hover:text-foreground/80 text-sm">Dashboard</Link>
              )}
            </ul>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <UserButton />
            ) : (
              <>
                <Link to="/sign-in" className={buttonVariants({ size: "sm", variant: "ghost" })}>
                  Login
                </Link>
                <Link
                  to="/sign-up"
                  className={buttonVariants({ size: "sm", className: "hidden md:flex" })}
                >
                  Get started
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-4 border-t border-border bg-black">
          <ul className="flex flex-col gap-4">
            <Link to="#">About</Link>
            <Link to="#">Pricing</Link>
            <Link to="#">Features</Link>
            <Link to="#">Contact</Link>
            {user && <Link to="/dashboard">Dashboard</Link>}
            {!user && (
              <>
                <Link to="/sign-in">Login</Link>
                <Link to="/sign-up">Get Started</Link>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
