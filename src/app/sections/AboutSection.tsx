import Image from "next/image"
import { FiBarChart, FiDatabase, FiPieChart } from "react-icons/fi"

export default function AboutSection() {
    return (
        <section id="about" className="py-24 overflow-hidden relative">
            <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* iamge glow */}
                 <div className="absolute top-1/4 left-1/2 bg-primary/10 
                    -translate-x-1/2 w-80 h-80 rounded-full blur-3xl"/>
                {/*leftside */}
                <div data-aos="fade-right" data-aos-delay="100" data-aos-anchor-placement="top-center" className="flex justify-center lg:justify-start">
                    <div className="relative w-85 h-85 md:w-120 md:h-120
                    rounded-2xl bg-surface/80 backdrop-blur-md border
                    border-border flex items-center justify-center ">
                        <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl" />
                        <div className="w-[85%] h-[85%] relative">
                            <Image fill src="/images/about_profile.jpg" alt="about_image"
                            className="z-10 object-cover object-top rounded-xl"/>

                        </div>


                    </div>

                </div>
                {/*rightside */}
                <div className="space-y-6" data-aos="fade-left" data-aos-delay="100" data-aos-anchor-placement="top-center">
                    <span className="text-sm text-primary bg-primary/10 px-4 py-1.5
                    rounded-full border border-border inline-block">A propos de moi</span>
                    <h2 className="text-3xl md:text-4xl font-bold 
                    text-text leading-tight">
                        Je transforme les données en informations utiles pour décider
                    </h2>
                    <p className="text-gray-400 max-w-xl">
                        Je suis Golviche NYABOTA data analyste junior, spécialisé 
                        dans l&apos;analyse et la visualisation de données. 
                        J&apos;aime transformer des données brutes en résultats 
                        clairs, fiables et faciles à comprendre pour aider 
                        les équipes à mieux piloter leur activité.
                    </p>
                    <p className="text-gray-400 max-w-xl">
                        J&apos;utilise SQL pour interroger les bases de données, 
                        Excel et Python pour nettoyer et analyser les données, 
                        et Power BI pour créer des tableaux de bord interactifs. 
                        Je suis en progression constante et je cherche des missions 
                        pour appliquer ces compétences sur des cas réels.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                        
                        <div className="p-4 rounded-xl bg-surface border border-border text-center">
                            <FiDatabase className="mx-auto mb-2 text-primary w-6 h-6" />
                            <p className="text-text text-sm">Nettoyage de données</p>

                        </div>
                        <div className="p-4 rounded-xl bg-surface border border-border text-center">
                            <FiBarChart className="mx-auto mb-2 text-primary w-6 h-6" />
                            <p className="text-text text-sm">Analyse de données</p>

                        </div>
                        <div className="p-4 rounded-xl bg-surface border border-border text-center">
                            <FiPieChart className="mx-auto mb-2 text-primary w-6 h-6" />
                            <p className="text-text text-sm">Reporting</p>

                        </div>
                        

                    </div>
                </div>
            </div>

        </section>
    )
}
