"use client"

import Link from "next/link"
import { ArrowRight, ChevronLeft, Mail, MessageCircle, Bug, FileText, Send } from "lucide-react"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30">

            {/* --- BACKGROUND EFFECTS --- */}
            <div className="fixed inset-0 pointer-events-none opacity-30 z-0">
                <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-orange-900/10 to-transparent" />
            </div>

            {/* --- HEADER --- */}
            <header className="fixed top-0 inset-x-0 h-16 border-b border-white/5 bg-black/50 backdrop-blur-lg z-50 flex items-center justify-between px-6">
                <Link href="/" className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Back to Home</span>
                </Link>
                <div className="font-serif italic text-xl tracking-tight text-white/90">
                    Chomp <span className="text-orange-500 not-italic font-sans text-xs uppercase tracking-widest ml-1 opacity-70">Support</span>
                </div>
                <div className="w-24" /> {/* Spacer for balance */}
            </header>

            <main className="relative z-10 pt-32 pb-24 px-4 max-w-4xl mx-auto space-y-24">

                {/* --- HERO SECTION --- */}
                <section className="text-center space-y-6">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl">
                        Support Center
                    </h1>
                    <p className="text-xl text-gray-400 font-light max-w-lg mx-auto leading-relaxed">
                        How can we help you today?
                    </p>
                </section>

                {/* --- FAQ SECTION --- */}
                <section className="space-y-8 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-100">
                    <div className="flex items-center gap-3 mb-6">
                        <FileText className="w-5 h-5 text-orange-500" />
                        <h2 className="text-2xl font-light tracking-wide uppercase text-white/90">Frequently Asked Questions</h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <AccordionItem value="item-1" className="border-white/10 bg-white/5 rounded-lg px-4 border-b-0">
                            <AccordionTrigger className="hover:no-underline hover:text-orange-400 text-lg py-6">
                                How do I download the Chomp app?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-400 leading-relaxed text-base pb-6">
                                Chomp is currently in a private beta phase. We are rolling out access to users on our waitlist.
                                Please request access on our homepage to be notified when spots open up!
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="border-white/10 bg-white/5 rounded-lg px-4 border-b-0">
                            <AccordionTrigger className="hover:no-underline hover:text-orange-400 text-lg py-6">
                                I found a bug, how do I report it?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-400 leading-relaxed text-base pb-6">
                                Thank you for helping us improve! You can report bugs directly through the app settings if you have access,
                                or use the contact form below to send us a detailed report. Please include your device model and iOS version.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="border-white/10 bg-white/5 rounded-lg px-4 border-b-0">
                            <AccordionTrigger className="hover:no-underline hover:text-orange-400 text-lg py-6">
                                Are you hiring?
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-400 leading-relaxed text-base pb-6">
                                Yes! We are looking for talented engineers and designers who are passionate about food and social discovery.
                                Check out our <Link href="/apply" className="text-orange-400 underline decoration-orange-400/30 hover:decoration-orange-400 transition-all">careers page</Link> or email us directly at business@usechomp.com.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                <Separator className="bg-white/10" />

                {/* --- CONTACT SECTION --- */}
                <section id="contact" className="space-y-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200">
                    <div className="flex items-center gap-3 mb-6">
                        <MessageCircle className="w-5 h-5 text-orange-500" />
                        <h2 className="text-2xl font-light tracking-wide uppercase text-white/90">Get in Touch</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Contact Info Side */}
                        <div className="md:col-span-1 space-y-8">
                            <p className="text-gray-400 leading-relaxed">
                                Can't find the answer you're looking for? Reach out to our team directly.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                                    <Bug className="w-5 h-5 text-orange-500 mt-1" />
                                    <div>
                                        <h3 className="font-medium text-white mb-1">Report Issues</h3>
                                        <p className="text-sm text-gray-400">Found a glitch? Let us know.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                                    <Mail className="w-5 h-5 text-orange-500 mt-1" />
                                    <div>
                                        <h3 className="font-medium text-white mb-1">General Inquiries</h3>
                                        <p className="text-sm text-gray-400">For everything else.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="md:col-span-2">
                            <SupportForm />
                        </div>
                    </div>
                </section>

            </main>

            {/* --- FOOTER --- */}
            <footer className="py-12 border-t border-white/5 text-center relative z-10 bg-zinc-950/50">
                <div className="flex flex-col items-center gap-6">
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-white/20 hover:text-white/40 transition-colors">
                        Chomp
                    </Link>
                    <div className="text-xs text-gray-700">
                        © {new Date().getFullYear()} Chomp. All rights reserved.
                    </div>
                </div>
            </footer>

        </div>
    )
}

function SupportForm() {
    return (
        <form
            action="https://formsubmit.co/support@usechomp.com"
            method="POST"
            className="space-y-6"
        >
            {/* Honeypot field for spam protection */}
            <input type="text" name="_honey" style={{ display: 'none' }} />
            {/* Disable captcha for cleaner UX (optional) */}
            <input type="hidden" name="_captcha" value="false" />
            {/* Redirect after submission (optional, update with real path if needed) */}
            <input type="hidden" name="_next" value="http://usechomp.com/support?success=true" />

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-400 font-normal">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 h-12 transition-all focus:bg-white/10 focus:border-orange-500/50"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-400 font-normal">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 h-12 transition-all focus:bg-white/10 focus:border-orange-500/50"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="issue-type" className="text-gray-400 font-normal">Topic</Label>
                <Select name="topic" required>
                    <SelectTrigger id="issue-type" className="bg-white/5 border-white/10 text-white h-12 focus:bg-white/10 focus:border-orange-500/50">
                        <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-white/10 text-white">
                        <SelectGroup>
                            <SelectLabel className="text-gray-500">Topics</SelectLabel>
                            <SelectItem value="general" className="focus:bg-white/10 focus:text-white cursor-pointer">General Inquiry</SelectItem>
                            <SelectItem value="feedback" className="focus:bg-white/10 focus:text-white cursor-pointer">Feedback / Feature Request</SelectItem>
                            <SelectItem value="bug" className="focus:bg-white/10 focus:text-white cursor-pointer">Report a Bug</SelectItem>
                            <SelectItem value="account" className="focus:bg-white/10 focus:text-white cursor-pointer">Account & Login</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-400 font-normal">Message</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help?"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 min-h-[150px] resize-none transition-all focus:bg-white/10 focus:border-orange-500/50"
                />
            </div>

            <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-orange-500 hover:text-white h-12 text-lg font-medium transition-all shadow-lg hover:shadow-orange-500/20"
            >
                <Send className="w-4 h-4 mr-2" />
                Send Message
            </Button>

        </form>
    )
}
