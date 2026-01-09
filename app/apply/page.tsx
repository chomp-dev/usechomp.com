import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function InternshipApplicationPage() {
  return (
    <div className="min-h-screen bg-[#0f0a08] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 overflow-hidden">
        <div
          className="absolute inset-0 animate-scroll-infinite"
          style={{
            backgroundImage:
              "linear-gradient(rgba(251, 146, 60, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.4) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
        <div
          className="absolute inset-0 animate-scroll-infinite-delayed"
          style={{
            backgroundImage:
              "linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-4xl w-full text-center space-y-8 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
          [Spring/Summer 2026] Software Engineer Intern
        </h1>

        <div className="flex items-center justify-center gap-4 text-gray-400 text-lg flex-wrap">
          <span>Chicago / Remote</span>
          <span className="hidden sm:inline">/</span>
          <span>Early Career</span>
        </div>

        <div className="pt-4">
          <Button
            asChild
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg rounded-lg transition-colors shadow-lg shadow-orange-500/30"
          >
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScIgANQG9d4hLvYcmsJvraMyXCOuxfG3crNQLyToelKm4DeAw/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
