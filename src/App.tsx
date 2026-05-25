import Nav from "./components/Nav";
import Hero from "./components/Hero";
import DiagnosticoReal from "./components/DiagnosticoReal";
import Metodologia from "./components/Metodologia";
import Processo from "./components/Processo";
import Numeros from "./components/Numeros";
import EvidenciaDeCampo from "./components/EvidenciaDeCampo";
import CtaFinalForm from "./components/CtaFinalForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#06090f] text-slate-100 min-h-screen overflow-x-hidden font-dmsans">
      {/* 1. FIXED NAV */}
      <Nav />

      {/* 2. HERO */}
      <Hero />

      {/* 3. O DIAGNÓSTICO REAL */}
      <DiagnosticoReal />

      {/* 4. A METODOLOGIA */}
      <Metodologia />

      {/* 5. O PROCESSO */}
      <Processo />

      {/* 6. OS NÚMEROS */}
      <Numeros />

      {/* 7. EVIDÊNCIA DE CAMPO */}
      <EvidenciaDeCampo />

      {/* 8. CTA FINAL & DEMAND/CONTACT FORM */}
      <CtaFinalForm />

      {/* 9. FOOTER */}
      <Footer />
    </div>
  );
}

