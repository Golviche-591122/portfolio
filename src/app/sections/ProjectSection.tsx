
import SectionHeader from "../components/ui/SectionHeader";
import ProjectCards from "./Projets/ProjectCards";
import { projects } from "../utils/datas";

export default function ProjectSection() {
  return (
    <section
      id="project"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      {/* Lumière d'arrière-plan */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20
        -z-10 h-72 w-72 -translate-x-1/2 rounded-full
        bg-primary/10 blur-[100px] sm:h-96 sm:w-96"
      />

      <div className="mx-auto w-[92%] max-w-7xl space-y-10 sm:space-y-14">

        <SectionHeader
          title="Découvrez mes"
          highlight="réalisations"
          badge="Portfolio"
          description="Des projets concrets d'analyse de données,
          de reporting et de visualisation pour transformer
          les données en informations utiles à la décision."
        />

        {/* Grille des projets */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
          {projects.map((projet, index) => (
            <article
              key={projet.title ?? index}
              data-aos="fade-up"
              data-aos-delay={Math.min(index * 100, 300)}
              data-aos-anchor-placement="top-bottom"
              className="min-w-0"
            >
              <ProjectCards {...projet} />
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
