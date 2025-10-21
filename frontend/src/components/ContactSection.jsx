import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import axios from "axios";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    request_type: "devis",
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API}/quote-request`, formData);
      toast.success(
        "Demande envoyée avec succès ! Nous vous contacterons rapidement."
      );
      // Reset form
      setFormData({
        request_type: "devis",
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "Une erreur s'est produite. Veuillez réessayer ou nous contacter directement."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white"
      data-testid="contact-section"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
            data-testid="contact-title"
          >
            Demandez votre <span className="text-blue-600">devis gratuit</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous et nous vous répondrons dans les
            plus brefs délais
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Nos coordonnées
              </h3>

              <div className="space-y-6">
                {/* Location 1 */}
                <div
                  className="flex items-start gap-4"
                  data-testid="location-1"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Showroom Villemandeur
                    </h4>
                    <p className="text-slate-600">
                      16b Rue Nicéphore Niépce
                      <br />
                      45700 VILLEMANDEUR
                    </p>
                  </div>
                </div>

                {/* Location 2 */}
                <div
                  className="flex items-start gap-4"
                  data-testid="location-2"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Agence Fleury-les-Aubrais
                    </h4>
                    <p className="text-slate-600">
                      121 Rue André Dessaux
                      <br />
                      45400 FLEURY LES AUBRAIS
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4" data-testid="phone">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Téléphone
                    </h4>
                    <p className="text-slate-600">
                      09 74 56 77 10
                      <br />
                      Théo DELORME : 06 85 20 91 53
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4" data-testid="hours">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Horaires
                    </h4>
                    <p className="text-slate-600">
                      Du lundi au vendredi
                      <br />
                      8h00 - 12h00 | 14h00 - 18h00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="hidden lg:block rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/5997963/pexels-photo-5997963.jpeg"
                alt="Showroom ISOL45"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Request Type */}
              <div>
                <Label htmlFor="request_type">Type de demande *</Label>
                <Select
                  value={formData.request_type}
                  onValueChange={(value) => handleChange("request_type", value)}
                >
                  <SelectTrigger
                    className="mt-2"
                    data-testid="request-type-select"
                  >
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="devis">Demande de devis</SelectItem>
                    <SelectItem value="tarifs">Demande de tarifs</SelectItem>
                    <SelectItem value="questions">
                      Questions sur les produits
                    </SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Name */}
              <div>
                <Label htmlFor="name">Nom complet *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="mt-2"
                  data-testid="name-input"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    className="mt-2"
                    data-testid="phone-input"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="exemple@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="mt-2"
                    data-testid="email-input"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <Label htmlFor="address">Adresse *</Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="Votre adresse"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  required
                  className="mt-2"
                  data-testid="address-input"
                />
              </div>

              {/* City */}
              <div>
                <Label htmlFor="city">Ville *</Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Votre ville"
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  required
                  className="mt-2"
                  data-testid="city-input"
                />
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message">Message (optionnel)</Label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre projet..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  rows={4}
                  className="mt-2 resize-none"
                  data-testid="message-input"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                data-testid="submit-button"
              >
                {loading ? "Envoi en cours..." : "Envoyer la demande"}
              </Button>

              <p className="text-xs text-slate-500 text-center">
                * Champs obligatoires. Vos données sont protégées et ne seront
                utilisées que dans le cadre de votre demande.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;