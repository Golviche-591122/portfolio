import DotGrid from "@/components/DotGrid"
import LinkButton from "../components/ui/LinkButton"
import { LuArrowRight } from "react-icons/lu"
import Image from "next/image"

export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen overflow-hidden 
        flex items-center pt-30 py-10">

            {/* background glow */}
            <div className="absolute top-1/4 left-1/3 bg-primary/10 
        -translate-x-1/2 w-80 h-80 rounded-full blur-3xl"/>

            {/* background */}

            <div className="absolute w-full h-150">
                <DotGrid
                    baseColor="#3a3446"
                    activeColor="#20b2a6"
                    shape="circle"
                    dotSize={2}
                    gap={18}
                    proximity={140}
                    strength={1}
                    bounce={0.6}
                    tension={0.4}
                    returnDuration={0.8}
                    shockRadius={320}
                    shockStrength={5}
                    swell={0.8}
                    stretch={0.5}
                    glow={0.5}
                    fade={0}
                    intro
                    opacity={1}
                    mouseInteraction
                    clickShock
                />
            </div>

            {/*Contenu de la section */}

            <div className="relative z-10 w-[90%] mx-auto grid 
                grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                {/* leftside */}
                <div className="space-y-4">
                    <span data-aos="fade-up" className="inline-block px-4 py-1.5 rounded-full bg-primary/10
                text-primary text-sm border 
                border-border">
                        Data Analyst Junior &bull; BI & Data Visualisation
                    </span>
                    <h1 data-aos="fade-up" data-aos-delay="200" className="text-3xl md:text-4xl lg:text-5xl font-bold
                leading-tight text-text/90">
                        Transformer les données en décisions stratégiques
                        <span className="text-primary/70"> Grâce à la Data Analytics.</span>
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="400" className="text-gray-400 max-w-lg tracking-wide">
                        Je transforme les données brutes en informations
                        exploitables grâce à Excel, SQL, Power BI et Python.
                        Mon objectif est d&apos;aider les entreprises à comprendre
                        leurs performances, à identifier les opportunités et
                        à prendre des décisions éclairées.
                    </p>
                    
                    <div
                    className="flex flex-col items-center gap-3 pt-2 md:flex-row md:gap-4 md:items-center"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    >
                    <LinkButton
                        text="Me contacter"
                        href="#contact"
                        rounded
                        icon={LuArrowRight}
                    />

                    <LinkButton
                        text="Voir projets"
                        href="#project"
                        rounded
                        variant="outline"
                    />
                    </div>


                </div>
                {/* righttside */}
                <div className="flex justify-center lg:justify-end" data-aos="fade-left">
                    <div className="relative w-85 h-85 md:w-110 md:h-110
                    rounded-full bg-surface/80 backdrop-blur-md
                    border border-border
                    flex items-center justify-center">

                       {/* image glow */}
                       <div className="absolute inset-0 rounded-full
                        bg-primary/20 blur-3xl" />
                        <Image fill src="/images/profil.jpg" alt="profile"
                        className="z-10 object-cover object-top rounded-full" />

                    </div>

                </div>

            </div>
        </section>
    )
}
