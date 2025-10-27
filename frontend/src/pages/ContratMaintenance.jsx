import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, XCircle, FileText, Phone, Mail, AlertCircle } from "lucide-react";

const ContratMaintenance = () => {
  const currentDate = new Date().toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const contractNumber = `CM-ISOL45-${new Date().getFullYear()}-001`;

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
                CONTRAT DE MAINTENANCE
              </h1>
              <p className="text-slate-600">N° {contractNumber}</p>
              <p className="text-slate-600">Date : {currentDate}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold mb-2">
                Vibe<span className="text-blue-600">Web</span>
              </div>
              <p className="text-slate-600 text-sm">Entreprise individuelle Corentin Villoing</p>
              <p className="text-slate-600 mt-2">46 rue beurrière</p>
              <p className="text-slate-600">45340 Nibelle</p>
              <p className="text-slate-600">N° TVA intracommunautaire : FR32982941585</p>
              <p className="text-slate-600 text-sm mt-1 italic">TVA non applicable - Art. 293B du CGI</p>
              <p className="text-slate-600 mt-2">
                <Phone size={14} className="inline mr-1" />
                06 XX XX XX XX
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

        {/* Important Notice */}
        <Card className="p-6 mb-8 border-blue-200 bg-blue-50">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Contrat sans engagement
              </h3>
              <p className="text-blue-800">
                Ce contrat de maintenance ne comporte <strong>aucun engagement de durée minimum</strong>. Le client peut résilier le contrat à tout moment en respectant un <strong>préavis de 30 jours</strong> par lettre recommandée avec accusé de réception ou par email avec confirmation de lecture.
              </p>
            </div>
          </div>
        </Card>

        {/* Object */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Objet du contrat
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Le présent contrat a pour objet de définir les conditions dans lesquelles <strong>VibeWeb</strong> (ci-après "le Prestataire") s'engage à assurer la maintenance technique, la sécurité, l'hébergement et le support du site internet <strong>www.isol45.fr</strong> (ci-après "le Site") pour le compte de <strong>ISOL 45 SAS</strong> (ci-après "le Client").
          </p>
        </Card>

        {/* Services Included */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Prestations incluses
          </h2>

          <div className="space-y-6">
            {/* 1. Hébergement */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-slate-900">
                  1. Hébergement web professionnel
                </h3>
              </div>
              <ul className="ml-9 space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Serveur haute performance avec garantie de disponibilité 99.9%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Certificat SSL/HTTPS pour la sécurité des données</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Bande passante illimitée</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Sauvegardes quotidiennes automatisées (rétention 30 jours)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Protection anti-DDoS et pare-feu</span>
                </li>
              </ul>
            </div>

            {/* 2. Nom de domaine */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-slate-900">
                  2. Gestion du nom de domaine
                </h3>
              </div>
              <ul className="ml-9 space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>
                    <strong className="text-orange-600">Transfert du nom de domaine :</strong> Le Client autorise le transfert de son nom de domaine vers les serveurs DNS du Prestataire pour la durée du contrat
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Renouvellement annuel du nom de domaine inclus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Configuration DNS optimisée</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Gestion des sous-domaines si nécessaire</span>
                </li>
              </ul>
              <div className="ml-9 mt-3 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>Note importante :</strong> En cas de résiliation du contrat, le nom de domaine sera retransféré au Client ou vers le registrar de son choix dans un délai de 15 jours suivant la fin du préavis, sans frais supplémentaires.
                </p>
              </div>
            </div>

            {/* 3. Maintenance technique */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-slate-900">
                  3. Maintenance technique
                </h3>
              </div>
              <ul className="ml-9 space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Mises à jour de sécurité (mensuelles)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Mises à jour des bibliothèques et dépendances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Surveillance du bon fonctionnement du site (24/7)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Correction des bugs techniques mineurs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Optimisation des performances si nécessaire</span>
                </li>
              </ul>
            </div>

            {/* 4. Support téléphonique */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-slate-900">
                  4. Support téléphonique & assistance
                </h3>
              </div>
              <ul className="ml-9 space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Support téléphonique : du lundi au vendredi, 9h-18h</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Support par email : réponse sous 24h ouvrées</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Assistance pour la gestion du contenu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Conseils et recommandations techniques</span>
                </li>
              </ul>
            </div>

            {/* 5. Sécurité */}
            <div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-slate-900">
                  5. Sécurité
                </h3>
              </div>
              <ul className="ml-9 space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Surveillance active contre les menaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Pare-feu applicatif (WAF)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Scan de sécurité mensuel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Intervention rapide en cas d'incident de sécurité</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Not Included */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Prestations non incluses
          </h2>
          <div className="space-y-3 text-slate-700">
            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <span>Modification du design ou de la structure du site (facturation au temps passé)</span>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <span>Ajout de nouvelles fonctionnalités (devis séparé)</span>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <span>Création de contenu (textes, photos, vidéos)</span>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <span>Référencement payant (Google Ads, campagnes publicitaires)</span>
            </div>
            <div className="flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <span>Formation supplémentaire au-delà de 2 heures par an</span>
            </div>
          </div>
        </Card>

        {/* Pricing */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Tarification</h2>
          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-slate-900">Forfait mensuel</span>
              <span className="text-3xl font-bold text-blue-600">79€ HT</span>
            </div>
            <div className="flex justify-between items-center text-slate-600 mb-2">
              <span>TVA 20%</span>
              <span>15,80 €</span>
            </div>
            <div className="border-t border-slate-300 pt-2 flex justify-between items-center">
              <span className="text-lg font-bold text-slate-900">Total TTC / mois</span>
              <span className="text-2xl font-bold text-slate-900">94,80 €</span>
            </div>
          </div>
          <div className="mt-4 text-sm text-slate-600">
            <p>• Facturation mensuelle par prélèvement automatique ou virement</p>
            <p>• Paiement à terme échu (le 1er de chaque mois pour le mois écoulé)</p>
            <p>• Première facture au prorata si début en cours de mois</p>
          </div>
        </Card>

        {/* Terms */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Durée et résiliation du contrat
          </h2>
          <div className="space-y-4 text-slate-700">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Durée</p>
                <p className="text-sm">
                  Le présent contrat est conclu pour une durée indéterminée à compter de sa signature. <strong>Il n'y a aucun engagement de durée minimum.</strong>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Résiliation</p>
                <p className="text-sm">
                  Chaque partie peut résilier le contrat à tout moment en respectant un <strong>préavis de 30 jours calendaires</strong>. La résiliation doit être notifiée par :
                </p>
                <ul className="text-sm mt-2 ml-4 space-y-1">
                  <li>• Lettre recommandée avec accusé de réception, ou</li>
                  <li>• Email avec confirmation de lecture à : resiliation@vibeweb.fr</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Effets de la résiliation</p>
                <p className="text-sm">
                  À l'issue du préavis de 30 jours :
                </p>
                <ul className="text-sm mt-2 ml-4 space-y-1">
                  <li>• Les sauvegardes du site seront mises à disposition du Client</li>
                  <li>• Le nom de domaine sera retransféré vers le registrar de votre choix</li>
                  <li>• L'hébergement sera maintenu 15 jours supplémentaires pour faciliter la migration</li>
                  <li>• Aucun frais de résiliation ne sera facturé</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Additional Terms */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Conditions générales
          </h2>
          <div className="space-y-4 text-slate-700 text-sm">
            <div>
              <p className="font-semibold">Responsabilités</p>
              <p>
                Le Prestataire s'engage à mettre en œuvre tous les moyens nécessaires pour assurer le bon fonctionnement du Site. Sa responsabilité est limitée au montant des sommes versées au titre du présent contrat sur les 12 derniers mois.
              </p>
            </div>
            <div>
              <p className="font-semibold">Force majeure</p>
              <p>
                En cas de force majeure (panne généralisée, catastrophe naturelle, etc.), le Prestataire ne pourra être tenu responsable de l'indisponibilité temporaire du Site.
              </p>
            </div>
            <div>
              <p className="font-semibold">Propriété intellectuelle</p>
              <p>
                Le Client demeure propriétaire de l'intégralité du contenu de son Site et de son nom de domaine. Le Prestataire s'engage à restituer l'ensemble des éléments en cas de résiliation.
              </p>
            </div>
            <div>
              <p className="font-semibold">Données personnelles</p>
              <p>
                Le Prestataire s'engage à respecter la réglementation en vigueur concernant la protection des données personnelles (RGPD).
              </p>
            </div>
            <div>
              <p className="font-semibold">Modification du contrat</p>
              <p>
                Toute modification des présentes conditions fera l'objet d'une notification au Client avec un préavis de 30 jours. Le Client pourra alors résilier le contrat sans frais s'il n'accepte pas les nouvelles conditions.
              </p>
            </div>
          </div>
        </Card>

        {/* Signature */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Acceptation du contrat
          </h2>
          <p className="text-slate-600 mb-6">
            Pour accepter ce contrat, merci de le retourner signé avec la mention "Bon pour accord".
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

export default ContratMaintenance;