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

        {/* HERO MÁS CARGADO (SIN ESPACIO MUERTO) */}
        <div style={{
          padding: "30px 20px",
          textAlign: "center"
        }}>

          <img src="/logo.png" style={{
            width: "380px",
            maxWidth: "90%",
            marginBottom: "10px",
            filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.8))"
          }} />

          <h1 style={{fontSize:"34px", fontWeight:"700"}}>
            Diagnóstico avanzado para fallas que otros talleres no pudieron resolver
          </h1>

          <p style={{color:"#cfd8dc"}}>
            No cambiamos piezas. Encontramos la causa real.
          </p>

          <p style={{color:"#ddd"}}>
            Diagnóstico desde $850 MXN · Atención con cita previa
          </p>

          <a href={whatsappLink} target="_blank">
            <button style={{
              marginTop:"15px",
              padding:"15px 30px",
              background:"#00e676",
              color:"black",
              border:"none",
              borderRadius:"8px",
              fontWeight:"600"
            }}>
              Solicitar diagnóstico
            </button>
          </a>

          {/* FILTRO INMEDIATO (ARRIBA) */}
          <div style={{marginTop:"20px"}}>
            <p>✔ Ya fuiste a otros talleres sin solución</p>
            <p>✔ Cambiaste piezas y sigue fallando</p>
            <p>✔ Buscas diagnóstico real</p>
          </div>

          {/* DIRECCIÓN */}
          <div style={{marginTop:"20px"}}>
            <p style={{color:"#ccc"}}>
              📍 Calle 20 #1113, Col. Buena Vista, Matamoros
            </p>

            <a 
              href="https://www.google.com/maps/search/?api=1&query=Calle+20+1113+Matamoros+Tamaulipas"
              target="_blank"
            >
              <button style={{
                marginTop:"8px",
                padding:"10px 20px",
                background:"#2979ff",
                color:"white",
                border:"none",
                borderRadius:"6px"
              }}>
                Ver ubicación
              </button>
            </a>
          </div>

        </div>

        {/* PROCESO */}
        <div style={{marginTop:"40px", textAlign:"center"}}>
          <h2>Nuestro proceso</h2>

          <div style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"center",
            gap:"15px",
            marginTop:"20px"
          }}>
            {[
              "Recepción técnica",
              "Escaneo de datos",
              "Pruebas físicas",
              "Diagnóstico real",
              "Solución"
            ].map((step, i) => (
              <div key={i} style={{
                background:"rgba(255,255,255,0.08)",
                padding:"15px",
                borderRadius:"10px",
                width:"180px"
              }}>
                <h4>Paso {i+1}</h4>
                <p style={{fontSize:"13px"}}>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICIOS */}
        <div style={{
          marginTop:"40px",
          background:"rgba(255,255,255,0.08)",
          padding:"20px",
          borderRadius:"10px",
          maxWidth:"600px",
          margin:"40px auto"
        }}>
          <h3>Servicios</h3>
          <p>✔ Diagnóstico computarizado avanzado</p>
          <p>✔ Diagnóstico eléctrico y electrónico</p>
          <p>✔ Reparación de motor</p>
          <p>✔ Suspensión y frenos</p>
        </div>

        {/* IMÁGENES */}
        <div style={{
          display:"flex",
          gap:"15px",
          justifyContent:"center",
          flexWrap:"wrap"
        }}>
          <img src="/motor.jpeg" style={{width:"280px", borderRadius:"10px"}} />
          <img src="/motorreparado.jpeg" style={{width:"280px", borderRadius:"10px"}} />
          <img src="/transmision.jpeg" style={{width:"280px", borderRadius:"10px"}} />
        </div>

        {/* PRUEBA SOCIAL */}
        <div style={{maxWidth:"700px", margin:"40px auto"}}>
          <h3>Clientes reales</h3>

          <div style={{background:"rgba(255,255,255,0.08)", padding:"15px", borderRadius:"10px", marginTop:"10px"}}>
            <p>"Nadie encontraba la falla, aquí sí."</p>
          </div>

          <div style={{background:"rgba(255,255,255,0.08)", padding:"15px", borderRadius:"10px", marginTop:"10px"}}>
            <p>"Me evitaron gastar miles en piezas innecesarias."</p>
          </div>
        </div>

        {/* FAQ */}
        <div style={{maxWidth:"700px", margin:"40px auto"}}>
          <h3>Preguntas frecuentes</h3>

          <p><strong>¿Por qué se cobra diagnóstico?</strong><br/>
          Porque es análisis técnico real.</p>

          <p><strong>¿Incluye reparación?</strong><br/>
          No, primero se detecta la causa.</p>
        </div>

        {/* CTA FINAL */}
        <div style={{
          marginTop:"50px",
          padding:"25px",
          background:"rgba(0,0,0,0.4)",
          borderRadius:"10px",
          textAlign:"center"
        }}>
          <h2>Deja de gastar en pruebas</h2>
          <a href={whatsappLink} target="_blank">
            <button style={{
              marginTop:"15px",
              padding:"15px 30px",
              background:"#00e676",
              color:"black",
              border:"none",
              borderRadius:"8px"
            }}>
              Agendar diagnóstico
            </button>
          </a>
        </div>

      </div>
    </>
  );
}
