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
        background: "linear-gradient(180deg, #1a0033, #4a00e0)",
        color: "white",
        textAlign: "center",
        padding: "50px 20px",
        fontFamily: "Montserrat, sans-serif"
      }}>

        {/* LOGO LIMPIO */}
        <div style={{ marginBottom: "30px" }}>
          <img src="/logo.png" style={{
            width: "240px",
            display: "block",
            margin: "0 auto",
            filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.7))"
          }} />
        </div>

        {/* HERO */}
        <h1 style={{
          fontSize:"36px",
          fontWeight:"700",
          letterSpacing:"-0.5px"
        }}>
          Diagnóstico avanzado para fallas que otros talleres no pudieron resolver
        </h1>

        <p style={{
          color:"#cfd8dc",
          marginTop:"10px",
          fontWeight:"300"
        }}>
          No cambiamos piezas. Encontramos la causa real.
        </p>

        <p style={{
          marginTop:"10px",
          color:"#aaa",
          fontWeight:"400"
        }}>
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
            boxShadow:"0 0 15px rgba(0,230,118,0.4)",
            cursor:"pointer",
            fontWeight:"600"
          }}>
            Solicitar diagnóstico por WhatsApp
          </button>
        </a>

        {/* FILTRO */}
        <div style={{marginTop:"60px"}}>
          <h3 style={{fontWeight:"600"}}>Este servicio es para ti si:</h3>
          <ul style={{listStyle:"none", padding:0, color:"#ccc", fontWeight:"300"}}>
            <li>✔ Tu vehículo ya fue revisado sin solución</li>
            <li>✔ Ya cambiaste piezas y sigue fallando</li>
            <li>✔ Buscas diagnóstico real, no aproximaciones</li>
          </ul>
        </div>

        {/* PROCESO */}
        <div style={{marginTop:"70px"}}>
          <h2 style={{fontWeight:"600"}}>Nuestro proceso</h2>

          <div style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"center",
            gap:"20px",
            marginTop:"20px"
          }}>
            {[
              "Recepción y entrevista técnica",
              "Escaneo y análisis de datos",
              "Pruebas físicas y validación",
              "Diagnóstico raíz comprobado",
              "Propuesta de solución"
            ].map((step, i) => (
              <div key={i} style={{
                background:"rgba(255,255,255,0.05)",
                padding:"20px",
                borderRadius:"12px",
                width:"220px"
              }}>
                <h3 style={{fontWeight:"600"}}>Paso {i+1}</h3>
                <p style={{fontSize:"14px", fontWeight:"300"}}>{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICIOS */}
        <div style={{
          marginTop:"60px",
          maxWidth:"600px",
          marginLeft:"auto",
          marginRight:"auto",
          background:"rgba(255,255,255,0.05)",
          padding:"25px",
          borderRadius:"12px",
          textAlign:"left"
        }}>
          <h3 style={{textAlign:"center", fontWeight:"600"}}>Servicios</h3>

          <p>✔ Diagnóstico computarizado avanzado</p>
          <p>✔ Diagnóstico eléctrico y electrónico</p>
          <p>✔ Ajuste y reparación de motores</p>
          <p>✔ Suspensión, dirección y frenos</p>
        </div>

        {/* IMÁGENES */}
        <div style={{
          display:"flex",
          justifyContent:"center",
          gap:"20px",
          marginTop:"40px",
          flexWrap:"wrap"
        }}>
          <img src="/motor.jpeg" style={{
            width:"300px",
            height:"200px",
            objectFit:"cover",
            borderRadius:"12px"
          }} />

          <img src="/motorreparado.jpeg" style={{
            width:"300px",
            height:"200px",
            objectFit:"cover",
            borderRadius:"12px"
          }} />

          <img src="/transmision.jpeg" style={{
            width:"300px",
            height:"200px",
            objectFit:"cover",
            borderRadius:"12px"
          }} />
        </div>

        {/* AUTORIDAD */}
        <div style={{
          marginTop:"60px",
          background:"rgba(0,0,0,0.3)",
          padding:"30px",
          borderRadius:"12px"
        }}>
          <h2 style={{fontWeight:"600"}}>¿Por qué elegirnos?</h2>

          <p>✔ No trabajamos por prueba y error</p>
          <p>✔ Diagnóstico basado en datos reales</p>
          <p>✔ Experiencia en fallas complejas</p>
          <p>✔ Evitamos gastos innecesarios</p>
        </div>

        {/* UBICACIÓN */}
        <div style={{
          marginTop:"60px",
          background:"rgba(255,255,255,0.05)",
          padding:"25px",
          borderRadius:"12px"
        }}>
          <h3 style={{fontWeight:"600"}}>Ubicación</h3>

          <p>Calle 20 #1113, Col. Buena Vista</p>
          <p>Matamoros, Tamaulipas</p>

          <a 
            href="https://www.google.com/maps/search/?api=1&query=Matamoros+Tamaulipas+Buena+Vista+Calle+20+1113" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button style={{
              marginTop:"10px",
              padding:"10px 20px",
              background:"#1565c0",
              color:"white",
              border:"none",
              borderRadius:"6px",
              cursor:"pointer",
              fontWeight:"600"
            }}>
              Ver en Google Maps
            </button>
          </a>
        </div>

        {/* CIERRE */}
        <div style={{marginTop:"50px"}}>
          <h3 style={{fontWeight:"600"}}>Atención únicamente con cita</h3>
          <p style={{color:"#ccc", fontWeight:"300"}}>Diagnóstico profesional garantizado</p>
        </div>

      </div>
    </>
  );
}
