import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

export function Footer() {
  const { language } = useLanguage();
  const t = getTranslation(language);

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white px-3 py-2 rounded">
                <span className="font-bold text-xl">PILAS</span>
              </div>
              <span className="font-semibold text-lg">Energy S.A.</span>
            </div>
            <p className="text-gray-400 text-sm">{t.footer.description}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.contact.title}</h3>
            <div className="space-y-3">
              <a
                href="mailto:piensa@pilasenergy.com"
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">piensa@pilasenergy.com</span>
              </a>
              <a
                href="https://wa.me/50496194396"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">(504) 9619-4396</span>
              </a>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{t.contact.locationText}</span>
              </div>
            </div>
          </div>

          {/* Map/Additional Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.contact.location}</h3>
            <p className="text-gray-400 text-sm mb-2">Gualcinse, Lempira</p>
            <p className="text-gray-400 text-sm">Honduras, Centroamérica</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Pilas Energy S.A. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}