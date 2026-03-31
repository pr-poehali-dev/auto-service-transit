import Icon from "@/components/ui/icon";
import { SectionHeader } from "./shared";
import {
  HERO_IMG,
  TEAM_IMG,
  WORK_IMG,
  SERVICES,
  PORTFOLIO,
  TEAM_MEMBERS,
  PRICES,
  GUARANTEES,
  CERTIFICATES,
  PARTNERS,
  PROMO,
} from "./data";

export default function SectionsTop() {
  return (
    <>
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
    </>
  );
}
