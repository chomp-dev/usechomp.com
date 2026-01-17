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
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-20">

        {/* Background Elements (Subtle) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-orange-900/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-blue-900/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">

          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white/90">
            Chomp
          </h1>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl text-gray-400 font-light tracking-wide uppercase">
              Stealth startup <span className="text-gray-600 px-2">•</span> College founders
            </h2>

            <p className="text-2xl md:text-4xl font-light leading-tight max-w-2xl mx-auto pt-4 text-gray-200">
              “Building in private. For the new social media and hustler revolution.”
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              onClick={scrollToDeck}
              className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full font-medium transition-transform hover:scale-105"
            >
              Request deck
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-gray-700 text-gray-300 hover:text-white hover:border-white hover:bg-transparent text-lg px-8 py-6 rounded-full transition-all"
            >
              <a href="mailto:Business@usechomp.com">
                Contact us
              </a>
            </Button>
          </div>

        </div>
      </section>

      {/* --- PROOF STRIP --- */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm md:text-base text-gray-400 font-mono tracking-wider uppercase">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
              UIUC ’28
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              Shipping weekly
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              Hackathon Winners
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
              Private Beta
            </span>
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-light text-gray-500 mb-12 text-center uppercase tracking-widest">The Team</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brian Li */}
            <TeamMember
              name="Brian Li"
              role="Co-Founder"
              school="UIUC"
              tag="Full-Stack Dev"
              linkedin="https://www.linkedin.com/in/librianli/"
            />

            {/* Matthew Lee - Using scraped real info */}
            <TeamMember
              name="Matthew Lee"
              role="Founding Engineer"
              school="UIUC '28"
              tag="Ex-Lunar Media"
              linkedin="https://www.linkedin.com/in/matthew-lee06/"
            />

            {/* Daniel Xiang */}
            <TeamMember
              name="Daniel Xiang"
              role="Co-Founder"
              school="UIUC"
              tag="Product"
              linkedin="https://www.linkedin.com/in/daniel-xiang-570513271/"
            />

            {/* Haoran Xu */}
            <TeamMember
              name="Haoran Xu"
              role="Co-Founder"
              school="UIUC"
              tag="Engineering"
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
      <section id="request-deck" className="py-24 px-4 bg-gradient-to-b from-black to-zinc-950">
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
      <footer className="py-12 border-t border-white/5 text-center">
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
    <div className="group p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors text-center">
      {/* Optional Placeholder Headshot */}
      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-full mb-4 flex items-center justify-center text-2xl font-serif text-gray-600 group-hover:text-gray-400 transition-colors">
        {name.charAt(0)}
      </div>

      <h4 className="text-lg font-medium text-white mb-1">
        {linkedin ? (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-gray-600 underline-offset-4">
            {name}
          </a>
        ) : name}
      </h4>
      <p className="text-sm text-gray-400 mb-1">{role}</p>
      <p className="text-xs text-gray-500 mb-3">{school}</p>

      <Badge variant="secondary" className="bg-white/10 text-gray-300 hover:bg-white/20 font-normal text-xs pointer-events-none">
        {tag}
      </Badge>
    </div>
  )
}
