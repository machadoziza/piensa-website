import { Language } from './contexts/LanguageContext';

export const translations: Record<Language, any> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    home: {
      hero: {
        title: 'Powering Honduras with Clean Energy',
        subtitle: 'Solar + BESS renewable energy solutions for the Dry Corridor',
        cta: 'Learn More',
      },
      mission: {
        title: 'Our Mission',
        description: 'Pilas Energy S.A. is committed to developing renewable energy projects in Lempira, Ocotepeque, and Intibucá, bringing stability to the electrical grid and economic opportunities to local communities.',
      },
      impact: {
        title: 'Our Impact',
        residents: 'Residents Served',
        municipalities: 'Municipalities',
        capacity: 'Solar Capacity',
        storage: 'Battery Storage',
      },
    },
    about: {
      title: 'Context and Background',
      intro: 'Understanding the challenges and opportunities in the Dry Corridor',
      history: {
        title: 'Historical Context',
        description: 'Since the late 1960s with the 1969 War, followed by the Salvadoran civil war in the 1980s, this border area has suffered persecution and expulsion of hundreds of border families who emigrated abroad and also to the interior of the country. Then in the 1990s, like the rest of the country, this area was impoverished by Structural Adjustment and the dispossession of public companies: Energy, Telephony, infrastructure, etc. Over the last ten years, the poverty crisis has reached 74% of the Honduran population.',
      },
      opportunity: {
        title: 'The Great Opportunity',
        description: 'The great opportunity for the more than 179,392 inhabitants of the more than 25 municipalities in the Southwest Border with El Salvador is that the Honduran Border is in the Central American Dry Corridor, rich in clean energy sources such as Solar, Hydrological, and Geothermal.',
      },
      energyNeed: {
        title: 'Energy Infrastructure Needs',
        description: 'According to the National Dispatch Center (CND) of ENEE, in the ERA-L372 Circuit there is a demand of 32MW of which only 12MW is covered, leaving a need of 20MW that is not yet covered. This does not consider new residential, commercial, and industrial users connecting to the grid.',
      },
      solution: {
        title: 'Our Solution',
        description: 'Clean energy production projects would improve the ENEE System by providing power and stability to the energy grid of the ERA-L372 Circuit transmission line that feeds the Sub-Station in Erandique, Lempira, avoiding energy losses due to distance since it currently arrives from the Cañaveral and Cajón Hydroelectric Plants which are more than 500 kilometers away.',
      },
    },
    projects: {
      title: 'Our Projects',
      intro: 'Solar + BESS renewable energy initiative transforming the region',
      firstProject: 'First Registered Clean Energy Project in Lempira',
      main: {
        title: 'Solar + BESS Energy Project',
        location: 'Gualcinse, Lempira',
        departments: 'Serving: Lempira, Ocotepeque, Intibucá',
        municipalities: 'Municipalities: Gualcinse, La Virtud, Mapulaca, Erandique',
        description: 'A group of natives from the border area with El Salvador have begun the initiative to produce clean energy with a 10MW solar farm combined with 4MW Battery Energy Storage System (BESS) located in Gualcinse, Lempira, which would be connected to the ERA-L372 Circuit of the national grid owned by ENEE.',
      },
      benefits: {
        title: 'Project Benefits',
        stability: 'Grid Stability',
        stabilityDesc: 'Provide power and stability to the regional electrical network with battery storage',
        jobs: 'Job Creation',
        jobsDesc: 'Generate employment opportunities for local residents',
        industry: 'Industrial Development',
        industryDesc: 'Enable local processing industries for milk, fruits, coffee, and bakery products',
        migration: 'Reduce Emigration',
        migrationDesc: 'Create opportunities that allow people to stay in their communities',
      },
      energy: {
        title: 'Energy Sources',
        solar: 'Solar Energy',
        bess: 'Battery Storage (BESS)',
        hydro: 'Hydroelectric',
        geo: 'Geothermal',
      },
    },
    contact: {
      title: 'Contact Us',
      intro: 'Get in touch with the Pilas Energy team',
      email: 'Email',
      whatsapp: 'WhatsApp',
      location: 'Location',
      locationText: 'Gualcinse, Lempira, Honduras',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
      },
    },
    footer: {
      description: 'Solar + BESS renewable energy solutions for sustainable development in Honduras',
      rights: 'All rights reserved',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Acerca',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    home: {
      hero: {
        title: 'Energizando Honduras con Energía Limpia',
        subtitle: 'Soluciones de energía renovable Solar + BESS para el Corredor Seco',
        cta: 'Conocer Más',
      },
      mission: {
        title: 'Nuestra Misión',
        description: 'Pilas Energy S.A. está comprometida con el desarrollo de proyectos de energía renovable en Lempira, Ocotepeque e Intibucá, brindando estabilidad a la red eléctrica y oportunidades económicas a las comunidades locales.',
      },
      impact: {
        title: 'Nuestro Impacto',
        residents: 'Residentes Servidos',
        municipalities: 'Municipios',
        capacity: 'Capacidad Solar',
        storage: 'Almacenamiento de Batería',
      },
    },
    about: {
      title: 'Contexto y Antecedentes',
      intro: 'Comprendiendo los desafíos y oportunidades en el Corredor Seco',
      history: {
        title: 'Contexto Histórico',
        description: 'Desde finales de los años 60s con la Guerra del 69, luego la guerra civil salvadoreña en los 80s esta área fronteriza ha sufrido persecución y expulsión de cientos de familias fronterizas que emigraron hacia el extranjero y también al interior del país. Luego en los 90s igual que todo el resto del país esta zona fue empobrecida por el Ajuste Estructural de la Economía y el despojo de las empresas públicas Energía, Telefonía, infraestructura, etc. y los últimos diez años el drama de la pobreza ha alcanzado al 74% de la población hondureña.',
      },
      opportunity: {
        title: 'La Gran Oportunidad',
        description: 'La gran oportunidad para los más de 179,392 habitantes de los más de 25 municipios del Sur Occidente Fronterizo con El Salvador es que La Frontera hondureña está en el Corredor Seco Centroamericano, ricas en fuentes de energía limpia como Solar, Hidrológicas y Geotérmicas.',
      },
      energyNeed: {
        title: 'Necesidades de Infraestructura Energética',
        description: 'Según el Centro Nacional de Despacho (CND) de la ENEE en el Circuito ERA-L372 existe una demanda de 32MW de la cual solo se cubre 12MW existiendo una necesidad de 20MW que aún no está cubierta, esto sin considerar los nuevos usuarios residencias, comerciales e industriales que se conectan a la red.',
      },
      solution: {
        title: 'Nuestra Solución',
        description: 'Los proyectos de producción de energía limpia vendrían a mejorar el Sistema de la ENEE dándole potencia y estabilidad a la red energética de la línea de transmisión del Circuito ERA-L372 que alimenta a la Sub-Estación en Erandique, Lempira, evitando perdidas de energía por distancia ya que actualmente llega desde las Centrales Hidroeléctricas de Cañaveral y Cajón que se encuentran a más de 500 kilómetros.',
      },
    },
    projects: {
      title: 'Nuestros Proyectos',
      intro: 'Iniciativa de energía renovable Solar + BESS transformando la región',
      firstProject: 'Primer Proyecto de Energía Limpia Registrado en Lempira',
      main: {
        title: 'Proyecto de Energía Solar + BESS',
        location: 'Gualcinse, Lempira',
        departments: 'Sirviendo: Lempira, Ocotepeque, Intibucá',
        municipalities: 'Municipios: Gualcinse, La Virtud, Mapulaca, Erandique',
        description: 'Un grupo de oriundos de la zona fronteriza con El Salvador han comenzado con la iniciativa de producir energía limpia con una granja solar de 10MW combinada con un Sistema de Almacenamiento de Energía en Baterías (BESS) de 4MW ubicado en Gualcinse, Lempira, el cual sería conectado al Circuito ERA-L372 de la red nacional propiedad de la ENEE.',
      },
      benefits: {
        title: 'Beneficios del Proyecto',
        stability: 'Estabilidad de la Red',
        stabilityDesc: 'Proporcionar potencia y estabilidad a la red eléctrica regional con almacenamiento en baterías',
        jobs: 'Creación de Empleo',
        jobsDesc: 'Generar oportunidades de empleo para los residentes locales',
        industry: 'Desarrollo Industrial',
        industryDesc: 'Permitir industrias de procesamiento local de leche, frutas, café y productos de panadería',
        migration: 'Reducir Emigración',
        migrationDesc: 'Crear oportunidades que permitan a las personas permanecer en sus comunidades',
      },
      energy: {
        title: 'Fuentes de Energía',
        solar: 'Energía Solar',
        bess: 'Almacenamiento en Baterías (BESS)',
        hydro: 'Hidroeléctrica',
        geo: 'Geotérmica',
      },
    },
    contact: {
      title: 'Contáctenos',
      intro: 'Póngase en contacto con el equipo de Pilas Energy',
      email: 'Correo Electrónico',
      whatsapp: 'WhatsApp',
      location: 'Ubicación',
      locationText: 'Gualcinse, Lempira, Honduras',
      form: {
        name: 'Nombre',
        email: 'Correo Electrónico',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
      },
    },
    footer: {
      description: 'Soluciones de energía renovable Solar + BESS para el desarrollo sostenible en Honduras',
      rights: 'Todos los derechos reservados',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      projects: 'Projets',
      contact: 'Contact',
    },
    home: {
      hero: {
        title: 'Alimenter le Honduras avec de l\'Énergie Propre',
        subtitle: 'Solutions d\'énergie renouvelable Solaire + BESS pour le Corridor Sec',
        cta: 'En Savoir Plus',
      },
      mission: {
        title: 'Notre Mission',
        description: 'Pilas Energy S.A. s\'engage à développer des projets d\'énergie renouvelable à Lempira, Ocotepeque et Intibucá, apportant stabilité au réseau électrique et opportunités économiques aux communautés locales.',
      },
      impact: {
        title: 'Notre Impact',
        residents: 'Résidents Desservis',
        municipalities: 'Municipalités',
        capacity: 'Capacité Solaire',
        storage: 'Stockage sur Batterie',
      },
    },
    about: {
      title: 'Contexte et Historique',
      intro: 'Comprendre les défis et opportunités dans le Corridor Sec',
      history: {
        title: 'Contexte Historique',
        description: 'Depuis la fin des années 1960 avec la guerre de 1969, suivie de la guerre civile salvadorienne dans les années 1980, cette zone frontalière a souffert de persécution et d\'expulsion de centaines de familles frontalières qui ont émigré à l\'étranger et également vers l\'intérieur du pays. Puis dans les années 1990, comme le reste du pays, cette zone a été appauvrie par l\'ajustement structurel et la dépossession des entreprises publiques: Énergie, Téléphonie, infrastructure, etc. Au cours des dix dernières années, la crise de la pauvreté a touché 74% de la population hondurienne.',
      },
      opportunity: {
        title: 'La Grande Opportunité',
        description: 'La grande opportunité pour les plus de 179 392 habitants des plus de 25 municipalités de la frontière sud-ouest avec le Salvador est que la frontière hondurienne se trouve dans le Corridor Sec centraméricain, riche en sources d\'énergie propre telles que le solaire, l\'hydrologique et le géothermique.',
      },
      energyNeed: {
        title: 'Besoins en Infrastructure Énergétique',
        description: 'Selon le Centre National de Répartition (CND) de l\'ENEE, dans le Circuit ERA-L372, il existe une demande de 32 MW dont seulement 12 MW sont couverts, laissant un besoin de 20 MW qui n\'est pas encore couvert. Cela ne considère pas les nouveaux utilisateurs résidentiels, commerciaux et industriels se connectant au réseau.',
      },
      solution: {
        title: 'Notre Solution',
        description: 'Les projets de production d\'énergie propre amélioreraient le système ENEE en fournissant puissance et stabilité au réseau électrique de la ligne de transmission du Circuit ERA-L372 qui alimente la sous-station d\'Erandique, Lempira, évitant les pertes d\'énergie dues à la distance puisqu\'elle arrive actuellement des centrales hydroélectriques de Cañaveral et Cajón qui sont à plus de 500 kilomètres.',
      },
    },
    projects: {
      title: 'Nos Projets',
      intro: 'Initiative d\'énergie renouvelable Solaire + BESS transformant la région',
      firstProject: 'Premier Projet d\'Énergie Propre Enregistré à Lempira',
      main: {
        title: 'Projet d\'Énergie Solaire + BESS',
        location: 'Gualcinse, Lempira',
        departments: 'Desservant: Lempira, Ocotepeque, Intibucá',
        municipalities: 'Municipalités: Gualcinse, La Virtud, Mapulaca, Erandique',
        description: 'Un groupe de natifs de la zone frontalière avec le Salvador a lancé l\'initiative de produire de l\'énergie propre avec une ferme solaire de 10 MW combinée à un système de stockage d\'énergie par batterie (BESS) de 4 MW situé à Gualcinse, Lempira, qui serait connecté au Circuit ERA-L372 du réseau national propriété de l\'ENEE.',
      },
      benefits: {
        title: 'Avantages du Projet',
        stability: 'Stabilité du Réseau',
        stabilityDesc: 'Fournir puissance et stabilité au réseau électrique régional avec stockage par batterie',
        jobs: 'Création d\'Emplois',
        jobsDesc: 'Générer des opportunités d\'emploi pour les résidents locaux',
        industry: 'Développement Industriel',
        industryDesc: 'Permettre les industries de transformation locales du lait, des fruits, du café et des produits de boulangerie',
        migration: 'Réduire l\'Émigration',
        migrationDesc: 'Créer des opportunités permettant aux gens de rester dans leurs communautés',
      },
      energy: {
        title: 'Sources d\'Énergie',
        solar: 'Énergie Solaire',
        bess: 'Stockage par Batterie (BESS)',
        hydro: 'Hydroélectrique',
        geo: 'Géothermique',
      },
    },
    contact: {
      title: 'Contactez-Nous',
      intro: 'Entrez en contact avec l\'équipe de Pilas Energy',
      email: 'Email',
      whatsapp: 'WhatsApp',
      location: 'Localisation',
      locationText: 'Gualcinse, Lempira, Honduras',
      form: {
        name: 'Nom',
        email: 'Email',
        message: 'Message',
        send: 'Envoyer le Message',
      },
    },
    footer: {
      description: 'Solutions d\'énergie renouvelable Solaire + BESS pour le développement durable au Honduras',
      rights: 'Tous droits réservés',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      about: 'Über Uns',
      projects: 'Projekte',
      contact: 'Kontakt',
    },
    home: {
      hero: {
        title: 'Honduras mit Sauberer Energie Versorgen',
        subtitle: 'Solar + BESS Erneuerbare Energielösungen für den Trockenkorridor',
        cta: 'Mehr Erfahren',
      },
      mission: {
        title: 'Unsere Mission',
        description: 'Pilas Energy S.A. ist der Entwicklung erneuerbarer Energieprojekte in Lempira, Ocotepeque und Intibucá verpflichtet und bringt Stabilität ins Stromnetz sowie wirtschaftliche Chancen für lokale Gemeinden.',
      },
      impact: {
        title: 'Unsere Wirkung',
        residents: 'Versorgte Einwohner',
        municipalities: 'Gemeinden',
        capacity: 'Solarkapazität',
        storage: 'Batteriespeicher',
      },
    },
    about: {
      title: 'Kontext und Hintergrund',
      intro: 'Die Herausforderungen und Chancen im Trockenkorridor verstehen',
      history: {
        title: 'Historischer Kontext',
        description: 'Seit den späten 1960er Jahren mit dem Krieg von 1969, gefolgt vom salvadorianischen Bürgerkrieg in den 1980er Jahren, hat dieses Grenzgebiet Verfolgung und Vertreibung von Hunderten von Grenzfamilien erlitten, die ins Ausland und auch ins Landesinnere emigrierten. Dann in den 1990er Jahren, wie der Rest des Landes, wurde dieses Gebiet durch Strukturanpassung und die Enteignung öffentlicher Unternehmen verarmt: Energie, Telefonie, Infrastruktur usw. In den letzten zehn Jahren hat die Armutskrise 74% der honduranischen Bevölkerung erreicht.',
      },
      opportunity: {
        title: 'Die Große Chance',
        description: 'Die große Chance für die mehr als 179.392 Einwohner der mehr als 25 Gemeinden im südwestlichen Grenzgebiet zu El Salvador ist, dass die honduranische Grenze im zentralamerikanischen Trockenkorridor liegt, reich an sauberen Energiequellen wie Solar, Wasserkraft und Geothermie.',
      },
      energyNeed: {
        title: 'Energieinfrastrukturbedarf',
        description: 'Laut dem Nationalen Versandzentrum (CND) der ENEE gibt es im ERA-L372-Stromkreis eine Nachfrage von 32 MW, von denen nur 12 MW gedeckt werden, was einen Bedarf von 20 MW hinterlässt, der noch nicht gedeckt ist. Dies berücksichtigt nicht die neuen Wohn-, Gewerbe- und Industrienutzer, die sich an das Netz anschließen.',
      },
      solution: {
        title: 'Unsere Lösung',
        description: 'Projekte zur Produktion sauberer Energie würden das ENEE-System verbessern, indem sie dem Stromnetz der ERA-L372-Übertragungsleitung, die die Unterstation in Erandique, Lempira, versorgt, Leistung und Stabilität verleihen und Energieverluste durch Entfernung vermeiden, da sie derzeit von den Wasserkraftwerken Cañaveral und Cajón ankommen, die mehr als 500 Kilometer entfernt sind.',
      },
    },
    projects: {
      title: 'Unsere Projekte',
      intro: 'Solar + BESS Erneuerbare Energie-Initiative transformiert die Region',
      firstProject: 'Erstes Registriertes Saubere-Energie-Projekt in Lempira',
      main: {
        title: 'Solar + BESS Energieprojekt',
        location: 'Gualcinse, Lempira',
        departments: 'Bedienung: Lempira, Ocotepeque, Intibucá',
        municipalities: 'Gemeinden: Gualcinse, La Virtud, Mapulaca, Erandique',
        description: 'Eine Gruppe von Einheimischen aus dem Grenzgebiet zu El Salvador hat die Initiative ergriffen, saubere Energie mit einer 10-MW-Solaranlage kombiniert mit einem 4-MW-Batteriespeichersystem (BESS) zu produzieren, das sich in Gualcinse, Lempira befindet und an den ERA-L372-Stromkreis des nationalen Netzes im Besitz der ENEE angeschlossen werden soll.',
      },
      benefits: {
        title: 'Projektvorteile',
        stability: 'Netzstabilität',
        stabilityDesc: 'Leistung und Stabilität für das regionale Stromnetz mit Batteriespeicher bereitstellen',
        jobs: 'Arbeitsplatzschaffung',
        jobsDesc: 'Beschäftigungsmöglichkeiten für lokale Bewohner schaffen',
        industry: 'Industrielle Entwicklung',
        industryDesc: 'Lokale Verarbeitungsindustrien für Milch, Früchte, Kaffee und Backwaren ermöglichen',
        migration: 'Auswanderung Reduzieren',
        migrationDesc: 'Chancen schaffen, die es den Menschen ermöglichen, in ihren Gemeinden zu bleiben',
      },
      energy: {
        title: 'Energiequellen',
        solar: 'Solarenergie',
        bess: 'Batteriespeicher (BESS)',
        hydro: 'Wasserkraft',
        geo: 'Geothermie',
      },
    },
    contact: {
      title: 'Kontaktieren Sie Uns',
      intro: 'Nehmen Sie Kontakt mit dem Pilas Energy Team auf',
      email: 'E-Mail',
      whatsapp: 'WhatsApp',
      location: 'Standort',
      locationText: 'Gualcinse, Lempira, Honduras',
      form: {
        name: 'Name',
        email: 'E-Mail',
        message: 'Nachricht',
        send: 'Nachricht Senden',
      },
    },
    footer: {
      description: 'Solar + BESS Erneuerbare Energielösungen für nachhaltige Entwicklung in Honduras',
      rights: 'Alle Rechte vorbehalten',
    },
  },
};

export function getTranslation(language: Language) {
  return translations[language];
}