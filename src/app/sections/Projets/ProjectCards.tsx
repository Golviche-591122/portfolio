import Image from "next/image"
import Link from "next/link"
import { LuExternalLink, LuGithub } from "react-icons/lu"

interface ProjectCardsProps {
    title: string,
    description: string,
    liveURL?:string,
    githubURL?: string,
    image:string,
    tools: string[]

}

export default function ProjectCards({
    title,
    description,
    liveURL,
    githubURL,
    image,
    tools
}:ProjectCardsProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl
    bg-surface border border-border transition-all
    duration-300 hover:translate-y-1 
    hover:border-primary/50 hover:shadow-lg">
        {/* images */}
        <div className="relative h-60 md:h64 overflow-hidden">
            <Image src={image} alt={title} fill className="w-full
            h-full object-cover transition duration-500 group-hover:scale-105" />

            <div className="absolute inset-0 bg-background/50 opacity-0
            group-hover:opacity-100 transition">

            </div>

        </div>

        {/* Contant */}

        <div className="space-y-5">
            <h3 className="text-xl font-semibold text-text
            group-hover:text-primary transition">
                {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
                {description}
            </p>

                {/* Tools */}
            <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                    <span key={tool} className="text-xs px-2.5 py-1 rounded-md
                    bg-primary/10 text-primary border border-border">
                        {tool}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-3">
                {liveURL && (
                    <Link href={liveURL} target="blank"
                    className="flex items-center gap-1 text-sm text-text-muted
                    hover:text-primary transition">
                        <LuExternalLink className="w-4 h-4"/>
                        Voir projet
                    </Link>
                )}
                {githubURL  && (
                    <Link href={githubURL} target="blank"
                    className="flex items-center gap-1 text-sm text-text-muted
                    hover:text-primary transition">
                        <LuGithub className="w-4 h-4"/>
                        Github
                    </Link>
                )}

            </div>

        

        </div>
    </div>
  )
}
