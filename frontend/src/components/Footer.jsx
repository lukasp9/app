import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react';
import { mockContacts } from './mock';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Mock newsletter subscription
    console.log('Newsletter subscription');
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">FM</span>
              </div>
              <div className="font-bold text-xl">
                FINANČNÍ<br />MARKET
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Váš důvěryhodný partner pro porovnání a sjednání finančních produktů. 
              Pomáháme našim klientům najít nejlepší řešení už více než 12 let.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Produkty</h3>
            <ul className="space-y-2">
              <li><Link to="/produkt/pojisteni/auto" className="text-slate-300 hover:text-white transition-colors">Autopojištění</Link></li>
              <li><Link to="/produkt/pojisteni/majetek" className="text-slate-300 hover:text-white transition-colors">Pojištění majetku</Link></li>
              <li><Link to="/produkt/uvery/hypoteky" className="text-slate-300 hover:text-white transition-colors">Hypotéky</Link></li>
              <li><Link to="/produkt/uvery/cokoliv" className="text-slate-300 hover:text-white transition-colors">Spotřebitelské úvěry</Link></li>
              <li><Link to="/produkt/investice/penzijko" className="text-slate-300 hover:text-white transition-colors">Penzijní připojištění</Link></li>
              <li><Link to="/produkt/investice/podilove-fondy" className="text-slate-300 hover:text-white transition-colors">Podílové fondy</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Podpora</h3>
            <ul className="space-y-2">
              <li><Link to="/kontakt" className="text-slate-300 hover:text-white transition-colors">Kontakt</Link></li>
              <li><Link to="/faq" className="text-slate-300 hover:text-white transition-colors">Často kladené otázky</Link></li>
              <li><Link to="/zkontrolovat-smlouvu" className="text-slate-300 hover:text-white transition-colors">Zkontrolovat smlouvu</Link></li>
              <li><Link to="/klientsky-portal" className="text-slate-300 hover:text-white transition-colors">Klientský portál</Link></li>
              <li><Link to="/reklamace" className="text-slate-300 hover:text-white transition-colors">Reklamace</Link></li>
              <li><Link to="/o-nas" className="text-slate-300 hover:text-white transition-colors">O nás</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">{mockContacts.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">{mockContacts.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">{mockContacts.address}</span>
              </div>
            </div>
            
            <div className="pt-4">
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <p className="text-slate-300 text-sm mb-3">
                Získejte aktuální informace o nejlepších nabídkách
              </p>
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Váš email" 
                  className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
                />
                <Button type="submit" size="sm" className="bg-purple-600 hover:bg-purple-700">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm">
              © 2024 Finanční Market. Všechna práva vyhrazena.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/podminky-uziti" className="text-slate-400 hover:text-white transition-colors">
                Podmínky použití
              </Link>
              <Link to="/ochrana-osobnich-udaju" className="text-slate-400 hover:text-white transition-colors">
                Ochrana osobních údajů
              </Link>
              <Link to="/cookies" className="text-slate-400 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;