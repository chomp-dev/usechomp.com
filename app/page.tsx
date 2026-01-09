import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Launching Soon Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Static wireframe globe and navigation paths */}
        <div className="absolute inset-0 opacity-60">
          {/* Static wireframe globe */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            {/* Latitude lines */}
            <ellipse cx="200" cy="200" rx="150" ry="150" fill="none" stroke="rgba(251, 146, 60, 0.7)" strokeWidth="2" />
            <ellipse
              cx="200"
              cy="200"
              rx="150"
              ry="100"
              fill="none"
              stroke="rgba(251, 146, 60, 0.5)"
              strokeWidth="1.5"
            />
            <ellipse
              cx="200"
              cy="200"
              rx="150"
              ry="50"
              fill="none"
              stroke="rgba(251, 146, 60, 0.5)"
              strokeWidth="1.5"
            />

            {/* Longitude lines - vertical curves */}
            <ellipse
              cx="200"
              cy="200"
              rx="150"
              ry="150"
              fill="none"
              stroke="rgba(251, 146, 60, 0.6)"
              strokeWidth="1.5"
            />
            <ellipse
              cx="200"
              cy="200"
              rx="100"
              ry="150"
              fill="none"
              stroke="rgba(251, 146, 60, 0.5)"
              strokeWidth="1.5"
            />
            <ellipse
              cx="200"
              cy="200"
              rx="50"
              ry="150"
              fill="none"
              stroke="rgba(251, 146, 60, 0.5)"
              strokeWidth="1.5"
            />

            {/* Equator */}
            <line x1="50" y1="200" x2="350" y2="200" stroke="rgba(251, 146, 60, 0.8)" strokeWidth="2" />

            {/* Navigation path markers - animated dots traveling around globe */}
            <circle cx="200" cy="200" r="4" fill="rgb(251, 146, 60)" className="animate-nav-path-1" />
            <circle cx="200" cy="200" r="4" fill="rgb(251, 146, 60)" className="animate-nav-path-2" />
            <circle cx="200" cy="200" r="4" fill="rgb(251, 146, 60)" className="animate-nav-path-3" />
            <circle cx="200" cy="200" r="4" fill="rgb(251, 146, 60)" className="animate-nav-path-4" />

            {/* Navigation route lines */}
            <path
              d="M 80 200 Q 140 120, 200 80 T 320 200"
              fill="none"
              stroke="rgba(251, 146, 60, 0.6)"
              strokeWidth="2"
              strokeDasharray="8,4"
              className="animate-dash-flow"
            />
            <path
              d="M 200 80 Q 260 140, 280 200 T 200 320"
              fill="none"
              stroke="rgba(251, 146, 60, 0.6)"
              strokeWidth="2"
              strokeDasharray="8,4"
              className="animate-dash-flow-reverse"
            />
          </svg>

          {/* Floating location pins */}
          <div className="absolute inset-0 animate-pins-float">
            <div className="absolute top-[30%] left-[25%] w-3 h-3 bg-orange-500 rounded-full opacity-80 shadow-lg shadow-orange-500/50"></div>
            <div className="absolute top-[45%] right-[30%] w-3 h-3 bg-orange-400 rounded-full opacity-80 shadow-lg shadow-orange-400/50"></div>
            <div className="absolute bottom-[35%] left-[50%] w-3 h-3 bg-orange-500 rounded-full opacity-80 shadow-lg shadow-orange-500/50"></div>
            <div className="absolute top-[55%] left-[35%] w-3 h-3 bg-orange-400 rounded-full opacity-80 shadow-lg shadow-orange-400/50"></div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-serif text-white relative z-10 tracking-wide">Launching Soon</h1>
      </div>

      {/* Contact Us Section */}
      <div className="bg-black py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-serif text-center mb-2 text-gray-200">Contact Us</h2>
          <div className="w-16 h-[1px] bg-gray-600 mx-auto mb-12"></div>

          <p className="text-center text-gray-300 text-lg mb-8">Drop us a line!</p>

          <form className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Name"
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-500 h-14 text-base focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email*"
                required
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-500 h-14 text-base focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div>
              <Textarea
                placeholder="Message"
                rows={6}
                className="bg-transparent border-gray-600 text-white placeholder:text-gray-500 text-base resize-none focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="newsletter"
                className="border-gray-600 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
              />
              <label htmlFor="newsletter" className="text-sm text-gray-400 cursor-pointer">
                Sign up for our email list for updates, promotions, and more.
              </label>
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                className="bg-white text-black hover:bg-gray-200 font-semibold px-12 py-6 text-base tracking-wider"
              >
                SEND
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
