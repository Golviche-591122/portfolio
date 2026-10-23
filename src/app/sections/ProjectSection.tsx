import SectionHeader from "../components/ui/SectionHeader";
import ProjectCards from "./Projets/ProjectCards";
import { projects } from "../utils/datas";

export default function ProjectSection() {
  return (
    <section id="project" className="py-24 relative">
      {/* iamge glow */}
      <div
        className="absolute top-0 left-1/2 bg-primary/10 
            -translate-x-1/2 w-80 h-80 rounded-full blur-3xl"
      />

      <div className="w-[90%] max-w-6xl mx-auto space-y-12">
        <SectionHeader
        title="Quelques-uns de mes derniers"
        highlight="Realisations"
        badge="Realisation"
        description="Une sélection de projets qui montrent ma capacité
        à collecter, nettoyer et analyser des données, puis à les 
        transformer en tableaux de bord clairs pour aider à la prise 
        de décision."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((projet, index) => (
            <div key={index}  
            data-aos="fade-left" 
            data-aos-delay={index * 100} 
            data-aos-anchor-placement="top-center">
              <ProjectCards {...projet}/>
            </div> 
          ))}

        </div>
      </div>
    </section>
  );
}
