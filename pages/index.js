import React from "react";

export default function Home() {
  const whatsappNumber = "528683905686";
  const message = "Hola, quiero agendar un diagnóstico profesional";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
<div style={{
  padding: "20px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(12px)",
  display: "inline-block",
  marginBottom: "25px"
}}>
  <img src="/logo.png" style={{
    width: "160px",
    display: "block",
    filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.6))"
  }} />
</div>
      }} />

      {/* HERO */}
      <h1 style={{fontSize:"32px"}}>
        Diagnóstico automotriz especializado
      </h1>

      <p style={{color:"#cfd8dc"}}>
        No cambiamos piezas. Encontramos la causa real.
      </p>

      <a href={whatsappLink} target="_blank">
        <button style={{
          marginTop:"25px",
          padding:"15px 35px",
          background:"#00e676",
          color:"black",
          border:"none",
          borderRadius:"6px",
          boxShadow:"0 0 15px rgba(0,230,118,0.4)"
        }}>
          Agendar diagnóstico
        </button>
      </a>

      {/* PROCESO (CLAVE ESTILO TOYOTA) */}
      <div style={{marginTop:"70px"}}>
        <h2>Nuestro proceso</h2>

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
              borderRadius:"10px",
              width:"220px"
            }}>
              <h3>Paso {i+1}</h3>
              <p style={{fontSize:"14px"}}>{step}</p>
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
        padding:"20px",
        borderRadius:"10px",
        textAlign:"left"
      }}>
        <h3 style={{textAlign:"center"}}>Servicios</h3>

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
        <img src="/motor.jpeg" style={{width:"300px", height:"200px", objectFit:"cover", borderRadius:"10px"}} />
        <img src="/motorreparado.jpeg" style={{width:"300px", height:"200px", objectFit:"cover", borderRadius:"10px"}} />
        <img src="/transmision.jpeg" style={{width:"300px", height:"200px", objectFit:"cover", borderRadius:"10px"}} />
      </div>

      {/* DIFERENCIAL */}
      <div style={{
        marginTop:"60px",
        background:"rgba(0,0,0,0.3)",
        padding:"25px",
        borderRadius:"10px"
      }}>
        <h2>¿Por qué elegirnos?</h2>

        <p>✔ No trabajamos por prueba y error</p>
        <p>✔ Diagnóstico basado en datos reales</p>
        <p>✔ Experiencia en fallas complejas</p>
        <p>✔ Evitamos gastos innecesarios</p>
      </div>

      {/* UBICACIÓN */}
      <div style={{
        marginTop:"60px",
        background:"rgba(255,255,255,0.05)",
        padding:"20px",
        borderRadius:"10px"
      }}>
        <h3>Ubicación</h3>

        <p>Calle 20 #1113, Col. Buena Vista</p>
        <p>Matamoros, Tamaulipas</p>

        <a href="https://www.google.com/maps/search/?api=1&query=Matamoros+Tamaulipas+Buena+Vista+Calle+20+1113" target="_blank">
          <button style={{
            marginTop:"10px",
            padding:"10px 20px",
            background:"#1565c0",
            color:"white",
            border:"none",
            borderRadius:"5px"
          }}>
            Ver en Google Maps
          </button>
        </a>
      </div>

      {/* CIERRE */}
      <div style={{marginTop:"50px"}}>
        <h3>Atención únicamente con cita</h3>
        <p style={{color:"#ccc"}}>Diagnóstico profesional garantizado</p>
      </div>

    </div>
  );
}
