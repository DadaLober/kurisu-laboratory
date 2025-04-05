import { motion } from "framer-motion"
import TimeTravelLog from "./TimeTravelLog";

type SteinsGateModeProps = {
    displayedText: string
    skills: Record<string, Record<string, { icon: React.ComponentType<{ className?: string; size?: number }> }>>
    projects: Array<{ id: number; title: string; description: string; tags?: string[] }>
    categoryIcons: Record<string, React.ComponentType<{ className?: string; size?: number }>>
    onReturnToNormal: () => void
}

export default function SteinsGateMode({
    skills,
    projects,
    categoryIcons,
    onReturnToNormal
}: SteinsGateModeProps) {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="flex flex-col space-y-8">
                <section className="mb-8">
                    <h2 className="text-2xl text-[#ff00c3] mb-4 border-b border-[#a100f2] pb-2 text-shadow-glow">
                        Who is Kurisu?
                    </h2>
                    <div className="bg-black/30 p-4 rounded leading-relaxed">
                        <p>
                            I'm a time traveling coding scientist.
                        </p>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl text-[#ff00c3] mb-4 border-b border-[#a100f2] pb-2 text-shadow-glow">
                        World Line Tracker
                    </h2>
                    <TimeTravelLog />
                </section>
            </div>

            {/* Right Column */}
            <div>
                <section className="mb-8">
                    <h2 className="text-2xl text-[#ff00c3] mb-4 border-b border-[#a100f2] pb-2 text-shadow-glow">
                        Kurisu's Skills
                    </h2>
                    <motion.div
                        className="space-y-6"
                        animate={{
                            y: ["0%", "-1%", "0%"],
                            opacity: [1, 0.8, 1]
                        }}
                        transition={{
                            y: { duration: 3, ease: "easeInOut", repeat: Infinity },
                            opacity: { duration: 5, ease: "easeInOut", repeat: Infinity },
                        }}
                    >
                        {Object.entries(skills).map(([category, skillset]) => {
                            const CategoryIcon = categoryIcons[category]
                            return (
                                <div key={category} className="bg-black/30 p-4 rounded">
                                    <div className="flex items-center gap-2 mb-3">
                                        {CategoryIcon && <CategoryIcon className="text-[#a100f2]" size={20} />}
                                        <h3 className="text-xl text-[#a100f2]">{category}</h3>
                                    </div>
                                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                                        {Object.entries(skillset).map(([skill, { icon: Icon }]) => (
                                            <div
                                                key={skill}
                                                className="flex flex-col items-center justify-center gap-2 p-2 hover:bg-[#5d00a3]/30 rounded-lg transition-colors"
                                            >
                                                <Icon className="text-[#ff00c3]" size={24} />
                                                <span className="text-sm text-center text-[#a100f2] hover:text-[#ff00c3] transition-colors">
                                                    {skill}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </motion.div>
                </section>

                <section className="mb-8" id="projects">
                    <h2 className="text-2xl text-[#ff00c3] mb-4 border-b border-[#a100f2] pb-2 text-shadow-glow">
                        Future Gadgets
                    </h2>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        animate={{
                            y: ["0%", "1%", "0%"],
                            opacity: [1, 0.8, 1]
                        }}
                        transition={{
                            y: { duration: 3, ease: "easeInOut", repeat: Infinity },
                            opacity: { duration: 5, ease: "easeInOut", repeat: Infinity },
                        }}
                    >
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="border-2 border-[#5d00a3] p-4 hover:border-[#ff00c3] hover:shadow-[0_0_15px_#ff00c3] transition-all crt-glow-hover"
                            >
                                <h3 className="text-xl text-[#a100f2] mb-2">{project.title}</h3>
                                <p className="mb-3 text-white/80">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags?.slice(0, 2).map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-block bg-[#5d00a3]/30 text-[#ff00c3] text-xs px-2 py-1 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags && project.tags.length > 2 && (
                                            <span className="inline-block text-[#a100f2] text-xs">+{project.tags.length - 2}</span>
                                        )}
                                    </div>
                                    <button className="w-8 h-8 flex items-center justify-center border border-[#a100f2] text-[#a100f2] hover:border-[#ff00c3] hover:text-[#ff00c3] transition-all rounded-md">
                                        →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </section>
            </div>

            {/* Return to normal button */}
            <div className="md:col-span-2 mt-8 text-center">
                <button
                    onClick={onReturnToNormal}
                    className="bg-[#5d00a3] hover:bg-[#ff00c3] hover:shadow-[0_0_15px_#ff00c3] transition-all px-4 py-2"
                >
                    Return to Normal World Line
                </button>
            </div>
        </div>
    )
}