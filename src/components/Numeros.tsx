import { METRICS_DATA } from "../data";
import ScrollReveal from "./ScrollReveal";

export default function Numeros() {
  // Sparkline path generator function for pixel-perfect inline SVG charts
  const generateSparklinePath = (points: number[], width = 200, height = 45) => {
    const min = Math.min(...points);
    const max = Math.max(...points);
    const range = max - min || 1;
    const padding = 4;
    const usableHeight = height - padding * 2;
    
    return points
      .map((val, idx) => {
        const x = (idx / (points.length - 1)) * width;
        const y = height - padding - ((val - min) / range) * usableHeight;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");
  };

  return (
    <section id="numeros" className="relative py-28 bg-[#06090f] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute bottom-12 left-10 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[115px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal delayMs={100} className="space-y-4">
              <div className="text-slate-500 font-mono text-[10px] uppercase font-bold tracking-[0.25em]">
                Métricas de Impacto
              </div>
              <h2 className="font-barlow text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-none">
                Um sistema real <br />
                produz números <br />
                <span className="text-[#f97316] drop-shadow-[0_0_25px_rgba(249,115,22,0.35)]">reais.</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delayMs={200} className="space-y-4">
              <p className="font-crimson text-lg sm:text-xl text-slate-400 italic font-light leading-relaxed">
                "Não dependa do mercado aquecer ou de taxas de juros caírem. O crescimento sustentável reside no controle matemático de cada centímetro do seu funil."
              </p>
              <p className="font-dmsans text-sm text-slate-500 leading-relaxed">
                Abaixo estão as médias consolidadas de melhoria observadas nas imobiliárias parceiras nos primeiros 90 dias após a conclusão da nossa engenharia de receita.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: 5 Metric Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {METRICS_DATA.map((metric, idx) => {
                // If it is 'revenue' or 'pipeline', make it stand out or occupy appropriate space.
                const isSpecial = metric.id === "revenue";
                const isCac = metric.id === "cac";
                
                // CAC delta drop is good. Others, positive delta is good.
                const isPositiveTrend = isCac ? true : metric.delta.startsWith("+");
                
                return (
                  <ScrollReveal
                    key={metric.id}
                    delayMs={idx * 120}
                    className={`bg-[#0c1120] border border-slate-800/80 p-5 relative hover:border-[#4d9fff]/40 transition-all duration-300 group ${
                      isSpecial ? "sm:col-span-2 bg-gradient-to-r from-[#0c1120] to-[#090e1a]" : ""
                    }`}
                  >
                    {/* Tiny blueprint grid accent in corner */}
                    <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-slate-800 pointer-events-none group-hover:border-[#4d9fff]/30 transition-colors" />

                    <div className="flex justify-between items-start mb-2">
                      <span className="font-dmsans text-xs text-slate-500 uppercase tracking-widest font-medium">
                        {metric.label}
                      </span>
                      
                      {/* Delta indicator (green up arrow or red down arrow) */}
                      <span
                        className={`inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[11px] font-mono font-bold leading-none ${
                          isPositiveTrend
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                        }`}
                      >
                        {isPositiveTrend ? (
                          // Up arrow (or down arrow for cost reduction)
                          isCac ? (
                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 13l-7 7-7-7m7 7V3" />
                            </svg>
                          ) : (
                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 11l7-7 7 7M12 4v16" />
                            </svg>
                          )
                        ) : (
                          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 13l-7 7-7-7m7 7V3" />
                          </svg>
                        )}
                        <span>{metric.delta}</span>
                      </span>
                    </div>

                    {/* Value */}
                    <div className="font-barlow text-3xl sm:text-4xl font-black text-white tracking-tight mb-4 select-all">
                      {metric.value}
                    </div>

                    {/* Sparkline chart at the bottom */}
                    <div className="pt-2 border-t border-slate-900 flex items-center justify-between">
                      <span className="font-mono text-[9px] text-slate-600 uppercase tracking-wider">
                        Histórico 90D
                      </span>
                      
                      {/* Render sparkline vector */}
                      <div className="w-[140px] sm:w-[180px] h-[36px] overflow-visible">
                        <svg className="w-full h-full" viewBox="0 0 180 36" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id={`grad-${metric.id}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#4d9fff" stopOpacity="0.30" />
                              <stop offset="100%" stopColor="#4d9fff" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>

                          {/* Glow line */}
                          <polyline
                            fill="none"
                            stroke="#4d9fff"
                            strokeWidth="1.5"
                            className="stroke-secondary-blue drop-shadow-[0_0_4px_rgba(77,159,255,0.4)]"
                            points={generateSparklinePath(metric.history, 180, 36)}
                          />

                          {/* Filled Area */}
                          <polygon
                            fill={`url(#grad-${metric.id})`}
                            points={`0,36 ${generateSparklinePath(metric.history, 180, 36)} 180,36`}
                          />

                          {/* Last Value Marker Pulse */}
                          <circle
                            cx="180"
                            cy={generateSparklinePath(metric.history, 180, 36).split(" ").pop()?.split(",")[1]}
                            r="2.5"
                            fill="#4d9fff"
                            className="align-middle"
                          />
                        </svg>
                      </div>
                    </div>
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
