import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const scrollToForm = () => {
    const element = document.getElementById("diagnostico-final");
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

  const scrollToDiagInfo = () => {
    const element = document.getElementById("diagnostico");
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
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden flex items-center bg-[#06090f]">
      {/* Background gradients for layered depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#090e1a_0%,#06090f_100%)] z-0" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal delayMs={100} className="space-y-4">
              {/* Eyebrow */}
              <div className="inline-flex items-center space-x-2 border border-[#f97316]/20 bg-[#f97316]/5 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full animate-ping" />
                <span className="font-dmsans text-[11px] font-bold uppercase tracking-[0.2em] text-[#f97316]">
                  Engenharia de Receita para Imobiliárias
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-barlow text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-[0.9] text-white">
                Receita Previsível <br />
                não é sorte. <br />
                É <span className="text-[#f97316] drop-shadow-[0_0_30px_rgba(249,115,22,0.4)]">Sistema.</span>
              </h1>
            </ScrollReveal>

            {/* Paragraph in Crimson Pro Italic */}
            <ScrollReveal delayMs={300}>
              <p className="font-crimson text-xl sm:text-2xl text-slate-300 italic font-light leading-relaxed max-w-2xl border-l-2 border-slate-700/80 pl-6 py-1">
                "Existe uma diferença estrutural entre imobiliárias que crescem em qualquer cenário e as que dependem do mercado. Essa diferença tem nome: arquitetura de receita."
              </p>
            </ScrollReveal>

            {/* CTA Buttons with cut corners */}
            <ScrollReveal delayMs={400} className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={scrollToForm}
                className="clip-path-angular bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 text-sm font-dmsans font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.45)] hover:-translate-y-0.5"
              >
                Agendar Diagnóstico Estratégico →
              </button>
              <button
                onClick={scrollToDiagInfo}
                className="clip-path-angular-sm bg-[#090e1a]/80 hover:bg-[#0c1120] text-slate-300 hover:text-white border border-slate-800 hover:border-slate-500 px-8 py-4 text-sm font-dmsans font-bold uppercase tracking-wider transition-all duration-200"
              >
                Conhecer Abordagem
              </button>
            </ScrollReveal>

            {/* Trust Bar */}
            <ScrollReveal delayMs={500} className="pt-8 border-t border-slate-900 grid grid-cols-3 gap-4">
              {[
                { label: "VGV Auditado", value: "+ R$ 1.2B" },
                { label: "Operações Ativas", value: "12 Estados" },
                { label: "Conexão de Dados", value: "Setup Próprio" }
              ].map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="font-barlow text-2xl xl:text-3xl font-black text-white tracking-tight">
                    {item.value}
                  </div>
                  <div className="font-dmsans text-[10px] md:text-xs text-slate-500 uppercase tracking-widest leading-none">
                    {item.label}
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>

          {/* Right Column: Animated Orbital Diagram */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-12 lg:py-0">
            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">
              
              {/* Outer Decorative Glow circles */}
              <div className="absolute inset-0 border border-slate-800/20 rounded-full scale-110 pointer-events-none" />
              
              {/* Concentric rings styled according to spec */}
              {/* Ring 1 (Outermost - size 100%) */}
              <div className="absolute w-full h-full rounded-full border border-slate-800/60 animate-spin-cw">
                {/* Orbital Dot */}
                <span className="absolute top-0 left-1/2 -ml-1.5 w-3 h-3 bg-[#4d9fff] rounded-full ring-4 ring-sky-500/20 shadow-[0_0_15px_#4d9fff]" />
              </div>

              {/* Ring 2 (Size 75%) */}
              <div className="absolute w-3/4 h-3/4 rounded-full border border-slate-800/80 animate-spin-ccw">
                {/* Orbital Orange Dot */}
                <span className="absolute bottom-0 right-1/4 w-2.5 h-2.5 bg-[#f97316] rounded-full ring-4 ring-orange-500/20 shadow-[0_0_15px_#f97316]" />
              </div>

              {/* Ring 3 (Size 50%) */}
              <div className="absolute w-1/2 h-1/2 rounded-full border border-slate-800/90 animate-spin-cw-fast">
                {/* Orbital Dot */}
                <span className="absolute top-1/2 left-0 -mt-1 w-2 h-2 bg-[#4d9fff] rounded-full shadow-[0_0_10px_#4d9fff]" />
              </div>

              {/* Ring 4 (Innermost - Size 28%) */}
              <div className="absolute w-[28%] h-[28%] rounded-full border border-[#f97316]/10 animate-spin-ccw-fast">
                {/* Orbital Orange Dot */}
                <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#f97316] rounded-full shadow-[0_0_8px_#f97316]" />
              </div>

              {/* Core Pulsing Center with center text */}
              <div className="absolute w-[95px] h-[95px] sm:w-[130px] sm:h-[130px] rounded-full bg-gradient-to-br from-[#090e1a] to-[#0c1120] border-2 border-slate-800 flex items-center justify-center text-center p-3 sm:p-4 shadow-[0_0_50px_rgba(77,159,255,0.15)] z-20">
                {/* Core animated pulse shadow component */}
                <div className="absolute inset-0 rounded-full bg-[#f97316]/5 animate-pulse-glow border border-[#f97316]/20 pointer-events-none" />
                
                <span className="font-barlow text-[13px] sm:text-[17px] font-black uppercase tracking-wider leading-none text-white z-10 drop-shadow-md">
                  RECEITA<br />
                  <span className="text-[#f97316]">PREVISÍVEL</span>
                </span>
              </div>

              {/* 4 Node Labels around the orbit (fixed positions, adaptive text) */}
              
              {/* TOP LEFT Node */}
              <div className="absolute -top-6 -left-10 sm:-top-8 sm:-left-16 z-30 max-w-[120px] sm:max-w-[140px] text-left bg-[#090e1a]/90 backdrop-blur-sm border border-slate-800 px-3 py-1.5 rounded shadow-lg">
                <div className="flex items-center space-x-1.5 mb-0.5">
                  <span className="w-1.5 h-1.5 bg-[#4d9fff] rounded-full" />
                  <span className="font-dmsans text-[8px] uppercase tracking-widest text-[#4d9fff] font-bold">Pilar I</span>
                </div>
                <div className="font-barlow text-xs sm:text-sm font-black text-slate-200 uppercase tracking-tight">Engenharia Comercial</div>
              </div>

              {/* TOP RIGHT Node */}
              <div className="absolute -top-6 -right-10 sm:-top-8 sm:-right-16 z-30 max-w-[120px] sm:max-w-[140px] text-right bg-[#090e1a]/90 backdrop-blur-sm border border-slate-800 px-3 py-1.5 rounded shadow-lg">
                <div className="flex items-center space-x-1.5 justify-end mb-0.5">
                  <span className="font-dmsans text-[8px] uppercase tracking-widest text-[#f97316] font-bold">Pilar II</span>
                  <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full animate-pulse" />
                </div>
                <div className="font-barlow text-xs sm:text-sm font-black text-slate-200 uppercase tracking-tight">Funil Engenhado</div>
              </div>

              {/* BOTTOM LEFT Node */}
              <div className="absolute -bottom-6 -left-10 sm:-bottom-8 sm:-left-16 z-30 max-w-[120px] sm:max-w-[140px] text-left bg-[#090e1a]/90 backdrop-blur-sm border border-slate-800 px-3 py-1.5 rounded shadow-lg">
                <div className="flex items-center space-x-1.5 mb-0.5">
                  <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full animate-pulse" />
                  <span className="font-dmsans text-[8px] uppercase tracking-widest text-[#f97316] font-bold">Pilar III</span>
                </div>
                <div className="font-barlow text-xs sm:text-sm font-black text-slate-200 uppercase tracking-tight">Dados e Inteligência</div>
              </div>

              {/* BOTTOM RIGHT Node */}
              <div className="absolute -bottom-6 -right-10 sm:-bottom-8 sm:-right-16 z-30 max-w-[120px] sm:max-w-[140px] text-right bg-[#090e1a]/90 backdrop-blur-sm border border-slate-800 px-3 py-1.5 rounded shadow-lg">
                <div className="flex items-center space-x-1.5 justify-end mb-0.5">
                  <span className="font-dmsans text-[8px] uppercase tracking-widest text-[#4d9fff] font-bold">Pilar IV</span>
                  <span className="w-1.5 h-1.5 bg-[#4d9fff] rounded-full" />
                </div>
                <div className="font-barlow text-xs sm:text-sm font-black text-slate-200 uppercase tracking-tight">Processos e Autôm.</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
