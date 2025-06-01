import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex items-center gap-4 md:w-1/3">
            <div className="relative h-12 w-12">
              <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500"></div>
            </div>
            <span className="text-3xl font-bold tracking-tight text-purple-400">Hostpay</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-2/3">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Features</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Pricing</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Security</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Integrations</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Careers</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Press</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Documentation</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Help Center</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">API Reference</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Community</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Privacy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Terms</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Licenses</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400">© 2025 Hostpay, Inc. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-gray-400 hover:text-white">
                Twitter
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                LinkedIn
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}