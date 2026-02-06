import React, { useMemo } from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { Search, Heart, MessageCircle, Share2, Music, User } from 'lucide-react';

const VideoCard = ({ color, emoji, title, caption, likes }: { color: string, emoji: string, title: string, caption: string, likes: string }) => (
    <div className={`w-full h-full shrink-0 relative flex flex-col justify-end p-4 ${color}`}>
        {/* Placeholder Content (Replacing Image) */}
        <div className="absolute inset-0 flex items-center justify-center text-[8rem]">
            {emoji}
        </div>

        {/* Right Sidebar Interaction */}
        <div className="absolute right-2 bottom-20 flex flex-col items-center gap-6 z-20">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50">
                <User className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col items-center gap-1">
                <Heart className="w-8 h-8 text-white fill-white/80" />
                <span className="text-white text-xs font-bold shadow-black/50 drop-shadow-md">{likes}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <MessageCircle className="w-8 h-8 text-white drop-shadow-md" />
                <span className="text-white text-xs font-bold shadow-black/50 drop-shadow-md">248</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <Share2 className="w-8 h-8 text-white drop-shadow-md" />
                <span className="text-white text-xs font-bold shadow-black/50 drop-shadow-md">Share</span>
            </div>
        </div>

        {/* Bottom Info */}
        <div className="relative z-20 w-[85%] text-white drop-shadow-md">
            <h3 className="font-bold text-lg mb-1">@{title}</h3>
            <p className="text-sm font-light leading-snug opacity-90 mb-3">{caption} #foodie #chomp</p>
            <div className="flex items-center gap-2 opacity-80">
                <Music className="w-4 h-4" />
                <div className="text-xs overflow-hidden w-32">
                    <p className="whitespace-nowrap animate-marquee">Origina Audio - {title}</p>
                </div>
            </div>
        </div>

        {/* Gradient Overlay for text readabilty */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
    </div>
);

export const FeedScene = ({ frame }: { frame: number }) => {
    // const frame = useCurrentFrame();

    // Scroll Logic: Move up 1 screen height every ~40 frames with pauses
    // Frame 0-30: Static (Burger)
    // Frame 30-50: Scroll to Sushi
    // Frame 50-80: Static (Sushi)
    // Frame 80-100: Scroll to Tacos
    const translateY = interpolate(
        frame,
        [0, 30, 50, 80, 100],
        [0, 0, -100, -100, -200], // Scroll by percentage (100% = 1 card height)
        {
            extrapolateRight: 'clamp',
            easing: Easing.bezier(0.33, 1, 0.68, 1), // IOS-like ease
        }
    );

    return (
        <div className="w-full h-full bg-black font-sans relative overflow-hidden text-white rounded-[inherit]">
            {/* --- TOP BAR --- */}
            <div className="absolute top-12 left-0 right-0 z-30 flex justify-center gap-6 text-sm font-semibold opacity-90 shadow-black/50 drop-shadow-md">
                <span className="opacity-50">Following</span>
                <span className="border-b-2 border-white pb-1">For You</span>
            </div>

            {/* SCROLLING LIST */}
            {/* Container height = 300% (3 cards) */}
            <div
                className="w-full h-full"
                style={{
                    transform: `translateY(${translateY}%)`
                }}
            >
                <VideoCard
                    color="bg-gradient-to-br from-orange-400 to-red-600"
                    emoji="🍔"
                    title="BurgerKing_US"
                    caption="Best burger in town! 🤤 Double cheese melt..."
                    likes="12.5K"
                />
                <VideoCard
                    color="bg-gradient-to-br from-blue-500 to-teal-400"
                    emoji="🍣"
                    title="SushiMaster"
                    caption="Fresh salmon rolls made daily. Limited time offer! 🍱"
                    likes="8.2K"
                />
                <VideoCard
                    color="bg-gradient-to-br from-green-500 to-emerald-700"
                    emoji="🌮"
                    title="TacoFiesta"
                    caption="Street style tacos for just $2 on Tuesdays! 🌮🔥"
                    likes="24K"
                />
            </div>

            {/* Bottom Nav Simulation */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-black z-30 flex justify-around items-center border-t border-white/10 text-white/50">
                <div className="text-white flex flex-col items-center">
                    <div className="w-6 h-6 bg-white rounded-full opacity-20" />
                    <span className="text-[10px] mt-1">Home</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-6 h-6 bg-white rounded-full opacity-20" />
                    <span className="text-[10px] mt-1">Search</span>
                </div>
                <div className="w-10 h-8 border-2 border-white/20 rounded-md flex items-center justify-center">
                    <span className="text-white text-lg font-bold">+</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-6 h-6 bg-white rounded-full opacity-20" />
                    <span className="text-[10px] mt-1">Inbox</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-6 h-6 bg-white rounded-full opacity-20" />
                    <span className="text-[10px] mt-1">Profile</span>
                </div>
            </div>
        </div>
    );
}
