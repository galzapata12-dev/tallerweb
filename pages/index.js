import React, { useState, useEffect, useRef, useCallback } from "react";
import Head from "next/head";

/* ═══════════════════════════════════════════
   CONSTANTES
   ═══════════════════════════════════════════ */
const WHATSAPP_NUMBER = "528683905686";
const MESSAGE = "Hola, quiero agendar un diagnóstico profesional";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Calle+20+1113+Matamoros+Tamaulipas";
const WEB_LINK = "https://borderlineautomotivesolutions.com";
const EMAIL = "borderlineautomotivesolutions@gmail.com";
const EMAIL_LINK = `mailto:${EMAIL}`;

const PROCESS_STEPS = [
  { icon: "🔧", title: "Recepción", desc: "Documentamos tu problema con detalle" },
  { icon: "💻", title: "Escaneo", desc: "Lectura de códigos y datos en tiempo real" },
  { icon: "🔌", title: "Pruebas físicas", desc: "Verificación manual y eléctrica directa" },
  { icon: "🎯", title: "Diagnóstico", desc: "Entregamos la causa exacta por escrito" },
  { icon: "✅", title: "Solución", desc: "Reparación precisa o derivación especializada" },
];

const SERVICES = [
  { icon: "🔍", title: "Diagnóstico computarizado", desc: "Escaneo avanzado de todas las ECU del vehículo con equipo profesional multimarca." },
  { icon: "⚡", title: "Diagnóstico eléctrico", desc: "Localización de cortos, caídas de voltaje, fallas en sensores y módulos electrónicos." },
  { icon: "🛠️", title: "Reparación de motor", desc: "Solución a fallas mecánicas y electrónicas del motor con diagnóstico previo comprobado." },
  { icon: "🚗", title: "Suspensión y frenos", desc: "Diagnóstico completo de sistemas de seguridad: ABS, suspensiones, frenos y estabilidad." },
];

const TESTIMONIALS = [
  { text: "Nadie encontraba la falla de mi Jetta. Aquí la detectaron en 2 horas. Increíble servicio.", name: "Carlos R.", car: "VW Jetta 2019", initials: "CR" },
  { text: "Me evitaron gastar más de $8,000 en piezas que no necesitaba. El diagnóstico valió cada peso.", name: "María G.", car: "Honda CR-V 2021", initials: "MG" },
  { text: "Profesionales de verdad. Mi Silverado lleva 6 meses sin check engine. Totalmente recomendados.", name: "Roberto L.", car: "Chevy Silverado 2020", initials: "RL" },
];

const GALLERY = [
  { src: "/motor.jpeg", label: "Diagnóstico de motor" },
  { src: "/motorreparado.jpeg", label: "Motor reparado" },
  { src: "/transmision.jpeg", label: "Servicio de transmisión" },
];

const FAQS = [
  { q: "¿Por qué se cobra el diagnóstico?", a: "Porque realizamos un análisis técnico real con equipo profesional de alto costo. No es una revisión visual superficial, es un diagnóstico profundo que requiere tiempo, conocimiento especializado y herramientas de $50,000+ pesos." },
  { q: "¿El diagnóstico incluye la reparación?", a: "No. Primero identificamos la causa exacta, te entregamos un reporte detallado con presupuesto. Si decides reparar con nosotros, el costo del diagnóstico se descuenta del servicio total." },
  { q: "¿Cuánto tiempo toma el diagnóstico?", a: "La mayoría se completan el mismo día (2-4 horas). Fallas intermitentes o complejas pueden requerir más tiempo de análisis, pero siempre te mantenemos informado del avance." },
  { q: "¿Qué marcas atienden?", a: "Todas: Americanas, Europeas, Asiáticas y Nacionales. Contamos con escáneres multimarca de última generación que cubren el 95% de vehículos en circulación." },
  { q: "¿Necesito agendar cita?", a: "Sí, trabajamos exclusivamente con cita previa para garantizar atención dedicada a tu vehículo. Agenda por WhatsApp y te confirmamos horario disponible." },
];

const STATS = [
  { value: 500, suffix: "+", label: "Diagnósticos realizados" },
  { value: 95, suffix: "%", label: "Tasa de efectividad" },
  { value: 8, suffix: "+", label: "Años de experiencia" },
  { value: 0, suffix: "", label: "Piezas cambiadas sin necesidad" },
];

/* ═══════════════════════════════════════════
   CONTADOR ANIMADO
   ═══════════════════════════════════════════ */
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const steps = 60;
          const increment = target / steps;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            if (step >= steps) { setCount(target); clearInterval(timer); }
            else { setCount(Math.floor(increment * step)); }
          }, 33);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ═══════════════════════════════════════════
   PÁGINA PRINCIPAL
   ═══════════════════════════════════════════ */
export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const animRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.setAttribute("data-visible", "true");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    const t = setTimeout(() => {
      animRefs.current.forEach((el) => { if (el) observer.observe(el); });
    }, 150);
    return () => { clearTimeout(t); observer.disconnect(); };
  }, []);

  const setAnimRef = useCallback((el) => {
    if (el && !animRefs.current.includes(el)) animRefs.current.push(el);
  }, []);

  const scrollTo = useCallback((id) => {
    setMobileMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const toggleFaq = useCallback((i) => {
    setOpenFaq((p) => (p === i ? null : i));
  }, []);

  return (
    <>
      <Head>
        <title>Borderline Automotive Solutions | Diagnóstico Automotriz Avanzado</title>
        <meta name="description" content="Diagnóstico computarizado avanzado para fallas que otros talleres no pudieron resolver. Matamoros, Tamaulipas." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Borderline Automotive Solutions" />
        <meta property="og:description" content="Fallas que nadie resolvió. Diagnóstico real desde $850 MXN." />
        <link rel="canonical" href={WEB_LINK} />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "AutoRepair",
          "name": "Borderline Automotive Solutions", "url": WEB_LINK, "email": EMAIL,
          "address": { "@type": "PostalAddress", "streetAddress": "Calle 20 #1113, Col. Buena Vista", "addressLocality": "Matamoros", "addressRegion": "Tamaulipas", "addressCountry": "MX" },
          "telephone": "+528683905686"
        })}} />
      </Head>

      <div className="page">
        <div className="bgBlobs" aria-hidden="true">
          <div className="blob blob1" /><div className="blob blob2" /><div className="blob blob3" />
        </div>

        {/* NAVBAR */}
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Navegación principal">
          <img src="/logo.png" alt="Borderline Automotive" className="navLogo" />
          <ul className={`navLinks ${mobileMenu ? "mobileOpen" : ""}`}>
            <li><a href="#proceso" onClick={(e) => { e.preventDefault(); scrollTo("proceso"); }}>Proceso</a></li>
            <li><a href="#servicios" onClick={(e) => { e.preventDefault(); scrollTo("servicios"); }}>Servicios</a></li>
            <li><a href="#testimonios" onClick={(e) => { e.preventDefault(); scrollTo("testimonios"); }}>Clientes</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo("faq"); }}>FAQ</a></li>
            <li><a href="#contacto" onClick={(e) => { e.preventDefault(); scrollTo("contacto"); }}>Contacto</a></li>
            <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="navCta">Agendar cita</a></li>
          </ul>
          <button className="mobileMenuBtn" onClick={() => setMobileMenu(!mobileMenu)} aria-label={mobileMenu ? "Cerrar menú" : "Abrir menú"} aria-expanded={mobileMenu}>
            {mobileMenu ? "✕" : "☰"}
          </button>
        </nav>

        {/* HERO */}
        <section className="hero">
          <img src="/logo.png" alt="Borderline Automotive Solutions" className="heroLogo" />
          <div className="heroBadge"><span className="heroBadgeDot" />Atención con cita previa</div>
          <h1 className="heroTitle">Diagnóstico avanzado para fallas que <span className="heroTitleHighlight">otros talleres no resolvieron</span></h1>
          <p className="heroDesc">No cambiamos piezas por suposición. Encontramos la causa real con tecnología y experiencia.</p>
          <p className="heroPrice">Diagnóstico desde <strong>$850 MXN</strong></p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="heroCta"><span>💬</span> Solicitar diagnóstico</a>
          <div className="heroScrollHint" aria-hidden="true"><span>Scroll</span><div className="scrollLine" /></div>
        </section>

        {/* TRUST BADGES */}
        <section className="trustSection" aria-label="¿Es para ti?">
          <div className="trustGrid">
            {[
              { icon: "🔁", text: "Ya fuiste a otros talleres sin solución" },
              { icon: "💸", text: "Cambiaste piezas y sigue fallando" },
              { icon: "🎯", text: "Buscas un diagnóstico real de una vez" },
            ].map((item, i) => (
              <div key={i} ref={setAnimRef} data-anim="up" style={{ transitionDelay: `${i * 0.15}s` }} className="trustCard">
                <span className="trustIcon">{item.icon}</span>
                <span className="trustText">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESO */}
        <section id="proceso" className="section processSection">
          <h2 ref={setAnimRef} data-anim="up" className="sectionTitle">Nuestro proceso</h2>
          <p ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.1s" }} className="sectionSubtitle">Un método sistemático que garantiza resultados, no suposiciones.</p>
          <div className="timeline">
            <div className="timelineLine" aria-hidden="true" />
            {PROCESS_STEPS.map((s, i) => (
              <div key={i} ref={setAnimRef} data-anim="up" style={{ transitionDelay: `${i * 0.12}s` }} className="timelineStep">
                <div className="stepDot"><span className="stepNumber">{i + 1}</span>{s.icon}</div>
                <div><div className="stepTitle">{s.title}</div><div className="stepDesc">{s.desc}</div></div>
              </div>
            ))}
          </div>
        </section>

        {/* ESTADÍSTICAS */}
        <section className="statsSection" aria-label="Estadísticas">
          <div className="statsGrid">
            {STATS.map((s, i) => (
              <div key={i} ref={setAnimRef} data-anim="scale" style={{ transitionDelay: `${i * 0.1}s` }} className="statCard">
                <div className="statNumber"><Counter target={s.value} suffix={s.suffix} /></div>
                <div className="statLabel">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="section">
          <h2 ref={setAnimRef} data-anim="up" className="sectionTitle">Servicios especializados</h2>
          <p ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.1s" }} className="sectionSubtitle">Cada servicio comienza con un diagnóstico preciso. Sin adivinanzas.</p>
          <div className="servicesGrid">
            {SERVICES.map((s, i) => (
              <div key={i} ref={setAnimRef} data-anim="up" style={{ transitionDelay: `${i * 0.1}s` }} className="serviceCard">
                <span className="serviceIcon">{s.icon}</span>
                <h3 className="serviceTitle">{s.title}</h3>
                <p className="serviceDesc">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GALERÍA */}
        <section className="section">
          <h2 ref={setAnimRef} data-anim="up" className="sectionTitle">Nuestro trabajo</h2>
          <p ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.1s" }} className="sectionSubtitle">Casos reales de diagnósticos y reparaciones realizadas.</p>
          <div className="galleryGrid">
            {GALLERY.map((img, i) => (
              <div key={i} ref={setAnimRef} data-anim="scale" style={{ transitionDelay: `${i * 0.12}s` }} className="galleryItem">
                <img src={img.src} alt={img.label} className="galleryImg" loading="lazy" />
                <div className="galleryOverlay"><span className="galleryLabel">{img.label}</span></div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section id="testimonios" className="section">
          <h2 ref={setAnimRef} data-anim="up" className="sectionTitle">Clientes reales</h2>
          <p ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.1s" }} className="sectionSubtitle">Resultados que hablan por nosotros.</p>
          <div className="testimonialsGrid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} ref={setAnimRef} data-anim="up" style={{ transitionDelay: `${i * 0.12}s` }} className="testimonialCard">
                <div className="testimonialStars" aria-label="5 estrellas">★★★★★</div>
                <p className="testimonialText">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonialAuthor">
                  <div className="testimonialAvatar">{t.initials}</div>
                  <div><div className="testimonialName">{t.name}</div><div className="testimonialCar">{t.car}</div></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <h2 ref={setAnimRef} data-anim="up" className="sectionTitle">Preguntas frecuentes</h2>
          <p ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.1s" }} className="sectionSubtitle">Todo lo que necesitas saber antes de agendar.</p>
          <div ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.15s" }} className="faqList" role="list">
            {FAQS.map((f, i) => (
              <div key={i} className={`faqItem ${openFaq === i ? "open" : ""}`} role="listitem">
                <button className="faqQuestion" onClick={() => toggleFaq(i)} aria-expanded={openFaq === i}>
                  {f.q}<span className="faqArrow" aria-hidden="true">▼</span>
                </button>
                <div className="faqAnswer" style={{ maxHeight: openFaq === i ? "300px" : "0px" }}>
                  <div className="faqAnswerInner">{f.a}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section">
          <h2 ref={setAnimRef} data-anim="up" className="sectionTitle">Contacto</h2>
          <p ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.1s" }} className="sectionSubtitle">Todos los canales para comunicarte con nosotros.</p>
          <div className="contactGrid">
            <div ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.1s" }} className="contactCard">
              <span className="contactIcon">📍</span>
              <h3 className="contactTitle">Ubicación</h3>
              <p className="contactDetail">Calle 20 #1113, Col. Buena Vista<br />Matamoros, Tamaulipas</p>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="contactBtn contactBtnBlue">🗺️ Abrir en Maps</a>
            </div>
            <div ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.2s" }} className="contactCard">
              <span className="contactIcon">💬</span>
              <h3 className="contactTitle">WhatsApp</h3>
              <p className="contactDetail">+52 868 390 5686<br />Respuesta rápida</p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="contactBtn contactBtnGreen">💬 Enviar mensaje</a>
            </div>
            <div ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.3s" }} className="contactCard">
              <span className="contactIcon">📧</span>
              <h3 className="contactTitle">Correo electrónico</h3>
              <p className="contactDetail">{EMAIL}</p>
              <a href={EMAIL_LINK} className="contactBtn contactBtnPurple">📧 Enviar correo</a>
            </div>
            <div ref={setAnimRef} data-anim="up" style={{ transitionDelay: "0.4s" }} className="contactCard">
              <span className="contactIcon">🌐</span>
              <h3 className="contactTitle">Sitio web</h3>
              <p className="contactDetail">borderlineautomotivesolutions<br />.com</p>
              <a href={WEB_LINK} target="_blank" rel="noopener noreferrer" className="contactBtn contactBtnBlue">🌐 Visitar sitio</a>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="ctaSection">
          <div className="ctaBox">
            <h2 className="ctaTitle">Deja de gastar en pruebas inútiles</h2>
            <p className="ctaDesc">Un solo diagnóstico profesional puede ahorrarte miles de pesos en piezas que no necesitas.</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="ctaButton"><span>💬</span> Agendar diagnóstico ahora</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footerInner">
            <div className="footerLeft">
              <span className="footerBrand">Borderline Automotive Solutions</span>
              <span className="footerText">© {new Date().getFullYear()} · Matamoros, Tamaulipas</span>
            </div>
            <div className="footerLinks">
              <a href={EMAIL_LINK} className="footerLink">📧 Correo</a>
              <a href={WEB_LINK} target="_blank" rel="noopener noreferrer" className="footerLink">🌐 Web</a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="footerLink">💬 WhatsApp</a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="footerLink">📍 Ubicación</a>
            </div>
          </div>
        </footer>

        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="floatingWhatsapp" aria-label="Contactar por WhatsApp">
          <span className="floatingWIcon">💬</span>
        </a>
        <div className="floatingTooltip" aria-hidden="true">¿Necesitas ayuda? Escríbenos</div>
      </div>

      <style jsx global>{`
        :root {
          --bg: #050510; --bg2: #0d0a2e;
          --accent: #7c3aed; --accent-lt: #a78bfa; --accent-glow: rgba(124,58,237,0.4);
          --green: #00e676; --green-dk: #00c853; --blue: #3b82f6; --purple: #8b5cf6;
          --glass: rgba(255,255,255,0.04); --glass-b: rgba(255,255,255,0.08); --glass-bh: rgba(255,255,255,0.18);
          --t1: #f1f1f7; --t2: #9898b0; --t3: #5c5c78;
          --r-sm: 8px; --r-md: 12px; --r-lg: 20px; --r-xl: 28px;
          --font: 'Montserrat', system-ui, sans-serif;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(124,58,237,0.4); color: white; }

        .page { min-height: 100vh; background: var(--bg); color: var(--t1); font-family: var(--font); overflow-x: hidden; position: relative; }
        .page::before { content: ''; position: fixed; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px); background-size: 80px 80px; pointer-events: none; z-index: 0; }

        .bgBlobs { position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
        .blob { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.5; }
        .blob1 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(124,58,237,0.35), transparent 70%); top: -10%; left: -10%; animation: bf1 25s ease-in-out infinite; }
        .blob2 { width: 400px; height: 400px; background: radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%); top: 40%; right: -8%; animation: bf2 30s ease-in-out infinite; }
        .blob3 { width: 350px; height: 350px; background: radial-gradient(circle, rgba(124,58,237,0.2), transparent 70%); bottom: 10%; left: 20%; animation: bf3 20s ease-in-out infinite; }

        .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 16px 24px; transition: 0.3s ease; display: flex; align-items: center; justify-content: space-between; max-width: 1100px; margin: 0 auto; }
        .navbar.scrolled { background: rgba(5,5,16,0.85); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid var(--glass-b); padding: 12px 24px; }
        .navLogo { width: 44px; height: 44px; border-radius: var(--r-sm); object-fit: contain; transition: 0.3s ease; }
        .navbar.scrolled .navLogo { width: 36px; height: 36px; }
        .navLinks { display: flex; gap: 24px; list-style: none; padding: 0; margin: 0; }
        .navLinks a { color: var(--t2); text-decoration: none; font-size: 12px; font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase; transition: 0.3s ease; position: relative; }
        .navLinks a::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: var(--accent); border-radius: 1px; transition: width 0.3s ease; }
        .navLinks a:hover { color: var(--t1); }
        .navLinks a:hover::after { width: 100%; }
        .navCta { background: var(--green) !important; color: #000 !important; padding: 8px 16px; border-radius: var(--r-sm); font-size: 12px !important; font-weight: 600 !important; transition: 0.3s ease !important; }
        .navCta::after { display: none !important; }
        .navCta:hover { background: var(--green-dk) !important; transform: translateY(-1px); box-shadow: 0 4px 20px rgba(0,230,118,0.3); }
        .mobileMenuBtn { display: none; background: none; border: none; color: var(--t1); font-size: 24px; cursor: pointer; padding: 4px; }

        .hero { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 120px 24px 60px; position: relative; z-index: 1; }
        .heroLogo { width: 300px; max-width: 80%; margin-bottom: 32px; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.6)); animation: fadeIn 1s ease forwards; }
        .heroBadge { display: inline-flex; align-items: center; gap: 8px; background: var(--glass); border: 1px solid var(--glass-b); padding: 8px 18px; border-radius: 50px; font-size: 13px; color: var(--accent-lt); margin-bottom: 28px; animation: fadeUp 0.8s 0.2s ease both; }
        .heroBadgeDot { width: 8px; height: 8px; border-radius: 50%; background: var(--green); animation: pulseDot 2s ease-in-out infinite; }
        .heroTitle { font-size: clamp(30px, 6vw, 56px); font-weight: 700; line-height: 1.1; max-width: 800px; margin-bottom: 20px; letter-spacing: -1px; animation: fadeUp 0.8s 0.4s ease both; }
        .heroTitleHighlight { background: linear-gradient(135deg, var(--accent-lt), var(--accent), #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .heroDesc { font-size: clamp(16px, 2.5vw, 20px); color: var(--t2); max-width: 520px; line-height: 1.6; margin-bottom: 12px; font-weight: 300; animation: fadeUp 0.8s 0.6s ease both; }
        .heroPrice { font-size: 15px; color: var(--t3); margin-bottom: 36px; animation: fadeUp 0.8s 0.7s ease both; }
        .heroPrice strong { color: var(--green); font-weight: 600; }
        .heroCta { display: inline-flex; align-items: center; gap: 10px; background: var(--green); color: #000; padding: 16px 36px; border-radius: var(--r-md); font-size: 16px; font-weight: 700; text-decoration: none; border: none; cursor: pointer; transition: 0.3s ease; animation: fadeUp 0.8s 0.8s ease both; font-family: var(--font); position: relative; overflow: hidden; }
        .heroCta::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, transparent, rgba(255,255,255,0.2), transparent); transform: translateX(-100%); transition: transform 0.6s ease; }
        .heroCta:hover::before { transform: translateX(100%); }
        .heroCta:hover { background: var(--green-dk); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,230,118,0.35); }
        .heroScrollHint { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 8px; color: var(--t3); font-size: 11px; letter-spacing: 2px; text-transform: uppercase; animation: fadeIn 1s 1.5s ease both; }
        .scrollLine { width: 1px; height: 40px; background: linear-gradient(to bottom, var(--accent), transparent); animation: scrollPulse 2s ease-in-out infinite; }

        .trustSection { position: relative; z-index: 1; padding: 0 24px 60px; max-width: 700px; margin: 0 auto; }
        .trustGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .trustCard { background: var(--glass); border: 1px solid var(--glass-b); border-radius: var(--r-md); padding: 20px 16px; text-align: center; transition: 0.3s ease; }
        .trustCard:hover { border-color: var(--glass-bh); background: rgba(255,255,255,0.06); transform: translateY(-3px); }
        .trustIcon { font-size: 28px; margin-bottom: 10px; display: block; }
        .trustText { font-size: 13px; color: var(--t2); line-height: 1.5; font-weight: 500; }

        .section { position: relative; z-index: 1; padding: 80px 24px; max-width: 1100px; margin: 0 auto; }
        .sectionTitle { font-size: clamp(28px, 5vw, 42px); font-weight: 700; text-align: center; margin-bottom: 12px; letter-spacing: -0.5px; }
        .sectionSubtitle { text-align: center; color: var(--t2); font-size: 16px; margin-bottom: 50px; max-width: 550px; margin-left: auto; margin-right: auto; line-height: 1.6; }

        .processSection { background: linear-gradient(180deg, transparent, rgba(124,58,237,0.03), transparent); }
        .timeline { display: flex; align-items: flex-start; justify-content: center; gap: 0; position: relative; margin-top: 20px; }
        .timelineLine { position: absolute; top: 32px; left: 10%; right: 10%; height: 2px; background: linear-gradient(90deg, transparent, var(--glass-bh), var(--accent), var(--glass-bh), transparent); z-index: 0; }
        .timelineStep { flex: 1; max-width: 200px; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 1; }
        .stepDot { width: 64px; height: 64px; border-radius: 50%; background: var(--bg); border: 2px solid var(--glass-b); display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 16px; transition: 0.3s ease; position: relative; }
        .stepNumber { position: absolute; top: -8px; right: -4px; width: 22px; height: 22px; border-radius: 50%; background: var(--accent); color: white; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; }
        .timelineStep:hover .stepDot { border-color: var(--accent); transform: scale(1.1); box-shadow: 0 0 30px var(--accent-glow); }
        .stepTitle { font-size: 14px; font-weight: 600; margin-bottom: 6px; }
        .stepDesc { font-size: 12px; color: var(--t3); line-height: 1.5; }

        .statsSection { padding: 60px 24px; position: relative; z-index: 1; }
        .statsGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; max-width: 900px; margin: 0 auto; }
        .statCard { text-align: center; padding: 24px 12px; background: var(--glass); border: 1px solid var(--glass-b); border-radius: var(--r-md); transition: 0.3s ease; }
        .statCard:hover { border-color: var(--accent); box-shadow: 0 0 60px rgba(124,58,237,0.15); }
        .statNumber { font-size: clamp(32px, 5vw, 48px); font-weight: 700; background: linear-gradient(135deg, var(--accent-lt), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1.2; }
        .statLabel { font-size: 13px; color: var(--t2); margin-top: 6px; line-height: 1.4; }

        .servicesGrid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .serviceCard { background: var(--glass); border: 1px solid var(--glass-b); border-radius: var(--r-lg); padding: 32px 28px; transition: 0.3s ease; position: relative; overflow: hidden; }
        .serviceCard::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--accent), transparent); opacity: 0; transition: opacity 0.4s ease; }
        .serviceCard:hover { border-color: var(--glass-bh); background: rgba(255,255,255,0.06); transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .serviceCard:hover::before { opacity: 1; }
        .serviceIcon { font-size: 36px; margin-bottom: 16px; display: block; }
        .serviceTitle { font-size: 18px; font-weight: 600; margin-bottom: 8px; }
        .serviceDesc { font-size: 14px; color: var(--t2); line-height: 1.6; }

        .galleryGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .galleryItem { position: relative; border-radius: var(--r-md); overflow: hidden; aspect-ratio: 4/3; cursor: pointer; }
        .galleryImg { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease, filter 0.6s ease; filter: brightness(0.8) saturate(0.9); }
        .galleryItem:hover .galleryImg { transform: scale(1.08); filter: brightness(1) saturate(1.1); }
        .galleryOverlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(5,5,16,0.8) 0%, transparent 60%); display: flex; align-items: flex-end; padding: 20px; opacity: 0; transition: opacity 0.4s ease; }
        .galleryItem:hover .galleryOverlay { opacity: 1; }
        .galleryLabel { font-size: 14px; font-weight: 600; color: white; }

        .testimonialsGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .testimonialCard { background: var(--glass); border: 1px solid var(--glass-b); border-radius: var(--r-lg); padding: 28px 24px; transition: 0.3s ease; display: flex; flex-direction: column; }
        .testimonialCard:hover { border-color: var(--glass-bh); transform: translateY(-3px); }
        .testimonialStars { color: #fbbf24; font-size: 14px; letter-spacing: 2px; margin-bottom: 16px; }
        .testimonialText { font-size: 15px; color: var(--t2); line-height: 1.7; flex: 1; margin-bottom: 20px; font-style: italic; position: relative; padding-left: 16px; border-left: 2px solid var(--accent); }
        .testimonialAuthor { display: flex; align-items: center; gap: 12px; }
        .testimonialAvatar { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), #6366f1); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 15px; color: white; flex-shrink: 0; }
        .testimonialName { font-size: 14px; font-weight: 600; }
        .testimonialCar { font-size: 12px; color: var(--t3); }

        .faqList { max-width: 720px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px; }
        .faqItem { background: var(--glass); border: 1px solid var(--glass-b); border-radius: var(--r-md); overflow: hidden; transition: border-color 0.3s ease, background 0.3s ease; }
        .faqItem:hover { border-color: var(--glass-bh); }
        .faqItem.open { border-color: rgba(124,58,237,0.3); background: rgba(124,58,237,0.04); }
        .faqQuestion { width: 100%; background: none; border: none; color: var(--t1); font-family: var(--font); font-size: 15px; font-weight: 600; padding: 20px 24px; text-align: left; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 16px; transition: color 0.3s ease; }
        .faqQuestion:hover { color: var(--accent-lt); }
        .faqArrow { font-size: 18px; transition: transform 0.4s ease; flex-shrink: 0; color: var(--t3); }
        .faqItem.open .faqArrow { transform: rotate(180deg); color: var(--accent); }
        .faqAnswer { overflow: hidden; transition: max-height 0.4s ease; }
        .faqAnswerInner { padding: 0 24px 20px; font-size: 14px; color: var(--t2); line-height: 1.7; }

        .contactGrid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .contactCard { background: var(--glass); border: 1px solid var(--glass-b); border-radius: var(--r-lg); padding: 32px 24px; text-align: center; transition: 0.3s ease; }
        .contactCard:hover { border-color: var(--glass-bh); transform: translateY(-3px); box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
        .contactIcon { font-size: 32px; display: block; margin-bottom: 14px; }
        .contactTitle { font-size: 17px; font-weight: 600; margin-bottom: 8px; }
        .contactDetail { font-size: 14px; color: var(--t2); line-height: 1.6; margin-bottom: 20px; word-break: break-all; }
        .contactBtn { display: inline-flex; align-items: center; gap: 8px; background: var(--blue); color: white; padding: 12px 24px; border-radius: var(--r-md); font-size: 14px; font-weight: 600; text-decoration: none; border: none; cursor: pointer; transition: 0.3s ease; font-family: var(--font); }
        .contactBtn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(59,130,246,0.3); }
        .contactBtnGreen { background: var(--green); color: #000; }
        .contactBtnGreen:hover { box-shadow: 0 8px 25px rgba(0,230,118,0.3); }
        .contactBtnPurple { background: var(--purple); color: white; }
        .contactBtnPurple:hover { background: #7c3aed; box-shadow: 0 8px 25px var(--accent-glow); }

        .ctaSection { padding: 80px 24px 100px; position: relative; z-index: 1; }
        .ctaBox { max-width: 700px; margin: 0 auto; background: linear-gradient(135deg, rgba(124,58,237,0.15), rgba(99,102,241,0.08)); border: 1px solid rgba(124,58,237,0.2); border-radius: var(--r-xl); padding: 60px 40px; text-align: center; position: relative; overflow: hidden; }
        .ctaBox::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle at 50% 50%, rgba(124,58,237,0.08), transparent 50%); animation: ctaGlow 8s ease-in-out infinite; }
        .ctaTitle { font-size: clamp(24px, 4vw, 36px); font-weight: 700; margin-bottom: 16px; position: relative; }
        .ctaDesc { color: var(--t2); font-size: 16px; margin-bottom: 32px; line-height: 1.6; position: relative; }
        .ctaButton { display: inline-flex; align-items: center; gap: 10px; background: var(--green); color: #000; padding: 18px 40px; border-radius: var(--r-md); font-size: 17px; font-weight: 700; text-decoration: none; border: none; cursor: pointer; transition: 0.3s ease; font-family: var(--font); position: relative; }
        .ctaButton:hover { background: var(--green-dk); transform: translateY(-3px) scale(1.02); box-shadow: 0 12px 40px rgba(0,230,118,0.3); }

        .footer { position: relative; z-index: 1; border-top: 1px solid var(--glass-b); padding: 40px 24px; }
        .footerInner { max-width: 1100px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px; }
        .footerLeft { display: flex; flex-direction: column; gap: 4px; }
        .footerBrand { font-size: 14px; font-weight: 600; color: var(--t1); }
        .footerText { font-size: 13px; color: var(--t3); }
        .footerLinks { display: flex; gap: 16px; flex-wrap: wrap; justify-content: flex-end; }
        .footerLink { color: var(--t2); text-decoration: none; font-size: 12px; transition: 0.3s ease; white-space: nowrap; }
        .footerLink:hover { color: var(--accent-lt); }

        .floatingWhatsapp { position: fixed; bottom: 28px; right: 28px; z-index: 200; width: 60px; height: 60px; border-radius: 50%; background: #25d366; display: flex; align-items: center; justify-content: center; text-decoration: none; box-shadow: 0 4px 20px rgba(37,211,102,0.4); transition: 0.3s ease; animation: waFloat 3s ease-in-out infinite; }
        .floatingWhatsapp:hover { transform: scale(1.12); box-shadow: 0 6px 30px rgba(37,211,102,0.5); }
        .floatingWIcon { font-size: 30px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2)); }
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

        @media (max-width: 900px) {
          .testimonialsGrid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
          .statsGrid { grid-template-columns: repeat(2, 1fr); }
          .contactGrid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .section { padding: 60px 20px; }
          .navLinks { display: none; }
          .mobileMenuBtn { display: block; }
          .navLinks.mobileOpen { display: flex; flex-direction: column; position: absolute; top: 100%; left: 0; right: 0; background: rgba(5,5,16,0.95); backdrop-filter: blur(20px); border-bottom: 1px solid var(--glass-b); padding: 20px 24px; gap: 16px; }
          .hero { padding: 100px 20px 50px; }
          .heroLogo { width: 220px; margin-bottom: 24px; }
          .timeline { flex-direction: column; align-items: center; gap: 0; }
          .timelineLine { top: 0; bottom: 0; left: 50%; right: auto; width: 2px; height: 100%; transform: translateX(-50%); }
          .timelineStep { max-width: 300px; width: 100%; flex-direction: row; text-align: left; gap: 20px; padding: 20px 0; }
          .stepDot { margin-bottom: 0; flex-shrink: 0; }
          .stepNumber { top: -4px; right: -8px; }
          .servicesGrid { grid-template-columns: 1fr; }
          .galleryGrid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; }
          .galleryItem { aspect-ratio: 16/10; }
          .contactGrid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; }
          .ctaBox { padding: 40px 24px; }
          .footerInner { flex-direction: column; text-align: center; align-items: center; }
          .footerLinks { justify-content: center; }
          .floatingTooltip { display: none; }
        }
        @media (max-width: 480px) {
          .trustGrid { grid-template-columns: 1fr; max-width: 300px; margin: 0 auto; }
          .statsGrid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .heroCta, .ctaButton { width: 100%; justify-content: center; padding: 16px 24px; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
          [data-anim="up"], [data-anim="scale"] { opacity: 1; transform: none; }
          .blob { display: none; }
        }
      `}</style>
    </>
  );
}
