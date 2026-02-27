import { Sun, Wind, Droplets, Flame, MapPin, CheckCircle2, Battery } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import projectImage from 'figma:asset/55353689f38e06ecf162af8501015ea515508f40.png';

export function Projects() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const energySources = [
    { icon: Sun, name: t.projects.energy.solar, color: 'from-yellow-400 to-orange-500' },
    { icon: Battery, name: t.projects.energy.bess, color: 'from-green-500 to-emerald-600' },
    { icon: Droplets, name: t.projects.energy.hydro, color: 'from-blue-500 to-indigo-500' },
    { icon: Flame, name: t.projects.energy.geo, color: 'from-red-500 to-orange-600' },
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      title: t.projects.benefits.stability,
      description: t.projects.benefits.stabilityDesc,
    },
    {
      icon: CheckCircle2,
      title: t.projects.benefits.jobs,
      description: t.projects.benefits.jobsDesc,
    },
    {
      icon: CheckCircle2,
      title: t.projects.benefits.industry,
      description: t.projects.benefits.industryDesc,
    },
    {
      icon: CheckCircle2,
      title: t.projects.benefits.migration,
      description: t.projects.benefits.migrationDesc,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-700 to-emerald-700 text-white py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.projects.title}</h1>
          <p className="text-xl text-green-50 max-w-3xl">{t.projects.intro}</p>
        </div>
      </section>

      {/* Main Project */}
      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {/* First Project Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full shadow-lg">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-semibold">{t.projects.firstProject}</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <ImageWithFallback
                  src={projectImage}
                  alt="Pilas Energy Project Site"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {t.projects.main.title}
                </h2>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600" />
                    <span>{t.projects.main.location}</span>
                  </div>
                  <div className="text-sm text-gray-500 ml-7">
                    {t.projects.main.departments}
                  </div>
                  <div className="text-sm text-gray-500 ml-7">
                    {t.projects.main.municipalities}
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t.projects.main.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-700 mb-1">10 MW</div>
                    <div className="text-xs text-gray-600">
                      {language === 'en' && 'Solar Capacity'}
                      {language === 'es' && 'Capacidad Solar'}
                      {language === 'fr' && 'Capacité Solaire'}
                      {language === 'de' && 'Solarkapazität'}
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-700 mb-1">4 MW</div>
                    <div className="text-xs text-gray-600">BESS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Sources */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.projects.energy.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {energySources.map((source, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${source.color} rounded-full mb-4`}
                >
                  <source.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{source.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t.projects.benefits.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Enabled */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {language === 'en' && 'Industries We Enable'}
            {language === 'es' && 'Industrias que Habilitamos'}
            {language === 'fr' && 'Industries que Nous Permettons'}
            {language === 'de' && 'Branchen, die Wir Ermöglichen'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { emoji: '🥛', name: language === 'en' ? 'Milk Processing' : language === 'es' ? 'Procesamiento de Leche' : language === 'fr' ? 'Transformation Laitière' : 'Milchverarbeitung' },
              { emoji: '🍎', name: language === 'en' ? 'Fruit Processing' : language === 'es' ? 'Procesamiento de Frutas' : language === 'fr' ? 'Transformation de Fruits' : 'Fruchtverarbeitung' },
              { emoji: '☕', name: language === 'en' ? 'Coffee Roasting' : language === 'es' ? 'Tostado de Café' : language === 'fr' ? 'Torréfaction de Café' : 'Kaffeeröstung' },
              { emoji: '🥖', name: language === 'en' ? 'Bakery' : language === 'es' ? 'Panadería' : language === 'fr' ? 'Boulangerie' : 'Bäckerei' },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{industry.emoji}</div>
                <div className="text-sm font-medium text-gray-700">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}