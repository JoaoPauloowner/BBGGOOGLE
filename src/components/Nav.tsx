import { useState, useEffect } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#06090f]/95 backdrop-blur-md py-4 border-slate-800/80 shadow-lg shadow-black/40"
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo "BBG" */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center space-x-2 group focus:outline-none"
        >
          <span className="font-barlow text-3xl font-black tracking-wider transition-transform duration-300 group-hover:scale-102">
            <span className="text-[#4d9fff] drop-shadow-[0_0_15px_rgba(77,159,255,0.2)]">BB</span>
            <span className="text-[#f97316] drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]">G</span>
          </span>
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-slate-500 pl-1 border-l border-slate-800 hidden sm:inline-block">
            Revenue Eng.
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-dmsans text-sm font-medium">
          <button
            onClick={() => scrollToSection("diagnostico")}
            className="text-slate-400 hover:text-white transition-colors duration-150 cursor-pointer"
          >
            Diagnóstico
          </button>
          <button
            onClick={() => scrollToSection("metodologia")}
            className="text-slate-400 hover:text-white transition-colors duration-150 cursor-pointer"
          >
            Metodologia
          </button>
          <button
            onClick={() => scrollToSection("processo")}
            className="text-slate-400 hover:text-white transition-colors duration-150 cursor-pointer"
          >
            Processo
          </button>
          <button
            onClick={() => scrollToSection("numeros")}
            className="text-slate-400 hover:text-white transition-colors duration-150 cursor-pointer"
          >
            Cases
          </button>
          <button
            onClick={() => scrollToSection("depoimentos")}
            className="text-slate-400 hover:text-white transition-colors duration-150 cursor-pointer"
          >
            Insights
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("diagnostico-final")}
            className="clip-path-angular-sm bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-2.5 text-xs font-dmsans font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] cursor-pointer active:scale-95"
          >
            Agendar Diagnóstico
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#090e1a] border-b border-slate-800 px-6 py-6 space-y-4 animate-fade-in absolute w-full left-0">
          <div className="flex flex-col space-y-4 font-dmsans text-sm font-medium">
            <button
              onClick={() => scrollToSection("diagnostico")}
              className="text-left text-slate-400 hover:text-white py-2 border-b border-slate-900"
            >
              Diagnóstico
            </button>
            <button
              onClick={() => scrollToSection("metodologia")}
              className="text-left text-slate-400 hover:text-white py-2 border-b border-slate-900"
            >
              Metodologia
            </button>
            <button
              onClick={() => scrollToSection("processo")}
              className="text-left text-slate-400 hover:text-white py-2 border-b border-slate-900"
            >
              Processo
            </button>
            <button
              onClick={() => scrollToSection("numeros")}
              className="text-left text-slate-400 hover:text-white py-2 border-b border-slate-900"
            >
              Cases
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-left text-slate-400 hover:text-white py-2 border-b border-slate-900"
            >
              Insights
            </button>
            <div className="pt-2">
              <button
                onClick={() => scrollToSection("diagnostico-final")}
                className="w-full text-center clip-path-angular-sm bg-[#f97316] text-white py-3 text-xs font-dmsans font-bold uppercase tracking-wider block"
              >
                Agendar Diagnóstico
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
