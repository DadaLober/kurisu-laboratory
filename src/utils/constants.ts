import { FaFacebook, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa"
import { FaCode, FaDatabase, FaServer } from "react-icons/fa"

export const typewriterText = [
    '> Welcome to my world line...',
    "> I'm a mad scientist...",
    '> The Organization watches...',
    '> El Psy Kongroo...'
]

export const skills = {
    "FrontEnd": {
        "TypeScript": { icon: FaCode },
        "Next.js": { icon: FaCode },
        "React": { icon: FaCode },
        "Tailwind": { icon: FaCode },
        "JavaScript": { icon: FaCode },
    },
    "Backend": {
        "Node.js": { icon: FaServer },
        "Java": { icon: FaServer },
        "PostgreSQL": { icon: FaDatabase },
        "MSSQL": { icon: FaDatabase },
        "Prisma": { icon: FaDatabase },
    },
    "Other": {
        "Docker": { icon: FaDatabase },
        "Git": { icon: FaDatabase },
    }
}

export const categoryIcons = {
    "FrontEnd": FaCode,
    "Backend": FaServer,
    "Other": FaServer
}

export const projects = [
    {
        id: 1,
        title: "PhoneWave (Name TBD)",
        description: "Microwave-based time manipulation device capable of sending messages to the past",
        tags: ["Time Travel", "Hardware", "Quantum"]
    },
    {
        id: 2,
        title: "Divergence Meter",
        description: "Device for measuring and identifying worldline variations across attractor fields",
        tags: ["Hardware", "Time Travel", "Measurement"]
    },
    {
        id: 3,
        title: "Future Gadget Lab Website",
        description: "Official web presence for our research organization",
        tags: ["Web Development", "React", "Next.js"]
    },
    {
        id: 4,
        title: "IBN 5100 Interface",
        description: "Modern interface for interacting with legacy computer systems",
        tags: ["Legacy Systems", "UI/UX", "Security"]
    }
]

export const socials = [
    { icon: FaFacebook, href: "https://www.facebook.com/lorenzomiller8" },
    { icon: FaGithub, href: "https://github.com/Dadalober" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/john-miller-lorenzo" },
    { icon: FaDiscord, href: "https://discord.com/users/mkurisu#1357" }
]

export const timelineData = [
    {
        date: "2020.08.xx",
        title: "I studied at a University and began my coding journey.",
        description: "My journey into code began. It was unstable... but the path was clear.",
        divergence: "0.000001%",
    },
    {
        date: "2024.12.12",
        title: "Finished our Capstone Project.",
        description: "The Title Mapper... (Temporary name). Built with Next.js, Go Lang and the energy of caffeine.",
        divergence: "0.342345%",
    },
    {
        date: "2025.01.20",
        title: "I become an Intern at NEECO 2 Area 1.",
        description: "This timeline is now stabilized. But... others still beckon.",
        divergence: "0.789456%",
    },
    {
        date: "2025.xx.xx",
        title: "The will of the universe will decide.",
        description: "The Organization's influence grew. I continued to sharpen my abilities xxxxx",
        divergence: "1.048596%",
    },
]