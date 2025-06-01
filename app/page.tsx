import { Footer } from "@/components/ui/footer"
import Link from "next/link"
import {
  BarChart3,
  Bell,
  Calendar,
  CreditCard,
  FileText,
  type LucideIcon,
  Menu,
  Search,
  Shield,
  Users,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto flex items-center justify-between py-6 px-4">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8 rounded-full bg-blue-500/20">
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500"></div>
          </div>
          <span className="text-xl font-semibold text-blue-400">NUVIANCE</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-white/90 hover:text-white">
            Home
          </Link>
          <Link href="#" className="text-white/70 hover:text-white">
            Features
          </Link>
          <Link href="#" className="text-white/70 hover:text-white">
            Pricing
          </Link>
          <Link href="#" className="text-white/70 hover:text-white">
            FAQ
          </Link>
          <Link href="#" className="text-white/70 hover:text-white">
            About
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="rounded-full border border-gray-700 px-5 py-1.5 text-sm font-medium hover:bg-gray-800"
          >
            Login
          </Link>
          <Link href="#" className="rounded-full bg-blue-600 px-5 py-1.5 text-sm font-medium hover:bg-blue-700">
            Sign up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Transform Your Business with Nuviance
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Empower your organization with cutting-edge solutions that drive innovation,
          efficiency, and growth. Experience the future of enterprise technology.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#"
            className="rounded-full bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700 w-full sm:w-auto"
          >
            Get Started
          </Link>
          <Link
            href="#"
            className="rounded-full border border-gray-700 px-6 py-3 font-medium hover:bg-gray-800 w-full sm:w-auto"
          >
            Learn More
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}