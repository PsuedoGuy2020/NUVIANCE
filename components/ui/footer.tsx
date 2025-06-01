import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex items-center gap-6 md:w-1/3">
            <div className="relative h-16 w-16">
              <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold tracking-wider text-blue-400">NUVIANCE</span>
              <span className="text-sm text-gray-400 mt-1">Innovate. Transform. Excel.</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:w-2/3">
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Enterprise</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Business</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Startup</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Integration</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Careers</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">News</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Documentation</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Help Center</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">API Guide</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Community</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Privacy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Terms</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Security</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Compliance</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400">© 2025 Nuviance, Inc. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-gray-400 hover:text-white">
                LinkedIn
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                Twitter
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