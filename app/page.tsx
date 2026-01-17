"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Mail, Linkedin } from "lucide-react"

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

        {/* Abstract Network Visualization (Navigation Algorithm Theme) */}
        <div className="absolute inset-0 opacity-60 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(251, 146, 60, 0.1)" />
                <stop offset="50%" stopColor="rgba(251, 146, 60, 0.5)" />
                <stop offset="100%" stopColor="rgba(251, 146, 60, 0.1)" />
              </linearGradient>

              {/* Glow Filter */}
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background Grid - Subtle Reference Frame */}
            <g stroke="rgba(255,255,255,0.03)" strokeWidth="0.5">
              <line x1="0" y1="100" x2="800" y2="100" />
              <line x1="0" y1="200" x2="800" y2="200" />
              <line x1="0" y1="300" x2="800" y2="300" />
              <line x1="0" y1="400" x2="800" y2="400" />
              <line x1="0" y1="500" x2="800" y2="500" />
              <line x1="100" y1="0" x2="100" y2="600" />
              <line x1="200" y1="0" x2="200" y2="600" />
              <line x1="300" y1="0" x2="300" y2="600" />
              <line x1="400" y1="0" x2="400" y2="600" />
              <line x1="500" y1="0" x2="500" y2="600" />
              <line x1="600" y1="0" x2="600" y2="600" />
              <line x1="700" y1="0" x2="700" y2="600" />
            </g>

            {/* Network Graph - Denser Connections with Glow */}
            <g stroke="url(#line-gradient)" strokeWidth="1.5" fill="none" filter="url(#glow)">
              {/* Main Routes */}
              <path id="path1" d="M 50 500 L 250 400 L 450 200 L 750 100" />
              <path id="path2" d="M 50 100 L 250 200 L 450 300 L 750 500" />
              <path id="path3" d="M 400 50 L 400 550" />
              <path id="path4" d="M 50 300 L 750 300" />

              {/* Additional Density Lines */}
              <path id="path5" d="M 150 550 L 150 50" strokeOpacity="0.3" />
              <path id="path6" d="M 650 50 L 650 550" strokeOpacity="0.3" />
              <path id="path7" d="M 250 200 L 450 200" strokeOpacity="0.4" />
              <path id="path8" d="M 250 400 L 450 400" strokeOpacity="0.4" />
              <line x1="250" y1="200" x2="250" y2="400" strokeOpacity="0.4" />
              <line x1="450" y1="200" x2="450" y2="400" strokeOpacity="0.4" />

              {/* Diagonals */}
              <path id="path9" d="M 250 200 L 400 50" strokeOpacity="0.3" />
              <path id="path10" d="M 450 400 L 650 550" strokeOpacity="0.3" />
            </g>

            {/* Nodes - Static Waypoints */}
            <g fill="rgba(251, 146, 60, 0.8)" filter="url(#glow)">
              <circle cx="50" cy="500" r="3" />
              <circle cx="250" cy="400" r="4" />
              <circle cx="450" cy="200" r="4" />
              <circle cx="750" cy="100" r="3" />

              <circle cx="50" cy="100" r="3" />
              <circle cx="250" cy="200" r="4" />
              <circle cx="450" cy="300" r="4" />
              <circle cx="750" cy="500" r="3" />

              <circle cx="400" cy="300" r="4" />
              <circle cx="150" cy="300" r="3" />
              <circle cx="650" cy="300" r="3" />
            </g>

            {/* Moving Dots - Strictly Following Paths */}
            <g fill="#fb923c" filter="url(#glow)">
              <circle r="4">
                <animateMotion repeatCount="indefinite" dur="8s" keyPoints="0;1" keyTimes="0;1">
                  <mpath href="#path1" />
                </animateMotion>
              </circle>

              <circle r="4">
                <animateMotion repeatCount="indefinite" dur="10s" keyPoints="1;0" keyTimes="0;1">
                  <mpath href="#path2" />
                </animateMotion>
              </circle>

              <circle r="3" opacity="0.8">
                <animateMotion repeatCount="indefinite" dur="6s" keyPoints="0;1" keyTimes="0;1">
                  <mpath href="#path3" />
                </animateMotion>
              </circle>

              <circle r="3" opacity="0.8">
                <animateMotion repeatCount="indefinite" dur="12s" keyPoints="0;1" keyTimes="0;1">
                  <mpath href="#path4" />
                </animateMotion>
              </circle>

              <circle r="2" opacity="0.6">
                <animateMotion repeatCount="indefinite" dur="15s" keyPoints="0;1" keyTimes="0;1">
                  <mpath href="#path5" />
                </animateMotion>
              </circle>
            </g>

          </svg>

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 space-y-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">

          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white/95 drop-shadow-2xl">
            Chomp
          </h1>

          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl text-gray-400 font-light tracking-[0.2em] uppercase">
              Stealth startup
            </h2>

            {/* Expanded max-width and adjusted font size for single line */}
            <p className="text-2xl md:text-4xl lg:text-5xl font-light leading-snug w-full mx-auto pt-2 text-gray-100 italic drop-shadow-lg whitespace-nowrap overflow-visible">
              “For the Social Media Hustler Revolution.”
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
              tag="Prev @ OSG"
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
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 transition-all focus:bg-white/10"
                required
              />
              <Input
                placeholder="Firm / Program"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 transition-all focus:bg-white/10"
                required
              />
            </div>

            <Input
              type="email"
              placeholder="Work Email"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12 transition-all focus:bg-white/10"
              required
            />

            <Textarea
              placeholder="What stage / check size? (Optional)"
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 min-h-[100px] resize-none transition-all focus:bg-white/10"
            />

            <Button
              type="submit"
              className="w-full bg-white text-black hover:bg-gray-200 h-12 text-lg font-medium transition-transform hover:scale-[1.02]"
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
    <div className="group p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 text-center hover:-translate-y-1">
      {/* Optional Placeholder Headshot */}
      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-full mb-6 flex items-center justify-center text-3xl font-serif text-gray-600 group-hover:text-gray-400 transition-colors shadow-2xl shadow-black/50">
        {name.charAt(0)}
      </div>

      <div className="flex items-center justify-center gap-2 mb-2">
        <h4 className="text-xl font-medium text-white">
          {name}
        </h4>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-[#0077b5] transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
      </div>

      <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide font-medium">{role}</p>
      <p className="text-sm text-gray-500 mb-5">{school}</p>

      <Badge variant="secondary" className="bg-orange-500/5 text-orange-400/90 font-normal text-xs pointer-events-none px-3 py-1 border border-orange-500/10 whitespace-nowrap">
        {tag}
      </Badge>
    </div>
  )
}
