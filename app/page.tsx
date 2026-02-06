"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Mail, Linkedin, Loader2 } from "lucide-react"
import { DemoSection } from "@/components/home/demo-section"


export default function HomePage() {
  const scrollToDeck = () => {
    const element = document.getElementById('request-deck');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF7] text-zinc-900 font-sans selection:bg-orange-200">

      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#FFFBF7]/80 backdrop-blur-md border-b border-orange-100/50">
        <div className="flex items-center gap-2">
          {/* Logo Simulation: Bubbly Orange Text */}
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-orange-600 drop-shadow-sm" style={{ fontFamily: '"Cooper Black", "Chunky", serif' }}>
            Chomp
          </h1>
        </div>

        <Button
          className="rounded-full bg-zinc-900 text-white hover:bg-orange-600 transition-colors"
          size="sm"
          onClick={() => document.getElementById('request-deck')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get in touch
        </Button>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">

        {/* Abstract Network Visualization (Light Mode) */}
        <div className="absolute inset-0 opacity-100 pointer-events-none"> {/* Increased container opacity */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(253, 186, 116, 0.3)" /> {/* Orange-300 */}
                <stop offset="50%" stopColor="rgba(251, 146, 60, 0.6)" /> {/* Orange-400, more opaque */}
                <stop offset="100%" stopColor="rgba(253, 186, 116, 0.3)" />
              </linearGradient>
            </defs>

            {/* Background Grid - Visible Soft Orange */}
            <g stroke="rgba(253, 186, 116, 0.3)" strokeWidth="1"> {/* Thicker, more visible lines */}
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

            {/* Network Graph */}
            <g stroke="url(#line-gradient)" strokeWidth="3" fill="none"> {/* Thicker graph lines */}
              <path id="path1" d="M 50 500 L 250 400 L 450 200 L 750 100" />
              <path id="path2" d="M 50 100 L 250 200 L 450 300 L 750 500" />
              <path id="path3" d="M 400 50 L 400 550" />
            </g>

            {/* Moving Dots - Orange */}
            <g fill="#F97316">
              <circle r="3">
                <animateMotion repeatCount="indefinite" dur="8s" keyPoints="0;1" keyTimes="0;1">
                  <mpath href="#path1" />
                </animateMotion>
              </circle>
              <circle r="3">
                <animateMotion repeatCount="indefinite" dur="10s" keyPoints="1;0" keyTimes="0;1">
                  <mpath href="#path2" />
                </animateMotion>
              </circle>
            </g>

          </svg>

          {/* Light Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFFBF7] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full pt-12 md:pt-20">
          <DemoSection />
        </div>
      </section>

      {/* --- DEMO ANIMATION SECTION --- */}
      {/* Moved to Hero */}

      {/* --- TEAM SECTION --- */}
      <section className="py-24 px-4 bg-white relative z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-light text-zinc-400 mb-16 text-center uppercase tracking-widest border-b border-zinc-200 pb-8 mx-auto max-w-xs">Meet The Founders</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brian Li */}
            <TeamMember
              name="Brian Li"
              role="Co-Founder"
              school="CS @ UIUC"
              // tag="Incoming SWE @ Roblox"
              linkedin="https://www.linkedin.com/in/librianli/"
            />

            {/* Matthew Lee */}
            <TeamMember
              name="Matthew Lee"
              role="Co-Founder"
              school="Econ @ UIUC"
              // tag="Ex-Lunar Media"
              linkedin="https://www.linkedin.com/in/matthew-lee06/"
            />

            {/* Daniel Xiang */}
            <TeamMember
              name="Daniel Xiang"
              role="Co-Founder"
              school="CS + Math @ UIUC"
              // tag="IMC Prosperity Winner"
              linkedin="https://www.linkedin.com/in/daniel-xiang-570513271/"
            />

            {/* Haoran Xu */}
            <TeamMember
              name="Haoran Xu"
              role="Co-Founder"
              school="CS + Stats @UIUC"
              // tag="Prev @ OSG"
              linkedin="https://www.linkedin.com/in/hx888/"
            />
          </div>

          <div className="mt-20 text-center border p-8 rounded-2xl border-zinc-200 bg-zinc-50">
            <h4 className="text-xl md:text-2xl text-zinc-600 font-light">
              Currently speaking with accelerators and early-stage investors.
            </h4>
          </div>
        </div>
      </section>

      {/* --- REQUEST DECK FORM --- */}
      <section id="request-deck" className="py-24 px-4 bg-[#FFFBF7] relative z-10 border-t border-orange-100">
        <div className="max-w-xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 mb-4">Request Pitch Deck</h2>
            <p className="text-zinc-500">Entrepreneurs, investors, and partners only.</p>
          </div>

          <RequestDeckForm />

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-zinc-200 bg-white text-center relative z-10">
        <div className="flex flex-col items-center gap-6">
          <a href="mailto:Business@usechomp.com" className="text-zinc-500 hover:text-orange-600 transition-colors flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Business@usechomp.com
          </a>

          <Link href="/apply" className="text-sm text-orange-600/80 hover:text-orange-500 transition-colors flex items-center gap-1">
            We are hiring <ArrowRight className="w-3 h-3" />
          </Link>

          <div className="text-xs text-zinc-400 mt-4">
            © {new Date().getFullYear()} Chomp. All rights reserved.
          </div>
        </div>
      </footer>

    </div >
  )
}

function RequestDeckForm() {
  return (
    <form
      action="https://formsubmit.co/business@usechomp.com" // Update this with your logic or alias
      method="POST"
      className="space-y-4"
    >

      {/* Honeypot field for spam protection */}
      <input type="text" name="_honey" style={{ display: 'none' }} />

      {/* Redirect to custom Thank You page */}
      <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />

      {/* Disable Captcha if desired, or keep enabled */}
      {/* <input type="hidden" name="_captcha" value="false" /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Input
            name="name"
            placeholder="Name"
            className="bg-white border-zinc-200 text-zinc-900 placeholder:text-zinc-400 h-12 transition-all focus:border-orange-500 focus:ring-orange-500/20"
            required
          />
        </div>
        <div className="space-y-2">
          <Input
            name="firm"
            placeholder="Firm / Program"
            className="bg-white border-zinc-200 text-zinc-900 placeholder:text-zinc-400 h-12 transition-all focus:border-orange-500 focus:ring-orange-500/20"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Input
          name="email"
          type="email"
          placeholder="Work Email"
          className="bg-white border-zinc-200 text-zinc-900 placeholder:text-zinc-400 h-12 transition-all focus:border-orange-500 focus:ring-orange-500/20"
          required
        />
      </div>

      <div className="space-y-2">
        <Textarea
          name="message"
          placeholder="What stage / check size? (Optional)"
          className="bg-white border-zinc-200 text-zinc-900 placeholder:text-zinc-400 min-h-[100px] resize-none transition-all focus:border-orange-500 focus:ring-orange-500/20"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-zinc-900 text-white hover:bg-zinc-800 h-12 text-lg font-medium transition-transform hover:scale-[1.02]"
      >
        Request Pitch Deck
      </Button>

      <p className="text-center text-xs text-zinc-500 pt-2">
        We’ll respond within 24–48h.
      </p>
    </form>
  )
}


<Footer />
    </main >
  )
}

function TeamMember({ name, role, school, tag, linkedin }: { name: string, role: string, school: string, tag?: string, linkedin?: string }) {
  return (
    <div className="group p-8 rounded-xl border border-zinc-200 bg-white hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 text-center hover:-translate-y-1">
      {/* Optional Placeholder Headshot */}
      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-full mb-6 flex items-center justify-center text-3xl font-serif text-zinc-400 group-hover:text-orange-500 transition-colors">
        {name.charAt(0)}
      </div>

      <div className="flex items-center justify-center gap-2 mb-2">
        <h4 className="text-xl font-medium text-zinc-900">
          {name}
        </h4>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-[#0077b5] transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
      </div>

      <p className="text-sm text-zinc-500 mb-2 uppercase tracking-wide font-medium">{role}</p>
      <p className="text-sm text-zinc-400 mb-5">{school}</p>

      <Badge variant="secondary" className="bg-orange-50 text-orange-600/90 font-normal text-xs pointer-events-none px-3 py-1 border border-orange-100 whitespace-nowrap">
        {tag}
      </Badge>
    </div>
  )
}
