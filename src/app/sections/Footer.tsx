
import { LuFacebook, LuGithub, LuLinkedin } from "react-icons/lu";
import Logo from "../components/navbar/Logo";
import Link from "next/link";

const reseauxSociaux = [
  {
    nom: "GitHub",
    icone: LuGithub,
    url: "https://github.com/Golviche-591122",
  },
  {
    nom: "LinkedIn",
    icone: LuLinkedin,
    url: "https://www.linkedin.com/in/golviche-nyabota",
  },
  {
    nom: "Facebook",
    icone: LuFacebook,
    url: "https://www.facebook.com/https://web.facebook.com/golviche.nyabota.9",
  },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t border-border bg-background overflow-hidden"
    >
      {/* Image glow */}
      <div
        className="absolute top-1/3 left-1/2 bg-primary/10
        -translate-x-1/2 w-80 h-80 rounded-full blur-3xl"
      />

      <div className="w-[90%] max-w-6xl mx-auto py-14 space-y-10 relative z-10">
        {/* Top section */}
        <div
          className="flex flex-col items-center text-center gap-8
          md:flex-row md:items-start md:justify-between md:text-left"
        >
          <div className="space-y-3 max-w-xs">
            <div className="flex justify-center md:justify-start">
              <Logo />
            </div>

            <p>
              Transformer les données brutes en informations pertinentes
              grâce à une analyse rigoureuse et une visualisation claire.
            </p>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex items-center gap-4">
            {reseauxSociaux.map(({ nom, icone: Icon, url }) => (
              <Link
                key={nom}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visiter mon profil ${nom}`}
                title={nom}
                className="w-10 h-10 rounded-full flex items-center
                justify-center border border-border text-gray-300
                hover:text-primary hover:border-primary
                hover:shadow-[0_0_20px_rgba(32,178,166,0.2)]
                transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="h-px bg-border" />

        {/* Bas du footer */}
        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} GolvDate. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
