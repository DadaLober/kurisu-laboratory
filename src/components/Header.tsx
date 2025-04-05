type HeaderProps = {
    easterEggActive: boolean
    displayedText: string
    socials: Array<{ icon: React.ComponentType<{ className?: string; size?: number }>; href: string }>
}

export default function Header({ easterEggActive, displayedText, socials }: HeaderProps) {
    const GITHUB_USERNAME = "Dadalober"
    const profilePicUrl = `https://github.com/${GITHUB_USERNAME}.png`

    return (
        <header
            className={`mb-8 ${easterEggActive ? "border-b border-[#a100f2] pb-4" : "pb-6 border-b border-gray-200"} flex items-center justify-between`}
        >
            <div className="flex items-center gap-4">
                <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
                    <img
                        src={profilePicUrl || "/placeholder.svg?height=56&width=56"}
                        alt="GitHub Profile"
                        className={`w-14 h-14 rounded-full ${easterEggActive
                            ? "border-2 border-[#ff00c3] shadow-[0_0_10px_#ff00c3] hover:shadow-[0_0_15px_#ff00c3] transition-all"
                            : "border-2 border-gray-200"
                            }`}
                    />
                </a>
                <div>
                    <h1 className={`text-3xl font-bold ${easterEggActive ? "text-[#ff00c3]" : "text-gray-800"}`}>
                        {easterEggActive ? "Kurisu's Laboratory" : "John Miller Lorenzo"}
                    </h1>
                    <div className={`h-6 ${easterEggActive ? "text-[#a100f2]" : "text-gray-600"}`}>
                        <span className={easterEggActive ? "animate-pulse" : ""}>
                            {easterEggActive ? displayedText : "Developer"}
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
                {socials.map(({ icon: Icon, href }, index) => (
                    <a
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                            easterEggActive
                                ? "text-[#ff00c3] hover:text-[#a100f2] transition-colors"
                                : "text-gray-700 hover:text-gray-900 transition-colors"
                        }
                    >
                        <Icon size={easterEggActive ? 24 : 24} />
                    </a>
                ))}
            </div>
        </header>
    )
}