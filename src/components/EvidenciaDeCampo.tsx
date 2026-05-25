import { TESTIMONIALS_DATA } from "../data";
import ScrollReveal from "./ScrollReveal";

export default function EvidenciaDeCampo() {
  return (
    <section id="depoimentos" className="relative py-28 bg-[#090e1a] overflow-hidden border-t border-b border-slate-900">
      {/* Background radial effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#4d9fff]/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context Copy */}
          <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-32">
            <ScrollReveal delayMs={100} className="space-y-4">
              <div className="text-slate-500 font-mono text-[10px] uppercase font-bold tracking-[0.25em]">
                Evidência de Campo
              </div>
              <h2 className="font-barlow text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-none">
                Quem implementou <br />
                parou de <br />
                <span className="text-[#f97316] drop-shadow-[0_0_20px_rgba(249,115,22,0.3)]">adivinhar.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delayMs={200}>
              <p className="font-crimson text-lg text-slate-400 italic font-light leading-relaxed">
                "Os líderes de mercado não gerenciam equipes de vendas pelo humor do dia. Eles controlam processos estáveis apoiados em inteligência computacional."
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: 3 Testimonial Cards */}
          <div className="lg:col-span-8 space-y-6">
            {TESTIMONIALS_DATA.map((testimonial, idx) => (
              <ScrollReveal
                key={testimonial.id}
                delayMs={idx * 150}
                className="bg-[#0c1120] border border-slate-800/80 p-6 sm:p-8 relative hover:border-[#f97316]/35 transition-all duration-300 group hover:shadow-xl hover:shadow-black/70"
              >
                {/* Huge stylized double quote mark */}
                <span className="absolute top-4 right-6 font-serif text-7xl text-slate-800/30 group-hover:text-[#f97316]/10 transition-colors pointer-events-none select-none">
                  “
                </span>

                {/* Left vertical border highlight that turns orange on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-slate-800 group-hover:bg-[#f97316] transition-colors duration-300" />

                <div className="space-y-6 relative z-10">
                  {/* Testimonial Quote */}
                  <p className="font-crimson text-lg sm:text-xl text-slate-300 group-hover:text-white italic leading-relaxed transition-colors">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Meta Info */}
                  <div className="flex items-center space-x-4 pt-2 border-t border-slate-900">
                    {/* Metal initials avatar */}
                    <div className="w-12 h-12 rounded-full bg-[#06090f] border border-slate-800 flex items-center justify-center font-barlow text-base font-black text-[#4d9fff] shadow-inner group-hover:border-[#4d9fff]/50 group-hover:text-white transition-all duration-300">
                      {testimonial.initials}
                    </div>

                    <div className="space-y-0.5">
                      <h4 className="font-barlow text-base font-bold text-slate-200 tracking-wide uppercase">
                        {testimonial.author}
                      </h4>
                      <p className="font-dmsans text-[11px] sm:text-xs text-slate-500 font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
