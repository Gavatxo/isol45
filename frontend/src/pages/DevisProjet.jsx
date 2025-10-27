import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Calendar, FileText, Phone, Mail } from "lucide-react";

const DevisProjet = () => {
  const currentDate = new Date().toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const devisNumber = `DEV-ISOL45-${new Date().getFullYear()}-001`;
  const validityDate = new Date(
    Date.now() + 30 * 24 * 60 * 60 * 1000
  ).toLocaleDateString("fr-FR");

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1
                className="text-3xl font-bold text-slate-900 mb-2"
                style={{ fontFamily: "'Work Sans', sans-serif" }}
              >
                DEVIS
              </h1>
              <p className="text-slate-600">N° {devisNumber}</p>
              <p className="text-slate-600">Date : {currentDate}</p>
              <p className="text-slate-600">
                Validité : jusqu'au {validityDate}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold mb-2">
                Vibe<span className="text-blue-600">Web</span>
              </div>
              <p className="text-slate-600">Agence Web & Digital</p>
              <p className="text-slate-600">123 Avenue de la République</p>
              <p className="text-slate-600">75011 Paris</p>
              <p className="text-slate-600">SIRET : XXX XXX XXX XXXXX</p>
              <p className="text-slate-600 mt-2">
                <Phone size={14} className="inline mr-1" />
                01 23 45 67 89
              </p>
              <p className="text-slate-600">
                <Mail size={14} className="inline mr-1" />
                contact@vibeweb.fr
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Client</h2>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="font-semibold text-slate-900">ISOL 45 SAS</p>
              <p className="text-slate-600">16b Rue Nicéphore Niépce</p>
              <p className="text-slate-600">45700 VILLEMANDEUR</p>
              <p className="text-slate-600 mt-2">SIRET : XXX XXX XXX XXXXX</p>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Objet du devis
          </h2>
          <p className="text-lg text-slate-700 mb-4">
            Refonte complète du site internet ISOL45 - Solution sur mesure
          </p>
          <p className="text-slate-600 leading-relaxed">
            Création d'un site web moderne et performant pour ISOL45,
            spécialiste de la menuiserie PVC, aluminium et bois. Le projet inclut
            une refonte graphique complète, un design sur mesure, l'intégration
            de fonctionnalités avancées, et une optimisation SEO approfondie pour
            maximiser la visibilité en ligne.
          </p>
        </Card>

        {/* Detailed Quote */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Détail du devis
          </h2>

          {/* Phase 1 */}
          <div className="mb-8">
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h3 className="text-xl font-bold text-blue-900">
                Phase 1 : Conception & Design
              </h3>
            </div>
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-3 text-slate-700">Description</th>
                  <th className="text-right p-3 text-slate-700">Quantité</th>
                  <th className="text-right p-3 text-slate-700">Prix U. HT</th>
                  <th className="text-right p-3 text-slate-700">Total HT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3">
                    <p className="font-medium">Audit et analyse du site existant</p>
                    <p className="text-sm text-slate-600">
                      Analyse complète du site actuel, identification des points
                      d'amélioration
                    </p>
                  </td>
                  <td className="text-right p-3">1</td>
                  <td className="text-right p-3">400,00 €</td>
                  <td className="text-right p-3 font-semibold">400,00 €</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <p className="font-medium">Maquettes graphiques sur mesure</p>
                    <p className="text-sm text-slate-600">
                      Création de 5 maquettes desktop + mobile (Accueil, Services,
                      Réalisations, Atouts, Contact)
                    </p>
                  </td>
                  <td className="text-right p-3">5</td>
                  <td className="text-right p-3">180,00 €</td>
                  <td className="text-right p-3 font-semibold">900,00 €</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <p className="font-medium">Charte graphique personnalisée</p>
                    <p className="text-sm text-slate-600">
                      Définition de l'identité visuelle : couleurs, typographies,
                      éléments graphiques
                    </p>
                  </td>
                  <td className="text-right p-3">1</td>
                  <td className="text-right p-3">350,00 €</td>
                  <td className="text-right p-3 font-semibold">350,00 €</td>
                </tr>
                <tr className="bg-slate-50">
                  <td colspan="3" className="p-3 text-right font-bold">
                    Sous-total Phase 1
                  </td>
                  <td className="text-right p-3 font-bold text-blue-600">
                    1 650,00 €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Phase 2 */}
          <div className="mb-8">
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h3 className="text-xl font-bold text-blue-900">
                Phase 2 : Développement Technique
              </h3>
            </div>
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-3 text-slate-700">Description</th>
                  <th className="text-right p-3 text-slate-700">Quantité</th>
                  <th className="text-right p-3 text-slate-700">Prix U. HT</th>
                  <th className="text-right p-3 text-slate-700">Total HT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3">
                    <p className="font-medium">Développement Frontend (React)</p>
                    <p className="text-sm text-slate-600">
                      Intégration complète des maquettes, animations, responsive
                      design
                    </p>
                  </td>
                  <td className="text-right p-3">1</td>
                  <td className="text-right p-3">2 500,00 €</td>
                  <td className="text-right p-3 font-semibold">2 500,00 €</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <p className="font-medium">Développement Backend (FastAPI)</p>
                    <p className="text-sm text-slate-600">
                      API, gestion de contenu, base de données MongoDB, espace
                      admin
                    </p>
                  </td>
                  <td className="text-right p-3">1</td>
                  <td className="text-right p-3">1 800,00 €</td>
                  <td className="text-right p-3 font-semibold">1 800,00 €</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <p className="font-medium">
                      Système de gestion des services et réalisations
                    </p>
                    <p className="text-sm text-slate-600">
                      Pages dédiées avec filtres, galeries photos, système de
                      navigation
                    </p>
                  </td>
                  <td className="text-right p-3">1</td>
                  <td className="text-right p-3">900,00 €</td>
                  <td className="text-right p-3 font-semibold">900,00 €</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <p className="font-medium">Formulaire de demande de devis</p>
                    <p className="text-sm text-slate-600">
                      Intégration formulaire avec validation, stockage sécurisé,
                      notifications
                    </p>
                  </td>
                  <td className="text-right p-3">1</td>
                  <td className="text-right p-3">400,00 €</td>
                  <td className="text-right p-3 font-semibold">400,00 €</td>
                </tr>
                <tr className="bg-slate-50">
                  <td colspan="3" className="p-3 text-right font-bold">
                    Sous-total Phase 2
                  </td>
                  <td className="text-right p-3 font-bold text-blue-600">
                    5 600,00 €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Phase 3 */}
          <div className="mb-8">
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h3 className="text-xl font-bold text-blue-900">
                Phase 3 : SEO & Optimisation
              </h3>
            </div>
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-3 text-slate-700">Description</th>
                  <th className="text-right p-3 text-slate-700">Quantité</th>
                  <th className="text-right p-3 text-slate-700">Prix U. HT</th>
                  <th className="text-right p-3 text-slate-700">Total HT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3">
                    <p className="font-medium">Audit SEO complet</p>
                    <p className="text-sm text-slate-600">
                      Analyse des mots-clés, étude de la concurrence, opportunités
                    </p>
                  </td>
                  <td className="text-right p-3">1</td>
                  <td className="text-right p-3">500,00 €</td>
                  <td className="text-right p-3 font-semibold">500,00 €</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <p className="font-medium">Optimisation SEO on-page</p>
                    <p className="text-sm text-slate-600">
                      Balises meta, structure HTML, maillage interne, rich snippets
                    </p>
                  </td>
                  <td className="text-right p-3">1</td>
                  <td className="text-right p-3">700,00 €</td>
                  <td className="text-right p-3 font-semibold">700,00 €</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <p className="font-medium">Optimisation des performances</p>
                    <p className="text-sm text-slate-600">
                      Vitesse de chargement, compression images, lazy loading, CDN
                    </p>
                  </td>
                  <td className="text-right p-3">1</td>
                  <td className="text-right p-3">400,00 €</td>
                  <td className="text-right p-3 font-semibold">400,00 €</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <p className="font-medium">
                      Intégration Google Analytics & Search Console
                    </p>
                    <p className="text-sm text-slate-600">
                      Configuration complète, objectifs, suivi des conversions
                    </p>
                  </td>
                  <td className="text-right p-3">1</td>
                  <td className="text-right p-3">250,00 €</td>
                  <td className="text-right p-3 font-semibold">250,00 €</td>
                </tr>
                <tr className="bg-slate-50">
                  <td colspan="3" className="p-3 text-right font-bold">
                    Sous-total Phase 3
                  </td>
                  <td className="text-right p-3 font-bold text-blue-600">
                    1 850,00 €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Phase 4 */}
          <div className="mb-8">
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h3 className="text-xl font-bold text-blue-900">
                Phase 4 : Tests, Formation & Livraison
              </h3>
            </div>
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="text-left p-3 text-slate-700">Description</th>
                  <th className="text-right p-3 text-slate-700">Quantité</th>
                  <th className="text-right p-3 text-slate-700">Prix U. HT</th>
                  <th className="text-right p-3 text-slate-700">Total HT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3">
                    <p className="font-medium">Tests et recette</p>
                    <p className="text-sm text-slate-600">
                      Tests multi-navigateurs, multi-devices, corrections
                    </p>
                  </td>
                  <td className="text-right p-3">1</td>
                  <td className="text-right p-3">400,00 €</td>
                  <td className="text-right p-3 font-semibold">400,00 €</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <p className="font-medium">Formation à l'administration</p>
                    <p className="text-sm text-slate-600">
                      2 heures de formation en présentiel ou visio pour la gestion
                      du contenu
                    </p>
                  </td>
                  <td className="text-right p-3">1</td>
                  <td className="text-right p-3">300,00 €</td>
                  <td className="text-right p-3 font-semibold">300,00 €</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <p className="font-medium">Mise en ligne et migration</p>
                    <p className="text-sm text-slate-600">
                      Déploiement sur serveur de production, transfert du nom de
                      domaine
                    </p>
                  </td>
                  <td className="text-right p-3">1</td>
                  <td className="text-right p-3">350,00 €</td>
                  <td className="text-right p-3 font-semibold">350,00 €</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <p className="font-medium">Documentation technique</p>
                    <p className="text-sm text-slate-600">
                      Guide d'utilisation et documentation technique complète
                    </p>
                  </td>
                  <td className="text-right p-3">1</td>
                  <td className="text-right p-3">200,00 €</td>
                  <td className="text-right p-3 font-semibold">200,00 €</td>
                </tr>
                <tr className="bg-slate-50">
                  <td colspan="3" className="p-3 text-right font-bold">
                    Sous-total Phase 4
                  </td>
                  <td className="text-right p-3 font-bold text-blue-600">
                    1 250,00 €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Total */}
          <div className="border-t-2 border-slate-300 pt-6">
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="p-3 text-right text-lg font-bold">Total HT</td>
                  <td className="text-right p-3 text-lg font-bold">
                    10 350,00 €
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-right">TVA 20%</td>
                  <td className="text-right p-3">2 070,00 €</td>
                </tr>
                <tr className="bg-blue-900 text-white">
                  <td className="p-4 text-right text-2xl font-bold">
                    TOTAL TTC
                  </td>
                  <td className="text-right p-4 text-2xl font-bold">
                    12 420,00 €
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Planning */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            <Calendar className="inline mr-2" size={28} />
            Planning prévisionnel
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-32 font-semibold text-slate-700">Semaine 1-2</div>
              <div className="flex-1">
                <p className="font-medium">Conception & Design</p>
                <p className="text-sm text-slate-600">
                  Audit, maquettes, charte graphique
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-32 font-semibold text-slate-700">
                Semaine 3-6
              </div>
              <div className="flex-1">
                <p className="font-medium">Développement</p>
                <p className="text-sm text-slate-600">
                  Frontend, Backend, fonctionnalités
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-32 font-semibold text-slate-700">Semaine 7</div>
              <div className="flex-1">
                <p className="font-medium">SEO & Optimisation</p>
                <p className="text-sm text-slate-600">
                  Audit SEO, optimisation on-page, performances
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-32 font-semibold text-slate-700">Semaine 8</div>
              <div className="flex-1">
                <p className="font-medium">Tests, Formation & Livraison</p>
                <p className="text-sm text-slate-600">
                  Recette, formation, mise en ligne
                </p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-slate-600 italic">
            Durée totale estimée : <strong>8 semaines</strong> à compter de la
            validation du devis
          </p>
        </Card>

        {/* Conditions */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Conditions & Modalités
          </h2>
          <div className="space-y-4 text-slate-700">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Conditions de paiement</p>
                <p className="text-sm">
                  - 40% à la signature du devis
                  <br />
                  - 40% à la validation des maquettes
                  <br />
                  - 20% à la livraison finale
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Nom de domaine</p>
                <p className="text-sm">
                  Le client s'engage à transférer son nom de domaine vers
                  l'hébergeur VibeWeb pour la durée du contrat de maintenance. Les
                  frais de transfert sont inclus.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Contenu</p>
                <p className="text-sm">
                  Les textes, photos et contenus sont à fournir par le client.
                  Service de rédaction disponible sur devis complémentaire.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Maintenance</p>
                <p className="text-sm">
                  Ce devis ne comprend pas la maintenance. Un contrat de
                  maintenance séparé sera proposé pour assurer le bon
                  fonctionnement et la sécurité du site.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold">Validité</p>
                <p className="text-sm">
                  Ce devis est valable 30 jours à compter de sa date d'émission.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Signature */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Acceptation du devis
          </h2>
          <p className="text-slate-600 mb-6">
            Pour accepter ce devis, merci de le retourner signé avec la mention
            "Bon pour accord" accompagné du règlement de l'acompte de 40%.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <p className="font-semibold mb-2">Le prestataire</p>
              <p className="text-sm text-slate-600 mb-4">VibeWeb</p>
              <div className="border-t border-slate-300 pt-2">
                <p className="text-sm text-slate-600">Signature & cachet</p>
              </div>
            </div>
            <div>
              <p className="font-semibold mb-2">Le client</p>
              <p className="text-sm text-slate-600 mb-4">ISOL 45 SAS</p>
              <div className="border-t border-slate-300 pt-2">
                <p className="text-sm text-slate-600">
                  Date, signature & mention
                  <br />
                  "Bon pour accord"
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Actions */}
        <div className="flex gap-4 justify-center print:hidden">
          <Link to="/">
            <Button variant="outline" size="lg">
              Retour au site
            </Button>
          </Link>
          <Button
            size="lg"
            onClick={() => window.print()}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <FileText className="mr-2" size={20} />
            Imprimer / Sauvegarder en PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DevisProjet;