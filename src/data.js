import {
  Bath,
  Flame,
  Droplets,
  ShieldCheck,
  Star,
  Timer,
  Wrench,
  Zap,
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
import imgBeforeRenovation from './images/eea53c82-b8fb-489c-9482-1f6239991a1c.jpg';
import imgAfterRenovation from './images/efb6d97e-f8e6-4039-9213-ea90b73cef4b.jpg';
import imgWorkInProgress from './images/f11a4be3-fa0d-446d-903c-451a553156e7.jpg';
import imgProofSmallOne from './images/f42d3aa4-52ed-4753-b185-984755ac7f12.jpg';
import imgProofSmallTwo from './images/f9e2da8e-37d1-42e6-829e-a6251e6bc674.jpg';
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
  email: 'Aquachauffagiste45@gmail.com',
  addressLine: '24 rue de la Sente',
  postalCity: '45800 Saint-Jean-de-Braye',
  city: 'Orleans',
  regionCode: 'FR-45',
  latitude: 47.9029,
  longitude: 1.9093,
};

export const heroImage = imgViessmannSystem;

export const services = [
  {
    title: 'Dépannage fuite d\'eau',
    description: 'Recherche de fuite visible ou encastrée, réparation rapide et contrôle d\'étanchéité.',
    price: 'À partir de 90 EUR',
    duration: '30 à 90 min',
    icon: Droplets,
    image: imgTechnician,
  },
  {
    title: 'Débouchage canalisation',
    description: 'Débouchage mécanique ou haute pression avec vérification complète des évacuations.',
    price: 'À partir de 120 EUR',
    duration: '45 à 120 min',
    icon: Wrench,
    image: imgWaterTreatment,
  },
  {
    title: 'Installation chaudière / chauffe-eau',
    description: 'Pose, remplacement et mise en service avec réglages pour performance et sécurité.',
    price: 'À partir de 750 EUR',
    duration: '2 à 4 h',
    icon: Flame,
    image: imgBoilerCabinet,
  },
  {
    title: 'Rénovation salle de bain',
    description: 'Rénovation complète, pose sanitaire et robinetterie avec finitions soignées.',
    price: 'Sur devis',
    duration: 'Projet planifié',
    icon: Bath,
    image: imgShowerPanel,
  },
];

export const trustPoints = [
  {
    title: 'Intervention rapide',
    description: 'Prise en charge rapide avec arrivée sous 60 minutes selon votre localisation.',
    icon: Timer,
  },
  {
    title: 'Artisans certifiés',
    description: 'Plombiers qualifiés, assurés, et formés aux standards de qualité les plus stricts.',
    icon: ShieldCheck,
  },
  {
    title: 'Tarifs transparents',
    description: 'Annonce claire du prix avant travaux. Pas de frais cachés, pas de mauvaise surprise.',
    icon: Zap,
  },
  {
    title: 'Disponibles 24h/24 - 7j/7',
    description: 'Soir, week-end, jours fériés: une équipe reste joignable pour toute urgence plomberie.',
    icon: Star,
  },
];

export const quickProblems = [
  {
    title: 'J\'ai une fuite',
    text: 'Salle de bain, cuisine, compteur ou tuyau apparent',
    href: '#contact',
  },
  {
    title: 'Canalisation bouchée',
    text: 'WC, évier, douche ou évacuation principale',
    href: '#contact',
  },
  {
    title: 'Plus d\'eau chaude',
    text: 'Ballon en panne, thermostat, groupe sécurité',
    href: '#contact',
  },
];

export const keyStats = [
  { target: 12, suffix: ' min', label: 'Délai moyen de rappel' },
  { target: 1800, suffix: '+', label: 'Interventions annuelles' },
  { target: 96, suffix: ' %', label: 'Résolution au premier passage' },
  { target: 4.9, suffix: '/5', decimals: 1, label: 'Satisfaction client moyenne' },
];

export const faqItems = [
  {
    question: 'En combien de temps pouvez-vous intervenir en urgence ?',
    answer:
      'Les délais varient selon votre localisation et la demande. Nous confirmons le délai d\'arrivée lors de votre appel. Notre équipe est mobilisée pour les urgences 24h/24.',
  },
  {
    question: 'Le devis est-il vraiment gratuit ?',
    answer:
      'Oui. Le devis est gratuit et sans engagement. Vous validez toujours le montant avant le début de l\'intervention.',
  },
  {
    question: 'Y a-t-il une majoration le soir ou le week-end ?',
    answer:
      'Nos tarifs sont annoncés en toute transparence. Si une majoration s\'applique, elle est clairement indiquée avant intervention.',
  },
  {
    question: 'Quelles garanties proposez-vous après travaux ?',
    answer:
      'Nos interventions sont couvertes et réalisées par des professionnels assurés. Nous restons disponibles après chantier en cas de besoin.',
  },
  {
    question: 'Intervenez-vous aussi pour les projets de rénovation ?',
    answer:
      'Oui, nous accompagnons aussi les projets planifiés: rénovation salle de bain, remplacement réseau, installation sanitaire complète.',
  },
];

export const projects = [
  {
    title: 'Rénovation complète chaufferie',
    before: 'Local ancien, installation vieillissante et rendement faible',
    after: 'Système moderne installé avec tuyauterie neuve et finitions propres',
    impact: 'Confort thermique retrouvé et baisse des pannes',
    image: imgAfterRenovation,
    proof: imgBeforeRenovation,
  },
  {
    title: 'Douche premium sur mesure',
    before: 'Salle d\'eau peu fonctionnelle',
    after: 'Colonne de douche design et robinetterie encastrée',
    impact: 'Finition haut de gamme et confort quotidien',
    image: imgShowerPanel,
    proof: imgProofSmallOne,
  },
  {
    title: 'Installation chaudière performante',
    before: 'Chaudière ancienne avec fortes variations',
    after: 'Nouvelle installation Viessmann avec réglage optimisé',
    impact: 'Eau chaude stable et meilleure efficacité',
    image: imgViessmannSystem,
    proof: imgWorkInProgress,
  },
  {
    title: 'Pack chauffage + régulation',
    before: 'Pilotage température imprécis',
    after: 'Thermostat intelligent et régulation efficace',
    impact: 'Confort constant et pilotage simplifié',
    image: imgThermostatWall,
    proof: imgProofSmallTwo,
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
    text: 'Panne de chaudiere geree tres vite. Travail propre et explications claires.',
    area: 'Saint-Jean-de-Braye',
    job: 'Depannage chauffage',
  },
  {
    name: 'Karim Benali',
    text: 'Intervention serieuse, ponctuelle, et devis respecte. Je recommande fortement.',
    area: 'Orleans',
    job: 'Debouchage evacuation',
  },
  {
    name: 'Claire Dubois',
    text: 'Installation de chauffe-eau impeccable avec de tres bons conseils techniques.',
    area: 'Fleury-les-Aubrais',
    job: 'Remplacement chauffe-eau',
  },
];

export const cities = [
  'Saint-Jean-de-Braye',
  'Orleans',
  'Fleury-les-Aubrais',
  'Saran',
  'Semoy',
  'Checy',
];
