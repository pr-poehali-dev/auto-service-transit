import Icon from "@/components/ui/icon";
import { NAV_ITEMS, HERO_IMG } from "./data";

interface NavbarHeroProps {
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
  activeSection: string;
  scrollTo: (id: string) => void;
}

export default function NavbarHero({ mobileOpen, setMobileOpen, activeSection, scrollTo }: NavbarHeroProps) {
  return (
    <>
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
    </>
  );
}
