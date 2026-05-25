import { PROCESS_MOVEMENTS } from "../data";
import ScrollReveal from "./ScrollReveal";

export default function Processo() {
  const topRow = PROCESS_MOVEMENTS.slice(0, 3);
  const bottomRow = PROCESS_MOVEMENTS.slice(3, 6);

  return (
    <section id="processo" className="relative py-28 bg-[#090e1a] overflow-hidden border-t border-b border-slate-900">
      {/* Dynamic graphic accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#0c1120_20%,#06090f_80%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-32">
            <ScrollReveal delayMs={100} className="space-y-4">
              <div className="text-slate-500 font-mono text-[10px] uppercase font-bold tracking-[0.25em]">
                O Processo Prático
              </div>
              <h2 className="font-barlow text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-none">
                Seis movimentos. <br />
                Uma Engenharia de <span className="text-[#f97316]">Receita.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delayMs={200}>
              <p className="font-crimson text-lg text-slate-400 italic font-light leading-relaxed">
                Cada etapa é executada em paralelo sob um cronograma rigoroso de entregáveis, assegurando que o sistema seja robusto o suficiente para rodar de forma escalável e à prova de desculpas comerciais.
              </p>
            </ScrollReveal>
            {/* Legend or micro details */}
            <ScrollReveal delayMs={300} className="pt-6 hidden lg:block">
              <div className="bg-[#0c1120]/70 border border-slate-800 p-4 rounded text-xs space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#f97316] rounded-full" />
                  <span className="font-dmsans text-slate-300 font-medium">Fluxo Conectado via API</span>
                </div>
                <p className="font-dmsans text-slate-500 leading-normal">
                  Nossos técnicos integram suas contas e funis de CRM garantindo latência zero na passagem de leads.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 3x2 Grid with Wavy Snake Connector SVG in between */}
          <div className="lg:col-span-8 space-y-8 relative">
            
            {/* Top Row Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {topRow.map((move, idx) => (
                <ScrollReveal
                  key={move.number}
                  delayMs={idx * 150}
                  className="bg-[#0c1120] border border-slate-800 p-5 hover:border-slate-700 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-black/70"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#f97316] font-bold">
                      Movimento
                    </span>
                    <span className="font-barlow text-2xl font-black text-[#4d9fff]/20 group-hover:text-[#4d9fff]/40 transition-colors">
                      {move.number}
                    </span>
                  </div>
                  <h3 className="font-barlow text-lg font-black text-slate-200 uppercase tracking-tight mb-2 group-hover:text-white">
                    {move.title}
                  </h3>
                  <p className="font-dmsans text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {move.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            {/* Snake Connector SVG Row: strictly horizontal wavy dashed orange line between top and bottom rows */}
            <div className="hidden md:block relative w-full h-8 z-0">
              <svg
                className="absolute inset-0 w-full h-full text-[#f97316] opacity-40"
                fill="none"
                viewBox="0 0 800 32"
                preserveAspectRatio="none"
              >
                <path
                  d="M 10 16 Q 130 -8, 250 16 T 490 16 T 730 16 T 790 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  fill="none"
                  className="animate-pulse"
                />
              </svg>
            </div>

            {/* Bottom Row Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {bottomRow.map((move, idx) => (
                <ScrollReveal
                  key={move.number}
                  delayMs={(idx + 3) * 150}
                  className="bg-[#0c1120] border border-slate-800 p-5 hover:border-slate-700 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-black/70"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#4d9fff] font-bold">
                      Movimento
                    </span>
                    <span className="font-barlow text-2xl font-black text-[#f97316]/20 group-hover:text-[#f97316]/40 transition-colors">
                      {move.number}
                    </span>
                  </div>
                  <h3 className="font-barlow text-lg font-black text-slate-200 uppercase tracking-tight mb-2 group-hover:text-white">
                    {move.title}
                  </h3>
                  <p className="font-dmsans text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {move.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
