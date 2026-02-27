import { Link } from 'react-router';
import { ArrowRight, Users, Building2, Zap, TrendingDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  const stats = [
    { icon: Users, value: '179,392+', label: t.home.impact.residents },
    { icon: Building2, value: '4', label: t.home.impact.municipalities },
    { icon: Zap, value: '10MW', label: t.home.impact.capacity },
    { icon: TrendingDown, value: '4MW', label: t.home.impact.storage },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1769501378399-bbea7f5cfc94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHdpbmQlMjB0dXJiaW5lcyUyMHJlbmV3YWJsZSUyMGVuZXJneXxlbnwxfHx8fDE3NzIwMzkxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Renewable Energy"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.home.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-50">
              {t.home.hero.subtitle}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              {t.home.hero.cta}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.home.mission.title}
            </h2>
            <p className="text-lg text-gray-600">
              {t.home.mission.description}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {t.home.impact.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576266448917-992547cdaa2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kdXJhcyUyMG1vdW50YWlucyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzIwMzkxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Honduras Landscape"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1670519808965-16b9b2f724af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwZmllbGQlMjBncmVlbiUyMGVuZXJneXxlbnwxfHx8fDE3NzIwMzkxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Solar Energy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'en' && 'Ready to Learn More?'}
            {language === 'es' && '¿Listo para Saber Más?'}
            {language === 'fr' && 'Prêt à en Savoir Plus?'}
            {language === 'de' && 'Bereit, Mehr zu Erfahren?'}
          </h2>
          <p className="text-xl mb-8 text-green-50">
            {language === 'en' && 'Discover our renewable energy projects and their impact on local communities.'}
            {language === 'es' && 'Descubra nuestros proyectos de energía renovable y su impacto en las comunidades locales.'}
            {language === 'fr' && 'Découvrez nos projets d\'énergie renouvelable et leur impact sur les communautés locales.'}
            {language === 'de' && 'Entdecken Sie unsere erneuerbaren Energieprojekte und ihre Auswirkungen auf lokale Gemeinden.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              {t.nav.projects}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors"
            >
              {t.nav.contact}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}