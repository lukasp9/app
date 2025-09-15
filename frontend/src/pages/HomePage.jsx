import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { 
  Car, 
  Home, 
  Heart, 
  PawPrint, 
  Plane,
  CreditCard,
  RefreshCw,
  Briefcase,
  PiggyBank,
  TrendingUp,
  Building2,
  Play,
  Star,
  Shield,
  Clock,
  Users,
  CheckCircle
} from 'lucide-react';
import { mockProducts, mockStats, mockTestimonials } from '../components/mock';

const HomePage = () => {
  const iconMap = {
    Car, Home, Heart, PawPrint, Plane, CreditCard, RefreshCw, 
    Briefcase, PiggyBank, TrendingUp, Building2
  };

  const ProductSection = ({ title, products, category }) => (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => {
            const IconComponent = iconMap[product.icon];
            return (
              <Link 
                key={product.id} 
                to={`/produkt/${category}/${product.id}`}
                className="group"
              >
                <Card className="h-full border-2 border-slate-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-slate-50 group-hover:bg-purple-50 rounded-xl flex items-center justify-center transition-colors">
                      <IconComponent className="h-8 w-8 text-slate-600 group-hover:text-purple-600 transition-colors" />
                    </div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">{product.name}</h3>
                    <p className="text-slate-600 text-sm">{product.description}</p>
                    <Badge variant="secondary" className="mt-3 bg-purple-50 text-purple-700 hover:bg-purple-100">
                      {product.price}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Srovnejte a sjednejte si finanční produkty online
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Najděte nejlepší pojištění, úvěry a investice na jednom místě. 
                Porovnáme nabídky od předních poskytovatelů a pomůžeme vám ušetřit čas i peníze.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
                  Začít porovnávání
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  Více informací
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    JAK FUNGUJE FINANČNÍ MARKET?
                  </h3>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-200 transition-colors">
                    <Play className="h-6 w-6 text-purple-600 ml-1" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-slate-700">Porovnejte nabídky online</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-slate-700">Vyberte nejvýhodnější</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-slate-700">Sjednejte během 5 minut</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center z-20">
                <div className="text-2xl">📊</div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center z-20">
                <div className="text-xl">💰</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">{mockStats.clients}</div>
              <div className="text-slate-300">Spokojených klientů</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">{mockStats.contracts}</div>
              <div className="text-slate-300">Sjednaných smluv</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">{mockStats.saved}</div>
              <div className="text-slate-300">Ušetřeno klientům</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">{mockStats.experience}</div>
              <div className="text-slate-300">Let zkušeností</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Sections */}
      <ProductSection title="POJIŠTĚNÍ" products={mockProducts.pojisteni} category="pojisteni" />
      
      <section className="py-16 bg-slate-50">
        <ProductSection title="ÚVĚRY" products={mockProducts.uvery} category="uvery" />
      </section>
      
      <ProductSection title="INVESTICE" products={mockProducts.investice} category="investice" />

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            Co říkají naši klienti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Připraveni najít nejlepší finanční produkty?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Začněte porovnávat nabídky ještě dnes a ušetřete tisíce korun ročně.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Začít nyní zdarma
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-purple-600">
              Kontaktovat poradce
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;