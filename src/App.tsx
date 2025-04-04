import { useState, useEffect } from 'react'
import './index.css'

export default function FutureGadgetLab() {
  const [displayedText, setDisplayedText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentString = typewriterText[textIndex]
    if (charIndex < currentString.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentString[charIndex])
        setCharIndex(prev => prev + 1)
      }, 75)
      return () => clearTimeout(timeout)
    } else {
      const pause = setTimeout(() => {
        setDisplayedText('')
        setCharIndex(0)
        setTextIndex(prev => (prev + 1) % typewriterText.length)
      }, 2000)
      return () => clearTimeout(pause)
    }
  }, [charIndex, textIndex])

  const skills = {
    "Time Travel": {
      "Monday": "30s",
      "Weekend": "22s",
      "Equipment": "9ts"
    },
    "Programming": {
      "Frontend": "30s",
      "Backend": "7ds",
      "Administrator": "8ds"
    }
  }

  const projects = [
    { id: 1, title: "Project 1", description: "World line alteration device" },
    { id: 2, title: "Project 2", description: "World line alteration device" },
    { id: 3, title: "Project 3", description: "World line alteration device" },
    { id: 4, title: "Project 4", description: "World line alteration device" }
  ]

  const typewriterText = [
    '> Welcome to my world line...',
    "> I'm a mad scientist...",
    '> The Organization watches...',
    '> El Psy Kongroo...'
  ]

  return (
    <div className="crt-effect min-h-screen bg-[#0a0a12] text-gray-200 font-mono relative overflow-hidden">
      {/* CRT Effect Layers */}
      <div className="crt-overlay fixed inset-0 pointer-events-none z-10 
        bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%),linear-gradient(to_bottom,rgba(0,255,255,0.1)_0%,transparent_5%)] 
        bg-[length:100%_4px]"></div>

      <div className="crt-scanlines fixed inset-0 pointer-events-none z-10 
        bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,255,255,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.1),rgba(0,255,0,0.05),rgba(0,0,255,0.1))] 
        bg-[length:100%_3px,4px_100%]"></div>

      <div className="crt-flicker fixed inset-0 pointer-events-none z-20 bg-black/10 animate-flicker"></div>

      <div className="crt-glow fixed inset-0 pointer-events-none z-10 shadow-[inset_0_0_100px_rgba(255,0,195,0.1)]"></div>

      {/* Screen curvature effect */}
      <div className="fixed inset-0 pointer-events-none z-0 
        bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_60%)]"></div>

      <div className="container mx-auto p-4 max-w-4xl relative z-30">
        {/* Header */}
        <header className="mb-8 border-b border-[#a100f2] pb-4 text-center text-shadow-glow">
          <h1 className="text-4xl font-bold text-[#ff00c3] mb-2">Kurisu&apos;s Laboratory</h1>
          <div className="text-[#a100f2] h-6">
            <span className="animate-pulse">{displayedText}</span>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {/* About Me */}
            <section className="mb-8" id="about">
              <h2 className="text-2xl text-[#ff00c3] mb-4 border-b border-[#a100f2] pb-2 text-shadow-glow">
                Who Am I?
              </h2>
              <p className="bg-black/30 p-4 rounded leading-relaxed">
                Im a time traveling coding scientist ...
              </p>
            </section>

            {/* Skills */}
            <section className="mb-8">
              <h2 className="text-2xl text-[#ff00c3] mb-4 border-b border-[#a100f2] pb-2 text-shadow-glow">
                Kurisu's Skills
              </h2>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillset]) => (
                  <div key={category} className="bg-black/30 p-4 rounded">
                    <h3 className="text-xl text-[#a100f2] mb-2">{category}</h3>
                    <ul className="ml-4 space-y-2">
                      {Object.entries(skillset).map(([skill, level]) => (
                        <li key={skill} className="flex justify-between hover:text-[#ff00c3] transition-colors">
                          <span>{skill}</span>
                          <span className="text-[#ff00c3]">{level}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div>
            {/* Projects */}
            <section className="mb-8">
              <h2 className="text-2xl text-[#ff00c3] mb-4 border-b border-[#a100f2] pb-2 text-shadow-glow">
                Kurisu's Gadgets
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map(project => (
                  <div key={project.id} className="border-2 border-[#5d00a3] p-4 hover:border-[#ff00c3] hover:shadow-[0_0_15px_#ff00c3] transition-all crt-glow-hover">
                    <h3 className="text-xl text-[#a100f2] mb-2">{project.title}</h3>
                    <p className="mb-3">{project.description}</p>
                    <button className="px-3 py-1 bg-[#5d00a3] hover:bg-[#ff00c3] hover:shadow-[0_0_10px_#ff00c3] transition-all text-sm">
                      View Experiment
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Email Form */}
            <section>
              <h2 className="text-2xl text-[#ff00c3] mb-4 border-b border-[#a100f2] pb-2 text-shadow-glow">
                Send D-Mail
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-[#a100f2] mb-1">Subject</label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border-2 border-[#5d00a3] p-2 focus:outline-none focus:border-[#ff00c3] focus:shadow-[0_0_10px_#ff00c3]"
                    placeholder="Operation Urd"
                  />
                </div>
                <div>
                  <label className="block text-[#a100f2] mb-1">Message</label>
                  <textarea
                    className="w-full bg-black/50 border-2 border-[#5d00a3] p-2 h-24 focus:outline-none focus:border-[#ff00c3] focus:shadow-[0_0_10px_#ff00c3]"
                    placeholder="El Psy Kongroo..."
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#5d00a3] hover:bg-[#ff00c3] hover:shadow-[0_0_15px_#ff00c3] transition-all"
                >
                  Send to Past
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}