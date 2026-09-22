import stores from "@/assets/produits/stores.jpg";
import pergolas from "@/assets/produits/pergolas.jpg";
import carports from "@/assets/produits/carports.jpg";
import menuiseries from "@/assets/produits/menuiseries.jpg";
import fermetures from "@/assets/produits/fermetures.jpg";
import portesEntree from "@/assets/produits/portes-entree.jpg";
import portesGarage from "@/assets/produits/portes-garage.jpg";
import portails from "@/assets/produits/portails.jpg";
import newsPergola from "@/assets/actualites/pergola-bioclimatique.jpg";
import newsCarport from "@/assets/actualites/carport-solaire.jpg";
import newsShowroom from "@/assets/actualites/showroom.jpg";

export const company = {
  name: "Anjou Confort",
  address: "29 rue des Tilleuls",
  city: "49170 Saint-Martin-du-Fouilloux",
  phone: "02 41 39 58 00",
  phoneHref: "tel:0241395800",
  email: "contact@anjou-confort.fr",
  hours: ["Lun – Ven : 9h – 12h / 14h – 18h", "Samedi : 9h – 12h", "Dimanche : fermé"],
};

export const partners = [
  "Somfy",
  "Bel'M",
  "Fybolia",
  "Gypass",
  "Profils Systèmes",
  "Harol",
  "CAME",
  "Storistes de France",
];

export type Product = {
  slug: string;
  name: string;
  short: string;
  image: string;
  intro: string;
  features: string[];
  options: string[];
};

export const products: Product[] = [
  {
    slug: "stores",
    name: "Stores",
    short: "Stores banne, rideaux et occultants motorisés.",
    image: stores,
    intro:
      "Protégez votre terrasse du soleil ou ajustez la lumière de votre intérieur sans dénaturer votre décoration. Nos stores extérieurs et intérieurs sont fabriqués sur mesure et posés par nos équipes.",
    features: [
      "Stores banne coffre, semi-coffre et monobloc",
      "Stores verticaux, screens et brise-soleil orientables",
      "Stores intérieurs : enrouleurs, vénitiens, plissés, bateaux",
      "Motorisation et domotique Somfy",
    ],
    options: ["Capteurs vent et soleil", "Éclairage LED intégré", "Lambrequin enroulable", "Toiles acryliques ou micro-perforées"],
  },
  {
    slug: "pergolas-et-verandas",
    name: "Pergolas & vérandas",
    short: "Structures bioclimatiques et extensions vitrées.",
    image: pergolas,
    intro:
      "Prolongez votre maison avec une véranda ou créez un espace de vie extérieur avec une pergola bioclimatique. Des installations personnalisées, pensées pour votre habitat et votre usage.",
    features: [
      "Pergolas bioclimatiques à lames orientables",
      "Pergolas à toile rétractable",
      "Vérandas aluminium à toiture plate ou en pente",
      "Fermetures vitrées coulissantes",
    ],
    options: ["Chauffage infrarouge", "Éclairage LED périphérique", "Stores screens latéraux", "Coloris RAL au choix"],
  },
  {
    slug: "carports-et-carports-solaires",
    name: "Carports & carports solaires",
    short: "Abris voiture en aluminium, option photovoltaïque.",
    image: carports,
    intro:
      "Abritez votre véhicule avec élégance et, en option, produisez votre propre électricité grâce à une toiture photovoltaïque intégrée.",
    features: [
      "Structures aluminium autoportantes ou adossées",
      "Toiture polycarbonate, panneaux sandwich ou tôle",
      "Version solaire avec panneaux photovoltaïques",
      "Borne de recharge véhicule électrique",
    ],
    options: ["Une ou deux places", "Abri de rangement fermé", "Éclairage intégré", "Gouttières invisibles"],
  },
  {
    slug: "menuiseries-et-chassis-atelier",
    name: "Menuiseries & châssis atelier",
    short: "Fenêtres, baies et verrières façonnées sur mesure.",
    image: menuiseries,
    intro:
      "Fenêtres, portes-fenêtres, baies coulissantes et verrières d'atelier : nous fabriquons et posons des menuiseries alliant performance thermique et esthétique.",
    features: [
      "Menuiseries aluminium, PVC et bois",
      "Baies coulissantes et à galandage",
      "Verrières et châssis style atelier",
      "Rénovation ou dépose totale",
    ],
    options: ["Double ou triple vitrage", "Volets roulants intégrés", "Finitions bicolores", "Certification RGE pour vos aides"],
  },
  {
    slug: "fermetures-et-garde-corps",
    name: "Fermetures & garde-corps",
    short: "Volets, grilles et protections sur mesure.",
    image: fermetures,
    intro:
      "Sécurisez et isolez votre habitation avec des volets roulants et battants, des grilles de protection et des garde-corps design.",
    features: [
      "Volets roulants motorisés (rénovation ou bloc-baie)",
      "Volets battants aluminium ou bois",
      "Garde-corps aluminium, verre ou câbles",
      "Grilles de défense et rideaux métalliques",
    ],
    options: ["Commande centralisée", "Détection d'obstacle", "Remplissage verre ou tôle perforée", "Main courante bois"],
  },
  {
    slug: "portes-d-entree-et-marquises",
    name: "Portes d'entrée & marquises",
    short: "Portes d'entrée, marquises et auvents.",
    image: portesEntree,
    intro:
      "L'accueil de votre maison mérite le meilleur. Nos portes d'entrée Bel'M allient sécurité, isolation et design, complétées par des marquises élégantes.",
    features: [
      "Portes aluminium, acier, bois et mixtes",
      "Serrures multipoints et cylindres haute sécurité",
      "Marquises verre et aluminium",
      "Large choix de vitrages et de tierces",
    ],
    options: ["Poignée bâton de maréchal", "Ouverture connectée", "Vitrage décoratif", "Coloris et textures sur mesure"],
  },
  {
    slug: "portes-de-garage",
    name: "Portes de garage",
    short: "Portes sectionnelles et basculantes motorisées.",
    image: portesGarage,
    intro:
      "Esthétiques, isolantes et silencieuses : nos portes de garage sont réalisées selon vos goûts et motorisées pour votre confort quotidien.",
    features: [
      "Portes sectionnelles plafond et latérales",
      "Portes basculantes et enroulables",
      "Panneaux isolants 40 mm",
      "Motorisation Somfy et CAME",
    ],
    options: ["Portillon intégré", "Hublots et inserts inox", "Finitions bois ou laquées", "Commande smartphone"],
  },
  {
    slug: "portails",
    name: "Portails",
    short: "Portails battants et coulissants, motorisation.",
    image: portails,
    intro:
      "Préservez votre tranquillité, embellissez votre extérieur et sécurisez votre maison avec un portail et une clôture réalisés sur mesure.",
    features: [
      "Portails aluminium battants et coulissants",
      "Clôtures et portillons assortis",
      "Motorisation CAME à bras ou enterrée",
      "Interphones et contrôle d'accès",
    ],
    options: ["Remplissage plein, ajouré ou mixte", "Décors découpés au laser", "Éclairage intégré", "Ouverture par badge ou smartphone"],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export type Article = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  excerpt: string;
  image: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "pergola-bioclimatique-best-seller",
    title: "La pergola bioclimatique, notre best-seller de l'année",
    date: "2026-03-12",
    dateLabel: "12 mars 2026",
    excerpt:
      "Lames orientables, éclairage LED, fermetures vitrées : découvrez pourquoi la pergola bioclimatique séduit de plus en plus de foyers angevins.",
    image: newsPergola,
    content: [
      "Depuis deux ans, la pergola bioclimatique s'impose comme la solution préférée de nos clients pour aménager une terrasse. Ses lames orientables permettent de doser précisément l'ombre et la ventilation, tout en offrant une protection efficace contre la pluie.",
      "Nos modèles sont fabriqués en aluminium thermolaqué et se déclinent dans tous les coloris RAL. Ils peuvent recevoir des fermetures vitrées, des stores screens et un éclairage LED pour profiter de votre extérieur du printemps à l'automne.",
      "Venez découvrir nos modèles d'exposition dans notre hall de Saint-Martin-du-Fouilloux et demandez une étude personnalisée.",
    ],
  },
  {
    slug: "carport-solaire-produire-en-abritant",
    title: "Le carport solaire : produire tout en abritant",
    date: "2026-02-28",
    dateLabel: "28 février 2026",
    excerpt:
      "Un abri pour votre véhicule et une source d'énergie pour votre maison : le carport solaire combine les deux en une structure élégante.",
    image: newsCarport,
    content: [
      "Le carport solaire remplace la toiture classique d'un abri voiture par des panneaux photovoltaïques. Il protège votre véhicule tout en produisant une électricité que vous consommez directement ou revendez.",
      "Associé à une borne de recharge, il devient la solution idéale pour les véhicules électriques. Anjou Confort vous accompagne de l'étude de faisabilité à la pose, en passant par les démarches administratives.",
    ],
  },
  {
    slug: "visitez-notre-hall-exposition",
    title: "Visitez notre hall d'exposition près d'Angers",
    date: "2026-02-15",
    dateLabel: "15 février 2026",
    excerpt:
      "Stores, pergolas, portes d'entrée, portails : touchez, testez et comparez nos produits dans notre showroom de Saint-Martin-du-Fouilloux.",
    image: newsShowroom,
    content: [
      "Rien ne remplace le contact avec les matériaux. Notre hall d'exposition présente en situation réelle une sélection de stores, pergolas, portes d'entrée, portes de garage et portails.",
      "Nos conseillers vous y accueillent du lundi au samedi matin pour échanger sur votre projet et vous proposer une visite à domicile gratuite.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
