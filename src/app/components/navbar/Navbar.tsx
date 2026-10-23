"use client"

import { useEffect, useState } from "react"
import Logo from "./Logo";
import Link from "next/link";
import LinkButton from "../ui/LinkButton";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import MobileNav from "./MobileNav";

export const navLinks = [
    { href: "#home", label: "Accueil" },
    { href: "#about", label: "A propos" },
    { href: "#project", label: "Realisation" },
    { href: "#experience", label: "Experiences" },
    { href: "#competence", label: "Compétence" },
    { href: "#contact", label: "Contact" }
]
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [navOpen,setNavOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)
        }

        window.addEventListener("scroll", handleScroll);

        // return a clean up

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
       <>
            <nav className={`fixed top-0 left-0 w-full z-60 transition-all duration-300 
            ${scrolled ? "backgroun-blur-xl" : "bg-transparent"}`}>
            <div className="w-[95%] lg:w-[90%] mx-auto h-16 flex items-center justify-between ">
                <Logo />

                {/* Dekstop nav */}

                <ul className="hidden lg:flex items-center gap-1 py-2.5 px-1
                    rounded-full bg-surface/60 backdrop-blur-xl border border-border">
                    {navLinks.map((links, index) => (
                        <li key={index}>
                            <Link href={links.href}
                                className="px-4 py-2 rounded-full text-sm font-medium 
                   text-gray-300 transition-all duration-300 
                   hover:text-primary hover:bg-surface ">
                                {links.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:block">
                    <LinkButton 
                    iconPosition="left" 
                    icon={LuDownload} 
                    rounded 
                    text="Télecharger mon CV" 
                    href="/documents/cv.pdf" 
                    download/>
                </div>
                <button 
                onClick={() => setNavOpen(!navOpen)}
                className="
                z-50 lg:hidden
                w-10 h-10 rounded-lg
                flex items-center justify-center
                border border-border bg-surface/60
                text-text hover:border-primary :hover:text-primary transition">
                    {navOpen ? <LuX size={22}/> : <LuMenu size={22}/>}
                </button>
                </div>
            </nav>

        <MobileNav navOpen={navOpen}  />
       </>
    )
}
