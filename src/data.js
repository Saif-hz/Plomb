import {
  Bath,
  Droplets,
  Flame,
  ShieldCheck,
  Star,
  Timer,
  Wrench,
  Zap,
} from 'lucide-react';

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#projects' },
  { label: 'Avis', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const services = [
  {
    title: 'Réparation de fuite',
    description: 'Recherche precise, reparation durable, protection de vos murs et plafonds.',
    price: 'A partir de 89 EUR',
    duration: '30 a 90 min',
    icon: Droplets,
  },
  {
    title: 'Débouchage canalisation',
    description: 'Debouchage mecanique ou haute pression avec controle du debit en fin d intervention.',
    price: 'A partir de 110 EUR',
    duration: '45 a 120 min',
    icon: Wrench,
  },
  {
    title: 'Installation chauffe-eau',
    description: 'Pose, raccordement et mise en service avec verification pression et securite.',
    price: 'A partir de 690 EUR',
    duration: '2 a 4 h',
    icon: Flame,
  },
  {
    title: 'Rénovation salle de bain',
    description: 'Refonte complete reseau sanitaire et optimisation des volumes et finitions.',
    price: 'Sur devis',
    duration: 'Projet planifie',
    icon: Bath,
  },
];

export const trustPoints = [
  {
    title: 'Intervention rapide',
    description: 'Prise en charge immédiate et arrivée moyenne en moins de 45 minutes en urgence.',
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
    title: 'J ai une fuite',
    text: 'Salle de bain, cuisine, compteur ou tuyau apparent',
    href: '#contact',
  },
  {
    title: 'Canalisation bouchee',
    text: 'WC, evier, douche ou evacuation principale',
    href: '#contact',
  },
  {
    title: 'Plus d eau chaude',
    text: 'Ballon en panne, thermostat, groupe securite',
    href: '#contact',
  },
];

export const keyStats = [
  { target: 12, suffix: ' min', label: 'Delai moyen de rappel' },
  { target: 1800, suffix: '+', label: 'Interventions annuelles' },
  { target: 96, suffix: ' %', label: 'Resolution au premier passage' },
  { target: 4.9, suffix: '/5', decimals: 1, label: 'Satisfaction client moyenne' },
];

export const faqItems = [
  {
    question: 'En combien de temps pouvez-vous intervenir en urgence ?',
    answer:
      'Selon votre secteur, notre equipe peut intervenir entre 20 et 45 minutes. En cas de forte demande, nous vous donnons un delai precis des le premier appel.',
  },
  {
    question: 'Le devis est-il vraiment gratuit ?',
    answer:
      'Oui. Le devis est gratuit et sans engagement. Vous validez toujours le montant avant le debut de l intervention.',
  },
  {
    question: 'Y a-t-il une majoration le soir ou le week-end ?',
    answer:
      'Nos tarifs sont annonces en toute transparence. Si une majoration s applique, elle est clairement indiquee avant intervention.',
  },
  {
    question: 'Quelles garanties proposez-vous apres travaux ?',
    answer:
      'Nos interventions sont couvertes et realisees par des professionnels assures. Nous restons disponibles apres chantier en cas de besoin.',
  },
  {
    question: 'Intervenez-vous aussi pour les projets de renovation ?',
    answer:
      'Oui, nous accompagnons aussi les projets planifies: renovation salle de bain, remplacement reseau, installation sanitaire complete.',
  },
];

export const projects = [
  {
    title: 'Remise a neuf reseau cuisine',
    before: 'Tuyauterie sous évier corrodée et fuites récurrentes',
    after: 'Nouveau réseau cuivre, raccords sécurisés, zéro fuite',
    impact: 'Perte d eau reduite de 100% et pression stabilisee',
  },
  {
    title: 'Sauvetage évacuation douche',
    before: 'Canalisation totalement obstruée et débordement',
    after: 'Écoulement rétabli avec curage profond et remplacement siphon',
    impact: 'Ecoulement nominal retrouve en moins d une heure',
  },
  {
    title: 'Remplacement chauffe-eau',
    before: 'Ancien ballon peu performant et instable',
    after: 'Nouveau modèle éco-performant avec pression constante',
    impact: 'Confort eau chaude immediat et consommation reduite',
  },
  {
    title: 'Rénovation complète SDB',
    before: 'Plomberie vieillissante et implantation inefficace',
    after: 'Salle de bain contemporaine et réseau optimisé',
    impact: 'Espace optimise et fiabilite long terme',
  },
];

export const testimonials = [
  {
    name: 'Sophie Martin',
    text: 'Fuite réglée en moins d’une heure. Intervention propre, rapide et tout était expliqué clairement.',
    area: 'Lyon 3e',
    job: 'Fuite sous evier',
  },
  {
    name: 'Karim Benali',
    text: 'Excellent suivi du premier appel à la fin du chantier. Travail soigné et tarif honnête.',
    area: 'Villeurbanne',
    job: 'Debouchage evacuation',
  },
  {
    name: 'Claire Dubois',
    text: 'Installation du chauffe-eau impeccable. Très bons conseils pour choisir un modèle adapté.',
    area: 'Caluire',
    job: 'Remplacement chauffe-eau',
  },
];

export const cities = ['Lyon', 'Villeurbanne', 'Bron', 'Caluire-et-Cuire', 'Vénissieux', 'Oullins'];
