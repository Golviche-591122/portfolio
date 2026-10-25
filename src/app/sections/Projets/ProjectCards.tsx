import Image from "next/image"
import Link from "next/link"
import { LuExternalLink, LuGithub } from "react-icons/lu"
import ProjectDescription from "../ProjectDescription"

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
            <h3 className="text-xl text-start ml-5 font-semibold text-text
            group-hover:text-primary transition">
                {title}
            </h3>
            <p className="px-4 text-sm leading-7 text-gray-400 sm:px-5 sm:text-base sm:leading-8">
                <ProjectDescription description={description} />
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
           
<div className="flex items-center gap-5 pt-1 mb-2 ml-1">
  {liveURL && (
    <Link
      href={liveURL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm font-medium text-text-muted
      transition-colors hover:text-primary"
    >
      <LuExternalLink className="h-4 w-4" />
      Voir projet
    </Link>
  )}

  {githubURL && (
    <Link
      href={githubURL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm font-medium text-text-muted
      transition-colors hover:text-primary"
    >
      <LuGithub className="h-4 w-4" />
      GitHub
    </Link>
  )}
</div>

        

        </div>
    </div>
  )
}
