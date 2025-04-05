"use client"

import { useState, useEffect } from "react"
import { typewriterText, skills, projects, categoryIcons, socials } from "./utils/constants"
import { useTypewriter } from "./utils/use-typewriter"
import ProfessionalMode from "./components/professional-mode"
import SteinsGateMode from "./components/steins-gate-mode"
import TerminalLog from "./components/TerminalLog"
import Header from "./components/Header"


export default function Portfolio() {
  const displayedText = useTypewriter(typewriterText)
  const [easterEggActive, setEasterEggActive] = useState(false)
  const [bootComplete, setBootComplete] = useState(true)
  const [_, setKonami] = useState("")
  const secretCode = "elpsy"

  // Easter egg trigger via keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKonami((prev) => {
        const newKonami = prev + e.key.toLowerCase()
        const slicedKonami = newKonami.slice(-secretCode.length)

        if (slicedKonami === secretCode) {
          setEasterEggActive(true)
          setBootComplete(false)
          setTimeout(() => setBootComplete(true), 3000)
          return ""
        }

        return slicedKonami
      })
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div
      className={`min-h-screen ${easterEggActive ? "bg-[#0a0a12] text-gray-200 font-mono relative overflow-hidden" : "bg-white text-gray-800"}`}
    >
      {/* CRT Effects */}
      {easterEggActive && <CRTEffects />}

      <div className={`container mx-auto p-4 max-w-4xl relative z-30 ${easterEggActive ? "" : "py-8"}`}>
        {easterEggActive && !bootComplete ? (
          <TerminalLog onComplete={() => setBootComplete(true)} />
        ) : (
          <>
            <Header easterEggActive={easterEggActive} displayedText={displayedText} socials={socials} />

            {/* Render different content based on active theme */}
            {easterEggActive ? (
              <SteinsGateMode
                displayedText={displayedText}
                skills={skills}
                projects={projects}
                categoryIcons={categoryIcons}
                onReturnToNormal={() => setEasterEggActive(false)}
              />
            ) : (
              <ProfessionalMode
                skills={skills}
                projects={projects}
                categoryIcons={categoryIcons}
              />
            )}

            {/* Easter Egg Hint */}
            {!easterEggActive && (
              <div className="mb-8 text-center text-sm text-gray-500">
                <p>
                  Hint: Type <span className="font-mono bg-gray-100 px-1 rounded">elpsy</span> to discover something
                  interesting...
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

// CRT Effects Component
const CRTEffects = () => (
  <>
    <div
      className="crt-overlay fixed inset-0 pointer-events-none z-10 
      bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%),linear-gradient(to_bottom,rgba(0,255,255,0.1)_0%,transparent_5%)] 
      bg-[length:100%_4px]"
    ></div>

    <div
      className="crt-scanlines fixed inset-0 pointer-events-none z-10 
      bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,255,255,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.1),rgba(0,255,0,0.05),rgba(0,0,255,0.1))] 
      bg-[length:100%_3px,4px_100%]"
    ></div>

    <div className="crt-flicker fixed inset-0 pointer-events-none z-20 bg-black/10 animate-flicker"></div>
    <div className="crt-glow fixed inset-0 pointer-events-none z-10 shadow-[inset_0_0_100px_rgba(255,0,195,0.1)]"></div>
    <div
      className="fixed inset-0 pointer-events-none z-0 
      bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_60%)]"
    ></div>
  </>
)