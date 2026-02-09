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
import { Footer } from "@/components/footer"

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-[#FFFBF7] text-zinc-900 font-sans selection:bg-orange-200">

            {/* --- HEADER --- */}
            <header className="fixed top-0 inset-x-0 h-16 border-b border-orange-100 bg-[#FFFBF7]/80 backdrop-blur-lg z-50 flex items-center justify-between px-6">
                <Link href="/" className="group flex items-center gap-2 text-zinc-500 hover:text-orange-600 transition-colors">
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Back to Home</span>
                </Link>
                <div className="font-serif italic text-xl tracking-tight text-zinc-900">
                    Chomp <span className="text-orange-600 not-italic font-sans text-xs uppercase tracking-widest ml-1 opacity-70">Support</span>
                </div>
                <div className="w-24" /> {/* Spacer for balance */}
            </header>

            <main className="relative z-10 pt-32 pb-24 px-4 max-w-4xl mx-auto space-y-24">

                {/* --- HERO SECTION --- */}
                <section className="text-center space-y-6">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900">
                        Support Center
                    </h1>
                    <p className="text-xl text-zinc-500 font-light max-w-lg mx-auto leading-relaxed">
                        How can we help you today?
                    </p>
                </section>

                {/* --- FAQ SECTION --- */}
                <section className="space-y-8 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-100">
                    <div className="flex items-center gap-3 mb-6">
                        <FileText className="w-5 h-5 text-orange-600" />
                        <h2 className="text-2xl font-light tracking-wide uppercase text-zinc-900">Frequently Asked Questions</h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <AccordionItem value="item-1" className="border-orange-100 bg-white rounded-xl px-6 border shadow-sm">
                            <AccordionTrigger className="hover:no-underline hover:text-orange-600 text-lg py-6 font-medium text-zinc-900">
                                How do I download the Chomp app?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-500 leading-relaxed text-base pb-6">
                                Chomp is currently in a private beta phase. We are rolling out access to users on our waitlist.
                                Please request access on our homepage to be notified when spots open up!
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="border-orange-100 bg-white rounded-xl px-6 border shadow-sm">
                            <AccordionTrigger className="hover:no-underline hover:text-orange-600 text-lg py-6 font-medium text-zinc-900">
                                I found a bug, how do I report it?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-500 leading-relaxed text-base pb-6">
                                Thank you for helping us improve! You can report bugs directly through the app settings if you have access,
                                or use the contact form below to send us a detailed report. Please include your device model and iOS version.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="border-orange-100 bg-white rounded-xl px-6 border shadow-sm">
                            <AccordionTrigger className="hover:no-underline hover:text-orange-600 text-lg py-6 font-medium text-zinc-900">
                                Are you hiring?
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-500 leading-relaxed text-base pb-6">
                                We're not hiring at the moment. We're currently focused on fundraising and building out the core product.
                                Stay tuned for future opportunities!
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                <Separator className="bg-orange-100" />

                {/* --- CONTACT SECTION --- */}
                <section id="contact" className="space-y-10 animate-in slide-in-from-bottom-8 fade-in duration-700 delay-200">
                    <div className="flex items-center gap-3 mb-6">
                        <MessageCircle className="w-5 h-5 text-orange-600" />
                        <h2 className="text-2xl font-light tracking-wide uppercase text-zinc-900">Get in Touch</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Contact Info Side */}
                        <div className="md:col-span-1 space-y-8">
                            <p className="text-zinc-500 leading-relaxed">
                                Can't find the answer you're looking for? Reach out to our team directly.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-orange-100 shadow-sm">
                                    <Bug className="w-5 h-5 text-orange-600 mt-1" />
                                    <div>
                                        <h3 className="font-medium text-zinc-900 mb-1">Report Issues</h3>
                                        <p className="text-sm text-zinc-500">Found a glitch? Let us know.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-orange-100 shadow-sm">
                                    <Mail className="w-5 h-5 text-orange-600 mt-1" />
                                    <div>
                                        <h3 className="font-medium text-zinc-900 mb-1">General Inquiries</h3>
                                        <p className="text-sm text-zinc-500">For everything else.</p>
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

            <Footer />

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
                    <Label htmlFor="name" className="text-zinc-500 font-normal">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="bg-white border-orange-100 text-zinc-900 placeholder:text-zinc-400 h-12 transition-all focus:border-orange-500 ring-offset-[#FFFBF7]"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-500 font-normal">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="bg-white border-orange-100 text-zinc-900 placeholder:text-zinc-400 h-12 transition-all focus:border-orange-500 ring-offset-[#FFFBF7]"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="issue-type" className="text-zinc-500 font-normal">Topic</Label>
                <Select name="topic" required>
                    <SelectTrigger id="issue-type" className="bg-white border-orange-100 text-zinc-900 h-12 focus:border-orange-500 ring-offset-[#FFFBF7]">
                        <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-orange-100 text-zinc-900">
                        <SelectGroup>
                            <SelectLabel className="text-zinc-400">Topics</SelectLabel>
                            <SelectItem value="general" className="cursor-pointer">General Inquiry</SelectItem>
                            <SelectItem value="feedback" className="cursor-pointer">Feedback / Feature Request</SelectItem>
                            <SelectItem value="bug" className="cursor-pointer">Report a Bug</SelectItem>
                            <SelectItem value="account" className="cursor-pointer">Account & Login</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="space-y-2">
                <Label htmlFor="message" className="text-zinc-500 font-normal">Message</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help?"
                    required
                    className="bg-white border-orange-100 text-zinc-900 placeholder:text-zinc-400 min-h-[150px] resize-none transition-all focus:border-orange-500 ring-offset-[#FFFBF7]"
                />
            </div>

            <Button
                type="submit"
                className="w-full bg-zinc-900 text-white hover:bg-orange-600 h-12 text-lg font-medium transition-all shadow-lg shadow-zinc-900/10 hover:shadow-orange-600/20"
            >
                <Send className="w-4 h-4 mr-2" />
                Send Message
            </Button>

        </form>
    )
}
