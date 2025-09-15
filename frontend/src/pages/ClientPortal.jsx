import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';
import { 
  FileText, 
  CreditCard, 
  TrendingUp, 
  Bell, 
  Settings, 
  Download,
  Eye,
  Calendar,
  DollarSign,
  Shield,
  Phone,
  Mail,
  Edit3,
  Plus
} from 'lucide-react';

const ClientPortal = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user.name || '',
    email: user.email || '',
    phone: user.phone || ''
  });

  // Mock data for contracts and investments
  const mockContracts = [
    {
      id: 1,
      type: 'Autopojištění',
      number: 'AP-2024-001',
      status: 'Aktivní',
      validFrom: '01.01.2024',
      validTo: '31.12.2024',
      premium: '3 500 Kč/rok',
      provider: 'Allianz pojišťovna'
    },
    {
      id: 2,
      type: 'Hypotéka',
      number: 'HY-2023-045',
      status: 'Aktivní',
      validFrom: '15.06.2023',
      validTo: '15.06.2043',
      amount: '2 500 000 Kč',
      rate: '4,8% p.a.',
      provider: 'Česká spořitelna'
    },
    {
      id: 3,
      type: 'Penzijní připojištění',
      number: 'PP-2022-123',
      status: 'Aktivní',
      monthlyPayment: '1 200 Kč',
      balance: '28 500 Kč',
      provider: 'ČSOB Penzijní společnost'
    }
  ];

  const mockNotifications = [
    {
      id: 1,
      title: 'Prodloužení autopojištění',
      message: 'Vaše autopojištění vyprší za 30 dní. Chcete ho prodloužit?',
      date: '15.11.2024',
      type: 'warning'
    },
    {
      id: 2,
      title: 'Nová investiční příležitost',
      message: 'Podívejte se na nový fond s garantovaným výnosem 5% p.a.',
      date: '10.11.2024',
      type: 'info'
    }
  ];

  if (!user.isLoggedIn) {
    return <Navigate to="/prihlaseni" replace />;
  }

  const handleProfileUpdate = () => {
    setIsEditProfileOpen(false);
    toast.success('Profil byl úspěšně aktualizován');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="text-xl">{user.name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Vítejte, {user.name}</h1>
                <p className="text-slate-600">Klientský portál Finančního Marketu</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Oznámení (2)
              </Button>
              <Dialog open={isEditProfileOpen} onOpenChange={setIsEditProfileOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Edit3 className="h-4 w-4 mr-2" />
                    Upravit profil
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Upravit profil</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Jméno</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <Button onClick={handleProfileUpdate} className="w-full">
                      Uložit změny
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Přehled</TabsTrigger>
            <TabsTrigger value="contracts">Smlouvy</TabsTrigger>
            <TabsTrigger value="investments">Investice</TabsTrigger>
            <TabsTrigger value="documents">Dokumenty</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Aktivní smlouvy</p>
                      <p className="text-2xl font-bold">3</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Měsíční platby</p>
                      <p className="text-2xl font-bold">4 700 Kč</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Investice</p>
                      <p className="text-2xl font-bold">28 500 Kč</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Pojistné plnění</p>
                      <p className="text-2xl font-bold">0 Kč</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity & Notifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5" />
                    <span>Oznámení</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockNotifications.map(notification => (
                      <div key={notification.id} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-lg">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          notification.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                        }`} />
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-900">{notification.title}</h4>
                          <p className="text-sm text-slate-600 mt-1">{notification.message}</p>
                          <p className="text-xs text-slate-400 mt-2">{notification.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Rychlé akce</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Sjednat nové pojištění
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calculator className="h-4 w-4 mr-2" />
                    Kalkulátor úvěru  
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    Kontaktovat poradce
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Stáhnout dokumenty
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Contracts Tab */}
          <TabsContent value="contracts">
            <Card>
              <CardHeader>
                <CardTitle>Moje smlouvy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockContracts.map(contract => (
                    <div key={contract.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{contract.type}</h3>
                          <p className="text-slate-600">Číslo smlouvy: {contract.number}</p>
                        </div>
                        <Badge variant={contract.status === 'Aktivní' ? 'default' : 'secondary'}>
                          {contract.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-slate-600">Poskytovatel</p>
                          <p className="font-medium">{contract.provider}</p>
                        </div>
                        {contract.validFrom && (
                          <div>
                            <p className="text-slate-600">Platnost od</p>
                            <p className="font-medium">{contract.validFrom}</p>
                          </div>
                        )}
                        {contract.premium && (
                          <div>
                            <p className="text-slate-600">Pojistné</p>
                            <p className="font-medium">{contract.premium}</p>
                          </div>
                        )}
                        {contract.monthlyPayment && (
                          <div>
                            <p className="text-slate-600">Měsíční platba</p>
                            <p className="font-medium">{contract.monthlyPayment}</p>
                          </div>
                        )}
                      </div>
                      <div className="flex space-x-2 mt-4">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Detail
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Stáhnout
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Investments Tab */}
          <TabsContent value="investments">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio přehled</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-slate-900 mb-2">28 500 Kč</div>
                      <div className="text-slate-600">Celková hodnota investic</div>
                      <div className="text-green-600 font-medium mt-2">+2,4% za posledních 30 dní</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Penzijní připojištění</span>
                        <span className="font-semibold">28 500 Kč</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-purple-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Investiční příležitosti</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold">Podílové fondy</h4>
                      <p className="text-sm text-slate-600 mt-1">Diverzifikované investování s profesionální správou</p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-green-600 font-medium">Očekávaný výnos: 6-8% p.a.</span>
                        <Button size="sm">Více info</Button>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold">Nemovitostní fondy</h4>
                      <p className="text-sm text-slate-600 mt-1">Stabilní investice do nemovitostního trhu</p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-green-600 font-medium">Očekávaný výnos: 4-6% p.a.</span>
                        <Button size="sm">Více info</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Moje dokumenty</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-slate-600" />
                      <div>
                        <p className="font-medium">Smlouva o autopojištění</p>
                        <p className="text-sm text-slate-600">Staženo: 15.11.2024</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Stáhnout
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-slate-600" />
                      <div>
                        <p className="font-medium">Hypoteční smlouva</p>
                        <p className="text-sm text-slate-600">Staženo: 10.11.2024</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Stáhnout
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-slate-600" />
                      <div>
                        <p className="font-medium">Výpis z penzijního účtu</p>
                        <p className="text-sm text-slate-600">Staženo: 01.11.2024</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Stáhnout
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClientPortal;