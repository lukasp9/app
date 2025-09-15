import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { toast } from 'sonner';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send
} from 'lucide-react';
import { mockContacts, mockAPI } from '../components/mock';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await mockAPI.sendContactForm(formData);
      
      if (response.success) {
        toast.success(response.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      toast.error('Nastala chyba při odesílání zprávy');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCall = () => {
    window.open(`tel:${mockContacts.phone}`, '_self');
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${mockContacts.whatsapp.replace(/\s+/g, '')}`, '_blank');
  };

  const handleEmail = () => {
    window.open(`mailto:${mockContacts.email}`, '_self');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Kontaktujte nás</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Jsme tu pro vás. Rádi odpovíme na vaše otázky a pomůžeme vám najít 
            nejlepší finanční řešení.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Telefonní kontakt</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Zavolejte nám a získejte okamžitou pomoc od našich odborníků.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-lg">{mockContacts.phone}</p>
                    <p className="text-slate-600 text-sm">Hlavní linka</p>
                  </div>
                  <Button onClick={handleCall} className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Zavolat nyní
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Napište nám na WhatsApp pro rychlou komunikaci.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-lg">{mockContacts.whatsapp}</p>
                    <p className="text-slate-600 text-sm">WhatsApp číslo</p>
                  </div>
                  <Button onClick={handleWhatsApp} className="w-full bg-green-600 hover:bg-green-700">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Otevřít WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Pošlete nám email a odpovíme vám do 24 hodin.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-lg">{mockContacts.email}</p>
                    <p className="text-slate-600 text-sm">Hlavní email</p>
                  </div>
                  <Button onClick={handleEmail} variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Poslat email
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Adresa</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold mb-2">{mockContacts.address}</p>
                <div className="flex items-center space-x-2 text-slate-600 mb-4">
                  <Clock className="h-4 w-4" />
                  <span>{mockContacts.workingHours}</span>
                </div>
                <Button variant="outline" className="w-full">
                  <MapPin className="h-4 w-4 mr-2" />
                  Zobrazit mapu
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Napište nám</CardTitle>
                <p className="text-slate-600">
                  Vyplňte formulář a my se vám ozveme co nejdříve.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Jméno a příjmení *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Jan Novák"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jan.novak@email.cz"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+420 123 456 789"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Předmět *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Předmět vaší zprávy"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Zpráva *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Popište váš dotaz nebo požadavek..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-purple-600 hover:bg-purple-700" 
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      'Odesílám...'
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Odeslat zprávu
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Často kladené otázky</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Jak dlouho trvá vyřízení pojistné události?
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Standardní pojistné události vyřizujeme do 30 dnů. 
                      V případě jednoduchých škod může být vyřízení i rychlejší.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Mohu změnit podmínky smlouvy po podpisu?
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Ano, většinu smluv lze upravit i po podpisu. 
                      Kontaktujte nás a probereme možnosti změn.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Nabízíte slevy při sjednání více produktů?
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Ano, při kombinaci více produktů můžeme nabídnout výhodné balíčky. 
                      Rádi pro vás připravíme individuální nabídku.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;