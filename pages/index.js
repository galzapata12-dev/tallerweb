import React, { useState, useEffect, useRef, useCallback } from "react";
import Head from "next/head";

const WHATSAPP_NUMBER = "528683905686";
const MESSAGE = "Hola, necesito un diagnóstico o mantenimiento para mi unidad pesada (camión/autobús)";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Calle+20+1113+Matamoros+Tamaulipas";
const WEB_LINK = "https://borderlinehdsolutions.com";
const EMAIL = "borderlineautomotivesolutions@gmail.com";
const EMAIL_LINK = `mailto:${EMAIL}`;

const PROCESS_STEPS = [
  { icon: "🛡️", title: "Recepción", desc: "Documentamos datos de la unidad y falla reportada" },
  { icon: "🖥️", title: "Escaneo HD", desc: "Lectura de ECMs y sistemas de camiones y autobuses" },
  { icon: "🔌", title: "Pruebas físicas", desc: "Pruebas neumáticas, eléctricas y de sensores pesados" },
  { icon: "🎯", title: "Diagnóstico", desc: "Entregamos causa exacta y presupuesto por escrito" },
  { icon: "✅", title: "Solución", desc: "Reparación con refacciones de alta resistencia" },
];

const DIAG_SERVICES = [
  { icon: "🖥️", title: "ECM / Módulos Diésel", desc: "Escaneo profundo de motores Detroit, Cummins, Caterpillar, Mercedes-Benz y más." },
  { icon: "🛑", title: "Sistemas de Frenos (Aire)", desc: "Diagnóstico de frenos neumáticos, válvulas, compresores y ABS pesado." },
  { icon: "❄️", title: "A/C para Autobuses", desc: "Reparación de sistemas de climatización para unidades de pasajeros." },
  { icon: "⚡", title: "Eléctrico Pesado", desc: "Localización de fallas en arneses de 24V, iluminación y arranque." },
];

const MAINT_BENEFITS = [
  { icon: "🛣️", title: "Evita paradas de ruta", desc: "Una falla en carretera te cuesta miles de pesos por día. El preventivo evita el varaje." },
  { icon: "⚙️", title: "Vida útil del Diésel", desc: "Un motor diésel bien mantenido supera fácilmente el millón de kilómetros." },
  { icon: "📜", title: "Cumples con Verificación", desc: "Mantenimiento al corriente significa cero dolores de cabeza con las autoridades." },
  { icon: "💰", title: "Ahorro en Combustible", desc: "Un motor sin fallas y filtros limpios consume hasta un 15% menos diésel." },
];

const MAINT_WHY_US = [
  "Especialistas en Sistemas de 24V: No somos un taller de autos adaptado, entendemos las unidades pesadas.",
  "Diagnóstico antes de desarmar: Sabemos exactamente qué falla antes de perder horas de mano de obra.",
  "Base de datos de flotillas: Llevamos el control exacto de cada camión de tu empresa.",
  "Ingeniería de costos: Te decimos cuánto te cuesta reparar vs. cuánto te cobra la falla si no lo haces."
];

const TESTIMONIALS = [
  { text: "Tenía un Freightliner con pérdida de potencia que 3 talleres no hallaron. Aquí encontraron el problema del sensor de presión en 3 horas.", name: "Ing. Juan P.", car: "Freightliner Cascadia", initials: "JP" },
  { text: "Llevan el control de mis 12 trailers. Desde que entraron al programa de mantenimiento, mis paradas por falla bajaron un 90%.", name: "Ramiro V.", car: "Flota de Transporte", initials: "RV" },
  { text: "Servicio de primera. Repararon el sistema de frenos de aire de mi autobús y quedó impecable. Totalmente confiables.", name: "Luis M.", car: "Autobús Marcopolo", initials: "LM" },
];

const GALLERY = [
  { src: "/motor.jpeg", label: "Motor Diésel Pesado" },
  { src: "/motorreparado.jpeg", label: "Reparación de ECM" },
  { src: "/transmision.jpeg", label: "Transmisión Automática HD" },
];

const FAQS = [
  { q: "¿Qué marcas de camiones atienden?", a: "Americanas (Freightliner, Kenworth, Peterbilt), Europeas (Mercedes-Benz, Volvo, MAN, Scania) y Nacionales. Trabajamos con sistemas de 12V y 24V." },
  { q: "¿Hacen el diagnóstico en mi patio o tengo que llevar la unidad?", a: "Idealmente traes la unidad a nuestras instalaciones donde tenemos todo el equipo de alto nivel, pero evaluamos casos en campo para emergencias." },
  { q: "¿Manejan sistemas de frenos de aire?", a: "Sí, es una de nuestras especialidades. Diagnosticamos y reparamos válvulas, compresores, tanques y cámaras de freno." },
  { q: "¿Cómo funciona el mantenimiento para flotas?", a: "Creamos un calendario de servicios por kilometraje. Te integramos a nuestro sistema y te notificamos antes de que cada unidad toque su próximo servicio." },
  { q: "¿El diagnóstico incluye la reparación?", a: "No. Primero diagnosticamos y te damos un presupuesto exacto por escrito. Si apruebas, procedemos. Si no, te llevas el diagnóstico y nada más." },
];

const STATS = [
  { value: 150, suffix: "+", label: "Unidades pesadas" },
  { value: 98, suffix: "%", label: "Efectividad diésel" },
  { value: 12, suffix: "+", label: "Flotillas atendidas" },
  { value: 0, suffix: "", label: "Horas perdidas por mala praxis" },
];

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted.current) {
        counted.current = true; const steps = 60; const increment = target / steps; let step = 0;
        const timer = setInterval(() => { step++; if (step >= steps) { setCount(target); clearInterval(timer); } else { setCount(Math.floor(increment * step)); } }, 33);
      }
    }, { threshold: 0.5 }); observer.observe(el); return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 60); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);

  const animRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.setAttribute("data-visible", "true"); }); }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    const t = setTimeout(() => { animRefs.current.forEach((el) => { if (el) observer.observe(el); }); }, 150);
    return () => { clearTimeout(t); observer.disconnect(); };
  }, []);

  const setAnimRef = useCallback((el) => { if (el && !animRefs.current.includes(el)) animRefs.current.push(el); }, []);
  const scrollTo = useCallback((id) => { setMobileMenu(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }, []);
  const toggleFaq = useCallback((i) => { setOpenFaq((p) => (p === i ? null : i)); }, []);

  return (
    <>
      <Head>
        <title>Borderline HD Solutions | Diagnóstico y Mantenimiento de Unidades Pesadas</title>
        <meta name="description" content="Especialistas en diagnóstico computarizado y mantenimiento preventivo para tractocamiones, autobuses y camiones de carga. Matamoros, Tamaulipas." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={WEB_LINK} />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          :root { --bg: #050505; --bg2: #1a0f00; --accent: #f97316; --accent-lt: #fb923c; --accent-glow: rgba(249,115,22,0.4); --green: #22c55e; --green-dk: #16a34a; --blue: #3b82f6; --purple: #8b5cf6; --glass: rgba(255,255,255,0.04); --glass-b: rgba(255,255,255,0.08); --glass-bh: rgba(255,255,255,0.18); --t1: #f1f1f7; --t2: #a0a0a0; --t3: #5c5c5c; --r-sm: 8px; --r-md: 12px; --r-lg: 20px; --r-xl: 28px; --font: 'Montserrat', system-ui, sans-serif; }
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; } html { scroll-behavior: smooth; } ::selection { background: rgba(249,115,22,0.4); color: white; }
          .page { min-height: 100vh; background: var(--bg); color: var(--t1); font-family: var(--font); overflow-x: hidden; position: relative; }
          .page::before { content: ''; position: fixed; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px); background-size: 80px 80px; pointer-events: none; z-index: 0; }
          .bgBlobs { position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; } .blob { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.4; }
          .blob1 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(249,115,22,0.3), transparent 70%); top: -10%; left: -10%; animation: bf1 25s ease-in-out infinite; }
          .blob2 { width: 400px; height: 400px; background: radial-gradient(circle, rgba(251,146,60,0.2), transparent 70%); top: 40%; right: -8%; animation: bf2 30s ease-in-out infinite; }
          .blob3 { width: 350px; height: 350px; background: radial-gradient(circle, rgba(249,115,22,0.15), transparent 70%); bottom: 10%; left: 20%; animation: bf3 20s ease-in-out infinite; }
          .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 16px 24px; transition: 0.3s ease; display: flex; align-items: center; justify-content: space-between; max-width: 1100px; margin: 0 auto; }
          .navbar.scrolled { background: rgba(5,5,5,0.9); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid var(--glass-b); padding: 12px 24px; }
          .navLogo { width: 44px; height: 44px; border-radius: var(--r-sm); object-fit: contain; transition: 0.3s ease; } .navbar.scrolled .navLogo { width: 36px; height: 36px; }
          .navLinks { display: flex; gap: 24px; list-style: none; padding: 0; margin: 0; }
          .navLinks a { color: var(--t2); text-decoration: none; font-size: 12px; font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase; transition: 0.3s ease; position: relative; }
          .navLinks a::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: var(--accent); border-radius: 1px; transition: width 0.3s ease; }
          .navLinks a:hover { color: var(--t1); } .navLinks a:hover::after { width: 100%; }
          .navCta { background: var(--accent) !important; color: #fff !important; padding: 8px 16px; border-radius: var(--r-sm); font-size: 12px !important; font-weight: 600 !important; transition: 0.3s ease !important; }
          .navCta::after { display: none !important; } .navCta:hover { background: var(--accent-lt) !important; transform: translateY(-1px); box-shadow: 0 4px 20px var(--accent-glow); }
          .mobileMenuBtn { display: none; background: none; border: none; color: var(--t1); font-size: 24px; cursor: pointer; padding: 4px; }
          .hero { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 120px 24px 60px; position: relative; z-index: 1; }
          .heroLogo { width: 300px; max-width: 80%; margin-bottom: 32px; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.6)); animation: fadeIn 1s ease forwards; }
          .heroBadge { display: inline-flex; align-items: center; gap: 8px; background: rgba(249,115,22,0.1); border: 1px solid rgba(249,115,22,0.3); padding: 8px 18px; border-radius: 50px; font-size: 13px; color: var(--accent-lt); margin-bottom: 28px; animation: fadeUp 0.8s 0.2s ease both; }
          .heroBadgeDot { width: 8px; height: 8px; border-radius: 50%; background: var(--green); animation: pulseDot 2s ease-in-out infinite; }
          .heroTitle { font-size: clamp(28px, 5vw, 50px); font-weight: 800; line-height: 1.1; max-width: 850px; margin-bottom: 20px; letter-spacing: -1px; animation: fadeUp 0.8s 0.4s ease both; }
          .heroTitleHighlight { background: linear-gradient(135deg, var(--accent-lt), var(--accent), #ea580c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
          .heroTitleHighlightGreen { background: linear-gradient(135deg, #69f0ae, var(--green), #00c853); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
          .heroDesc { font-size: clamp(16px, 2.5vw, 20px); color: var(--t2); max-width: 650px; line-height: 1.6; margin-bottom: 12px; font-weight: 300; animation: fadeUp 0.8s 0.6s ease both; }
          .heroPrice { font-size: 15px; color: var(--t3); margin-bottom: 36px; animation: fadeUp 0.8s 0.7s ease both; } .heroPrice strong { color: var(--accent); font-weight: 600; }
          .heroCta { display: inline-flex; align-items: center; gap: 10px; background: var(--accent); color: #fff; padding: 16px 36px; border-radius: var(--r-md); font-size: 16px; font-weight: 700; text-decoration: none; border: none; cursor: pointer; transition: 0.3s ease; animation: fadeUp 0.8s 0.8s ease both; font-family: var(--font); position: relative; overflow: hidden; }
          .heroCta::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, transparent, rgba(255,255,255,0.2), transparent); transform: translateX(-100%); transition: transform 0.6s ease; }
          .heroCta:hover::before { transform: translateX(100%); } .heroCta:hover { background: var(--accent-lt); transform: translateY(-2px); box-shadow: 0 8px 30px var(--accent-glow); }
          .heroScrollHint { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 8px; color: var(--t3); font-size: 11px; letter-spacing: 2px; text-transform: uppercase; animation: fadeIn 1s 1.5s ease both; }
          .scrollLine { width: 1px; height: 40px; background: linear-gradient(to bottom, var(--accent), transparent); animation: scrollPulse 2s ease-in-out infinite; }
          .trustSection { position: relative; z-index: 1; padding: 0 24px 60px; max-width: 900px; margin: 0 auto; }
          .trustGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
          .trustCard { background: var(--glass); border: 1px solid var(--glass-b); border-radius: var(--r-md); padding: 20px 16px; text-align: center; transition: 0.3s ease; }
          .trustCard:hover { border-color: var(--glass-bh); background: rgba(255,255,255,0.06); transform: translateY(-3px); }
          .trustIcon { font-size: 28px; margin-bottom: 10px; display: block; } .trustText { font-size: 13px; color: var(--t2); line-height: 1.5; font-weight: 500; }
          .section { position: relative; z-index: 1; padding: 80px 24px; max-width: 1100px; margin: 0 auto; }
          .sectionTitle { font-size: clamp(28px, 5vw, 42px); font-weight: 700; text-align: center; margin-bottom: 12px; letter-spacing: -0.5px; }
          .sectionSubtitle { text-align: center; color: var(--t2); font-size: 16px; margin-bottom: 50px; max-width: 650px; margin-left: auto; margin-right: auto; line-height: 1.6; }
          .pillarsGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 20px; }
          .pillarCard { border-radius: var(--r-xl); padding: 40px 30px; position: relative; overflow: hidden; transition: 0.3s ease; border: 1px solid var(--glass-b); }
          .pillarCard:hover { transform: translateY(-4px); }
          .pillarDiag { background: linear-gradient(180deg, rgba(249,115,22,0.08), var(--glass)); }
          .pillarDiag:hover { border-color: rgba(249,115,22,0.3); box-shadow: 0 20px 50px rgba(249,115,22,0.15); }
          .pillarMaint { background: linear-gradient(180deg, rgba(0,230,118,0.08), var(--glass)); }
          .pillarMaint:hover { border-color: rgba(0,230,118,0.3); box-shadow: 0 20px 50px rgba(0,230,118,0.15); }
          .pillarHeader { display: flex; align-items: center; gap: 15px; margin-bottom: 25px; }
          .pillarIcon { font-size: 32px; } .pillarTitle { font-size: 22px; font-weight: 700; }
          .pillarList { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px; }
          .pillarItem { display: flex; gap: 14px; align-items: flex-start; }
          .pillarCheck { width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; margin-top: 2px; }
          .pillarDiag .pillarCheck { background: rgba(249,115,22,0.2); color: var(--accent-lt); }
          .pillarMaint .pillarCheck { background: rgba(0,230,118,0.2); color: var(--green); }
          .pillarText { font-size: 14px; color: var(--t2); line-height: 1.5; }
          .pillarText strong { color: var(--t1); font-weight: 600; display: block; margin-bottom: 2px; font-size: 15px; }
          .statsSection { padding: 60px 24px; position: relative; z-index: 1; }
          .statsGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; max-width: 900px; margin: 0 auto; }
          .statCard { text-align: center; padding: 24px 12px; background: var(--glass); border: 1px solid var(--glass-b); border-radius: var(--r-md); transition: 0.3s ease; }
          .statCard:hover { border-color: var(--accent); box-shadow: 0 0 60px rgba(249,115,22,0.15); }
          .statNumber { font-size: clamp(32px, 5vw, 48px); font-weight: 700; background: linear-gradient(135deg, var(--accent-lt), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1.2; }
          .statLabel { font-size: 13px; color: var(--t2); margin-top: 6px; line-height: 1.4; }
          .maintSection { background: linear-gradient(180deg, transparent, rgba(0,230,118,0.02), transparent); }
          .benefitsGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 40px; }
          .benefitCard { background: var(--glass); border: 1px solid var(--glass-b); border-radius: var(--r-lg); padding: 28px 24px; transition: 0.3s ease; }
          .benefitCard:hover { border-color: rgba(0,230,118,0.3); background: rgba(0,230,118,0.03); transform: translateY(-3px); }
          .benefitIcon { font-size: 32px; margin-bottom: 14px; display: block; }
          .benefitTitle { font-size: 18px; font-weight: 600; margin-bottom: 8px; color: var(--t1); }
          .benefitDesc { font-size: 14px; color: var(--t2); line-height: 1.6; }
          .maintHighlight { background: linear-gradient(90deg, rgba(0,230,118,0.06), rgba(59,130,246,0.06)); border: 1px solid rgba(0,230,118,0.15); border-radius: var(--r-md); padding: 30px; display: flex; align-items: flex-start; gap: 20px; margin-bottom: 40px; }
          .maintHighlightIcon { font-size: 28px; flex-shrink: 0; margin-top: 2px; }
          .maintHighlightTitle { font-size: 18px; font-weight: 700; margin-bottom: 8px; color: var(--t1); }
          .maintHighlightText { font-size: 14px; color: var(--t2); line-height: 1.7; }
          .maintHighlightText strong { color: var(--green); font-weight: 600; }
          .whyUsGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
          .whyUsCard { background: var(--glass); border: 1px solid var(--glass-b); border-radius: var(--r-md); padding: 24px; display: flex; align-items: flex-start; gap: 16px; transition: 0.3s ease; }
          .whyUsCard:hover { border-color: var(--glass-bh); transform: translateX(5px); }
          .whyUsCheck { font-size: 20px; margin-top: -2px; flex-shrink: 0; }
          .whyUsText { font-size: 15px; color: var(--t2); line-height: 1.6; font-weight: 500; }
          .processSection { background: linear-gradient(180deg, transparent, rgba(249,115,22,0.03), transparent); }
          .timeline { display: flex; align-items: flex-start; justify-content: center; gap: 0; position: relative; margin-top: 20px; }
          .timelineLine { position: absolute; top: 32px; left: 10%; right: 10%; height: 2px; background: linear-gradient(90deg, transparent, var(--glass-bh), var(--accent), var(--glass-bh), transparent); z-index: 0; }
          .timelineStep { flex: 1; max-width: 200px; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 1; }
          .stepDot { width: 64px; height: 64px; border-radius: 50%; background: var(--bg); border: 2px solid var(--glass-b); display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 16px; transition: 0.3s ease; position: relative; }
          .stepNumber { position: absolute; top: -8px; right: -4px; width: 22px; height: 22px; border-radius: 50%; background: var(--accent); color: white; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; }
          .timelineStep:hover .stepDot { border-color: var(--accent); transform: scale(1.1); box-shadow: 0 0 30px var(--accent-glow); }
          .stepTitle { font-size: 14px; font-weight: 600; margin-bottom: 6px; } .stepDesc { font-size: 12px; color: var(--t3); line-height: 1.5; }
          .galleryGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
          .galleryItem { position: relative; border-radius: var(--r-md); overflow: hidden; aspect-ratio: 4/3; cursor: pointer; }
          .galleryImg { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease, filter 0.6s ease; filter: brightness(0.8) saturate(0.9); }
          .galleryItem:hover .galleryImg { transform: scale(1.08); filter: brightness(1) saturate(1.1); }
          .galleryOverlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(5,5,5,0.8) 0%, transparent 60%); display: flex; align-items: flex-end; padding: 20px; opacity: 0; transition: opacity 0.4s ease; }
          .galleryItem:hover .galleryOverlay { opacity: 1; } .galleryLabel { font-size: 14px; font-weight: 600; color: white; }
          .testimonialsGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .testimonialCard { background: var(--glass); border: 1px solid var(--glass-b); border-radius: var(--r-lg); padding: 28px 24px; transition: 0.3s ease; display: flex; flex-direction: column; }
          .testimonialCard:hover { border-color: var(--glass-bh); transform: translateY(-3px); }
          .testimonialStars { color: #fbbf24; font-size: 14px; letter-spacing: 2px; margin-bottom: 16px; }
          .testimonialText { font-size: 15px; color: var(--t2); line-height: 1.7; flex: 1; margin-bottom: 20px; font-style: italic; position: relative; padding-left: 16px; border-left: 2px solid var(--accent); }
          .testimonialAuthor { display: flex; align-items: center; gap: 12px; }
          .testimonialAvatar { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), #ea580c); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 15px; color: white; flex-shrink: 0; }
          .testimonialName { font-size: 14px; font-weight: 600; } .testimonialCar { font-size: 12px; color: var(--t3); }
          .faqList { max-width: 720px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px; }
          .faqItem { background: var(--glass); border: 1px solid var(--glass-b); border-radius: var(--r-md); overflow: hidden; transition: border-color 0.3s ease, background 0.3s ease; }
          .faqItem:hover { border-color: var(--glass-bh); } .faqItem.open { border-color: rgba(249,115,22,0.3); background: rgba(249,115,22,0.04); }
          .faqQuestion { width: 100%; background: none; border: none; color: var(--t1); font-family: var(--font); font-size: 15px; font-weight: 600; padding: 20px 24px; text-align: left; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 16px; transition: color 0.3s ease; }
          .faqQuestion:hover { color: var(--accent-lt); }
          .faqArrow { font-size: 18px; transition: transform 0.4s ease; flex-shrink: 0; color: var(--t3); } .faqItem.open .faqArrow { transform: rotate(180deg); color: var(--accent); }
          .faqAnswer { overflow: hidden; transition: max-height 0.4s ease; } .faqAnswerInner { padding: 0 24px 20px; font-size: 14px; color: var(--t2); line-height: 1.7; }
          .contactGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
          .contactCard { background: var(--glass); border: 1px solid var(--glass-b); border-radius: var(--r-lg); padding: 32px 24px; text-align: center; transition: 0.3s ease; }
          .contactCard:hover { border-color: var(--glass-bh); transform: translateY(-3px); box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
          .contactIcon { font-size: 32px; display: block; margin-bottom: 14px; } .contactTitle { font-size: 17px; font-weight: 600; margin-bottom: 8px; }
          .contactDetail { font-size: 14px; color: var(--t2); line-height: 1.6; margin-bottom: 20px; word-break: break-all; }
          .contactBtn { display: inline-flex; align-items: center; gap: 8px; background: var(--accent); color: white; padding: 12px 24px; border-radius: var(--r-md); font-size: 14px; font-weight: 600; text-decoration: none; border: none; cursor: pointer; transition: 0.3s ease; font-family: var(--font); }
          .contactBtn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px var(--accent-glow); }
          .contactBtnGreen { background: var(--green); color: #fff; } .contactBtnGreen:hover { box-shadow: 0 8px 25px rgba(0,230,118,0.3); }
          .contactBtnPurple { background: var(--purple); color: white; } .contactBtnPurple:hover { background: #7c3aed; box-shadow: 0 8px 25px rgba(124,58,237,0.3); }
          .ctaSection { padding: 80px 24px 100px; position: relative; z-index: 1; }
          .ctaBox { max-width: 700px; margin: 0 auto; background: linear-gradient(135deg, rgba(249,115,22,0.15), rgba(234,88,12,0.08)); border: 1px solid rgba(249,115,22,0.2); border-radius: var(--r-xl); padding: 60px 40px; text-align: center; position: relative; overflow: hidden; }
          .ctaBox::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle at 50% 50%, rgba(249,115,22,0.08), transparent 50%); animation: ctaGlow 8s ease-in-out infinite; }
          .ctaTitle { font-size: clamp(24px, 4vw, 36px); font-weight: 700; margin-bottom: 16px; position: relative; }
          .ctaDesc { color: var(--t2); font-size: 16px; margin-bottom: 32px; line-height: 1.6; position: relative; }
          .ctaButton { display: inline-flex; align-items: center; gap: 10px; background: var(--accent); color: #fff; padding: 18px 40px; border-radius: var(--r-md); font-size: 17px; font-weight: 700; text-decoration: none; border: none; cursor: pointer; transition: 0.3s ease; font-family: var(--font); position: relative; }
          .ctaButton:hover { background: var(--accent-lt); transform: translateY(-3px) scale(1.02); box-shadow: 0 12px 40px var(--accent-glow); }
          .footer { position: relative; z-index: 1; border-top: 1px solid var(--glass-b); padding: 40px 24px; }
          .footerInner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px; }
          .footerLeft { display: flex; flex-direction: column; gap: 4px; } .footerBrand { font-size: 14px; font-weight: 600; color: var(--t1); } .footerText { font-size: 13px; color: var(--t3); }
          .footerLinks { display: flex; gap: 16px; flex-wrap: wrap; justify-content: flex-end; }
          .footerLink { color: var(--t2); text-decoration: none; font-size: 12px; transition: 0.3s ease; white-space: nowrap; } .footerLink:hover { color: var(--accent-lt); }
          .floatingWhatsapp { position: fixed; bottom: 28px; right: 28px; z-index: 200; width: 60px; height: 60px; border-radius: 50%; background: #25d366; display: flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: 0 4px 20px rgba(37,211,102,0.4); transition: 0.3s ease; animation: waFloat 3s ease-in-out infinite; }
          .floatingWhatsapp:hover { transform: scale(1.12); box-shadow: 0 6px 30px rgba(37,211,102,0.5); } .floatingWIcon { font-size: 30px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2)); }
          .floatingTooltip { position: fixed; bottom: 40px; right: 100px; z-index: 200; background: var(--bg2); border: 1px solid var(--glass-b); color: var(--t1); padding: 10px 16px; border-radius: var(--r-sm); font-size: 13px; font-weight: 500; white-space: nowrap; pointer-events: none; animation: tooltipFade 4s ease-in-out infinite; box-shadow: 0 8px 30px rgba(0,0,0,0.4); }
          .floatingTooltip::after { content: ''; position: absolute; right: -6px; top: 50%; transform: translateY(-50%) rotate(45deg); width: 12px; height: 12px; background: var(--bg2); border-right: 1px solid var(--glass-b); border-top: 1px solid var(--glass-b); }
          [data-anim="up"] { opacity: 0; transform: translateY(30px); transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1); }
          [data-anim="scale"] { opacity: 0; transform: scale(0.92); transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1); }
          [data-visible="true"] { opacity: 1 !important; transform: translateY(0) scale(1) !important; }
          .faqQuestion:focus-visible, .heroCta:focus-visible, .ctaButton:focus-visible, .navCta:focus-visible, .mobileMenuBtn:focus-visible, .floatingWhatsapp:focus-visible, .contactBtn:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes fadeUp { from { opacity: 0; transform: translateY(25px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes bf1 { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(80px,50px) scale(1.1); } 66% { transform: translate(-40px,80px) scale(0.95); } }
          @keyframes bf2 { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(-60px,-40px) scale(1.05); } 66% { transform: translate(40px,-60px) scale(0.9); } }
          @keyframes bf3 { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(50px,-30px) scale(1.08); } 66% { transform: translate(-30px,50px) scale(0.95); } }
          @keyframes pulseDot { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.5); } }
          @keyframes scrollPulse { 0%,100% { opacity: 0.3; transform: scaleY(1); } 50% { opacity: 1; transform: scaleY(1.2); } }
          @keyframes waFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
          @keyframes tooltipFade { 0%,80%,100% { opacity: 0; transform: translateX(10px); } 10%,70% { opacity: 1; transform: translateX(0); } }
          @keyframes ctaGlow { 0%,100% { transform: rotate(0deg); } 50% { transform: rotate(180deg); } }
          @media (max-width: 900px) { .testimonialsGrid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; } .statsGrid { grid-template-columns: repeat(2, 1fr); } .contactGrid { grid-template-columns: repeat(2, 1fr); } .pillarsGrid { grid-template-columns: 1fr; } .benefitsGrid { grid-template-columns: 1fr; } .whyUsGrid { grid-template-columns: 1fr; } }
          @media (max-width: 768px) { .section { padding: 60px 20px; } .navLinks { display: none; } .mobileMenuBtn { display: block; } .navLinks.mobileOpen { display: flex; flex-direction: column; position: absolute; top: 100%; left: 0; right: 0; background: rgba(5,5,5,0.95); backdrop-filter: blur(20px); border-bottom: 1px solid var(--glass-b); padding: 20px 24px; gap: 16px; } .hero { padding: 100px 20px 50px; } .heroLogo { width: 220px; margin-bottom: 24px; } .timeline { flex-direction: column; align-items: center; gap: 0; } .timelineLine { top: 0; bottom: 0; left: 50%; right: auto; width: 2px; height: 100%; transform: translateX(-50%); } .timelineStep { max-width: 300px; width: 100%; flex-direction: row; text-align: left; gap: 20px; padding: 20px 0; } .stepDot { margin-bottom: 0; flex-shrink: 0; } .stepNumber { top: -4px; right: -8px; } .galleryGrid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; } .galleryItem { aspect-ratio: 16/10; } .contactGrid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; } .ctaBox { padding: 40px 24px; } .footerInner { flex-direction: column; text-align: center; align-items: center; } .footerLinks { justify-content: center; } .floatingTooltip { display: none; } .maintHighlight { flex-direction: column; text-align: center; align-items: center; } }
          @media (max-width: 480px) { .trustGrid { grid-template-columns: 1fr; max-width: 300px; margin: 0 auto; } .statsGrid { grid-template-columns: 1fr 1fr; gap: 12px; } .heroCta, .ctaButton { width: 100%; justify-content: center; padding: 16px 24px; } }
          @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; } [data-anim="up"], [data-anim="scale"] { opacity: 1; transform: none; } .blob { display: none; } }
        `}} />
      </Head>

      <div className="page">
        <div className="bgBlobs" aria-hidden="true"><div className="blob blob1" /><div className="blob blob2" /><div className="blob blob3" /></div>

        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
          <img src="/logo-hd.png" alt="Borderline HD Solutions" className="navLogo" />
          <ul className={`navLinks ${mobileMenu ? "mobileOpen" : ""}`}>
            <li><a href="#servicios" onClick={(e) => { e.preventDefault(); scrollTo("servicios"); }}>Servicios</a></li>
            <li><a href="#mantenimiento" onClick={(e) => { e.preventDefault(); scrollTo("mantenimiento"); }}>Flotillas</a></li>
            <li><a href="#testimonios" onClick={(e) => { e.preventDefault(); scrollTo("testimonios"); }}>Clientes</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo("faq"); }}>FAQ</a></li>
            <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="navCta">Emergencia HD</a></li>
          </ul>
          <button className="mobileMenuBtn" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Menú" aria-expanded={mobileMenu}>{mobileMenu ? "✕" : "☰"}</button>
        </nav>

        <section className="hero">
          <img src="/logo-hd.png" alt="Borderline HD Solutions" className="heroLogo" />
          <div className="heroBadge"><span className="heroBadgeDot" />Servicio Pesado Especializado</div>
          <h1 className="heroTitle">
            <span className="heroTitleHighlight">Diagnóstico y mantenimiento</span> para <span className="heroTitleHighlightGreen">tractocamiones, autobuses y camiones</span>
          </h1>
          <p className="heroDesc">Sabemos que cada minuto que tu unidad está parada te cuesta dinero. Diagnósticos precisos para motores diésel, sistemas de aire y electrónicos pesados.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="heroCta"><span>📞</span> Reportar falla de unidad</a>
          <div className="heroScrollHint" aria-hidden="true"><span>Scroll</span><div className="scrollLine" /></div>
        </section>

        <section className="trustSection">
          <div className="trustGrid">
            {[{ icon: "🚛", text: "Mi tractocamión perdió potencia" }, { icon: "🚌", text: "Fallas en el sistema de frenos de aire" }, { icon: "⚙️", text: "Necesito programa de flotillas" }].map((item, i) => (
              <div key={i} ref={setAnimRef} data-anim="up" style={{ transitionDelay: `${i * 0.15}s` }} className="trustCard">
                <span className="trustIcon">{item.icon}</span><span className="trustText">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="servicios" className="section">
          <h2 ref={setAnimRef} data-anim="up" className="sectionTitle">Especialistas en Servicio Pesado</h2>
          <p ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.1s" }} className="sectionSubtitle">No adaptamos herramientas de auto, usamos tecnología de alto nivel diseñada para motores diésel de alto torque.</p>
          <div className="pillarsGrid">
            <div ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.2s" }} className="pillarCard pillarDiag">
              <div className="pillarHeader"><span className="pillarIcon">🔬</span><h3 className="pillarTitle">Diagnóstico HD</h3></div>
              <ul className="pillarList">
                <li className="pillarItem"><span className="pillarCheck">✓</span><div className="pillarText"><strong>ECM y Módulos Diésel</strong>Escaneo de computadoras Detroit, Cummins, Caterpillar, Mercedes y Paccar.</div></li>
                <li className="pillarItem"><span className="pillarCheck">✓</span><div className="pillarText"><strong>Frenos Neumáticos</strong>Diagnóstico completo de compresores, válvulas y cámaras de freno de aire.</div></li>
                <li className="pillarItem"><span className="pillarCheck">✓</span><div className="pillarText"><strong>Eléctrica de 24V</strong>Localización exacta de cortos y caídas de voltaje en arneses pesados.</div></li>
              </ul>
            </div>
            <div ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.3s" }} className="pillarCard pillarMaint">
              <div className="pillarHeader"><span className="pillarIcon">🛡️</span><h3 className="pillarTitle">Mantenimiento de Flotillas</h3></div>
              <ul className="pillarList">
                <li className="pillarItem"><span className="pillarCheck">✓</span><div className="pillarText"><strong>Programas Corporativos</strong>Planes de servicio creados a la medida de tu operación logística.</div></li>
                <li className="pillarItem"><span className="pillarCheck">✓</span><div className="pillarText"><strong>Control por Kilometraje</strong>Sabemos exactamente cuándo cada camión necesita servicio preventivo.</div></li>
                <li className="pillarItem"><span className="pillarCheck">✓</span><div className="pillarText"><strong>Reducción de Tiempos Muertos</strong>Evitamos que una falla imprevista detenga tu carga en la carretera.</div></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="statsSection">
          <div className="statsGrid">{STATS.map((s, i) => (<div key={i} ref={setAnimRef} data-anim="scale" style={{ transitionDelay: `${i * 0.1}s` }} className="statCard"><div className="statNumber"><Counter target={s.value} suffix={s.suffix} /></div><div className="statLabel">{s.label}</div></div>))}</div>
        </section>

        <section id="mantenimiento" className="section maintSection">
          <div ref={setAnimRef} data-anim="up" style={{ display: "inline-block", background: "linear-gradient(135deg, rgba(0,230,118,0.1), rgba(0,200,83,0.05))", border: "1px solid rgba(0,230,118,0.2)", color: "var(--green)", padding: "8px 20px", borderRadius: "50px", fontSize: "13px", fontWeight: "600", margin: "0 auto 24px", textAlign: "center", width: "fit-content" }}>🛣️ Ingeniería de Flotillas</div>
          <h2 ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.1s" }} className="sectionTitle">¿Por qué mantener tu flota con nosotros?</h2>
          <p ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.15s" }} className="sectionSubtitle">En el transporte pesado, el mantenimiento no es un gasto, es la única forma de garantizar ganancias.</p>
          <div className="benefitsGrid">{MAINT_BENEFITS.map((b, i) => (<div key={i} ref={setAnimRef} data-anim="up" style={{ transitionDelay: `${i * 0.1}s` }} className="benefitCard"><span className="benefitIcon">{b.icon}</span><h3 className="benefitTitle">{b.title}</h3><p className="benefitDesc">{b.desc}</p></div>))}</div>
          <div ref={setAnimRef} data-anim="scale" style={{ transitionDelay: "0.2s" }} className="maintHighlight"><span className="maintHighlightIcon">🔒</span><div><h4 className="maintHighlightTitle">Tu flota en nuestra base de datos</h4><p className="maintHighlightText">Integramos cada una de tus unidades a nuestro sistema. Llevamos un historial exacto de servicios, reparaciones y diagnósticos por número de económico. Tú sabes qué tiene cada camión y nosotros te avisamos cuándo toca servicio.</p></div></div>
          <h3 ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.3s", fontSize: "22px", fontWeight: "700", textAlign: "center", marginBottom: "30px" }}>La diferencia Borderline HD</h3>
          <div className="whyUsGrid">{MAINT_WHY_US.map((w, i) => (<div key={i} ref={setAnimRef} data-anim="up" style={{ transitionDelay: `${i * 0.1}s` }} className="whyUsCard"><span className="whyUsCheck">✅</span><p className="whyUsText">{w}</p></div>))}</div>
        </section>

        <section id="proceso" className="section processSection">
          <h2 ref={setAnimRef} data-anim="up" className="sectionTitle">Proceso de trabajo</h2>
          <p ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.1s" }} className="sectionSubtitle">Metodología diseñada para minimizar el tiempo de paro de tu unidad.</p>
          <div className="timeline"><div className="timelineLine" aria-hidden="true" />{PROCESS_STEPS.map((s, i) => (<div key={i} ref={setAnimRef} data-anim="up" style={{ transitionDelay: `${i * 0.12}s` }} className="timelineStep"><div className="stepDot"><span className="stepNumber">{i + 1}</span>{s.icon}</div><div><div className="stepTitle">{s.title}</div><div className="stepDesc">{s.desc}</div></div></div>))}</div>
        </section>

        <section className="section"><h2 ref={setAnimRef} data-anim="up" className="sectionTitle">Nuestro trabajo pesado</h2><p ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.1s" }} className="sectionSubtitle">Unidades que confiaron en nosotros.</p><div className="galleryGrid">{GALLERY.map((img, i) => (<div key={i} ref={setAnimRef} data-anim="scale" style={{ transitionDelay: `${i * 0.12}s` }} className="galleryItem"><img src={img.src} alt={img.label} className="galleryImg" loading="lazy" /><div className="galleryOverlay"><span className="galleryLabel">{img.label}</span></div></div>))}</div></section>

        <section id="testimonios" className="section"><h2 ref={setAnimRef} data-anim="up" className="sectionTitle">Operadores y dueños de flotas</h2><p ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.1s" }} className="sectionSubtitle">Resultados que se reflejan en la operación.</p><div className="testimonialsGrid">{TESTIMONIALS.map((t, i) => (<div key={i} ref={setAnimRef} data-anim="up" style={{ transitionDelay: `${i * 0.12}s` }} className="testimonialCard"><div className="testimonialStars" aria-label="5 estrellas">★★★★★</div><p className="testimonialText">&ldquo;{t.text}&rdquo;</p><div className="testimonialAuthor"><div className="testimonialAvatar">{t.initials}</div><div><div className="testimonialName">{t.name}</div><div className="testimonialCar">{t.car}</div></div></div></div>))}</div></section>

        <section id="faq" className="section"><h2 ref={setAnimRef} data-anim="up" className="sectionTitle">Preguntas frecuentes HD</h2><p ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.1s" }} className="sectionSubtitle">Resolución de dudas para el sector transporte.</p><div ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.15s" }} className="faqList" role="list">{FAQS.map((f, i) => (<div key={i} className={`faqItem ${openFaq === i ? "open" : ""}`} role="listitem"><button className="faqQuestion" onClick={() => toggleFaq(i)} aria-expanded={openFaq === i}>{f.q}<span className="faqArrow" aria-hidden="true">▼</span></button><div className="faqAnswer" style={{ maxHeight: openFaq === i ? "300px" : "0px" }}><div className="faqAnswerInner">{f.a}</div></div></div>))}</div></section>

        <section id="contacto" className="section"><h2 ref={setAnimRef} data-anim="up" className="sectionTitle">Contacto HD</h2><p ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.1s" }} className="sectionSubtitle">Línea directa para emergencias y cotizaciones.</p><div className="contactGrid"><div ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.1s" }} className="contactCard"><span className="contactIcon">📍</span><h3 className="contactTitle">Ubicación</h3><p className="contactDetail">Calle 20 #1113, Col. Buena Vista<br />Matamoros, Tamaulipas</p><a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="contactBtn">🗺️ Abrir en Maps</a></div><div ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.2s" }} className="contactCard"><span className="contactIcon">💬</span><h3 className="contactTitle">WhatsApp HD</h3><p className="contactDetail">+52 868 390 5686<br />Respuesta inmediata</p><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="contactBtn contactBtnGreen">💬 Enviar mensaje</a></div><div ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.3s" }} className="contactCard"><span className="contactIcon">📧</span><h3 className="contactTitle">Correo</h3><p className="contactDetail">{EMAIL}</p><a href={EMAIL_LINK} className="contactBtn contactBtnPurple">📧 Enviar correo</a></div><div ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.4s" }} className="contactCard"><span className="contactIcon">🌐</span><h3 className="contactTitle">Sitio web</h3><p className="contactDetail">borderlinehdsolutions<br />.com</p><a href={WEB_LINK} target="_blank" rel="noopener noreferrer" className="contactBtn">🌐 Visitar sitio</a></div></div></section>

        <section className="ctaSection"><div className="ctaBox"><h2 className="ctaTitle">No dejes que una falla pare tu operación</h2><p className="ctaDesc">Diagnóstico preciso para que tu unidad vuelva a la carretera rápido y seguro.</p><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="ctaButton"><span>📞</span> Reportar unidad ahora</a></div></section>

        <footer className="footer"><div className="footerInner"><div className="footerLeft"><span className="footerBrand">Borderline HD Solutions</span><span className="footerText">© {new Date().getFullYear()} · Matamoros, Tamaulipas</span></div><div className="footerLinks"><a href={EMAIL_LINK} className="footerLink">📧 Correo</a><a href={WEB_LINK} target="_blank" rel="noopener noreferrer" className="footerLink">🌐 Web</a><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="footerLink">💬 WhatsApp</a><a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="footerLink">📍 Ubicación</a></div></div></footer>

        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="floatingWhatsapp" aria-label="Contactar por WhatsApp"><span className="floatingWIcon">💬</span></a>
        <div className="floatingTooltip" aria-hidden="true">¿Tu unidad falló? Escríbenos</div>
      </div>
    </>
  );
}