import { FaArrowRight } from "react-icons/fa"
import { timelineData } from "../utils/constants"

type ProfessionalModeProps = {
    skills: Record<string, Record<string, { icon: React.ComponentType<{ className?: string; size?: number }> }>>
    projects: Array<{ id: number; title: string; description: string; tags?: string[] }>
    categoryIcons: Record<string, React.ComponentType<{ className?: string; size?: number }>>
}

export default function ProfessionalMode({ skills, projects, categoryIcons }: ProfessionalModeProps) {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="flex flex-col space-y-8">
                <section className="mb-8" id="about">
                    <h2 className="text-2xl text-gray-800 font-semibold mb-4">About Me</h2>
                    <div className="text-gray-700 leading-relaxed">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl text-gray-800 font-semibold mb-4">Experience Timeline</h2>
                    <div className="relative max-w-3xl mx-auto py-4">
                        <div className="relative border-l-2 border-gray-300 pl-6">
                            {timelineData.map((entry, index) => (
                                <div key={index} className="mb-10 relative">
                                    <div className="absolute -left-4 top-1 w-3 h-3 rounded-full bg-gray-800" />
                                    <p className="text-sm text-gray-500 mb-1">{entry.date}</p>
                                    <h3 className="text-xl text-gray-800 font-semibold mb-1">
                                        {entry.title.replace("The Organization's", "My").replace("xxxxx", "")}
                                    </h3>
                                    <p className="text-gray-600 mb-1 leading-relaxed">
                                        {entry.description
                                            .replace(
                                                "It was unstable... but the path was clear.",
                                                "I discovered my passion for coding and software development."
                                            )
                                            .replace(
                                                "This timeline is now stabilized. But... others still beckon.",
                                                "This experience provided valuable industry insights and practical skills."
                                            )
                                            .replace(
                                                "The Organization's influence grew. I continued to sharpen my abilities xxxxx",
                                                "I continue to develop my skills and look forward to new opportunities."
                                            )}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Right Column */}
            <div>
                <section className="mb-8">
                    <h2 className="text-2xl text-gray-800 font-semibold mb-4">Skills</h2>
                    <div className="space-y-6">
                        {Object.entries(skills).map(([category, skillset]) => {
                            const CategoryIcon = categoryIcons[category]
                            return (
                                <div key={category} className="border border-gray-200 rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-3">
                                        {CategoryIcon && <CategoryIcon className="text-gray-700" size={20} />}
                                        <h3 className="text-xl text-gray-700">{category}</h3>
                                    </div>
                                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                                        {Object.entries(skillset).map(([skill, { icon: Icon }]) => (
                                            <div
                                                key={skill}
                                                className="flex flex-col items-center justify-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                                            >
                                                <Icon className="text-gray-700" size={24} />
                                                <span className="text-sm text-center font-medium text-gray-700">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>

                <section className="mb-8" id="projects">
                    <h2 className="text-2xl text-gray-800 font-semibold mb-4">Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="border-2 border-gray-200 p-4 hover:border-gray-400 hover:shadow-md transition-all rounded-lg"
                            >
                                <h3 className="text-xl text-gray-700 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags?.slice(0, 2).map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags && project.tags.length > 2 && (
                                            <span className="inline-block text-gray-500 text-xs">+{project.tags.length - 2}</span>
                                        )}
                                    </div>
                                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 text-gray-500 hover:border-gray-500 hover:text-gray-700 transition-all rounded-md">
                                        <FaArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}