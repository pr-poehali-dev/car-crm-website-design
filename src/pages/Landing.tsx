import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 12, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const plans = [
    {
      name: 'Старт',
      price: 2990,
      period: 'месяц',
      description: 'Для небольших автосервисов',
      features: ['До 100 клиентов', 'До 50 заказов/мес', 'Базовая аналитика', 'Email поддержка', '1 пользователь'],
      popular: false,
      color: 'border-primary/30'
    },
    {
      name: 'Бизнес',
      price: 5990,
      period: 'месяц',
      description: 'Для растущего бизнеса',
      features: ['До 500 клиентов', 'Безлимит заказов', 'Расширенная аналитика', 'Приоритетная поддержка', 'До 5 пользователей', 'Интеграции'],
      popular: true,
      color: 'border-accent/50'
    },
    {
      name: 'Премиум',
      price: 9990,
      period: 'месяц',
      description: 'Для крупных сетей',
      features: ['Безлимит клиентов', 'Безлимит заказов', 'AI-аналитика', '24/7 поддержка', 'Безлимит пользователей', 'Все интеграции', 'Персональный менеджер'],
      popular: false,
      color: 'border-secondary/30'
    }
  ];

  const modules = [
    { icon: 'Users', title: 'Управление клиентами', description: 'База клиентов с историей обслуживания и автоматическими напоминаниями' },
    { icon: 'ShoppingCart', title: 'Система заказов', description: 'Полный цикл заказа от создания до завершения с трекингом статусов' },
    { icon: 'Warehouse', title: 'Склад и запчасти', description: 'Учёт товаров, автозаказ и интеграция с поставщиками' },
    { icon: 'Calendar', title: 'Запись онлайн', description: 'Виджет записи для сайта и синхронизация с календарём' },
    { icon: 'TrendingUp', title: 'Аналитика и отчёты', description: 'Дашборды, графики выручки и прогнозы продаж' },
    { icon: 'Bell', title: 'Уведомления', description: 'SMS и Email рассылки клиентам о статусе заказа' }
  ];

  const benefits = [
    { icon: 'Zap', title: 'Быстрый старт', description: 'Запуск за 15 минут без установки программ' },
    { icon: 'Shield', title: 'Безопасность', description: 'Шифрование данных и резервное копирование' },
    { icon: 'Smartphone', title: 'Мобильность', description: 'Работает на любых устройствах из любой точки' },
    { icon: 'Headphones', title: 'Поддержка 24/7', description: 'Русскоязычная техподдержка без выходных' }
  ];

  const reviews = [
    { name: 'Дмитрий Соколов', role: 'Владелец автосервиса', text: 'Выручка выросла на 40% за первые 3 месяца. Больше не теряем клиентов!', rating: 5, avatar: 'Д' },
    { name: 'Анна Морозова', role: 'Директор автомагазина', text: 'Наконец-то порядок в заказах и складе. Окупилась за первый месяц.', rating: 5, avatar: 'А' },
    { name: 'Сергей Волков', role: 'Управляющий СТО', text: 'Отличная система! Персонал освоил за пару дней. Поддержка на высоте.', rating: 5, avatar: 'С' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border backdrop-blur-md bg-card/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Icon name="Wrench" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">AutoCRM</h1>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#pricing" className="text-sm hover:text-primary transition-colors">Тарифы</a>
              <a href="#modules" className="text-sm hover:text-primary transition-colors">Модули</a>
              <a href="#benefits" className="text-sm hover:text-primary transition-colors">Преимущества</a>
              <a href="#reviews" className="text-sm hover:text-primary transition-colors">Отзывы</a>
              <Button size="sm" className="gradient-primary" onClick={() => navigate('/crm')}>
                Войти в CRM
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/50 text-sm">
              🚀 Автоматизация автобизнеса
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              CRM-система для <span className="gradient-primary bg-clip-text text-transparent">автосервисов</span> и СТО
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Увеличьте выручку на 40% за 3 месяца. Управляйте клиентами, заказами и складом в одной системе
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-lg px-8 py-6 hover-scale">
                <Icon name="Rocket" size={20} className="mr-2" />
                Попробовать бесплатно
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale" onClick={() => navigate('/crm')}>
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть демо
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              14 дней бесплатно • Без банковской карты • Отмена в любой момент
            </p>
          </div>
        </div>
      </section>

      <section id="promo" className="py-16 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card border-accent/50 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Flame" size={24} className="text-accent" />
                      <Badge className="bg-accent/20 text-accent border-accent/50">Акция</Badge>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">Скидка 50% на первый месяц!</h3>
                    <p className="text-muted-foreground">Успейте подключить систему по специальной цене</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-lg gradient-accent flex items-center justify-center mb-1">
                        <span className="text-2xl font-bold text-white">{timeLeft.days}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">дней</span>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-lg gradient-accent flex items-center justify-center mb-1">
                        <span className="text-2xl font-bold text-white">{timeLeft.hours}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">часов</span>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-lg gradient-accent flex items-center justify-center mb-1">
                        <span className="text-2xl font-bold text-white">{timeLeft.minutes}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">минут</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Выберите свой тариф</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены без скрытых платежей. Меняйте тариф в любой момент
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <Card key={idx} className={`glass-card ${plan.color} hover-scale relative ${plan.popular ? 'md:scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="gradient-accent text-white border-0 px-4 py-1">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-sm mb-4">{plan.description}</CardDescription>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold gradient-primary bg-clip-text text-transparent">₽{plan.price.toLocaleString()}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${plan.popular ? 'gradient-primary' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                    Начать работу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="modules" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Дополнительные модули</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Расширяйте функционал системы под нужды вашего бизнеса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {modules.map((module, idx) => (
              <Card key={idx} className="glass-card hover-scale group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={module.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ключевые преимущества</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Почему AutoCRM выбирают тысячи автосервисов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="glass-card text-center hover-scale">
                <CardContent className="pt-6 space-y-4">
                  <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mx-auto">
                    <Icon name={benefit.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Узнайте, что говорят владельцы автосервисов о нашей системе
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="glass-card hover-scale">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-foreground italic">"{review.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                      <span className="text-lg font-bold text-white">{review.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <Card className="glass-card border-primary/30 max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Готовы начать?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к тысячам автосервисов, которые уже автоматизировали свой бизнес
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-primary text-lg px-8 py-6 hover-scale">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Начать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover-scale">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Icon name="Wrench" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold gradient-primary bg-clip-text text-transparent">AutoCRM</h3>
                <p className="text-xs text-muted-foreground">© 2024 Все права защищены</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
              <a href="#" className="hover:text-primary transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
