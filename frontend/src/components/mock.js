// Mock data pro Finanční Market

export const mockUser = {
  id: '1',
  name: 'Jan Novák',
  email: 'jan.novak@email.cz',
  phone: '+420 123 456 789',
  isLoggedIn: false,
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
};

export const mockProducts = {
  pojisteni: [
    {
      id: 'auto',
      name: 'Auto',
      icon: 'Car',
      description: 'Komplexní pojištění vašeho vozidla',
      features: ['Povinné ručení', 'Havarijní pojištění', 'Asistenční služby', 'Úrazové pojištění'],
      price: 'od 2 500 Kč/rok'
    },
    {
      id: 'majetek',
      name: 'Majetek',
      icon: 'Home',
      description: 'Ochrana vašeho domova a majetku',
      features: ['Pojištění nemovitosti', 'Domácnost', 'Odpovědnost', 'Asistenční služby'],
      price: 'od 1 800 Kč/rok'
    },
    {
      id: 'zivot',
      name: 'Život',
      icon: 'Heart',
      description: 'Životní pojištění pro vás a vaší rodinu',
      features: ['Kapitálové životní', 'Rizikové životní', 'Úrazové pojištění', 'Invalidní důchod'],
      price: 'od 500 Kč/měsíc'
    },
    {
      id: 'mazlicci',
      name: 'Mazlíčci',
      icon: 'PawPrint',
      description: 'Pojištění vašich domácích mazlíčků',
      features: ['Veterinární péče', 'Operační zákroky', 'Odpovědnost', 'Ztráta zvířete'],
      price: 'od 300 Kč/měsíc'
    },
    {
      id: 'cestovni',
      name: 'Cestovní',
      icon: 'Plane',
      description: 'Pojištění pro vaše cesty',
      features: ['Léčebné výlohy', 'Storno poplatky', 'Zavazadla', 'Odpovědnost'],
      price: 'od 50 Kč/den'
    }
  ],
  uvery: [
    {
      id: 'hypoteky',
      name: 'Hypotéky',
      icon: 'Home',
      description: 'Výhodné hypoteční úvěry na bydlení',
      features: ['Úrok od 4,5% p.a.', 'Až 90% LTV', 'Flexibilní splácení', 'Bez poplatků za správu'],
      price: 'úrok od 4,5% p.a.'
    },
    {
      id: 'cokoliv',
      name: 'Úvěr na cokoliv',
      icon: 'CreditCard',
      description: 'Spotřebitelské úvěry bez omezení účelu',
      features: ['Až 2 mil. Kč', 'Rychlé schválení', 'Online žádost', 'Bez ručitele'],
      price: 'úrok od 6,9% p.a.'
    },
    {
      id: 'konsolidace',
      name: 'Konsolidace',
      icon: 'RefreshCw',
      description: 'Sloučení všech vašich úvěrů do jednoho',
      features: ['Nižší splátka', 'Jeden úvěr místo více', 'Lepší přehled', 'Úspora peněz'],
      price: 'úrok od 5,9% p.a.'
    },
    {
      id: 'podnikatelske',
      name: 'Podnikatelské',
      icon: 'Briefcase',
      description: 'Úvěry pro rozvoj vašeho podnikání',
      features: ['Provozní úvěry', 'Investiční úvěry', 'Kontokorent', 'Bez zajištění'],
      price: 'úrok od 7,5% p.a.'
    }
  ],
  investice: [
    {
      id: 'penzijko',
      name: 'Penzijko',
      icon: 'PiggyBank',
      description: 'Penzijní připojištění pro důstojný důchod',
      features: ['Státní příspěvky', 'Daňové úlevy', 'Flexibilní vklady', 'Garantovaný výnos'],
      price: 'od 500 Kč/měsíc'
    },
    {
      id: 'podilove-fondy',
      name: 'Podílové fondy',
      icon: 'TrendingUp',
      description: 'Diverzifikované investování do fondů',
      features: ['Široká nabídka fondů', 'Profesionální správa', 'Nízké poplatky', 'Online správa'],
      price: 'poplatek od 0,5% p.a.'
    },
    {
      id: 'nemovitostni-fondy',
      name: 'Nemovitostní fondy',
      icon: 'Building2',
      description: 'Investice do nemovitostního trhu',
      features: ['Stabilní výnosy', 'Nízká volatilita', 'Diverzifikace', 'Likvidita'],
      price: 'min. investice 10 000 Kč'
    }
  ]
};

export const mockContacts = {
  email: 'info@financnimarket.cz',
  phone: '+420 800 123 456',
  whatsapp: '+420 777 888 999',
  address: 'Wenceslas Square 1, 110 00 Praha 1',
  workingHours: 'Po-Pá: 8:00-18:00, So: 9:00-13:00'
};

export const mockStats = {
  clients: '15 000+',
  contracts: '45 000+',
  saved: '850 mil. Kč',
  experience: '12 let'
};

export const mockTestimonials = [
  {
    id: 1,
    name: 'Marie Svobodová',
    text: 'Skvělé služby, rychlé vyřízení hypotéky a velmi vstřícný přístup.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Tomáš Procházka',
    text: 'Konečně někdo, kdo mi pomohl sjednotit všechny úvěry. Ušetřím každý měsíc tisíce.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Anna Nováková',
    text: 'Investice do podílových fondů mi přináší stabilní výnosy. Doporučuji!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  }
];

// Mock API responses
export const mockAPI = {
  login: (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'test@test.cz' && password === 'test123') {
          resolve({ success: true, user: { ...mockUser, isLoggedIn: true } });
        } else {
          resolve({ success: false, message: 'Nesprávné přihlašovací údaje' });
        }
      }, 1000);
    });
  },
  
  register: (userData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Registrace byla úspěšná' });
      }, 1500);
    });
  },
  
  sendContactForm: (formData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Vaše zpráva byla odeslána' });
      }, 1000);
    });
  },
  
  requestProduct: (productData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Vaše žádost byla odeslána. Brzy vás kontaktujeme.' });
      }, 1500);
    });
  }
};