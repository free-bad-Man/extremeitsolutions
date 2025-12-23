import { Scene } from "@/components/ui/hero-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div className="relative min-h-svh w-screen overflow-hidden bg-gradient-to-br from-[#000] to-[#1A2428] text-white">
      <div className="absolute inset-0 opacity-80">
        <Scene />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center gap-10 px-6 py-20 text-center">
        <Badge
          variant="secondary"
          className="backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20"
        >
          Next Generation Tools
        </Badge>

        <div className="space-y-5">
          <h1 className="text-3xl font-semibold tracking-tight md:text-6xl">
            Extreme IT Solutions
          </h1>
          <p className="mx-auto max-w-2xl text-base text-white/70 md:text-lg">
            Каркас: Vite + React + TypeScript + Tailwind + shadcn-структура.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            onClick={() => window.open("https://github.com", "_blank")}
          >
            GitHub
          </Button>
          <Button
            variant="outline"
            className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            onClick={() => document.documentElement.classList.toggle("dark")}
          >
            Toggle dark class
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
