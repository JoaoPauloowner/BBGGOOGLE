import { METHOD_STEPS } from "../data";
import ScrollReveal from "./ScrollReveal";

export default function Metodologia() {
  const getIcon = (title: string) => {
    switch (title) {
      case "MAPEAMOS":
        return (
          <svg className="w-6 h-6 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        );
      case "CONSTRUÍMOS":
        return (
          <svg className="w-6 h-6 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      case "TRANSFERIMOS":
      default:
        return (
          <svg className="w-6 h-6 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        );
    }
  };

  return (
    <section id="metodologia" className="relative py-28 bg-[#06090f] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute -top-10 right-1/4 w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-4">
            <ScrollReveal delayMs={100} className="space-y-4">
              <div className="text-slate-500 font-mono text-[10px] uppercase font-bold tracking-[0.25em]">
                Workflow Operacional
              </div>
              <h2 className="font-barlow text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-none">
                Mapeamos. <br />
                <span className="text-[#f97316]">Construímos.</span> <br />
                Transferimos.
              </h2>
            </ScrollReveal>
            <ScrollReveal delayMs={200}>
              <p className="font-crimson text-lg text-slate-400 italic font-light leading-relaxed">
                Nossa atuação não é uma consultoria passiva de PowerPoint. Nós instalamos a infraestrutura, integramos os canais e automatizamos a rotina comercial antes de entregar as chaves para a sua equipe.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: 3 Step Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {METHOD_STEPS.map((step, idx) => {
                const isLast = idx === METHOD_STEPS.length - 1;
                return (
                  <ScrollReveal
                    key={step.stepNumber}
                    delayMs={idx * 150}
                    className="bg-[#090e1a] border border-slate-800/80 p-6 relative hover:border-[#f97316]/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-black/60 overflow-hidden"
                  >
                    {/* Big Faded Background Step Number */}
                    <span className="absolute -bottom-8 -right-4 font-barlow text-8xl font-black text-slate-800/10 group-hover:text-[#f97316]/5 transition-colors pointer-events-none select-none">
                      {step.stepNumber}
                    </span>

                    {/* Small Light accent line on top */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-800 group-hover:bg-[#f97316]/60 transition-colors duration-300" />

                    {/* Faded orange circle dot */}
                    <div className="w-12 h-12 rounded-full bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#f97316]/20 group-hover:scale-105 transition-all">
                      {getIcon(step.title)}
                    </div>

                    <h3 className="font-barlow text-xl font-black text-[#f97316] uppercase tracking-wider mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="font-dmsans text-xs sm:text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {step.description}
                    </p>

                    {/* Arrow connector: place absolutely on desktop only if not the last card */}
                    {!isLast && (
                      <div className="hidden md:flex absolute top-1/2 -right-3.5 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
                        <svg
                          className="w-8 h-8 text-[#f97316]/50 animate-pulse"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    )}
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
