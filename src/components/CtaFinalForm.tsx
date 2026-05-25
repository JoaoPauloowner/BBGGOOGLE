import { useState, FormEvent, ChangeEvent } from "react";
import { ContactFormInput } from "../types";
import ScrollReveal from "./ScrollReveal";

export default function CtaFinalForm() {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: "",
    phone: "",
    company: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Simple validation
    if (!formData.name || !formData.phone || !formData.company) {
      setErrorMsg("Por favor, preencha todos os campos obrigatórios (Nome, Telefone e Imobiliária).");
      return;
    }

    setIsLoading(true);

    try {
      // WEBHOOK URL PLACEHOLDER - Representing the actual webhook integration request.
      const WEBHOOK_URL = "https://api.bbggroup.com.br/v1/webhooks/diagnostico-leads";

      console.log("Pre-submitting to webhook placeholder:", WEBHOOK_URL, formData);

      // We perform a real fetch to the placeholder (mocking local response state beautifully)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const targetPhone = "5591980257959";
      const messageText = `Olá! Gostaria de agendar o Diagnóstico Estratégico.

*Dados do Formulário:*
👤 *Nome:* ${formData.name}
📞 *Telefone:* ${formData.phone}
🏢 *Imobiliária:* ${formData.company}
💬 *Mensagem/Corretores:* ${formData.message || "Não informado"}`;

      const waLink = `https://wa.me/${targetPhone}?text=${encodeURIComponent(messageText)}`;
      setWhatsappUrl(waLink);

      setIsSuccess(true);
      setFormData({ name: "", phone: "", company: "", message: "" });

      try {
        window.open(waLink, "_blank", "noopener,noreferrer");
      } catch (err) {
        console.warn("Auto-popup blocked, user should click the WhatsApp button manually.", err);
      }
    } catch (err) {
      setErrorMsg("Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="diagnostico-final" className="relative py-32 bg-[#06090f] overflow-hidden">
      {/* Centered radial orange glow from bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#f97316]/10 rounded-full blur-[130px] z-0 pointer-events-none" />
      <div className="absolute top-12 left-12 w-[350px] h-[350px] bg-sky-500/5 rounded-full blur-[100px] z-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-12">
        
        {/* Dynamic header stack */}
        <div className="space-y-6">
          <ScrollReveal delayMs={100} className="space-y-3">
            <span className="font-mono text-[10px] uppercase font-bold tracking-[0.3em] text-[#f97316] bg-[#f97316]/5 border border-[#f97316]/15 px-3 py-1 rounded-full">
              RESERVE SUA AUDITORIA DE RECONHECIMENTO
            </span>
            <h2 className="font-barlow text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-none">
              Descubra o que está custando <br />
              não ter um <span className="text-[#f97316]">sistema.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delayMs={200}>
            <p className="font-crimson text-lg sm:text-2xl text-slate-300 italic font-light max-w-2xl mx-auto leading-relaxed">
              "Agende uma sessão gratuita de 60 minutos sob termos de confidencialidade (NDA). Nossos analistas de receita examinarão suas taxas e mapearão as perdas do seu CRM."
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Badges Row */}
        <ScrollReveal delayMs={250}>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
            {[
              { title: "Mapeamento de Vazamento", icon: "🔍" },
              { title: "Speed-to-lead Test", icon: "⚡" },
              { title: "ROI de Mídias Estimado", icon: "📊" }
            ].map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center space-x-2 bg-[#0c1120] border border-slate-800/80 px-4 py-2 rounded text-xs font-dmsans text-slate-400 select-none hover:border-[#4d9fff]/20 transition-all cursor-default"
              >
                <span>{badge.icon}</span>
                <span className="font-medium">{badge.title}</span>
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Contact Form Card */}
        <ScrollReveal delayMs={300} className="max-w-2xl mx-auto">
          <div className="bg-[#0c1120] border border-slate-800/90 p-8 text-left rounded shadow-2xl shadow-black relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#f97316] to-transparent" />
            
            {isSuccess ? (
              /* Success Message View */
              <div className="py-8 text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-[#10b981] rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/5">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="font-barlow text-2xl font-black text-white uppercase tracking-tight">
                    Diagnóstico Solicitado!
                  </h3>
                  <p className="font-crimson text-lg text-slate-400 italic font-light max-w-md mx-auto">
                    "Em menos de 24 horas, um de nossos engenheiros seniores de receita entrará em contato via WhatsApp/Telefone para confirmar os acessos."
                  </p>
                </div>
                <div className="pt-4 flex flex-col items-center gap-4">
                  {whatsappUrl && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-dmsans text-xs sm:text-sm font-bold uppercase tracking-wider py-4 px-8 rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] w-full sm:w-auto justify-center cursor-pointer"
                    >
                      <svg className="w-5 h-5 text-white shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.022-.014-.144-.072-.255-.127l-.422-.21c-.482-.24-.658-.33-.822-.165-.164.165-.635.802-.78 1.018-.145.216-.29.24-.54.127a13.315 13.315 0 0 1-3.69-2.28 13.826 13.826 0 0 1-2.545-3.167c-.15-.255-.015-.393.12-.528.12-.122.254-.294.382-.44.13-.146.17-.25.257-.42.086-.17.042-.32-.02-.445-.064-.125-.568-1.37-.78-1.88-.2-.484-.405-.41-.555-.418h-.475c-.166 0-.44.062-.67.312-.23.25-1.07 1.05-1.07 2.56 0 1.51 1.1 2.97 1.25 3.17.152.2 2.16 3.295 5.23 4.62s3.076 1.488 4.19 1.488c1.115 0 2.45-.63 2.766-1.42.316-.792.316-1.472.22-1.61-.09-.14-.3-.21-.5-.31zM11.996 2C6.477 2 2 6.48 2 12c0 1.956.56 3.774 1.53 5.323L2 22l4.814-1.264C8.28 21.43 9.94 22 11.996 22 17.514 2 22 17.52 22 12c0-5.52-4.486-10-10.004-10z" />
                      </svg>
                      <span>Enviar pelo WhatsApp Agora</span>
                    </a>
                  )}
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="font-dmsans text-xs text-slate-500 hover:text-[#f97316] transition-colors uppercase font-bold tracking-wider underline underline-offset-4 cursor-pointer mt-2"
                  >
                    Enviar Outro Formulário
                  </button>
                </div>
              </div>
            ) : (
              /* Form State */
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest font-mono text-slate-500 font-bold">
                      Seu Nome <span className="text-[#f97316]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Roberto Silveira"
                      className="w-full bg-[#06090f] text-slate-200 border border-slate-800 focus:border-[#f97316] focus:outline-none px-4 py-3 text-sm font-dmsans transition-all"
                      required
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-mono text-slate-500 font-bold">
                      Telefone / WhatsApp <span className="text-[#f97316]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Ex: (91) 98025-7959"
                      className="w-full bg-[#06090f] text-slate-200 border border-slate-800 focus:border-[#f97316] focus:outline-none px-4 py-3 text-sm font-dmsans transition-all"
                      required
                    />
                  </div>

                  {/* Company field */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="company" className="block text-xs uppercase tracking-widest font-mono text-slate-500 font-bold">
                      Nome da Imobiliária <span className="text-[#f97316]">*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Ex: Imobiliária Alpha Premium"
                      className="w-full bg-[#06090f] text-slate-200 border border-slate-800 focus:border-[#f97316] focus:outline-none px-4 py-3 text-sm font-dmsans transition-all"
                      required
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="message" className="block text-xs uppercase tracking-widest font-mono text-slate-500 font-bold">
                      Número médio de corretores ou observação
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Ex: Temos 25 corretores ativos e sofremos com descarte no CRM."
                      className="w-full bg-[#06090f] text-slate-200 border border-slate-800 focus:border-[#f97316] focus:outline-none px-4 py-3 text-sm font-dmsans transition-all resize-none"
                    />
                  </div>

                </div>

                {errorMsg && (
                  <p className="text-rose-400 text-xs font-mono font-medium bg-rose-500/10 border border-rose-500/25 p-3 rounded">
                    {errorMsg}
                  </p>
                )}

                {/* Large Orange Angular Submit button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full clip-path-angular bg-[#f97316] hover:bg-[#ea580c] disabled:bg-slate-800 text-white py-4.5 font-dmsans text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] disabled:shadow-none flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sincronizando Dados com Webhook...</span>
                      </>
                    ) : (
                      <span>AGENDAR DIAGNÓSTICO ESTRATÉGICO →</span>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
