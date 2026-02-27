import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations';

export function Contact() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:piensa@pilasenergy.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: t.contact.email,
      value: 'piensa@pilasenergy.com',
      href: 'mailto:piensa@pilasenergy.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: t.contact.whatsapp,
      value: '(504) 9619-4396',
      href: 'https://wa.me/50496194396',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      title: t.contact.location,
      value: t.contact.locationText,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-700 to-emerald-700 text-white py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.title}</h1>
          <p className="text-xl text-green-50 max-w-3xl">{t.contact.intro}</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${method.color} rounded-full mb-4`}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{method.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'en' && 'Send us a message'}
              {language === 'es' && 'Envíanos un mensaje'}
              {language === 'fr' && 'Envoyez-nous un message'}
              {language === 'de' && 'Senden Sie uns eine Nachricht'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-md font-semibold hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t.contact.form.send}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {language === 'en' && 'Our Service Area'}
            {language === 'es' && 'Nuestra Área de Servicio'}
            {language === 'fr' && 'Notre Zone de Service'}
            {language === 'de' && 'Unser Servicebereich'}
          </h2>
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-8 text-center border border-green-200">
            <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {language === 'en' && 'Gualcinse, Lempira'}
              {language === 'es' && 'Gualcinse, Lempira'}
              {language === 'fr' && 'Gualcinse, Lempira'}
              {language === 'de' && 'Gualcinse, Lempira'}
            </h3>
            <p className="text-gray-700 mb-4">
              {language === 'en' && 'Serving departments of Lempira, Ocotepeque, and Intibucá'}
              {language === 'es' && 'Sirviendo departamentos de Lempira, Ocotepeque e Intibucá'}
              {language === 'fr' && 'Desservant les départements de Lempira, Ocotepeque et Intibucá'}
              {language === 'de' && 'Bedienung der Departements Lempira, Ocotepeque und Intibucá'}
            </p>
            <div className="text-sm text-gray-600">
              <p>Gualcinse • La Virtud • Mapulaca • Erandique</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}