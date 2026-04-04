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
        fontFamily: "Montserrat, sans-serif"
      }}>

        {/* HERO COMPACTO */}
        <div style={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px"
        }}>

          {/* LOGO AJUSTADO */}
          <img src="/logo.png" style={{
            width: "420px",
            maxWidth: "90%",
            marginBottom: "20px",
            filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.8))"
          }} />

          {/* TEXTO */}
          <h1 style={{
            fontSize:"36px",
            fontWeight:"700",
            textAlign:"center",
            maxWidth:"900px"
          }}>
            Diagnóstico avanzado para fallas que otros talleres no pudieron resolver
          </h1>

          <p style={{
            color:"#cfd8dc",
            marginTop:"10px"
          }}>
            No cambiamos piezas. Encontramos la causa real.
          </p>

          <p style={{
            marginTop:"5px",
            color:"#ddd"
          }}>
            Diagnóstico desde $850 MXN · Atención con cita previa
          </p>

          {/* BOTÓN */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button style={{
              marginTop:"20px",
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

        </div>

        {/* PRUEBA SOCIAL */}
        <div style={{maxWidth:"700px", margin:"40px auto"}}>
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
        <div style={{marginTop:"50px", textAlign:"center"}}>
          <h3>Este servicio es para ti si:</h3>
          <ul style={{listStyle:"none", padding:0}}>
            <li>✔ Ya fuiste a otros talleres sin solución</li>
            <li>✔ Cambiaste piezas y sigue fallando</li>
            <li>✔ Buscas diagnóstico real</li>
          </ul>
        </div>

        {/* PROCESO */}
        <div style={{marginTop:"60px"}}>
          <h2 style={{textAlign:"center"}}>Nuestro proceso</h2>

          <div style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"center",
            gap:"20px",
            marginTop:"20px"
          }}>
            {[
              "Recepción técnica",
              "Escaneo de datos",
              "Pruebas físicas",
              "Diagnóstico real",
              "Propuesta solución"
            ].map((step, i) => (
              <div key={i} style={{
                background:"rgba(255,255,255,0.08)",
                padding:"20px",
                borderRadius:"12px",
                width:"200px"
              }}>
                <h3>Paso {i+1}</h3>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div style={{
          marginTop:"70px",
          padding:"30px",
          background:"rgba(0,0,0,0.4)",
          borderRadius:"14px",
          textAlign:"center"
        }}>
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

      </div>
    </>
  );
}
