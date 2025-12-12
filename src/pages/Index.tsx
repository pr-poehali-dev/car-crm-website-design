import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Client {
  id: number;
  name: string;
  phone: string;
  car: string;
  lastVisit: string;
  totalOrders: number;
}

interface Order {
  id: number;
  clientName: string;
  type: 'service' | 'product';
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  amount: number;
  date: string;
}

interface Service {
  id: number;
  name: string;
  category: string;
  price: number;
  duration: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const clients: Client[] = [
    { id: 1, name: 'Иван Петров', phone: '+7 999 123-45-67', car: 'BMW X5 2020', lastVisit: '15.12.2024', totalOrders: 12 },
    { id: 2, name: 'Мария Сидорова', phone: '+7 999 234-56-78', car: 'Mercedes-Benz C-Class 2019', lastVisit: '10.12.2024', totalOrders: 8 },
    { id: 3, name: 'Алексей Кузнецов', phone: '+7 999 345-67-89', car: 'Audi A6 2021', lastVisit: '08.12.2024', totalOrders: 15 },
    { id: 4, name: 'Елена Волкова', phone: '+7 999 456-78-90', car: 'Toyota Camry 2022', lastVisit: '05.12.2024', totalOrders: 6 }
  ];

  const orders: Order[] = [
    { id: 1, clientName: 'Иван Петров', type: 'service', description: 'Замена масла и фильтров', status: 'in-progress', amount: 4500, date: '12.12.2024' },
    { id: 2, clientName: 'Мария Сидорова', type: 'product', description: 'Летние шины Michelin 225/45 R17', status: 'completed', amount: 32000, date: '10.12.2024' },
    { id: 3, clientName: 'Алексей Кузнецов', type: 'service', description: 'Диагностика двигателя', status: 'pending', amount: 2000, date: '11.12.2024' },
    { id: 4, clientName: 'Елена Волкова', type: 'service', description: 'Замена тормозных колодок', status: 'completed', amount: 6500, date: '09.12.2024' }
  ];

  const services: Service[] = [
    { id: 1, name: 'Замена масла', category: 'Обслуживание', price: 1500, duration: '30 мин' },
    { id: 2, name: 'Диагностика двигателя', category: 'Диагностика', price: 2000, duration: '1 час' },
    { id: 3, name: 'Замена тормозных колодок', category: 'Ремонт', price: 4500, duration: '2 часа' },
    { id: 4, name: 'Шиномонтаж', category: 'Обслуживание', price: 2000, duration: '1 час' },
    { id: 5, name: 'Компьютерная диагностика', category: 'Диагностика', price: 1000, duration: '30 мин' },
    { id: 6, name: 'Замена ГРМ', category: 'Ремонт', price: 8500, duration: '4 часа' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'in-progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Завершен';
      case 'in-progress': return 'В работе';
      case 'pending': return 'Ожидает';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border backdrop-blur-md bg-card/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <Icon name="Wrench" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">AutoCRM</h1>
              <p className="text-xs text-muted-foreground">Управление автосервисом</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Icon name="Bell" size={16} />
              <span className="hidden sm:inline">Уведомления</span>
            </Button>
            <Button size="sm" className="gradient-primary gap-2">
              <Icon name="Plus" size={16} />
              <span className="hidden sm:inline">Новый заказ</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="glass-card p-1">
            <TabsTrigger value="dashboard" className="gap-2 data-[state=active]:gradient-primary">
              <Icon name="LayoutDashboard" size={18} />
              Дашборд
            </TabsTrigger>
            <TabsTrigger value="clients" className="gap-2 data-[state=active]:gradient-primary">
              <Icon name="Users" size={18} />
              Клиенты
            </TabsTrigger>
            <TabsTrigger value="orders" className="gap-2 data-[state=active]:gradient-primary">
              <Icon name="ShoppingCart" size={18} />
              Заказы
            </TabsTrigger>
            <TabsTrigger value="services" className="gap-2 data-[state=active]:gradient-primary">
              <Icon name="Wrench" size={18} />
              Услуги
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="glass-card border-primary/20 hover-scale">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">Всего клиентов</CardTitle>
                    <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                      <Icon name="Users" size={16} className="text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{clients.length}</div>
                  <p className="text-xs text-muted-foreground mt-1">+12% за месяц</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-secondary/20 hover-scale">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">Активных заказов</CardTitle>
                    <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                      <Icon name="ShoppingCart" size={16} className="text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{orders.filter(o => o.status !== 'completed').length}</div>
                  <p className="text-xs text-muted-foreground mt-1">В работе сейчас</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-accent/20 hover-scale">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">Выручка за месяц</CardTitle>
                    <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
                      <Icon name="TrendingUp" size={16} className="text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">₽{orders.reduce((sum, o) => sum + o.amount, 0).toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground mt-1">+8% к прошлому месяцу</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-primary/20 hover-scale">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">Услуг в каталоге</CardTitle>
                    <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                      <Icon name="Wrench" size={16} className="text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{services.length}</div>
                  <p className="text-xs text-muted-foreground mt-1">Доступно сегодня</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Activity" size={20} />
                    Последние заказы
                  </CardTitle>
                  <CardDescription>Недавняя активность в системе</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {orders.slice(0, 3).map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                          <Icon name={order.type === 'service' ? 'Wrench' : 'ShoppingBag'} size={18} className="text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{order.clientName}</p>
                          <p className="text-xs text-muted-foreground">{order.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₽{order.amount.toLocaleString()}</p>
                        <Badge variant="outline" className={getStatusColor(order.status)}>
                          {getStatusText(order.status)}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Star" size={20} />
                    Популярные услуги
                  </CardTitle>
                  <CardDescription>Топ услуг по спросу</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {services.slice(0, 3).map((service) => (
                    <div key={service.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                          <Icon name="Wrench" size={18} className="text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{service.name}</p>
                          <p className="text-xs text-muted-foreground">{service.category} • {service.duration}</p>
                        </div>
                      </div>
                      <p className="font-semibold">₽{service.price.toLocaleString()}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="clients" className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Клиенты</h2>
                <p className="text-muted-foreground">Управление базой клиентов</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gradient-primary gap-2">
                    <Icon name="UserPlus" size={18} />
                    Добавить клиента
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-card">
                  <DialogHeader>
                    <DialogTitle>Новый клиент</DialogTitle>
                    <DialogDescription>Добавьте информацию о новом клиенте</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя клиента</Label>
                      <Input id="name" placeholder="Иван Иванов" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" placeholder="+7 999 123-45-67" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="car">Автомобиль</Label>
                      <Input id="car" placeholder="BMW X5 2020" />
                    </div>
                    <Button className="w-full gradient-primary">Добавить клиента</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="relative">
              <Icon name="Search" size={18} className="absolute left-3 top-3 text-muted-foreground" />
              <Input placeholder="Поиск клиентов..." className="pl-10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {clients.map((client) => (
                <Card key={client.id} className="glass-card hover-scale">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                          <span className="text-lg font-bold text-white">{client.name.charAt(0)}</span>
                        </div>
                        <div>
                          <CardTitle className="text-lg">{client.name}</CardTitle>
                          <CardDescription className="text-xs">{client.phone}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Car" size={16} className="text-muted-foreground" />
                      <span>{client.car}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={16} className="text-muted-foreground" />
                        <span>{client.lastVisit}</span>
                      </div>
                      <Badge variant="outline" className="bg-primary/20 text-primary border-primary/50">
                        {client.totalOrders} заказов
                      </Badge>
                    </div>
                    <Button variant="outline" className="w-full mt-2">Открыть карточку</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Заказы</h2>
                <p className="text-muted-foreground">Управление заказами на услуги и товары</p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gradient-primary gap-2">
                    <Icon name="Plus" size={18} />
                    Создать заказ
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-card">
                  <DialogHeader>
                    <DialogTitle>Новый заказ</DialogTitle>
                    <DialogDescription>Создайте заказ на услугу или товар</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="client">Клиент</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите клиента" />
                        </SelectTrigger>
                        <SelectContent>
                          {clients.map(client => (
                            <SelectItem key={client.id} value={client.id.toString()}>{client.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="type">Тип заказа</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="service">Услуга</SelectItem>
                          <SelectItem value="product">Товар</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Описание</Label>
                      <Input id="description" placeholder="Замена масла и фильтров" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="amount">Сумма (₽)</Label>
                      <Input id="amount" type="number" placeholder="4500" />
                    </div>
                    <Button className="w-full gradient-primary">Создать заказ</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">Все</Button>
              <Button variant="outline" size="sm">В ожидании</Button>
              <Button variant="outline" size="sm">В работе</Button>
              <Button variant="outline" size="sm">Завершенные</Button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {orders.map((order) => (
                <Card key={order.id} className="glass-card hover-scale">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                          <Icon name={order.type === 'service' ? 'Wrench' : 'ShoppingBag'} size={24} className="text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{order.clientName}</h3>
                            <Badge variant="outline" className="text-xs">
                              {order.type === 'service' ? 'Услуга' : 'Товар'}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{order.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">Заказ #{order.id} • {order.date}</p>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="text-2xl font-bold">₽{order.amount.toLocaleString()}</p>
                        <Badge variant="outline" className={getStatusColor(order.status)}>
                          {getStatusText(order.status)}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="services" className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Каталог услуг</h2>
                <p className="text-muted-foreground">Управление услугами автосервиса</p>
              </div>
              <Button className="gradient-primary gap-2">
                <Icon name="Plus" size={18} />
                Добавить услугу
              </Button>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">Все</Button>
              <Button variant="outline" size="sm">Обслуживание</Button>
              <Button variant="outline" size="sm">Ремонт</Button>
              <Button variant="outline" size="sm">Диагностика</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <Card key={service.id} className="glass-card hover-scale">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="bg-secondary/20 text-secondary border-secondary/50">
                        {service.category}
                      </Badge>
                      <Icon name="Wrench" size={18} className="text-muted-foreground" />
                    </div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>{service.duration}</span>
                      </div>
                      <p className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                        ₽{service.price.toLocaleString()}
                      </p>
                    </div>
                    <Button variant="outline" className="w-full">Создать заказ</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;