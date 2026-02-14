import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Leaf, Info, ExternalLink, ArrowRight } from 'lucide-react';
import { setPageSEO } from '../utils/seo';

const faqData = [
    {
      question: "Qu'est-ce que la LEZ Bruxelles ?",
      answer: "La LEZ (Low Emission Zone) est une zone de basses émissions qui couvre l'ensemble de la Région de Bruxelles-Capitale. Elle vise à améliorer la qualité de l'air en restreignant l'accès aux véhicules les plus polluants. Depuis 2026, seuls les véhicules diesel Euro 6 et essence Euro 5 minimum peuvent circuler."
    },
    {
      question: "Votre flotte est-elle conforme aux normes LEZ 2026 ?",
      answer: "Oui, 100% de notre flotte est conforme aux normes LEZ Bruxelles 2026. Tous nos bus et minibus respectent la norme Euro 6, ce qui garantit votre libre circulation dans toute la zone de basses émissions de Bruxelles sans aucune restriction."
    },
    {
      question: "Quels sont les avantages d'une flotte Euro 6 ?",
      answer: "Les véhicules Euro 6 émettent jusqu'à 80% moins d'oxydes d'azote (NOx) que les véhicules Euro 5. Ils contribuent à améliorer la qualité de l'air, réduisent votre empreinte carbone et garantissent votre conformité avec les réglementations environnementales actuelles et futures."
    },
    {
      question: "Puis-je circuler partout à Bruxelles avec vos véhicules ?",
      answer: "Absolument. Grâce à notre flotte 100% conforme Euro 6, vous pouvez circuler librement dans toute la Région de Bruxelles-Capitale, y compris dans la zone LEZ, sans risque d'amende ou de restriction. Nos véhicules répondent aux normes les plus strictes."
    },
    {
      question: "Comment vérifier la conformité LEZ d'un véhicule ?",
      answer: "Vous pouvez vérifier la conformité d'un véhicule sur le site officiel lez.brussels en utilisant la plaque d'immatriculation. Pour nos véhicules, nous fournissons systématiquement les certificats de conformité Euro 6 sur demande."
    }
];

const LEZBruxellesPage = () => {
  useEffect(() => {
    setPageSEO({
      title: 'Conformité LEZ Bruxelles 2026 - Flotte 100% Conforme Normes Euro 6 | Location Bus',
      description: 'Notre flotte de bus et minibus est 100% conforme aux normes LEZ Bruxelles 2026. Véhicules Euro 6 pour circuler librement dans la zone de basses émissions. Transport écologique garanti.',
      keywords: 'LEZ Bruxelles, Low Emission Zone, norme Euro 6, zone basses émissions Bruxelles, transport écologique, bus conforme LEZ, réglementation environnementale Bruxelles 2026',
      ogType: 'article',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Conformité LEZ Bruxelles 2026 - Flotte 100% Conforme',
        description: 'Guide complet sur la conformité de notre flotte aux normes LEZ Bruxelles. Tous nos véhicules respectent les normes Euro 6 pour circuler dans la zone de basses émissions.',
        author: {
          '@type': 'Organization',
          name: 'Location Bus Belgique'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Location Bus Belgique',
          logo: {
            '@type': 'ImageObject',
            url: 'https://location-bus.be/logo.png'
          }
        },
        datePublished: '2026-01-01',
        dateModified: new Date().toISOString().split('T')[0]
      }
    });
  }, []);

  useEffect(() => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqData.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-12 pt-24">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
            <Leaf className="mr-2" size={20} />
            <span className="font-semibold">Flotte 100% Conforme LEZ 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conformité LEZ Bruxelles 2026
            <span className="block text-green-600 mt-2">Norme Euro 6 Garantie</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Notre flotte de bus et minibus est entièrement conforme aux normes de la zone de basses émissions (LEZ) de Bruxelles.
            Circulez en toute tranquillité dans la capitale belge avec nos véhicules Euro 6.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500">
            <Shield className="text-green-600 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">100% Conforme</h3>
            <p className="text-gray-600">
              Tous nos véhicules respectent la norme Euro 6, la plus stricte en matière d'émissions polluantes.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500">
            <CheckCircle className="text-green-600 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Zéro Restriction</h3>
            <p className="text-gray-600">
              Circulez librement dans toute la zone LEZ de Bruxelles sans risque d'amende ou de limitation.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500">
            <Leaf className="text-green-600 mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Écologique</h3>
            <p className="text-gray-600">
              Réduisez votre empreinte carbone avec des véhicules émettant jusqu'à 80% moins de NOx.
            </p>
          </div>
        </div>

        {/* What is LEZ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Qu'est-ce que la LEZ Bruxelles ?</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                La <strong>Low Emission Zone (LEZ)</strong> de Bruxelles est une zone environnementale qui couvre l'ensemble
                de la Région de Bruxelles-Capitale, soit les 19 communes bruxelloises. Cette mesure vise à améliorer
                significativement la qualité de l'air en limitant l'accès aux véhicules les plus polluants.
              </p>
              <p className="mb-4">
                Depuis le 1er janvier 2022, la LEZ est devenue progressivement plus stricte, avec des normes qui évoluent
                chaque année. En 2026, seuls les véhicules diesel répondant à la norme <strong>Euro 6</strong> et les
                véhicules essence de norme <strong>Euro 5 minimum</strong> sont autorisés à circuler.
              </p>
              <p>
                Le non-respect de ces normes expose les contrevenants à une amende de <strong>350€</strong> par infraction.
                C'est pourquoi il est essentiel de choisir un prestataire de transport dont la flotte est entièrement conforme.
              </p>
            </div>
          </div>
        </div>

        {/* Our Compliance */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl shadow-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Notre Engagement Environnemental Bruxelles</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Flotte 100% Euro 6</h3>
                  <p className="text-green-50">
                    Tous nos bus et minibus sont certifiés Euro 6, garantissant les émissions les plus faibles du marché
                    et une conformité totale avec la LEZ Bruxelles 2026.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Renouvellement Régulier</h3>
                  <p className="text-green-50">
                    Nous renouvelons régulièrement notre flotte pour maintenir les standards environnementaux les plus
                    élevés et anticiper les futures réglementations.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Entretien Premium</h3>
                  <p className="text-green-50">
                    Nos véhicules bénéficient d'un entretien régulier et rigoureux pour optimiser leur performance
                    environnementale et garantir leur conformité continue.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Certifications Disponibles</h3>
                  <p className="text-green-50">
                    Nous fournissons sur demande tous les certificats de conformité Euro 6 de nos véhicules pour
                    votre tranquillité d'esprit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Euro Standards Comparison */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Évolution des Normes LEZ Bruxelles</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Année</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Diesel Minimum</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Essence Minimum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-gray-600">2022</td>
                    <td className="px-6 py-4 text-gray-600">Euro 4</td>
                    <td className="px-6 py-4 text-gray-600">Euro 2</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-600">2023</td>
                    <td className="px-6 py-4 text-gray-600">Euro 5</td>
                    <td className="px-6 py-4 text-gray-600">Euro 3</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-6 py-4 font-bold text-green-800">2025-2026</td>
                    <td className="px-6 py-4 font-bold text-green-800">Euro 6</td>
                    <td className="px-6 py-4 font-bold text-green-800">Euro 5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Questions Fréquentes Bruxelles</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <details key={index} className="bg-white rounded-lg shadow-md p-6 group">
                <summary className="font-semibold text-lg cursor-pointer flex items-center justify-between">
                  {faq.question}
                  <Info size={20} className="text-green-600 group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Liens Officiels Bruxelles</h2>
            <div className="space-y-3">
              <a
                href="https://lez.brussels"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <ExternalLink size={18} className="mr-2" />
                Site officiel LEZ Bruxelles - Vérifier votre véhicule
              </a>
              <a
                href="https://lez.brussels/mytax/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <ExternalLink size={18} className="mr-2" />
                MyTax - Dérogations et autorisations
              </a>
              <a
                href="https://environnement.brussels/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <ExternalLink size={18} className="mr-2" />
                Bruxelles Environnement - Qualité de l'air
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Réservez Votre Transport Conforme LEZ Bruxelles</h2>
            <p className="text-xl mb-8 text-green-50">
              Voyagez en toute sérénité avec notre flotte 100% conforme aux normes environnementales 2026
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contactez-nous"
                className="inline-flex items-center justify-center bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-green-50 transition-all duration-200 transform hover:scale-105"
              >
                Demander un Devis
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/flotte"
                className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition-all duration-200 border-2 border-white"
              >
                Découvrir Notre Flotte
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LEZBruxellesPage;
