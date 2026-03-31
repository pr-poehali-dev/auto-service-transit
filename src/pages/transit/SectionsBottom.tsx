import { useState } from "react";
import Icon from "@/components/ui/icon";
import { SectionHeader, StarRating } from "./shared";
import { FAQ_ITEMS, REVIEWS, SERVICES } from "./data";

export default function SectionsBottom() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [bookingForm, setBookingForm] = useState({ name: "", phone: "", car: "", service: "", date: "", comment: "" });

  return (
    <>
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
    </>
  );
}
