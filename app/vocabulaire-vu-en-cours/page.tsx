import Link from "next/link";

const wordGroups = [
  ["femme", "fille", "frère", "garçon", "homme", "maman", "papa", "soeur"],
  [
    "apprendre",
    "avoir",
    "boire",
    "comprendre",
    "connaître",
    "faire",
    "manger",
    "penser",
    "réviser",
    "savoir",
    "être",
  ],
  ["de rien", "encore une fois", "petit à petit", "s'il vous plaît"],
  [
    "Bretagne",
    "bateau",
    "blond",
    "bonne chance",
    "bonnet",
    "bravo",
    "chaise",
    "drapeau",
    "effacer",
    "en retard",
    "escalade",
    "fenêtre",
    "finir",
    "jouer",
    "lumière",
    "mignon",
    "montre",
    "ne pas finir",
    "noir",
    "ordinateur",
    "pantalon",
    "parapluie",
    "pas la peine",
    "perruque",
    "problème",
    "pull",
    "qui",
    "répète",
    "s'occuper de",
    "table",
    "train",
    "travail",
    "téléphone",
    "tôt",
    "vacances",
    "vidéo",
    "vieux",
    "voiture",
    "volets",
    "vêtement",
    "à l'envers",
    "âge",
    "île",
  ],
  [
    "astronaute",
    "ciel",
    "croissant",
    "dormir",
    "espace",
    "espérer",
    "forme",
    "fusée",
    "nuit",
    "rêver",
    "sûr",
    "éclipse",
    "étoiles",
  ],
  [
    "à bientôt",
    "année dernière",
    "année",
    "août",
    "après",
    "après-demain",
    "après-midi",
    "aujourd'hui",
    "avant",
    "avant-hier",
    "avion",
    "avoir la forme",
    "avril",
    "bateau",
    "bon appétit",
    "bus",
    "c'est sûr",
    "camion",
    "car",
    "comme",
    "contraire",
    "date",
    "demain",
    "difficile",
    "différent",
    "dimanche",
    "doucement",
    "décembre",
    "désolé",
    "facile",
    "faux",
    "février",
    "gare",
    "grave",
    "heure",
    "hier",
    "important",
    "interdit",
    "janvier",
    "je ne comprends pas",
    "jeudi",
    "jour",
    "juillet",
    "juin",
    "lundi",
    "mai",
    "mardi",
    "mars",
    "matin",
    "merci",
    "mercredi",
    "midi",
    "minute",
    "mois",
    "moto",
    "novembre",
    "nuit",
    "octobre",
    "pardon",
    "peut-être",
    "pour",
    "prochaine année",
    "recommencez",
    "s'il vous plaît",
    "samedi",
    "seconde",
    "semaine",
    "septembre",
    "skate",
    "soir",
    "taxi",
    "TGV",
    "train",
    "tramway",
    "trotinette",
    "vendredi",
    "voiture",
    "vrai",
    "vélo",
  ],
];

export default function VocabulaireVuEnCours() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-fuchsia-900 to-amber-900 animate-gradient" />

      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-fuchsia-500/30 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "0.75s" }} />

      {/* Content */}
      <div className="relative z-10 min-h-screen px-6 py-12">
        {/* Header */}
        <header className="flex flex-col items-center text-center gap-4 mb-12">
          <Link href="/" className="text-4xl md:text-5xl font-black tracking-tight hover:scale-105 transition-transform">
            <span className="bg-gradient-to-r from-white via-fuchsia-200 to-amber-200 bg-clip-text text-transparent">
              RELIX
            </span>
            <span className="ml-2">🐇</span>
          </Link>
          <h1 className="text-2xl md:text-3xl text-fuchsia-100/90 font-semibold">
            Vocabulaire vu en cours
          </h1>
        </header>

        {/* Word groups */}
        <div className="max-w-4xl mx-auto space-y-8">
          {wordGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className="flex flex-wrap gap-3">
                {group.map((word) => (
                  <Link
                    key={word}
                    href={`/?q=${encodeURIComponent(word)}`}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full text-white font-medium transition-all duration-200 hover:scale-105"
                  >
                    {word}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


