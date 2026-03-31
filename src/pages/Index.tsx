import { useEffect, useState } from "react";
import { NAV_ITEMS } from "./transit/data";
import { useReveal } from "./transit/shared";
import NavbarHero from "./transit/NavbarHero";
import SectionsTop from "./transit/SectionsTop";
import SectionsBottom from "./transit/SectionsBottom";

const Index = () => {
  useReveal();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
      <NavbarHero
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        activeSection={activeSection}
        scrollTo={scrollTo}
      />
      <SectionsTop />
      <SectionsBottom />
    </div>
  );
};

export default Index;
