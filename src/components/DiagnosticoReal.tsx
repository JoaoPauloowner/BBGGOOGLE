import { PROBLEMS_DATA } from "../data";
import ScrollReveal from "./ScrollReveal";

export default function DiagnosticoReal() {
  // Split data: first 4 in a 2x2 grid, 5th is the full-width one at the bottom.
  const gridProblems = PROBLEMS_DATA.slice(0, 4);
  const fullWidthProblem = PROBLEMS_DATA[4];

  // Map icons to problems for premium technical asset look
  const getIcon = (id: string) => {
    switch (id) {
      case "vazamento":
        return (
          <svg className="w-5 h-5 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        );
      case "crm":
        return (
          <svg className="w-5 h-5 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case "roi":
        return (
          <svg className="w-5 h-5 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case "sdrs":
        return (
          <svg className="w-5 h-5 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case "desalinhamento":
      default:
        return (
          <svg className="w-5 h-5 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
    }
  };

  return (
    <section id="diagnostico" className="relative py-28 bg-[#090e1a] overflow-hidden border-t border-b border-slate-900">
      {/* Decorative background grid and spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#0c1120_20%,#06090f_80%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Critical Headline */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <ScrollReveal delayMs={100} className="space-y-4">
              <div className="text-slate-500 font-mono text-[10px] uppercase font-bold tracking-[0.25em]">
                O Diagnóstico Real
              </div>
              <h2 className="font-barlow text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-none">
                Você não compra leads demais. <br />
                Você tem um sistema que os{" "}
                <span className="text-[#f97316] underline decoration-[#f97316]/40 underline-offset-8">
                  desperdiça.
                </span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delayMs={200}>
              <div className="font-crimson text-lg sm:text-xl text-slate-400 italic space-y-4 font-light leading-relaxed">
                <p>
                  A maioria das imobiliárias brasileiras acredita ter um problema de captação de clientes. Mas ao auditar os dados brutos, o diagnóstico é recorrente: o volume de leads gerados é mais do que suficiente para dobrar o faturamento.
                </p>
                <p className="border-l border-slate-800 pl-4 py-1 text-slate-500">
                  A verdadeira ineficiência está enraizada no fluxo interno. Sem automações sérias, critérios claros de qualificação mecânica e acompanhamento matemático das rotinas dos corretores, sua verba em mídias online é apenas fumaça.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Problem Cards Grid with Staggered Animations */}
          <div className="lg:col-span-7 space-y-4">
            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gridProblems.map((problem, idx) => (
                <ScrollReveal
                  key={problem.id}
                  delayMs={idx * 150}
                  className="bg-[#0c1120] border border-slate-800/80 p-6 relative hover:border-slate-700/80 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60"
                >
                  {/* Decorative glowing gradient top-right corner on hover */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#f97316]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon Wrapper */}
                  <div className="w-10 h-10 rounded-full bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center mb-5 shrink-0 group-hover:bg-[#f97316]/20 group-hover:border-[#f97316]/30 transition-all">
                    {getIcon(problem.id)}
                  </div>

                  <h3 className="font-barlow text-lg sm:text-xl font-black text-slate-100 uppercase tracking-tight mb-2 group-hover:text-white transition-colors">
                    {problem.title}
                  </h3>
                  <p className="font-dmsans text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 leading-relaxed transition-colors">
                    {problem.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            {/* Bottom Full-Width Card */}
            <ScrollReveal
              delayMs={400}
              className="bg-[#0c1120] border border-slate-800/80 p-6 sm:p-8 relative hover:border-slate-700/80 transition-all duration-300 group hover:shadow-xl hover:shadow-black/60"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#f97316]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center shrink-0 group-hover:bg-[#f97316]/20 group-hover:border-[#f97316]/30 transition-all">
                  {getIcon(fullWidthProblem.id)}
                </div>

                <div className="space-y-2">
                  <h3 className="font-barlow text-xl sm:text-2xl font-black text-slate-100 uppercase tracking-tight group-hover:text-white transition-colors">
                    {fullWidthProblem.title}
                  </h3>
                  <p className="font-dmsans text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 leading-relaxed transition-colors">
                    {fullWidthProblem.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
