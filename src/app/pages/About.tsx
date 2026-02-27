import { History, Lightbulb, Zap, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

export function About() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const sections = [
    {
      icon: History,
      title: t.about.history.title,
      content: t.about.history.description,
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Lightbulb,
      title: t.about.opportunity.title,
      content: t.about.opportunity.description,
      color: 'from-yellow-500 to-amber-500',
    },
    {
      icon: Zap,
      title: t.about.energyNeed.title,
      content: t.about.energyNeed.description,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: CheckCircle,
      title: t.about.solution.title,
      content: t.about.solution.description,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-700 to-emerald-700 text-white py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.about.title}</h1>
          <p className="text-xl text-green-50 max-w-3xl">{t.about.intro}</p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center`}
                  >
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {language === 'en' && 'Key Statistics'}
            {language === 'es' && 'Estadísticas Clave'}
            {language === 'fr' && 'Statistiques Clés'}
            {language === 'de' && 'Wichtige Statistiken'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <div className="text-4xl font-bold text-green-700 mb-2">74%</div>
              <div className="text-gray-700">
                {language === 'en' && 'Poverty rate in Honduras'}
                {language === 'es' && 'Tasa de pobreza en Honduras'}
                {language === 'fr' && 'Taux de pauvreté au Honduras'}
                {language === 'de' && 'Armutsrate in Honduras'}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
              <div className="text-4xl font-bold text-blue-700 mb-2">32MW</div>
              <div className="text-gray-700">
                {language === 'en' && 'Total energy demand in ERA-L372 circuit'}
                {language === 'es' && 'Demanda total de energía en circuito ERA-L372'}
                {language === 'fr' && 'Demande énergétique totale dans le circuit ERA-L372'}
                {language === 'de' && 'Gesamter Energiebedarf im ERA-L372-Stromkreis'}
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
              <div className="text-4xl font-bold text-orange-700 mb-2">500km</div>
              <div className="text-gray-700">
                {language === 'en' && 'Distance from current power plants'}
                {language === 'es' && 'Distancia de las centrales eléctricas actuales'}
                {language === 'fr' && 'Distance des centrales électriques actuelles'}
                {language === 'de' && 'Entfernung von aktuellen Kraftwerken'}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
