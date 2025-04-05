import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const timelineData = [
    {
        date: '2020.08.xx',
        title: 'I studied at a University and began my coding journey.',
        description: 'My journey into code began. It was unstable... but the path was clear.',
        divergence: '0.000001%'
    },
    {
        date: '2024.12.12',
        title: 'Finished our Capstone Project.',
        description: 'The Title Mapper... (Temporary name). Built with Next.js, Go Lang and the energy of caffeine.',
        divergence: '0.342345%'
    },
    {
        date: '2025.01.20',
        title: 'I become an Intern at NEECO 2 Area 1.',
        description: 'This timeline is now stabilized. But... others still beckon.',
        divergence: '0.789456%'
    },
    {
        date: '2025.xx.xx',
        title: 'The will of the universe will decide.',
        description: 'The Organization’s influence grew. I continued to sharpen my abilities xxxxx',
        divergence: '1.048596%'
    }
]

export default function TimeTravelLog() {
    const [visibleIndexes, setVisibleIndexes] = useState<number[]>([])

    useEffect(() => {
        timelineData.forEach((_, index) => {
            setTimeout(() => {
                setVisibleIndexes(prev => [...prev, index])
            }, index * 700)
        })
    }, [])


    return (
        <div className="relative max-w-3xl mx-auto px-4 py-10">
            <div className="relative border-l-2 border-[#a100f2] pl-6">
                {timelineData.map((entry, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={visibleIndexes.includes(index) ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="mb-10 relative"
                    >
                        <div className="absolute -left-4 top-1 w-3 h-3 rounded-full bg-[#ff00c3] shadow-[0_0_8px_#ff00c3]" />
                        <p className="text-sm text-[#a100f2] mb-1 font-mono">{entry.date}</p>
                        <h3 className="text-xl text-[#ff00c3] font-semibold mb-1">{entry.title}</h3>
                        <p className="text-gray-300 mb-1 leading-relaxed">{entry.description}</p>
                        <p className="text-green-400 font-digital text-sm">
                            Divergence Ratio: <span className="animate-glitch inline-block">{entry.divergence}</span>
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
