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

        {/* HERO AJUSTADO ARRIBA */}
        <div style={{
          minHeight: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start", // 👈 sube todo
          alignItems: "center",
          paddingTop: "30px", // 👈 controla espacio superior
          paddingBottom: "20px",
          textAlign: "center"
        }}>

          {/* LOGO GRANDE */}
          <img src="/logo.png" style={{
            width: "420px",
            maxWidth: "90%",
            marginBottom: "10px", // 👈 menos espacio abajo
            filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.8))"
          }} />

          {/* TEXTO MÁS ARRIBA */}
          <h1 style={{
            fontSize:"36px",
            fontWeight:"700",
            maxWidth:"900px",
            marginTop:"5px" // 👈 pegado al logo
          }}>
            Diagnóstico avanzado para fallas que otros talleres no pudieron resolver
          </h1>

          <p style={{
            color:"#cfd8dc",
            marginTop:"8px"
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
              marginTop:"18px",
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

          {/* DIRECCIÓN + MAPS */}
          <div style={{marginTop:"25px"}}>
            <p style={{color:"#ccc"}}>
              📍 Calle 20 #1113, Col. Buena Vista, Matamoros, Tamaulipas
            </p>

            <a 
              href="https://www.google.com/maps/search/?api=1&query=Calle+20+1113+Matamoros+Tamaulipas" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button style={{
                marginTop:"10px",
                padding:"10px 20px",
                background:"#2979ff",
                color:"white",
                border:"none",
                borderRadius:"6px",
                fontWeight:"600",
                cursor:"pointer"
              }}>
                Ver ubicación en Google Maps
              </button>
            </a>
          </div>

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

        {/* CTA FINAL */}
        <div style={{
          marginTop:"60px",
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
