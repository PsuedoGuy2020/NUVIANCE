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
          <div className="relative h-8 w-8 rounded-full bg-emerald-500/20">
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500"></div>
          </div>
          <span className="text-xl font-semibold text-purple-400">Hostpay</span>
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
          <Link href="#" className="rounded-full bg-emerald-600 px-5 py-1.5 text-sm font-medium hover:bg-emerald-700">
            Sign up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-emerald-500"></div>
          <div className="absolute top-3/4 right-1/4 h-2 w-2 rounded-full bg-emerald-500"></div>
          <div className="absolute top-1/2 right-1/3 h-2 w-2 rounded-full bg-emerald-500"></div>
          <div className="absolute bottom-1/4 left-1/3 h-2 w-2 rounded-full bg-emerald-500"></div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto">
          SIMPLIFY YOUR FINANCIAL MANAGEMENT
        </h1>

        <p className="text-white/70 max-w-2xl mx-auto mb-10">
          Enjoy intuitive tools that empower you to manage, transfer, and track your funds effortlessly, all while
          ensuring the highest level of data protection.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#"
            className="rounded-full bg-emerald-600 px-6 py-3 font-medium hover:bg-emerald-700 w-full sm:w-auto"
          >
            Open an Account
          </Link>
          <Link
            href="#"
            className="rounded-full border border-gray-700 px-6 py-3 font-medium hover:bg-gray-800 w-full sm:w-auto"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="container mx-auto px-4 py-8 mb-16">
        <div className="rounded-3xl border border-gray-800 bg-gray-900/50 p-6 overflow-hidden">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 rounded-full bg-emerald-500/20">
                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500"></div>
              </div>
              <span className="text-xl font-semibold text-purple-400">Hostpay</span>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search here..."
                  className="rounded-full bg-gray-800 pl-10 pr-4 py-2 text-sm w-64 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div className="flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2">
                <span className="font-medium">$40,000</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="relative">
                <div className="relative h-8 w-8">
                  <Bell className="h-5 w-5 text-gray-400" />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs">
                    1
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gray-700 overflow-hidden">
                  <div className="h-full w-full bg-gray-600 flex items-center justify-center text-xs">N</div>
                </div>
                <span className="text-sm">Novak Roka</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <div className="lg:w-16 flex lg:flex-col items-center justify-between rounded-2xl bg-gray-800 p-3">
              <div className="flex lg:flex-col gap-6 lg:gap-8">
                <SidebarIcon icon={BarChart3} active />
                <SidebarIcon icon={CreditCard} />
                <SidebarIcon icon={FileText} />
                <SidebarIcon icon={Users} />
                <SidebarIcon icon={Calendar} />
              </div>
              <div className="hidden lg:block">
                <Menu className="h-5 w-5 text-gray-500" />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Dashboard Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold">Dashboard</h2>
                  <p className="text-sm text-gray-400">An easy way to manage sales with care and precision</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0 w-full sm:w-auto">
                  <div className="flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">January 2024 - May 2024</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-400"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <button className="flex items-center justify-center gap-2 rounded-full bg-emerald-600/20 text-emerald-500 px-4 py-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Export</span>
                  </button>
                </div>
              </div>

              {/* Cashflow Chart */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Cashflows</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                      <span className="text-sm text-gray-400">Income</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-gray-600"></div>
                      <span className="text-sm text-gray-400">Outcome</span>
                    </div>
                  </div>
                </div>

                <div className="h-64 w-full">
                  <div className="flex h-full">
                    {/* Y-axis labels */}
                    <div className="flex flex-col justify-between pr-2 text-xs text-gray-500">
                      <span>60</span>
                      <span>50</span>
                      <span>40</span>
                      <span>30</span>
                      <span>20</span>
                      <span>10</span>
                      <span>0</span>
                    </div>

                    {/* Chart */}
                    <div className="flex-1">
                      <div className="flex h-full items-end justify-between">
                        {months.map((month, i) => (
                          <div key={month} className="flex flex-col items-center gap-1 w-full">
                            <div
                              className="w-4/5 bg-purple-500/80 rounded-md"
                              style={{ height: `${barHeights[i]}%` }}
                            ></div>
                            <span className="text-xs text-gray-500">{month}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank Accounts */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Bank Accounts</h3>
                  <button>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 12v.01M8 12v.01M16 12v.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <div className="grid gap-4">
                  <BankAccount color="emerald" name="Main Bank Account" type="Bank of America" amount="$34,000.00" />

                  <BankAccount color="blue" name="Main Bank Account" type="Wells Fargo" amount="$44,000.00" />

                  <BankAccount color="emerald" name="Main Australia" type="Green Bank" amount="$34,000.00" />

                  <button className="w-full rounded-xl bg-emerald-600/20 py-3 text-emerald-500 font-medium">
                    Connect New Bank
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-3xl bg-gray-800 p-6 transform rotate-6">
              <div className="rounded-3xl bg-gray-900 p-6 transform -rotate-3 overflow-hidden">
                <div className="p-4">
                  <h3 className="text-3xl font-bold mb-2">
                    Discover The Key
                    <br />
                    to Your Fintech
                    <br />
                    Future
                  </h3>

                  <div className="mt-16 relative">
                    <div className="absolute -right-8 -top-16 h-24 w-24 rounded-full bg-emerald-500/30"></div>
                    <div className="absolute -left-8 bottom-0 h-16 w-16 rounded-full bg-emerald-500/20"></div>

                    <div className="relative rounded-xl bg-gray-800 p-4">
                      <div className="mb-2 text-4xl font-bold">$920.34</div>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-400">Credit</div>
                        <div className="text-xs text-gray-400">Exp: 01/25</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              FEEL THE BEST EXPERIENCE
              <br />
              WITH OUR FEATURES
            </h2>

            <p className="text-white/70 mb-10">
              Enjoy simple, convenient features for effortless financial management. Track in real-time and handle
              transactions seamlessly on one easy-to-use platform.
            </p>

            <div className="space-y-8">
              <FeatureItem
                icon={BarChart3}
                title="Real-Time Transaction Tracking"
                description="Get instant notifications on transactions, withdrawals, or deposits, ensuring you're always in control of your financial flow."
              />

              <FeatureItem
                icon={CreditCard}
                title="Integrated Payment Solutions"
                description="Make payments effortlessly through multiple channels, whether it's peer-to-peer transfers, bill payments, or merchant transactions."
              />

              <FeatureItem
                icon={Shield}
                title="Secure Account Access"
                description="Protect your account with advanced security features like two-factor authentication, biometric login, and encryption."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Helper Components
function SidebarIcon({ icon: Icon, active = false }: { icon: LucideIcon; active?: boolean }) {
  return (
    <div className={`rounded-xl p-2 ${active ? "bg-gray-700" : ""}`}>
      <Icon className={`h-5 w-5 ${active ? "text-white" : "text-gray-500"}`} />
    </div>
  )
}

function BankAccount({
  color,
  name,
  type,
  amount,
}: {
  color: "emerald" | "blue"
  name: string
  type: string
  amount: string
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-800 p-4">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg ${
          color === "emerald" ? "bg-emerald-500/20 text-emerald-500" : "bg-blue-500/20 text-blue-500"
        }`}
      >
        <CreditCard className="h-5 w-5" />
      </div>

      <div className="flex-1">
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-gray-400">{type}</p>
        <div className="mt-1 flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
          <span className="text-xs text-gray-400">Active</span>
        </div>
      </div>

      <div className="text-right">
        <span className="font-medium">{amount}</span>
      </div>
    </div>
  )
}

function FeatureItem({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  )
}

// Sample data for chart
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const barHeights = [45, 65, 25, 55, 35, 45, 30, 40, 25, 60, 50, 35]
