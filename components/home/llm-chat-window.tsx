"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ShoppingCart, MapPin, Star, Clock, ChevronRight, Send, Sparkles } from "lucide-react"

interface ProductResult {
    name: string
    price: string
    restaurant: string
    distance: string
    rating: number
    deliveryTime: string
    image: string
}

const bobaResults: ProductResult[] = [
    {
        name: "Classic Brown Sugar Boba",
        price: "$5.49",
        restaurant: "Kung Fu Tea",
        distance: "0.3 mi",
        rating: 4.8,
        deliveryTime: "15-20 min",
        image: "🧋"
    },
    {
        name: "Taro Milk Tea",
        price: "$5.99",
        restaurant: "Gong Cha",
        distance: "0.5 mi",
        rating: 4.6,
        deliveryTime: "20-25 min",
        image: "🥤"
    }
]

export function LLMChatWindow() {
    const [showResults, setShowResults] = useState(false)
    const [typedQuery, setTypedQuery] = useState("")
    const fullQuery = "find me the nearest boba based on what i like"

    // Typing animation
    useEffect(() => {
        const timer = setTimeout(() => {
            if (typedQuery.length < fullQuery.length) {
                setTypedQuery(fullQuery.slice(0, typedQuery.length + 1))
            } else {
                setTimeout(() => setShowResults(true), 500)
            }
        }, 80)

        return () => clearTimeout(timer)
    }, [typedQuery])

    // Reset animation loop
    useEffect(() => {
        const resetTimer = setInterval(() => {
            setTypedQuery("")
            setShowResults(false)
        }, 12000)

        return () => clearInterval(resetTimer)
    }, [])

    return (
        <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 z-20 lg:left-auto lg:right-0 lg:translate-x-[40%]">
            <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {/* Floating Chat Window */}
                <div
                    className="w-[200px] md:w-[380px] bg-[#212121] rounded-2xl shadow-2xl shadow-black/40 overflow-hidden border border-zinc-700/50"
                    style={{
                        transform: 'perspective(1000px) rotateY(-8deg) rotateX(2deg)',
                    }}
                >
                    {/* LLM Header */}
                    <div className="flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 md:py-3 bg-[#2f2f2f] border-b border-zinc-700/50">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
                                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white" />
                            </div>
                        </div>
                        <div className="ml-auto flex gap-1 md:gap-1.5">
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-zinc-600" />
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-zinc-600" />
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-zinc-600" />
                        </div>
                    </div>

                    {/* Chat Content */}
                    <div className="p-2 md:p-4 space-y-2 md:space-y-4 min-h-[200px] md:min-h-[380px] max-h-[260px] md:max-h-[420px] overflow-hidden">
                        {/* User Message */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-end"
                        >
                            <div className="bg-[#2f2f2f] rounded-xl md:rounded-2xl rounded-br-sm px-2 md:px-4 py-1.5 md:py-2.5 max-w-[85%]">
                                <p className="text-white text-[10px] md:text-sm">
                                    {typedQuery}
                                    <span className="animate-pulse">|</span>
                                </p>
                            </div>
                        </motion.div>

                        {/* AI Response with Products */}
                        {showResults && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-1.5 md:space-y-3"
                            >
                                {/* AI Text Response */}
                                <div className="flex gap-1.5 md:gap-2">
                                    <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Sparkles className="w-2 h-2 md:w-3 md:h-3 text-white" />
                                    </div>
                                    <div className="space-y-1.5 md:space-y-3 flex-1 min-w-0">
                                        <p className="text-zinc-300 text-[10px] md:text-sm leading-relaxed">
                                            Found 2 great boba options near you!
                                        </p>

                                        {/* Product Cards */}
                                        <div className="space-y-1 md:space-y-2">
                                            {bobaResults.map((product, i) => (
                                                <ProductCard key={i} product={product} index={i} />
                                            ))}
                                        </div>

                                        {/* Quick Order CTA */}
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium py-1.5 md:py-2.5 px-2 md:px-4 rounded-lg md:rounded-xl flex items-center justify-center gap-1 md:gap-2 shadow-lg shadow-amber-500/20 transition-all"
                                        >
                                            <ShoppingCart className="w-3 h-3 md:w-4 md:h-4" />
                                            <span className="text-[10px] md:text-sm">Order with Chomp</span>
                                            <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Input Bar */}
                    <div className="px-2 md:px-4 py-2 md:py-3 bg-[#2f2f2f] border-t border-zinc-700/50">
                        <div className="flex items-center gap-1 md:gap-2 bg-[#404040] rounded-lg md:rounded-xl px-2 md:px-4 py-1.5 md:py-2.5">
                            <input
                                type="text"
                                placeholder="Search for food..."
                                className="flex-1 bg-transparent text-zinc-300 text-[10px] md:text-sm placeholder:text-zinc-500 outline-none min-w-0"
                                readOnly
                            />
                            <Send className="w-3 h-3 md:w-4 md:h-4 text-zinc-500 flex-shrink-0" />
                        </div>
                    </div>
                </div>

                {/* Connector Line to Phone */}
                <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2">
                    <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="opacity-40">
                        <path
                            d="M60 20 Q30 20, 0 20"
                            stroke="url(#connector-gradient)"
                            strokeWidth="2"
                            strokeDasharray="6 4"
                        />
                        <defs>
                            <linearGradient id="connector-gradient" x1="0" y1="0" x2="60" y2="0">
                                <stop offset="0%" stopColor="#f59e0b" />
                                <stop offset="100%" stopColor="#10b981" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>


            </motion.div>
        </div>
    )
}

function ProductCard({ product, index }: { product: ProductResult; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.15 }}
            className="bg-[#383838] rounded-lg md:rounded-xl p-1.5 md:p-3 hover:bg-[#404040] transition-colors cursor-pointer group"
        >
            <div className="flex gap-1.5 md:gap-3">
                {/* Product Image */}
                <div className="w-8 h-8 md:w-12 md:h-12 bg-[#2f2f2f] rounded-md md:rounded-lg flex items-center justify-center text-base md:text-2xl flex-shrink-0">
                    {product.image}
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                        <h4 className="text-white text-[10px] md:text-sm font-medium truncate">{product.name}</h4>
                        <span className="text-amber-400 font-bold text-[10px] md:text-sm flex-shrink-0">{product.price}</span>
                    </div>
                    <p className="text-zinc-400 text-[8px] md:text-xs mt-0.5">{product.restaurant}</p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-1.5 md:gap-3 mt-1 md:mt-1.5 text-[8px] md:text-xs text-zinc-500">
                        <span className="flex items-center gap-0.5 md:gap-1">
                            <MapPin className="w-2 h-2 md:w-3 md:h-3" />
                            {product.distance}
                        </span>
                        <span className="flex items-center gap-0.5 md:gap-1">
                            <Star className="w-2 h-2 md:w-3 md:h-3 text-amber-400 fill-amber-400" />
                            {product.rating}
                        </span>
                        <span className="hidden md:flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {product.deliveryTime}
                        </span>
                    </div>
                </div>
            </div>

            {/* Quick Add Button - hidden on mobile */}
            <div className="hidden md:block mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-full bg-amber-500/20 text-amber-400 text-xs font-medium py-1.5 rounded-lg hover:bg-amber-500/30 transition-colors">
                    + Add to Cart
                </button>
            </div>
        </motion.div>
    )
}
