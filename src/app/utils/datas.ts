export const projects = [
  {
    title: "Swiggy : Analyse des ventes de livraison de repas",
    description:
      "Tableau de bord Excel interactif analysant les ventes d'une plateforme de livraison de repas en Inde : 53 M de ventes, 197 K commandes et une note moyenne de 4,34/5. Il est organisé en trois pages (Dashboard, Analysis, Data) et se filtre par mois, catégorie et restaurant grâce à des segments. Il suit l'évolution des ventes à plusieurs échelles (mensuelle, hebdomadaire, par jour de la semaine) et les répartit par type de plat, par ville et par État sur une carte. Principaux constats : Bengaluru est la première ville avec 5,5 M de ventes, loin devant les autres, le samedi est le jour le plus fort, février marque un creux, et les plats végétariens représentent 64 % des ventes contre 36 % pour les non végétariens.",
    image: "/images/Projets/Dashboar-swiggy_1.png",
    tools: ["Excel", "Tableaux croisés dynamiques", "Segments"],
    liveURL: "#",
    githubURL: "#",
  },
  {
    title: "Nova Bank : Performance financière et risque de crédit",
    description:
      "Analyse de l'activité d'une banque de détail présente dans 7 agences en RDC (2024-2026). J'ai conçu un rapport Power BI en 3 pages, avec menu de navigation et filtres par région, segment client et produit : une vue d'ensemble, une analyse de la performance commerciale et un suivi du risque de crédit. Résultats clés : les particuliers représentent 60 % de la clientèle, le crédit PME et le crédit personnel génèrent l'essentiel du revenu, et 18,75 % des 2,91 M$ de crédits accordés sont à risque, avec des agences plus exposées que d'autres. En complément, une requête SQL (CTE) mesure le nombre moyen de comptes par client et la part de clients monobancarisés et multibancarisés.",
    image: "/images/Projets/overview.png",
    tools: ["Power BI", "DAX", "Power-query"],
    liveURL: "#",
    githubURL: "#",
  },
  {
    title: "KinMarché : Analyse des ventes et de la rentabilité",
    description:
      "Tableau de bord destiné à la direction d'une enseigne de distribution pour suivre ses ventes et sa rentabilité. Il présente 899,9 M de ventes, 332 M de profits et une marge moyenne de 42,3 %, avec des filtres par produit, détaillant, état et année. L'analyse montre que le magasin reste le premier canal (près de 40 % des ventes) devant les ventes à emporter et en ligne, que la région Ouest domine, et que les ventes suivent une forte saisonnalité, avec un creux en mars et un pic en juillet.",
    image: "/images/Projets/kinMarcheDash.png",
    tools: ["Power BI", "DAX", "Power-query"],
    liveURL: "#",
    githubURL: "#",
  },
  {
    title: "Vélos : Pilotage des ventes et alertes de stock",
    description:
      "Rapport Power BI en deux vues pour répondre à deux besoins : informer la direction et alerter la gestion des stocks. La vue Direction suit le chiffre d'affaires du T2 2023 (33,45 M FCFA, 52 transactions, satisfaction de 4,05/5) par produit et par mois, et fait ressortir le vélo de piste et le VTT en tête, ainsi qu'une baisse entre avril et mai. La vue Alerte Stock identifie 15 produits en stock critique grâce à une mise en forme conditionnelle et à la fréquence de réapprovisionnement. Elle révèle aussi une catégorie « Inconnu » à corriger dans les données sources.",

    image: "/images/Projets/dash_1.png",
    tools: ["Power BI", "Power-query", "Dax"],
    liveURL: "#",
    githubURL: "#",
  },
  
];

export const experiences = [
  {
    year: "2026",
    title: "Data Analyst Junior",
    subtitle: "Projets personnels en Business Intelligence",
    description:
      "Réalisation de projets d'analyse de données de bout en bout : préparation et nettoyage des données, création de KPI, analyse des performances et conception de tableaux de bord interactifs pour faciliter la prise de décision.",
    tools: ["SQL", "Python", "Power BI"],
  },
  {
    year: "2026",
    title: "Power BI Analyst",
    subtitle: "Projet d'analyse financière",
    description:
      "Conception d'un rapport Power BI composé de trois tableaux de bord : vue générale financière, performance commerciale, risques et crédits. Création de mesures DAX, suivi des indicateurs financiers et analyse des risques.",
    tools: ["Power BI", "Power Query", "DAX"],
  },
  {
    year: "2026",
    title: "Data Analyst",
    subtitle: "Analyse des ventes avec Excel",
    description:
      "Nettoyage et transformation des données avec Power Query, analyse des ventes à l'aide de tableaux croisés dynamiques et création de graphiques interactifs pour construire un tableau de bord synthétique.",
    tools: ["Excel", "Power Query", "Tableaux croisés dynamiques", "PivotCharts"],
  },
  {
    year: "2026",
    title: "SQL Data Analyst",
    subtitle: "Analyse et exploration de données",
    description:
      "Utilisation de SQL pour interroger, filtrer et agréger des données, effectuer des jointures entre tables et répondre à des questions métier à travers des indicateurs et des analyses structurées.",
    tools: ["SQL", "PostgreSQL", "Jointures", "Agrégations"],
  },
];