import { LuQuote } from "react-icons/lu";
import SectionHeader from "../components/ui/SectionHeader";
import Image from "next/image";

const competences = [
  {
    titre: "Excel",
    description:
      "Nettoyage des données avec Power Query, tableaux croisés dynamiques et création de tableaux de bord.",
    icone: "/images/competences/excel.png",
  },
  {
    titre: "SQL",
    description:
      "Extraction, jointures, agrégations et analyse de données avec des requêtes SQL.",
    icone: "/images/competences/sql.png",
  },
  {
    titre: "Power BI",
    description:
      "Modélisation des données, mesures DAX, KPI et tableaux de bord interactifs.",
    icone: "/images/competences/powerbi.png",
  },
  {
    titre: "Python",
    description:
      "Programmation pour l'analyse, la manipulation et l'automatisation des traitements de données.",
    icone: "/images/competences/python.png",
  },
  {
    titre: "Pandas",
    description:
      "Manipulation, nettoyage et transformation de données tabulaires avec des DataFrames.",
    icone: "/images/competences/pandas.png",
  },
  {
    titre: "NumPy",
    description:
      "Calcul numérique, manipulation de tableaux multidimensionnels et opérations mathématiques.",
    icone: "/images/competences/numpy.png",
  },
  {
    titre: "Matplotlib",
    description:
      "Création de graphiques personnalisés pour explorer les données et présenter les résultats.",
    icone: "/images/competences/matplotlib.png",
  },
  {
    titre: "Seaborn",
    description:
      "Visualisation statistique avec des graphiques pour analyser les distributions, corrélations et tendances.",
    icone: "/images/competences/seaborn.png",
  },
];


export default function CompetenceSection() {
  return (
    <section id="competence" className="py-24 bg-background relative overflow-hidden">
      {/* iamge glow */}
        <div className="absolute top-1/4 left-1/2 bg-primary/10 
          -translate-x-1/2 w-80 h-80 rounded-full blur-3xl"/>
          
        <div className="w-[90%] max-w-6xl mx-auto space-y-16">
           <SectionHeader
            title="Les outils au service de la donnée"
            badge="Competence"
            description="Les technologies et outils que j'utilise pour analyser, visualiser et transformer les données en informations exploitables."
            /> 
            <div
            data-aos="fade-up" 
            data-aos-delay="100" 
            data-aos-anchor-placement="top-center"
            className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {competences.map((comp,index) => (
                    <div key={index} className="group relative p-6 rounded-2xl bg-surface
                    border border-border transition-all duration-500 hover:translate-y-1
                    hover:border-primary/40 hover:shadow-lg ">
                        <LuQuote className="absolute top-5 right-5 text-primary/10 w-10 h-10"/>
                        <div className="flex items-center gap-4">
                            < Image width={50} height={50} src={comp.icone} alt="iconeTool"
                            className="w-12 h-12 rounded-full object-cover border border-border" />
                            <div>
                                <h4 className="text-text font-semibold group-hover:text-primary
                                transition">{comp.titre}</h4>
                                <p className="text-sm text-gray-400">{comp.description}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        

        </div>

    </section>
  )
}
