"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"

export default function HomePage() {
  const scrollToDeck = () => {
    const element = document.getElementById('request-deck');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30">

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">

        {/* Background Elements - Restored Wireframe Globe */}
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            {/* Latitude lines */}
            <ellipse cx="200" cy="200" rx="150" ry="150" fill="none" stroke="rgba(251, 146, 60, 0.7)" strokeWidth="2" />
            <ellipse cx="200" cy="200" rx="150" ry="100" fill="none" stroke="rgba(251, 146, 60, 0.5)" strokeWidth="1.5" />
            <ellipse cx="200" cy="200" rx="150" ry="50" fill="none" stroke="rgba(251, 146, 60, 0.5)" strokeWidth="1.5" />

            {/* Longitude lines */}
            <ellipse cx="200" cy="200" rx="150" ry="150" fill="none" stroke="rgba(251, 146, 60, 0.6)" strokeWidth="1.5" />
            <ellipse cx="200" cy="200" rx="100" ry="150" fill="none" stroke="rgba(251, 146, 60, 0.5)" strokeWidth="1.5" />
            <ellipse cx="200" cy="200" rx="50" ry="150" fill="none" stroke="rgba(251, 146, 60, 0.5)" strokeWidth="1.5" />

            {/* Equator */}
            <line x1="50" y1="200" x2="350" y2="200" stroke="rgba(251, 146, 60, 0.8)" strokeWidth="2" />

            {/* Navigation path markers */}
            <circle cx="200" cy="200" r="4" fill="rgb(251, 146, 60)" className="animate-nav-path-1" />
            <circle cx="200" cy="200" r="4" fill="rgb(251, 146, 60)" className="animate-nav-path-2" />
            <circle cx="200" cy="200" r="4" fill="rgb(251, 146, 60)" className="animate-nav-path-3" />
            <circle cx="200" cy="200" r="4" fill="rgb(251, 146, 60)" className="animate-nav-path-4" />

            {/* Navigation route lines */}
            <path d="M 80 200 Q 140 120, 200 80 T 320 200" fill="none" stroke="rgba(251, 146, 60, 0.6)" strokeWidth="2" strokeDasharray="8,4" className="animate-dash-flow" />
            <path d="M 200 80 Q 260 140, 280 200 T 200 320" fill="none" stroke="rgba(251, 146, 60, 0.6)" strokeWidth="2" strokeDasharray="8,4" className="animate-dash-flow-reverse" />
          </svg>

          {/* Floating location pins */}
          <div className="absolute inset-0 animate-pins-float">
            <div className="absolute top-[30%] left-[25%] w-3 h-3 bg-orange-500 rounded-full opacity-80 shadow-lg shadow-orange-500/50"></div>
            <div className="absolute top-[45%] right-[30%] w-3 h-3 bg-orange-400 rounded-full opacity-80 shadow-lg shadow-orange-400/50"></div>
            <div className="absolute bottom-[35%] left-[50%] w-3 h-3 bg-orange-500 rounded-full opacity-80 shadow-lg shadow-orange-500/50"></div>
            <div className="absolute top-[55%] left-[35%] w-3 h-3 bg-orange-400 rounded-full opacity-80 shadow-lg shadow-orange-400/50"></div>
          </div>
        </div>

        <div className="relative z-10 space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">

          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white/90">
            Chomp
          </h1>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl text-gray-400 font-light tracking-wide uppercase">
              Stealth startup
            </h2>

            <p className="text-3xl md:text-5xl font-light leading-tight max-w-3xl mx-auto pt-4 text-gray-100 italic">
              “For the new social media hustler revolution.”
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-12">
            <Button
              onClick={scrollToDeck}
              className="bg-white text-black hover:bg-gray-200 text-lg px-10 py-7 rounded-full font-medium transition-transform hover:scale-105"
            >
              Request deck
            </Button>

            <Button
              asChild
              className="bg-orange-600 hover:bg-orange-700 text-white border-none text-lg px-10 py-7 rounded-full transition-all shadow-lg shadow-orange-900/20"
            >
              <a href="mailto:Business@usechomp.com">
                Contact us
              </a>
            </Button>
          </div>

        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="py-24 px-4 bg-black relative z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-light text-gray-500 mb-16 text-center uppercase tracking-widest border-b border-white/10 pb-8 mx-auto max-w-xs">The Team</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brian Li */}
            <TeamMember
              name="Brian Li"
              role="Co-Founder"
              school="UIUC"
              tag="Incoming SWE @ Roblox"
              linkedin="https://www.linkedin.com/in/librianli/"
            />

            {/* Matthew Lee */}
            <TeamMember
              name="Matthew Lee"
              role="Co-Founder"
              school="UIUC '28"
              tag="Ex-Lunar Media"
              linkedin="https://www.linkedin.com/in/matthew-lee06/"
            />

            {/* Daniel Xiang */}
            <TeamMember
              name="Daniel Xiang"
              role="Co-Founder"
              school="UIUC"
              tag="IMC Prosperity Winner"
              linkedin="https://www.linkedin.com/in/daniel-xiang-570513271/"
            />

            {/* Haoran Xu */}
            <TeamMember
              name="Haoran Xu"
              role="Co-Founder"
              school="UIUC"
              tag="AI / Data Science"
              linkedin="https://www.linkedin.com/in/haoranxu808/"
            />
          </div>

          <div className="mt-20 text-center border p-8 rounded-2xl border-white/10 bg-white/[0.02]">
            <h4 className="text-xl md:text-2xl text-gray-300 font-light">
              We’re speaking with accelerators and early-stage investors.
            </h4>
          </div>
        </div>
      </section>

      {/* --- REQUEST DECK FORM --- */}
      <section id="request-deck" className="py-24 px-4 bg-gradient-to-b from-black to-zinc-950 relative z-10">
        <div className="max-w-xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Request Access</h2>
            <p className="text-gray-400">Entrepreneurs, investors, and partners only.</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            // In a real app, handle submission here
            alert("Thanks — we’ll respond within 24–48h.");
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Name"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12"
                required
              />
              <Input
                placeholder="Firm / Program"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12"
                required
              />
            </div>

            <Input
              type="email"
              placeholder="Work Email"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12"
              required
            />

            <Textarea
              placeholder="What stage / check size? (Optional)"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 min-h-[100px] resize-none"
            />

            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-200 h-12 text-lg font-medium"
            >
              Request Deck
            </Button>

            <p className="text-center text-xs text-gray-600 pt-2">
              We’ll respond within 24–48h.
            </p>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/5 text-center relative z-10">
        <div className="flex flex-col items-center gap-6">
          <a href="mailto:Business@usechomp.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Business@usechomp.com
          </a>

          <Link href="/apply" className="text-sm text-orange-500/80 hover:text-orange-400 transition-colors flex items-center gap-1">
            We are hiring <ArrowRight className="w-3 h-3" />
          </Link>

          <div className="text-xs text-gray-700 mt-4">
            © {new Date().getFullYear()} Chomp. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  )
}

function TeamMember({ name, role, school, tag, linkedin }: { name: string, role: string, school: string, tag: string, linkedin?: string }) {
  return (
    <div className="group p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors text-center">
      {/* Optional Placeholder Headshot */}
      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-full mb-6 flex items-center justify-center text-3xl font-serif text-gray-600 group-hover:text-gray-400 transition-colors shadow-xl shadow-black/50">
        {name.charAt(0)}
      </div>

      <h4 className="text-xl font-medium text-white mb-2">
        {linkedin ? (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
            {name}
          </a>
        ) : name}
      </h4>
      <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide font-medium">{role}</p>
      <p className="text-sm text-gray-500 mb-4">{school}</p>

      <Badge variant="secondary" className="bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 font-normal text-xs pointer-events-none px-3 py-1 border border-orange-500/20">
        {tag}
      </Badge>
    </div>
  )
}
