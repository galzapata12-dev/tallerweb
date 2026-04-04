import React from "react";
import Head from "next/head";

export default function Home() {
  const whatsappNumber = "528683905686";
  const message = "Hola, quiero agendar un diagnóstico profesional";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0a001a, #2a00ff, #6a00ff)",
        color: "white",
        textAlign: "center",
        padding: "50px 20px",
        fontFamily: "Montserrat, sans-serif"
      }}>

        {/* LOGO */}
        <div style={{ marginBottom: "35px" }}>
          <img src="/logo.png" style={{
            width: "480px",
            maxWidth: "90%",
            display: "block",
            margin: "0 auto",
            filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.8))"
          }} />
        </div>

        {/* HERO */}
        <h1 style={{fontSize:"38px", fontWeight:"700"}}>
          Diagnóstico avanzado para fallas que otros talleres no pudieron resolver
        </h1>

        <p style={{color:"#cfd8dc", marginTop:"10px"}}>
          No cambiamos piezas. Encontramos la causa real.
        </p>

        <p style={{marginTop:"10px", color:"#ddd"}}>
          Diagnóstico desde $850 MXN · Atención con cita previa
        </p>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <button style={{
            marginTop:"25px",
            padding:"15px 35px",
            background:"#00e676",
            color:"black",
            border:"none",
            borderRadius:"8px",
            fontWeight:"600",
            cursor:"pointer"
          }}>
            Solicitar diagnóstico por WhatsApp
          </button>
        </a>

        {/* PRUEBA SOCIAL */}
        <div style={{marginTop:"60px", maxWidth:"700px", margin:"auto"}}>
          <h3>Clientes que ya resolvieron su problema</h3>

          <div style={{background:"rgba(255,255,255,0.08)", padding:"20px", borderRadius:"12px", marginTop:"15px"}}>
            <p>"Ya había ido a 3 talleres y nadie encontraba la falla. Aquí detectaron el problema real."</p>
            <p style={{color:"#aaa"}}>— Cliente Camry 2019</p>
          </div>

          <div style={{background:"rgba(255,255,255,0.08)", padding:"20px", borderRadius:"12px", marginTop:"15px"}}>
            <p>"Evitaron cambiar la transmisión completa. Diagnóstico preciso."</p>
            <p style={{color:"#aaa"}}>— Cliente Ford Escape</p>
          </div>
        </div>

        {/* FILTRO */}
        <div style={{marginTop:"60px"}}>
          <h3>Este servicio es para ti si:</h3>
          <ul style={{listStyle:"none", padding:0}}>
            <li>✔ Ya fuiste a otros talleres sin solución</li>
            <li>✔ Cambiaste piezas y sigue fallando</li>
            <li>✔ Buscas diagnóstico real</li>
          </ul>
        </div>

        {/* PROCESO */}
        <div style={{marginTop:"70px"}}>
          <h2>Nuestro proceso</h2>

          <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"20px"}}>
            {[
              "Recepción técnica",
              "Escaneo de datos",
              "Pruebas físicas",
              "Diagnóstico real",
              "Propuesta solución"
            ].map((step, i) => (
              <div key={i} style={{background:"rgba(255,255,255,0.08)", padding:"20px", borderRadius:"12px", width:"200px"}}>
                <h3>Paso {i+1}</h3>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICIOS */}
        <div style={{marginTop:"60px", background:"rgba(255,255,255,0.08)", padding:"25px", borderRadius:"12px", maxWidth:"600px", margin:"60px auto"}}>
          <h3>Servicios</h3>
          <p>✔ Diagnóstico avanzado</p>
          <p>✔ Diagnóstico eléctrico</p>
          <p>✔ Reparación de motor</p>
          <p>✔ Suspensión y frenos</p>
        </div>

        {/* IMÁGENES */}
        <div style={{display:"flex", gap:"20px", justifyContent:"center", flexWrap:"wrap"}}>
          <img src="/motor.jpeg" style={{width:"300px", borderRadius:"12px"}} />
          <img src="/motorreparado.jpeg" style={{width:"300px", borderRadius:"12px"}} />
          <img src="/transmision.jpeg" style={{width:"300px", borderRadius:"12px"}} />
        </div>

        {/* OBJECIONES */}
        <div style={{marginTop:"60px", maxWidth:"700px", margin:"60px auto"}}>
          <h3>Preguntas frecuentes</h3>

          <p><strong>¿Por qué se cobra diagnóstico?</strong><br/>
          Porque es un proceso técnico especializado.</p>

          <p><strong>¿Incluye reparación?</strong><br/>
          No. Se diagnostica primero para evitar gastos innecesarios.</p>

          <p><strong>¿Y si ya cambié piezas?</strong><br/>
          Es justo donde intervenimos mejor.</p>
        </div>

        {/* CTA FINAL */}
        <div style={{marginTop:"70px", padding:"30px", background:"rgba(0,0,0,0.4)", borderRadius:"14px"}}>
          <h2>Deja de gastar en pruebas innecesarias</h2>
          <p>Agenda un diagnóstico real y encuentra la causa exacta</p>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button style={{
              marginTop:"20px",
              padding:"15px 35px",
              background:"#00e676",
              color:"black",
              border:"none",
              borderRadius:"8px",
              fontWeight:"600"
            }}>
              Agendar diagnóstico ahora
            </button>
          </a>
        </div>

        {/* UBICACIÓN */}
        <div style={{marginTop:"60px"}}>
          <h3>Ubicación</h3>
          <p>Matamoros, Tamaulipas</p>
          <p>Col. Buena Vista</p>
        </div>

        {/* CIERRE */}
        <div style={{marginTop:"40px"}}>
          <p>Atención únicamente con cita</p>
        </div>

      </div>
    </>
  );
}
