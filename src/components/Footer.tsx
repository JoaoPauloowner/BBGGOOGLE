export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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
    <footer className="bg-[#090e1a] border-t border-slate-900 pt-20 pb-10 relative overflow-hidden">
      {/* Background design glow */}
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-sky-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <span className="font-barlow text-3xl font-black tracking-wider">
                <span className="text-[#4d9fff]">BB</span>
                <span className="text-[#f97316]">G</span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 pl-2 border-l border-slate-800">
                Revenue Group
              </span>
            </button>
            
            <p className="font-dmsans text-sm text-slate-400 max-w-sm leading-relaxed">
              Desenvolvemos a infraestrutura matemática por trás das imobiliárias que mais vendem no Brasil. Integramos CRM, qualificamos leads via código e transferimos autonomia operacional de ponta a ponta.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-barlow text-sm font-bold uppercase tracking-wider text-slate-200">
              Navegação
            </h4>
            <ul className="space-y-2.5 font-dmsans text-xs sm:text-sm">
              {[
                { name: "Diagnóstico", id: "diagnostico" },
                { name: "Metodologia", id: "metodologia" },
                { name: "Processo", id: "processo" },
                { name: "Métricas", id: "numeros" },
                { name: "Depoimentos", id: "depoimentos" }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-[#f97316] transition-colors cursor-pointer text-left focus:outline-none"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-barlow text-sm font-bold uppercase tracking-wider text-slate-200">
              Soluções
            </h4>
            <ul className="space-y-2.5 font-dmsans text-xs sm:text-sm text-slate-400">
              <li>
                <span className="hover:text-[#4d9fff] transition-colors cursor-default">
                  Arquitetura de Receita
                </span>
              </li>
              <li>
                <span className="hover:text-[#4d9fff] transition-colors cursor-default">
                  Engenharia Comercial
                </span>
              </li>
              <li>
                <span className="hover:text-[#4d9fff] transition-colors cursor-default">
                  Funil Estratégico
                </span>
              </li>
              <li>
                <span className="hover:text-[#4d9fff] transition-colors cursor-default">
                  Automação Avançada
                </span>
              </li>
              <li>
                <span className="hover:text-[#4d9fff] transition-colors cursor-default">
                  BI & Dashboards
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Coordinate details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-barlow text-sm font-bold uppercase tracking-wider text-slate-200">
              Contato
            </h4>
            <ul className="space-y-2.5 font-dmsans text-xs sm:text-sm text-slate-400 leading-relaxed">
              <li className="flex items-start space-x-2">
                <svg className="w-4 h-4 text-[#f97316] mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Av. Brigadeiro Faria Lima, 3477 - 14º Andar, Itaim Bibi, São Paulo - SP</span>
              </li>
              <li className="flex items-center space-x-2">
                <a
                  href="https://wa.me/5591980257959"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 text-slate-400 hover:text-[#f97316] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#f97316] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+55 (91) 98025-7959</span>
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-[#f97316] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="hover:text-white transition-colors">contato@bbggroup.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Credits */}
        <div className="pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
            © 2026 BBG Group. Todos os direitos reservados.
          </p>
          <p className="font-mono text-[10px] text-slate-600 uppercase tracking-widest">
            Engenharia de Receita Imobiliária • Patente Requisitada
          </p>
        </div>
      </div>
    </footer>
  );
}
