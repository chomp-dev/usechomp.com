"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#FFFBF7] text-zinc-900 font-sans selection:bg-orange-200">

            {/* --- HEADER --- */}
            <header className="fixed top-0 inset-x-0 h-16 border-b border-orange-100 bg-[#FFFBF7]/80 backdrop-blur-lg z-50 flex items-center justify-between px-6">
                <Link href="/" className="group flex items-center gap-2 text-zinc-500 hover:text-orange-600 transition-colors">
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Back to Home</span>
                </Link>
                <div className="font-serif italic text-xl tracking-tight text-zinc-900">
                    Chomp <span className="text-orange-600 not-italic font-sans text-xs uppercase tracking-widest ml-1 opacity-70">Legal</span>
                </div>
                <div className="w-24" /> {/* Spacer for balance */}
            </header>

            <main className="relative z-10 pt-32 pb-24 px-4 max-w-3xl mx-auto space-y-12">

                {/* --- HERO SECTION --- */}
                <section className="space-y-6 border-b border-orange-100 pb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-zinc-900">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-zinc-500 font-light leading-relaxed">
                        Last Updated: February 6, 2026
                    </p>
                </section>

                {/* --- CONTENT --- */}
                <article className="max-w-none text-zinc-600">

                    <p className="mb-6 leading-relaxed">
                        Welcome to Chomp ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our app and website.
                        This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you use our mobile application (the "App") and website (usechomp.com).
                    </p>

                    <h3 className="text-xl font-bold text-zinc-900 mt-8 mb-4">1. Information We Collect</h3>
                    <p className="mb-4 leading-relaxed">
                        We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device ("personal information").
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Account Information:</strong> Name, email address, username, and password when you register.</li>
                        <li><strong>User Content:</strong> Photos, videos, comments, and other content you post to the App.</li>
                        <li><strong>Usage Data:</strong> Information on how you interact with the App, including access times, pages viewed, and your IP address.</li>
                        <li><strong>Device Information:</strong> Device model, operating system, and unique device identifiers.</li>
                        <li><strong>Location Data:</strong> Geolocation data if you grant the App permission to access your location for features like finding nearby restaurants.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-zinc-900 mt-8 mb-4">2. How We Use Your Information</h3>
                    <p className="mb-4 leading-relaxed">
                        We use the information we collect for various purposes, including to:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Provide, operate, and maintain our App and services.</li>
                        <li>Improve, personalize, and expand our App.</li>
                        <li>Understand and analyze how you use our App.</li>
                        <li>Develop new products, services, features, and functionality.</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the App, and for marketing and promotional purposes.</li>
                        <li>Find and prevent fraud.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-zinc-900 mt-8 mb-4">3. Disclosure of Your Information</h3>
                    <p className="mb-4 leading-relaxed">
                        We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                        <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                        <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-zinc-900 mt-8 mb-4">4. Data Security</h3>
                    <p className="mb-6 leading-relaxed">
                        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                    </p>

                    <h3 className="text-xl font-bold text-zinc-900 mt-8 mb-4">5. Children's Privacy</h3>
                    <p className="mb-6 leading-relaxed">
                        Chomp is a general audience application intended for users of all ages. However, we do not knowingly collect personal information from children under the age of 13. If you believe we might have any information from or about a child under 13, please contact us so we can remove it.
                    </p>

                    <h3 className="text-xl font-bold text-zinc-900 mt-8 mb-4">6. Changes to This Privacy Policy</h3>
                    <p className="mb-6 leading-relaxed">
                        We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>

                    <h3 className="text-xl font-bold text-zinc-900 mt-8 mb-4">7. Contact Us</h3>
                    <div className="bg-white p-6 rounded-xl border border-orange-100">
                        <p className="mb-2">
                            If you have questions or comments about this Privacy Policy, please contact us at:
                        </p>
                        <p className="font-medium text-zinc-900">
                            <strong>Email:</strong> <a href="mailto:support@usechomp.com" className="text-orange-600 hover:underline">support@usechomp.com</a>
                        </p>
                        <p className="font-medium text-zinc-900">
                            <strong>Website:</strong> <Link href="/support" className="text-orange-600 hover:underline">usechomp.com/support</Link>
                        </p>
                    </div>

                </article>

            </main>

            <Footer />

        </div>
    )
}
