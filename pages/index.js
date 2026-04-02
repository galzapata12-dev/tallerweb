import React from "react";

export default function Home() {
  const whatsappNumber = "528683905686";
  const message = "Hola, quiero agendar un diagnóstico para mi vehículo";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div style={{
      fontFamily: "Arial",
      background: "linear-gradient(135deg, #0a192f, #0d47a1, #1a237e)",
      color: "white",
      minHeight: "100vh",
      padding: "20px",
      textAlign: "center"
    }}>

      {/* LOGO */}
      <div style={{marginBottom:"20px"}}>
        <img src="/logo-white.png" style={{
          width:"260px",
          maxWidth:"90%",
          filter:"drop-shadow(0px 0px 10px rgba(255,255,255,0.2))"
        }} />
      </div>

      {/* SUBTEXTO */}
      <p style={{
        color:"#cfd8dc",
        fontSize:"15px"
      }}>
        Diagnóstico automotriz especializado y soluciones técnicas avanzadas
      </p>

      {/* MENSAJE PRINCIPAL */}
      <div style={{marginTop:"40px"}}>
        <h2 style={{
          fontSize:"28px",
          fontWeight:"bold"
        }}>
          Diagnóstico preciso para fallas que otros talleres no pudieron resolver
        </h2>

        <p style={{color:"#e0e0e0", marginTop:"15px"}}>
          Diagnóstico real, no prueba y error.  
          Identificamos la causa raíz antes de reemplazar cualquier componente.
        </p>

        {/* BOTÓN */}
        <a href={whatsappLink} target="_blank">
          <button style={{
            marginTop:"25px",
            padding:"15px 35px",
            background:"#00e676",
            color:"black",
            border:"none",
            fontSize:"16px",
            cursor:"pointer",
            borderRadius:"6px",
            boxShadow:"0 0 15px rgba(0,230,118,0.4)"
          }}>
            Agendar diagnóstico
          </button>
        </a>

        <p style={{color:"#aaa", marginTop:"10px"}}>
          Atención directa por WhatsApp
        </p>
      </div>

      {/* SERVICIOS */}
      <div style={{
        marginTop:"60px",
        textAlign:"left",
        maxWidth:"600px",
        marginLeft:"auto",
        marginRight:"auto",
        background:"rgba(255,255,255,0.05)",
        padding:"20px",
        borderRadius:"10px"
      }}>
        <h3 style={{textAlign:"center"}}>Servicios</h3>

        <p>✔ Diagnóstico computarizado avanzado</p>
        <p>✔ Ajuste y reparación de motores</p>
        <p>✔ Suspensión, dirección y sistema de frenos</p>
        <p>✔ Diagnóstico mecánico, eléctrico y electrónico</p>
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
          borderRadius:"10px"
        }} />

        <img src="/motorreparado.jpeg" style={{
          width:"300px",
          height:"200px",
          objectFit:"cover",
          borderRadius:"10px"
        }} />

        <img src="/transmision.jpeg" style={{
          width:"300px",
          height:"200px",
          objectFit:"cover",
          borderRadius:"10px"
        }} />
      </div>

      {/* UBICACIÓN */}
      <div style={{
        marginTop:"60px",
        background:"rgba(0,0,0,0.3)",
        padding:"20px",
        borderRadius:"10px"
      }}>
        <h3>Ubicación</h3>

        <p style={{color:"#ddd"}}>
          Calle 20 #1113, Col. Buena Vista  
          Matamoros, Tamaulipas
        </p>

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

      {/* FOOTER */}
      <div style={{marginTop:"50px", color:"#ccc"}}>
        Atención por cita • Diagnóstico profesional garantizado
      </div>

    </div>
  );
}
