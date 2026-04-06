import {
  Bath,
  Flame,
  Droplets,
  ShieldCheck,
  Star,
  Timer,
  Wrench,
  Zap,
  Search,
  Wind,
  Thermometer,
  Pipette,
  Filter,
} from 'lucide-react';

import imgShowerPanel from './images/0c8f62b3-f43e-4cd8-8606-f79b5c01b9de.jpg';
import imgTechnician from './images/29fba7a9-56a8-406d-9392-cc9a420317da.jpg';
import imgBoilerCabinet from './images/42404c07-f758-4a9d-a1df-9fe8f1a262df.jpg';
import imgSmartThermostat from './images/45217c73-6651-4663-ac66-8561dec859e4.jpg';
import imgHeatPumpOutdoor from './images/70d6aaf6-beca-4ba4-acd8-dc0154aef228.jpg';
import imgHeatingSystem from './images/7b373194-639f-47cd-ab6b-b9cb78bcbc6f.jpg';
import imgBathroomToilet from './images/947610cf-b6f4-4cc6-8d9b-22ee1ce78744.jpg';
import imgDualBoilers from './images/a83be5ce-3058-47ca-afd7-4215148d93fa.jpg';
import imgWaterTreatment from './images/c75ea8af-4d03-4304-9154-6afbb6d7631c.jpg';
import imgThermostatWall from './images/d3411dc6-61e0-4b9e-a593-45467e057efe.jpg';
import imgViessmannSystem from './images/d403e916-8371-4c64-801c-21b978aa31fb.jpg';
import imgHeroPlumbing from './images/newwebplumbing.png';
import imgAvantApresGaz from './images/avantapres.jpg';
import imgAvantApresFioul from './images/avantapres2.jpg';
import imgAvantApresThermo from './images/avantapres1.jpg';
import imgAvantApresPac from './images/avantapres3.jpg';
import imgAvantApresSdb from './images/avantapres4.jpg';
import logoBoardMain from './images/d20b95e3-6fd4-4a61-88c6-4d37190d505d.jpg';
import logoBoardExtraA from './images/6da8208d-0c3f-4e62-b8f2-5d7c4b53a1a6.jpg';
import logoBoardExtraB from './images/7560d8fd-5ff0-40f7-bdd5-92135bac475b.jpg';

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#projects' },
  { label: 'Avis', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const businessInfo = {
  brand: 'AquaChauffagiste',
  shortTagline: 'Plomberie & Chauffage 24h/24 - 7j/7',
  phoneHref: '+33609217169',
  phoneDisplay: '+33 6 09 21 71 69',
  phoneHrefSecondary: '+33642165546',
  phoneDisplaySecondary: '+33 6 42 16 55 46',
  email: 'Aquachauffagiste45@gmail.com',
  addressLine: '24 rue de la Sente',
  postalCity: '45800 Saint-Jean-de-Braye',
  city: 'Orléans',
  regionCode: 'FR-45',
  latitude: 47.9029,
  longitude: 1.9093,
};

export const heroImage = imgHeroPlumbing;

export const services = [
  {
    title: 'Entretien chaudière gaz',
    description: 'Contrôle complet, nettoyage, réglage et vérification de sécurité de votre chaudière gaz. Certificat de conformité remis.',
    price: 'À partir de 90 €',
    duration: 'Intervention planifiée',
    icon: Flame,
  },
  {
    title: 'Entretien annuel multi-énergies',
    description: 'Entretien annuel obligatoire pour chaudières gaz, fioul, granulés et pompes à chaleur. Prolongez la durée de vie de vos équipements.',
    price: 'Sur devis',
    duration: 'Selon équipement',
    icon: ShieldCheck,
  },
  {
    title: 'Dépannage tous types de chaudières',
    description: 'Dépannage rapide sur chaudières gaz, fioul, granulés et pompes à chaleur. Diagnostic précis, réparation efficace.',
    price: 'Sur devis',
    duration: 'Selon panne',
    icon: Wrench,
  },
  {
    title: 'Installation chauffage & eau chaude',
    description: 'Installation de chaudières, ballons thermodynamiques et pompes à chaleur. Conseil personnalisé pour le meilleur rapport qualité-prix.',
    price: 'Sur devis',
    duration: 'Projet planifié',
    icon: Zap,
  },
  {
    title: "Ballon d'eau chaude",
    description: "Dépannage de ballon d'eau chaude, détartrage complet et installation ou remplacement. Intervention rapide pour retrouver l'eau chaude.",
    price: 'Sur devis',
    duration: 'Selon intervention',
    icon: Droplets,
  },
  {
    title: 'Ramonage cheminée à bois',
    description: 'Ramonage professionnel avec tarif fixe à Orléans et communes proches. Certificat de ramonage délivré.',
    price: 'Tarif fixe 80 €',
    duration: "Autour d'Orléans",
    icon: Flame,
  },
  {
    title: 'Recherche & réparation de fuites',
    description: "Détection et réparation de fuites d'eau sur canalisations, raccords et robinetterie. Intervention rapide pour limiter les dégâts.",
    price: 'Sur devis',
    duration: 'Urgence possible',
    icon: Search,
  },
  {
    title: 'Débouchage canalisations',
    description: "Dégorgement WC, éviers, douches, baignoires et colonnes d'évacuation. Matériel professionnel pour un résultat garanti.",
    price: 'Sur devis',
    duration: 'Intervention rapide',
    icon: Filter,
  },
  {
    title: 'Rénovation salle de bain',
    description: 'Conception et réalisation clé en main : plomberie, carrelage, pose de sanitaires. Transformez votre salle de bain.',
    price: 'Sur devis',
    duration: 'Projet planifié',
    icon: Bath,
  },
  {
    title: 'Climatisation réversible',
    description: "Installation et entretien de systèmes de climatisation réversible. Confort été comme hiver avec un seul équipement.",
    price: 'Sur devis',
    duration: 'Projet planifié',
    icon: Wind,
  },
  {
    title: 'Pompe à chaleur (PAC)',
    description: "Installation, mise en service et maintenance de pompes à chaleur air-air et air-eau. Éligible aux aides de l'État.",
    price: 'Sur devis',
    duration: 'Projet planifié',
    icon: Thermometer,
  },
  {
    title: 'Robinetterie & sanitaires',
    description: "Remplacement de mitigeurs, mécanismes de chasse d'eau, installation WC, lavabos et douches. Finitions soignées.",
    price: 'Sur devis',
    duration: 'Selon intervention',
    icon: Pipette,
  },
];

export const trustPoints = [
  {
    title: 'Intervention rapide',
    description: "Prise en charge rapide avec arrivée selon votre localisation. Confirmation du délai dès l'appel.",
    icon: Timer,
  },
  {
    title: 'Artisans certifiés',
    description: 'Plombiers qualifiés, assurés et formés aux standards de qualité les plus stricts.',
    icon: ShieldCheck,
  },
  {
    title: 'Tarifs transparents',
    description: 'Annonce claire du prix avant travaux. Pas de frais cachés, pas de mauvaise surprise.',
    icon: Zap,
  },
  {
    title: 'Disponibles 24h/24 - 7j/7',
    description: 'Soir, week-end, jours fériés : une équipe reste joignable pour toute urgence plomberie.',
    icon: Star,
  },
];

export const quickProblems = [
  {
    title: 'Chaudière en panne',
    text: 'Gaz, fioul, granulés ou PAC',
    href: '#contact',
  },
  {
    title: "Ballon d'eau chaude en panne",
    text: 'Dépannage, détartrage ou remplacement',
    href: '#contact',
  },
  {
    title: 'Ramonage cheminée bois',
    text: "Tarif fixe 80 € autour d'Orléans",
    href: '#contact',
  },
];

export const keyStats = [
  { target: 30, suffix: ' min', label: 'Délai moyen de rappel' },
  { target: 1800, suffix: '+', label: 'Interventions annuelles' },
  { target: 96, suffix: ' %', label: 'Résolution au premier passage' },
  { target: 4.9, suffix: '/5', decimals: 1, label: 'Satisfaction client moyenne' },
];

export const faqItems = [
  {
    question: "En combien de temps pouvez-vous intervenir en urgence ?",
    answer:
      "Les délais varient selon votre localisation et la demande. Nous confirmons le délai d'arrivée lors de votre appel. Notre équipe est mobilisée pour les urgences 24h/24.",
  },
  {
    question: 'Le devis est-il vraiment gratuit ?',
    answer:
      "Oui. Le devis est gratuit et sans engagement. Vous validez toujours le montant avant le début de l'intervention.",
  },
  {
    question: 'Y a-t-il une majoration le soir ou le week-end ?',
    answer:
      "Nos tarifs sont annoncés en toute transparence. Si une majoration s'applique, elle est clairement indiquée avant intervention.",
  },
  {
    question: 'Quelles garanties proposez-vous après travaux ?',
    answer:
      'Nos interventions sont couvertes et réalisées par des professionnels assurés. Nous restons disponibles après chantier en cas de besoin.',
  },
  {
    question: 'Intervenez-vous aussi pour les projets de rénovation ?',
    answer:
      'Oui, nous accompagnons aussi les projets planifiés : rénovation salle de bain, remplacement réseau, installation sanitaire complète.',
  },
];

export const projects = [
  {
    title: 'Chaudière à gaz : avant / après',
    before: 'Installation encrassée avec performance dégradée',
    after: 'Chaudière nettoyée, réglée et remise en service',
    impact: 'Chauffe stable et meilleur rendement',
    image: imgAvantApresGaz,
    proof: imgViessmannSystem,
  },
  {
    title: 'Chaudière fioul : avant / après',
    before: 'Système ancien avec pertes de performance',
    after: 'Réglage, sécurisation et redémarrage fiable',
    impact: 'Confort retrouvé et réduction des pannes',
    image: imgAvantApresFioul,
    proof: imgBoilerCabinet,
  },
  {
    title: 'Ballon thermodynamique : avant / après',
    before: "Production d'eau chaude irrégulière",
    after: 'Installation optimisée et fonctionnement régulier',
    impact: 'Eau chaude fiable et consommation maîtrisée',
    image: imgAvantApresThermo,
    proof: imgThermostatWall,
  },
  {
    title: 'Pompe à chaleur : avant / après',
    before: 'Équipement peu performant et bruit élevé',
    after: 'PAC installée/réglée avec fonctionnement stable',
    impact: 'Meilleure efficacité et confort thermique',
    image: imgAvantApresPac,
    proof: imgHeatPumpOutdoor,
  },
  {
    title: 'Salle de bain : avant / après',
    before: 'Espace ancien et peu fonctionnel',
    after: 'Rénovation complète avec finitions propres',
    impact: 'Confort quotidien et esthétique améliorée',
    image: imgAvantApresSdb,
    proof: imgShowerPanel,
  },
];

export const workGallery = [
  imgTechnician,
  imgHeatPumpOutdoor,
  imgHeatingSystem,
  imgBathroomToilet,
  imgDualBoilers,
  imgBoilerCabinet,
  imgWaterTreatment,
  imgSmartThermostat,
];

export const partnerLogoBoards = [logoBoardMain, logoBoardExtraA, logoBoardExtraB];

export const testimonials = [
  {
    name: 'Sophie Martin',
    text: 'Panne de chaudière gérée très vite. Travail propre et explications claires. Je recommande !',
    area: 'Saint-Jean-de-Braye',
    job: 'Dépannage chauffage',
  },
  {
    name: 'Karim Benali',
    text: 'Intervention sérieuse, ponctuelle, et devis respecté. Je recommande fortement.',
    area: 'Orléans',
    job: 'Débouchage évacuation',
  },
  {
    name: 'Claire Dubois',
    text: "Installation de chauffe-eau impeccable avec de très bons conseils techniques.",
    area: 'Fleury-les-Aubrais',
    job: 'Remplacement chauffe-eau',
  },
  {
    name: 'Marc Lefèvre',
    text: "Rénovation complète de notre salle de bain. Résultat impeccable, délais respectés et équipe très professionnelle.",
    area: 'Saran',
    job: 'Rénovation salle de bain',
  },
  {
    name: 'Nadia Rousseau',
    text: "Ramonage effectué rapidement et proprement. Certificat remis sur place. Très satisfaite du service.",
    area: 'Chécy',
    job: 'Ramonage cheminée',
  },
];

export const cities = [
  'Saint-Jean-de-Braye',
  'Orléans',
  'Fleury-les-Aubrais',
  'Saran',
  'Semoy',
  'Chécy',
];
