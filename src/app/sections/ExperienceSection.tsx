import SectionHeader from "../components/ui/SectionHeader";
import { experiences } from "../utils/datas";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 bg-primary/10 
        -translate-x-1/2 w-80 h-80 rounded-full blur-3xl"/>
        <div className="container mx-auto px-6 relative z-10">
            <SectionHeader title="Expérience Pratique" highlight="en Data Analytics"
            badge="Experience" description="Un parcours construit autour de l'apprentissage continu,
            de la pratique et du développement de compétences analytiques, avec pour objectif de 
            répondre aux besoins concrets des entreprises et d'évoluer dans le domaine de la data."/>

            <div className="relative mt-14">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0
              w-0.5 bg-linear-to-b from-primary/70 via-primary/30
              to-transparent md:translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0,8)]"/>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div
                        data-aos="flip-right" 
                        data-aos-anchor-placement="top-center"
                         key={index} className="relative grid md:grid-cols-2 gap-8">
                            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3
                            bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                <span className="absolute inset-0 rounded-full bg-primary
                                animate-ping opacity-75"/>

                            </div>
                            {/* Contennt */}
                            <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                              <div className="p-6 rounded-2xl border border-primary/30
                              hover:border-primary/50 transition-all duration-500">
                                <span className="text-primary text-sm font-medium">{exp.year}</span>
                                <h3 className="text-xl font-semibold mt-2">{exp.title}</h3>
                                <p className="text-gray-300">{exp.subtitle}</p>
                                <p className="text-sm text-gray-400 mt-4">
                                  {exp.description}
                                </p>
                                <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                  {exp.tools.map((tool,idx) => (
                                    <span key={idx} className="px-3 py-1 bg-surface text-xs rounded-full text-gray-300">
                                          {tool}
                                    </span>
                                  ))}

                                </div>

                              </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </div>


    </section>
  );
}
