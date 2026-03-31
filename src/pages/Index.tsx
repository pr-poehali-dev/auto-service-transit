import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/15aa65f2-c03f-4ffa-9092-7da287c37e47/files/b411521e-dc3d-4b2a-814c-e53e39ca5d7d.jpg";
const TEAM_IMG = "https://cdn.poehali.dev/projects/15aa65f2-c03f-4ffa-9092-7da287c37e47/files/06bff473-5b71-481e-ab03-48b0d5147651.jpg";
const WORK_IMG = "https://cdn.poehali.dev/projects/15aa65f2-c03f-4ffa-9092-7da287c37e47/files/d63bd674-8163-449e-9d30-6008b185e9d6.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О сервисе" },
  { id: "services", label: "Услуги" },
  { id: "portfolio", label: "Портфолио" },
  { id: "gallery", label: "Галерея" },
  { id: "team", label: "Команда" },
  { id: "prices", label: "Цены" },
  { id: "guarantees", label: "Гарантии" },
  { id: "certificates", label: "Сертификаты" },
  { id: "partners", label: "Партнёры" },
  { id: "promo", label: "Акции" },
  { id: "faq", label: "FAQ" },
  { id: "booking", label: "Запись" },
  { id: "reviews", label: "Отзывы" },
  { id: "contacts", label: "Контакты" },
];

const SERVICES = [
  { icon: "Wrench", title: "Диагностика", desc: "Компьютерная диагностика всех систем автомобиля" },
  { icon: "Settings", title: "ТО и обслуживание", desc: "Плановое техническое обслуживание по регламенту" },
  { icon: "Zap", title: "Электрика", desc: "Ремонт и замена электрооборудования" },
  { icon: "Shield", title: "Кузовной ремонт", desc: "Устранение повреждений, покраска, рихтовка" },
  { icon: "Gauge", title: "Ходовая часть", desc: "Ремонт подвески, рулевого управления, тормозов" },
  { icon: "Flame", title: "Двигатель", desc: "Капитальный и текущий ремонт двигателей" },
];

const PORTFOLIO = [
  { img: WORK_IMG, title: "BMW 5 серии", desc: "Ремонт подвески, замена ступичных подшипников", tag: "Ходовая" },
  { img: WORK_IMG, title: "Mercedes E-Class", desc: "Диагностика АКПП, замена масла в коробке", tag: "Трансмиссия" },
  { img: WORK_IMG, title: "Audi A6", desc: "Кузовной ремонт после ДТП, покраска бампера", tag: "Кузов" },
  { img: WORK_IMG, title: "Toyota Camry", desc: "Капитальный ремонт двигателя, полная переборка", tag: "Двигатель" },
  { img: WORK_IMG, title: "Volkswagen Passat", desc: "Замена цепи ГРМ, прокладки ГБЦ", tag: "Двигатель" },
  { img: WORK_IMG, title: "Hyundai Sonata", desc: "Ремонт тормозной системы, замена дисков и колодок", tag: "Тормоза" },
];

const TEAM_MEMBERS = [
  { img: TEAM_IMG, name: "Алексей Морозов", role: "Главный механик", exp: "15 лет опыта" },
  { img: TEAM_IMG, name: "Дмитрий Соколов", role: "Мастер по электрике", exp: "10 лет опыта" },
  { img: TEAM_IMG, name: "Сергей Волков", role: "Кузовной мастер", exp: "12 лет опыта" },
  { img: TEAM_IMG, name: "Игорь Лебедев", role: "Мастер-диагност", exp: "8 лет опыта" },
];

const PRICES = [
  { service: "Компьютерная диагностика", price: "от 500 ₽" },
  { service: "Замена масла и фильтров", price: "от 800 ₽" },
  { service: "Замена тормозных колодок", price: "от 1 200 ₽" },
  { service: "Ремонт подвески", price: "от 2 500 ₽" },
  { service: "Ремонт двигателя", price: "от 15 000 ₽" },
  { service: "Кузовной ремонт", price: "от 5 000 ₽" },
  { service: "Ремонт АКПП", price: "от 12 000 ₽" },
  { service: "Замена ГРМ", price: "от 4 500 ₽" },
];

const GUARANTEES = [
  { icon: "ShieldCheck", title: "Гарантия на работы", desc: "12 месяцев на все виды ремонтных работ без ограничений пробега" },
  { icon: "Package", title: "Гарантия на запчасти", desc: "Гарантия производителя на все устанавливаемые оригинальные детали" },
  { icon: "Clock", title: "Соблюдение сроков", desc: "Возврат 10% стоимости за каждый день просрочки сверх договора" },
  { icon: "RefreshCw", title: "Повторный ремонт", desc: "Бесплатное устранение дефектов, возникших по вине мастера" },
];

const CERTIFICATES = [
  { icon: "Award", title: "Сертификат ISO 9001:2015", year: "2022", desc: "Система менеджмента качества" },
  { icon: "Star", title: "Авторизованный сервис", year: "2021", desc: "Официальный партнёр Bosch" },
  { icon: "Trophy", title: "Лучший автосервис", year: "2023", desc: "Рейтинг города в категории «Авто»" },
  { icon: "BadgeCheck", title: "Сертификат мастеров", year: "2023", desc: "Квалификация European Motor Technician" },
];

const PARTNERS = [
  { name: "Bosch", type: "Диагностика" },
  { name: "Castrol", type: "Масла" },
  { name: "Mobil 1", type: "Масла" },
  { name: "Brembo", type: "Тормоза" },
  { name: "KYB", type: "Подвеска" },
  { name: "NGK", type: "Зажигание" },
  { name: "Denso", type: "Электрика" },
  { name: "Gates", type: "ГРМ" },
];

const PROMO = [
  { tag: "Горячее предложение", title: "Диагностика в подарок", desc: "При любом ремонте от 5 000 ₽ — компьютерная диагностика бесплатно", until: "до 30 апреля" },
  { tag: "Сезонный", title: "Сезонная смена шин", desc: "Хранение комплекта шин бесплатно при смене в нашем сервисе", until: "до 15 мая" },
  { tag: "Постоянным клиентам", title: "Карта лояльности", desc: "Скидка 10% на все работы при повторном обращении, 15% после 5 визитов", until: "Бессрочно" },
];

const FAQ_ITEMS = [
  { q: "Как записаться на ремонт?", a: "Вы можете записаться онлайн через форму на сайте, по телефону или написав нам в мессенджер. Запись доступна 24/7." },
  { q: "Предоставляете ли вы подменный автомобиль?", a: "Да, при ремонте сроком более 3 дней мы предоставляем подменный автомобиль класса не ниже вашего." },
  { q: "Работаете ли вы с гарантийными автомобилями?", a: "Да, мы используем оригинальные запчасти и соблюдаем регламент, поэтому гарантия производителя сохраняется." },
  { q: "Можно ли привезти свои запчасти?", a: "Мы устанавливаем запчасти клиента, однако на работы с чужими деталями гарантия распространяется только на саму работу." },
  { q: "Как долго длится ремонт?", a: "Срок зависит от сложности работ. Диагностика — 1-2 часа, ТО — 2-4 часа, сложный ремонт — от 1 до 5 рабочих дней." },
  { q: "Есть ли у вас видеонаблюдение?", a: "Да, весь сервис оснащён камерами наблюдения. По запросу можем предоставить запись процесса ремонта вашего автомобиля." },
];

const REVIEWS = [
  { name: "Константин В.", car: "BMW X5", rating: 5, text: "Отличный сервис! Делали подвеску — всё качественно, в срок. Мастер объяснил что и почему, показал старые детали. Рекомендую." },
  { name: "Ольга М.", car: "Toyota RAV4", rating: 5, text: "Обращаюсь сюда уже третий год. Всегда честно, без навязывания лишних работ. Качество на высоте, цены адекватные." },
  { name: "Андрей Ф.", car: "Mercedes C200", rating: 5, text: "Делал двигатель после серьёзной поломки. Ребята сделали всё чисто, дали гарантию. Машина работает как новая." },
  { name: "Марина С.", car: "Hyundai Tucson", rating: 4, text: "Хорошая работа, вежливый персонал. Единственное — пришлось немного подождать запчасти, но это понятно." },
  { name: "Виктор Т.", car: "Audi A4", rating: 5, text: "Профессионалы своего дела. Быстро нашли проблему, которую другие сервисы не могли определить месяцами." },
  { name: "Елена К.", car: "Volkswagen Tiguan", rating: 5, text: "Записалась онлайн, приехала — всё готово. Сделали кузовной ремонт, не отличить от заводского. Спасибо!" },
];

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal, .reveal-left").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12 reveal">
      <h2 className="section-title">{title}</h2>
      <span className="gold-line" />
      {subtitle && <p className="text-transit-muted font-body text-lg max-w-2xl">{subtitle}</p>}
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= rating ? "text-transit-gold text-lg" : "text-transit-border text-lg"}>★</span>
      ))}
    </div>
  );
}

const Index = () => {
  useReveal();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [bookingForm, setBookingForm] = useState({ name: "", phone: "", car: "", service: "", date: "", comment: "" });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-transit-dark text-transit-text font-body">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-sm border-b border-transit-border">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("home")} className="font-heading text-2xl font-bold tracking-widest text-white">
            ТРА<span className="text-transit-gold">НЗИ</span>Т
          </button>
          <nav className="hidden xl:flex items-center gap-5">
            {NAV_ITEMS.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`font-heading text-xs uppercase tracking-widest transition-colors duration-200 ${activeSection === n.id ? "text-transit-gold" : "text-transit-muted hover:text-transit-gold"}`}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <button className="xl:hidden text-transit-muted" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {mobileOpen && (
          <div className="xl:hidden bg-[#050505] border-t border-transit-border px-4 py-4 grid grid-cols-3 gap-2">
            {NAV_ITEMS.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="font-heading text-xs uppercase tracking-widest text-transit-muted hover:text-transit-gold py-2 text-center transition-colors">
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Автосервис ТРАНЗИТ" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#0a0a0a]/80 to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <p className="font-heading text-transit-gold tracking-[0.4em] text-sm uppercase mb-6">
            Профессиональный автосервис
          </p>
          <h1 className="font-heading text-7xl md:text-9xl font-bold uppercase tracking-tight text-white mb-4">
            ТРА<span className="text-transit-gold">НЗИ</span>Т
          </h1>
          <div className="w-24 h-[2px] bg-transit-gold mx-auto mb-8" />
          <p className="font-body text-transit-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Ремонт и обслуживание автомобилей любых марок. Более 15 лет на рынке. Гарантия на все виды работ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-transit-gold text-transit-dark font-heading font-semibold uppercase tracking-widest px-10 py-4 hover:bg-transit-gold-light transition-all duration-200"
              onClick={() => scrollTo("booking")}
            >
              Записаться на ремонт
            </button>
            <button
              className="border border-transit-gold text-transit-gold font-heading font-semibold uppercase tracking-widest px-10 py-4 hover:bg-transit-gold hover:text-transit-dark transition-all duration-200"
              onClick={() => scrollTo("portfolio")}
            >
              Смотреть работы
            </button>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[["15+", "лет опыта"], ["2000+", "клиентов"], ["100%", "гарантия"]].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="font-heading text-3xl font-bold text-transit-gold">{num}</div>
                <div className="font-body text-transit-muted text-xs uppercase tracking-widest mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={() => scrollTo("about")} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-transit-muted animate-bounce">
          <Icon name="ChevronDown" size={28} />
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-transit-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader title="О сервисе" subtitle="Надёжность, проверенная временем и тысячами довольных клиентов" />
              <p className="text-transit-muted leading-relaxed mb-6 reveal">
                Автосервис ТРАНЗИТ основан в 2009 году. За это время мы выполнили более 20 000 ремонтов и завоевали репутацию одного из самых надёжных сервисов города.
              </p>
              <p className="text-transit-muted leading-relaxed mb-8 reveal">
                Мы работаем со всеми марками автомобилей — от отечественных до элитных европейских. Наши мастера регулярно проходят обучение и сертификацию у ведущих производителей запчастей.
              </p>
              <div className="grid grid-cols-2 gap-6 reveal">
                {[["20 000+", "выполненных работ"], ["15", "опытных мастеров"], ["12 мес.", "гарантия на работы"], ["24/7", "экстренная помощь"]].map(([val, label]) => (
                  <div key={label} className="border-l-2 border-transit-gold pl-4">
                    <div className="font-heading text-2xl font-bold text-transit-gold">{val}</div>
                    <div className="text-transit-muted text-sm mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative reveal">
              <img src={HERO_IMG} alt="Автосервис" className="w-full h-96 object-cover" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-transit-gold opacity-40" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border border-transit-gold opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-transit-dark">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Услуги" subtitle="Полный спектр услуг по ремонту и обслуживанию автомобилей" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="bg-transit-card border border-transit-border hover:border-transit-gold transition-all duration-300 p-8 group reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 border border-transit-gold flex items-center justify-center mb-6 group-hover:bg-transit-gold transition-colors duration-300">
                  <Icon name={s.icon} size={22} className="text-transit-gold group-hover:text-transit-dark transition-colors duration-300" fallback="Wrench" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-white">{s.title}</h3>
                <p className="text-transit-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-transit-surface">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Портфолио" subtitle="Избранные работы нашего сервиса" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO.map((p, i) => (
              <div key={i} className="group overflow-hidden bg-transit-card border border-transit-border hover:border-transit-gold transition-all duration-300 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="relative overflow-hidden h-52">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-transit-gold text-transit-dark font-heading text-xs uppercase tracking-widest px-3 py-1">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-transit-muted text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-transit-dark">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Галерея" subtitle="Фото и видео выполненных работ" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="group relative overflow-hidden aspect-square reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                <img
                  src={i % 3 === 0 ? TEAM_IMG : i % 3 === 1 ? WORK_IMG : HERO_IMG}
                  alt={`Работа ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-transit-dark/0 group-hover:bg-transit-dark/50 transition-all duration-300 flex items-center justify-center">
                  <Icon name="ZoomIn" size={32} className="text-transit-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" fallback="Search" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center reveal">
            <div className="inline-flex items-center gap-3 border border-transit-border hover:border-transit-gold transition-colors px-6 py-3 cursor-pointer">
              <Icon name="Play" size={18} className="text-transit-gold" />
              <span className="font-heading text-sm uppercase tracking-widest text-transit-muted">Видео о нашем сервисе</span>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 bg-transit-surface">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Команда" subtitle="Опытные мастера с профессиональной сертификацией" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((m, i) => (
              <div key={i} className="bg-transit-card border border-transit-border hover:border-transit-gold transition-all duration-300 overflow-hidden group reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="relative overflow-hidden h-64">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-transit-dark to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-semibold text-white">{m.name}</h3>
                  <p className="text-transit-gold text-sm font-body mt-1">{m.role}</p>
                  <p className="text-transit-muted text-xs mt-2">{m.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 bg-transit-dark">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Цены" subtitle="Прозрачное ценообразование без скрытых доплат" />
          <div className="max-w-3xl">
            {PRICES.map((p, i) => (
              <div
                key={i}
                className="flex justify-between items-center py-5 border-b border-transit-border hover:border-transit-gold transition-colors duration-200 group reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <span className="font-body text-transit-muted group-hover:text-transit-text transition-colors">{p.service}</span>
                <span className="font-heading text-transit-gold font-semibold text-lg">{p.price}</span>
              </div>
            ))}
            <p className="text-transit-muted text-sm mt-6 reveal">* Точная стоимость определяется после диагностики. Возможна рассрочка.</p>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section id="guarantees" className="py-24 bg-transit-surface">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Гарантии" subtitle="Мы несём полную ответственность за каждую работу" />
          <div className="grid md:grid-cols-2 gap-6">
            {GUARANTEES.map((g, i) => (
              <div key={i} className="bg-transit-card border border-transit-border hover:border-transit-gold transition-all duration-300 p-8 flex gap-6 group reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-14 h-14 border border-transit-gold flex-shrink-0 flex items-center justify-center group-hover:bg-transit-gold transition-colors duration-300">
                  <Icon name={g.icon} size={24} className="text-transit-gold group-hover:text-transit-dark transition-colors duration-300" fallback="Shield" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">{g.title}</h3>
                  <p className="text-transit-muted text-sm leading-relaxed">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="py-24 bg-transit-dark">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Сертификаты" subtitle="Подтверждение нашей квалификации и качества работ" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATES.map((c, i) => (
              <div key={i} className="bg-transit-card border border-transit-border hover:border-transit-gold transition-all duration-300 p-8 text-center group reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-16 h-16 border border-transit-gold mx-auto flex items-center justify-center mb-5 group-hover:bg-transit-gold transition-colors duration-300">
                  <Icon name={c.icon} size={28} className="text-transit-gold group-hover:text-transit-dark transition-colors duration-300" fallback="Award" />
                </div>
                <div className="text-transit-gold font-heading text-sm uppercase tracking-widest mb-1">{c.year}</div>
                <h3 className="font-heading text-base font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-transit-muted text-xs">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-24 bg-transit-surface">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Партнёры" subtitle="Работаем только с проверенными поставщиками" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PARTNERS.map((p, i) => (
              <div key={i} className="bg-transit-card border border-transit-border hover:border-transit-gold transition-all duration-300 p-8 text-center reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="font-heading text-2xl font-bold text-transit-text mb-1">{p.name}</div>
                <div className="text-transit-muted text-xs uppercase tracking-widest">{p.type}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO */}
      <section id="promo" className="py-24 bg-transit-dark">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Акции" subtitle="Актуальные предложения для наших клиентов" />
          <div className="grid md:grid-cols-3 gap-6">
            {PROMO.map((pr, i) => (
              <div key={i} className="bg-transit-card border border-transit-border hover:border-transit-gold transition-all duration-300 p-8 relative overflow-hidden reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-transit-gold" />
                <span className="inline-block bg-transit-gold/10 text-transit-gold font-heading text-xs uppercase tracking-widest px-3 py-1 mb-5">{pr.tag}</span>
                <h3 className="font-heading text-xl font-bold text-white mb-3">{pr.title}</h3>
                <p className="text-transit-muted text-sm leading-relaxed mb-6">{pr.desc}</p>
                <div className="flex items-center gap-2 text-transit-muted text-xs">
                  <Icon name="Calendar" size={14} />
                  <span>{pr.until}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-transit-surface">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader title="Частые вопросы" subtitle="Ответы на самые популярные вопросы клиентов" />
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="bg-transit-card border border-transit-border hover:border-transit-gold transition-colors duration-300 reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-heading text-base font-medium text-white pr-4">{item.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={18} className="text-transit-gold flex-shrink-0" />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-transit-muted text-sm leading-relaxed border-t border-transit-border pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-24 bg-transit-dark">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeader title="Запись на сервис" subtitle="Оставьте заявку и мы свяжемся с вами в течение 30 минут" />
          <div className="bg-transit-card border border-transit-border p-8 md:p-12 reveal">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { field: "name", label: "Ваше имя", placeholder: "Иван Иванов", type: "text" },
                { field: "phone", label: "Телефон", placeholder: "+7 (999) 000-00-00", type: "tel" },
                { field: "car", label: "Автомобиль", placeholder: "Марка, модель, год", type: "text" },
                { field: "date", label: "Желаемая дата", placeholder: "", type: "date" },
              ].map(({ field, label, placeholder, type }) => (
                <div key={field}>
                  <label className="block font-heading text-xs uppercase tracking-widest text-transit-muted mb-2">{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={bookingForm[field as keyof typeof bookingForm]}
                    onChange={(e) => setBookingForm({ ...bookingForm, [field]: e.target.value })}
                    className="w-full bg-transit-surface border border-transit-border text-transit-text font-body px-4 py-3 focus:outline-none focus:border-transit-gold transition-colors placeholder:text-transit-border"
                    style={{ colorScheme: "dark" }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-6">
              <label className="block font-heading text-xs uppercase tracking-widest text-transit-muted mb-2">Вид работ</label>
              <select
                value={bookingForm.service}
                onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
                className="w-full bg-transit-surface border border-transit-border text-transit-text font-body px-4 py-3 focus:outline-none focus:border-transit-gold transition-colors"
              >
                <option value="">Выберите услугу</option>
                {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
              </select>
            </div>
            <div className="mt-6">
              <label className="block font-heading text-xs uppercase tracking-widest text-transit-muted mb-2">Комментарий</label>
              <textarea
                rows={3}
                placeholder="Опишите проблему..."
                value={bookingForm.comment}
                onChange={(e) => setBookingForm({ ...bookingForm, comment: e.target.value })}
                className="w-full bg-transit-surface border border-transit-border text-transit-text font-body px-4 py-3 focus:outline-none focus:border-transit-gold transition-colors placeholder:text-transit-border resize-none"
              />
            </div>
            <button className="w-full mt-8 bg-transit-gold text-transit-dark font-heading font-semibold uppercase tracking-widest py-4 text-base hover:bg-transit-gold-light transition-all duration-200">
              Записаться на ремонт
            </button>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-transit-surface">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Отзывы" subtitle="Что говорят наши клиенты" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-transit-card border border-transit-border hover:border-transit-gold transition-all duration-300 p-8 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <StarRating rating={r.rating} />
                <p className="text-transit-muted text-sm leading-relaxed my-5 italic">"{r.text}"</p>
                <div className="border-t border-transit-border pt-4">
                  <div className="font-heading text-white font-medium">{r.name}</div>
                  <div className="text-transit-muted text-xs mt-1">{r.car}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-transit-dark">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Контакты" subtitle="Мы работаем для вас каждый день" />
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "MapPin", title: "Адрес", lines: ["ул. Промышленная, 45", "г. Москва, 115432"] },
              { icon: "Phone", title: "Телефон", lines: ["+7 (495) 000-00-00", "+7 (800) 000-00-00 (бесплатно)"] },
              { icon: "Clock", title: "Режим работы", lines: ["Пн–Пт: 8:00 – 20:00", "Сб–Вс: 9:00 – 18:00"] },
            ].map((c, i) => (
              <div key={i} className="flex gap-5 reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 border border-transit-gold flex-shrink-0 flex items-center justify-center">
                  <Icon name={c.icon} size={20} className="text-transit-gold" fallback="MapPin" />
                </div>
                <div>
                  <div className="font-heading text-xs uppercase tracking-widest text-transit-muted mb-2">{c.title}</div>
                  {c.lines.map((l) => <div key={l} className="text-transit-text font-body">{l}</div>)}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-transit-card border border-transit-border overflow-hidden mb-10 reveal">
            <div className="h-64 flex items-center justify-center">
              <div className="text-center">
                <Icon name="Map" size={40} className="text-transit-gold mx-auto mb-3" />
                <p className="text-transit-muted font-heading uppercase tracking-widest text-sm">Карта проезда</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 reveal">
            <button className="bg-transit-gold text-transit-dark font-heading font-semibold uppercase tracking-widest px-8 py-3 hover:bg-transit-gold-light transition-all duration-200 flex items-center gap-3 justify-center">
              <Icon name="Phone" size={16} />
              Позвонить нам
            </button>
            <button className="border border-transit-gold text-transit-gold font-heading font-semibold uppercase tracking-widest px-8 py-3 hover:bg-transit-gold hover:text-transit-dark transition-all duration-200 flex items-center gap-3 justify-center">
              <Icon name="MessageCircle" size={16} />
              WhatsApp
            </button>
            <button className="border border-transit-gold text-transit-gold font-heading font-semibold uppercase tracking-widest px-8 py-3 hover:bg-transit-gold hover:text-transit-dark transition-all duration-200 flex items-center gap-3 justify-center">
              <Icon name="Send" size={16} />
              Telegram
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] border-t border-transit-border py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-heading text-xl font-bold tracking-widest text-white">
            ТРА<span className="text-transit-gold">НЗИ</span>Т
          </div>
          <p className="text-transit-muted text-sm">© 2024 Автосервис ТРАНЗИТ. Все права защищены.</p>
          <div className="flex gap-6">
            {["VK", "YouTube", "Telegram"].map((s) => (
              <button key={s} className="text-transit-muted hover:text-transit-gold transition-colors font-body text-sm">
                {s}
              </button>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
