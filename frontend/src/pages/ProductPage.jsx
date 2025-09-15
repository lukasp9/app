import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { toast } from 'sonner';
import { 
  Car, Home, Heart, PawPrint, Plane, CreditCard, RefreshCw, 
  Briefcase, PiggyBank, TrendingUp, Building2, CheckCircle, 
  ArrowLeft, Star, Phone, Mail
} from 'lucide-react';
import { mockProducts, mockAPI } from '../components/mock';

const ProductPage = () => {
  const { category, id } = useParams();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const iconMap = {
    Car, Home, Heart, PawPrint, Plane, CreditCard, RefreshCw, 
    Briefcase, PiggyBank, TrendingUp, Building2
  };

  const categoryNames = {
    pojisteni: 'Pojištění',
    uvery: 'Úvěry',
    investice: 'Investice'
  };

  const product = mockProducts[category]?.find(p => p.id === id);

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
      const response = await mockAPI.requestProduct({
        ...formData,
        product: product.name,
        category: categoryNames[category]
      });

      if (response.success) {
        toast.success(response.message);
        setIsDialogOpen(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (error) {
      toast.error('Nastala chyba při odesílání žádosti');
    } finally {
      setIsLoading(false);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Produkt nenalezen</h1>
          <Link to="/">
            <Button>Zpět na hlavní stránku</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[product.icon];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-slate-500 hover:text-slate-700">Domů</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-500">{categoryNames[category]}</span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link to="/" className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Zpět na hlavní stránku
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product details */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl text-slate-900">{product.name}</CardTitle>
                    <p className="text-slate-600 text-lg mt-1">{product.description}</p>
                    <Badge variant="secondary" className="mt-2 bg-purple-50 text-purple-700">
                      {product.price}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Features */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Co je zahrnuto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional info based on category */}
            <Card>
              <CardHeader>
                <CardTitle>Proč si vybrat {product.name}?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  {category === 'pojisteni' && (
                    <div>
                      <p className="text-slate-700 mb-4">
                        Naše pojistné produkty vám poskytují komplexní ochranu v různých životních situacích. 
                        Spolupracujeme s předními pojišťovnami na trhu a vybereme pro vás nejvýhodnější nabídku.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>Rychlé vyřízení škod</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>24/7 asistenční služby</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>Možnost online správy</span>
                        </li>
                      </ul>
                    </div>
                  )}
                  
                  {category === 'uvery' && (
                    <div>
                      <p className="text-slate-700 mb-4">
                        Nabízíme úvěry s výhodnými úrokovými sazbami a flexibilními podmínkami. 
                        Naši odborníci vám pomohou najít nejvhodnější řešení pro vaše potřeby.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>Konkurenceschopné úrokové sazby</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>Rychlé schválení do 24 hodin</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>Možnost předčasného splacení</span>
                        </li>
                      </ul>
                    </div>
                  )}
                  
                  {category === 'investice' && (
                    <div>
                      <p className="text-slate-700 mb-4">
                        Investiční produkty jsou navrženy tak, aby vám pomohly dosáhnout finančních cílů 
                        s přiměřeným rizikem a potenciálem růstu.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>Profesionální správa portfolia</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>Diverzifikované investice</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>Pravidelné reporty</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar with CTA */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-center">Máte zájem?</CardTitle>
                <p className="text-center text-slate-600">
                  Nechte si zaslat nezávaznou nabídku
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700" size="lg">
                      Nezávazná poptávka
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Poptávka - {product.name}</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Jméno a příjmení *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
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
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefon *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Zpráva</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Popište vaše požadavky..."
                          rows={3}
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={isLoading}
                      >
                        {isLoading ? 'Odesílám...' : 'Odeslat poptávku'}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>

                <div className="text-center space-y-3 pt-4 border-t">
                  <p className="text-sm text-slate-600">Potřebujete poradit?</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full" size="sm">
                      <Phone className="h-4 w-4 mr-2" />
                      +420 800 123 456
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      <Mail className="h-4 w-4 mr-2" />
                      info@financnimarket.cz
                    </Button>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {product.price}
                  </div>
                  <div className="text-sm text-slate-600">
                    Orientační cena
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

export default ProductPage;