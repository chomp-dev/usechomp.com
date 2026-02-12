"use client"

import { useState } from "react"
import { createClient } from "@supabase/supabase-js"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, CheckCircle2 } from "lucide-react"

// Initialize Supabase client
// Initialize Supabase client
// NOTE: Make sure to set these environment variables in .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null


export function WaitlistForm() {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError("")

        if (!email) {
            setError("Please enter your email.")
            setLoading(false)
            return
        }

        if (!supabase) {
            setError("Configuration error: Missing Supabase keys.")
            setLoading(false)
            return
        }

        try {
            const { error: supabaseError } = await supabase!
                .from("waitlist")
                .insert([{ email }])

            if (supabaseError) {
                // Handle duplicate key error (PGRST116 is usually for single return, but 23505 is unique violation)
                if (supabaseError.code === "23505") {
                    setSubmitted(true) // Treat as success if already on waitlist
                } else {
                    throw supabaseError
                }
            } else {
                setSubmitted(true)
            }
        } catch (err: any) {
            console.error("Error joining waitlist:", err)
            setError("Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center p-6 bg-green-50/50 border border-green-100 rounded-2xl animate-in fade-in zoom-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-green-500 mb-2" />
                <h3 className="text-xl font-medium text-green-800">You're on the list!</h3>
                <p className="text-green-600 text-center text-sm mt-1">
                    We'll notify you when we launch.
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
                <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white border-zinc-200 h-12 text-base focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all rounded-xl"
                    required
                />
                <Button
                    type="submit"
                    disabled={loading}
                    className="h-12 bg-zinc-900 text-white hover:bg-zinc-800 px-6 rounded-xl font-medium whitespace-nowrap transition-transform active:scale-95"
                >
                    {loading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        "Join Waitlist"
                    )}
                </Button>
            </div>
            {error && (
                <p className="text-red-500 text-sm font-medium text-center animate-in slide-in-from-top-1">
                    {error}
                </p>
            )}
            <p className="text-xs text-zinc-400 text-center">
                Join others waiting for early access.
            </p>
        </form>
    )
}
