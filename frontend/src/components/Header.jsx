import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu';
import { 
  Menu, 
  Phone, 
  MessageCircle, 
  Mail, 
  User, 
  LogOut,
  ChevronDown 
} from 'lucide-react';
import { mockContacts } from './mock';

const Header = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    {
      name: 'Pojištění',
      path: '/pojisteni',
      submenu: [
        { name: 'Autopojištění', path: '/produkt/pojisteni/auto' },
        { name: 'Pojištění majetku', path: '/produkt/pojisteni/majetek' },
        { name: 'Životní pojištění', path: '/produkt/pojisteni/zivot' },
        { name: 'Pojištění mazlíčků', path: '/produkt/pojisteni/mazlicci' },
        { name: 'Cestovní pojištění', path: '/produkt/pojisteni/cestovni' }
      ]
    },
    {
      name: 'Hypotéky',
      path: '/hypoteky',
      submenu: [
        { name: 'Hypotéky na bydlení', path: '/produkt/uvery/hypoteky' },
        { name: 'Refinancování', path: '/produkt/uvery/refinancovani' }
      ]
    },
    {
      name: 'Investice',
      path: '/investice',
      submenu: [
        { name: 'Penzijní připojištění', path: '/produkt/investice/penzijko' },
        { name: 'Podílové fondy', path: '/produkt/investice/podilove-fondy' },
        { name: 'Nemovitostní fondy', path: '/produkt/investice/nemovitostni-fondy' }
      ]
    },
    { name: 'Zkontrolovat smlouvu', path: '/zkontrolovat-smlouvu' },
    { name: 'Kontakt', path: '/kontakt' }
  ];

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
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      {/* Top contact bar */}
      <div className="border-b bg-slate-50/50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <span>{mockContacts.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-green-600 hover:text-green-700 hover:bg-green-50"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                WhatsApp
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                onClick={handleCall}
              >
                <Phone className="h-4 w-4 mr-1" />
                {mockContacts.phone}
              </Button>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white px-6"
                onClick={handleCall}
              >
                ZAVOLEJTE MI
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">FM</span>
            </div>
            <div className="font-bold text-xl text-slate-900">
              FINANČNÍ<br />MARKET
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center space-x-1 text-slate-700 hover:text-purple-600 font-medium transition-colors">
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link to={subItem.path} className="w-full">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.path}
                    className="text-slate-700 hover:text-purple-600 font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* User Menu / Login */}
          <div className="hidden md:flex items-center space-x-4">
            {user.isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/klientsky-portal">
                      <User className="mr-2 h-4 w-4" />
                      Klientský portál
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={onLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Odhlásit se
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" asChild>
                  <Link to="/prihlaseni">Přihlášení</Link>
                </Button>
                <Button asChild className="bg-purple-600 hover:bg-purple-700">
                  <Link to="/klientsky-portal">Klientský portál</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      className="text-lg font-medium text-slate-900 hover:text-purple-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 flex flex-col space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="text-slate-600 hover:text-purple-600"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="border-t pt-4 mt-6">
                  {user.isLoggedIn ? (
                    <div className="flex flex-col space-y-2">
                      <Link
                        to="/klientsky-portal"
                        className="text-lg font-medium text-slate-900"
                        onClick={() => setIsOpen(false)}
                      >
                        Klientský portál
                      </Link>
                      <Button variant="ghost" onClick={onLogout} className="justify-start p-0">
                        Odhlásit se
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-2">
                      <Link
                        to="/prihlaseni"
                        className="text-lg font-medium text-slate-900"
                        onClick={() => setIsOpen(false)}
                      >
                        Přihlášení
                      </Link>
                      <Link
                        to="/klientsky-portal"
                        className="text-lg font-medium text-purple-600"
                        onClick={() => setIsOpen(false)}
                      >
                        Klientský portál
                      </Link>
                    </div>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;