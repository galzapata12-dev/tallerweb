import React from "react";

export default function Home() {
  const whatsappNumber = "528683905686";
  const message = "Hola, quiero agendar un diagnóstico para mi vehículo";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div style={{
      fontFamily: "Arial",
      background: "#0a0a0a",
      color: "white",
      minHeight: "100vh",
      textAlign: "center",
      padding: "20px"
    }}>

      {/* LOGO */}
      <img src="/logo.png" width="120" style={{marginBottom:"10px"}} />

      {/* TITULO */}
      <h1 style={{fontSize: "38px", letterSpacing: "2px"}}>
        BORDERLINE PERFORMANCE
      </h1>

      <p style={{color:"#aaa"}}>
        Diagnóstico avanzado • Ingeniería automotriz • Solución real
      </p>

      {/* MENSAJE PRINCIPAL */}
      <div style={{marginTop:"60px"}}>
        <h2 style={{fontSize:"26px"}}>
          No cambiamos piezas. Encontramos la causa real.
        </h2>

        <p style={{color:"#bbb", marginTop:"15px"}}>
          Diagnóstico real, no prueba y error.  
          Atendemos vehículos que otros talleres no pudieron resolver.
        </p>

        <p style={{color:"#888", fontSize:"14px", marginTop:"10px"}}>
          Experiencia de agencia • Procesos técnicos profesionales
        </p>

        {/* BOTÓN */}
        <a href={whatsappLink} target="_blank">
          <button style={{
            marginTop:"25px",
            padding:"15px 35px",
            background:"#00c853",
            color:"white",
            border:"none",
            fontSize:"16px",
            cursor:"pointer",
            borderRadius:"6px"
          }}>
            Agendar diagnóstico
          </button>
        </a>

        <p style={{color:"#aaa", marginTop:"10px"}}>
          Respuesta directa por WhatsApp
        </p>
      </div>

      {/* SERVICIOS */}
      <div style={{marginTop:"70px"}}>
        <h3>Servicios</h3>

        <p style={{color:"#bbb"}}>
          • Diagnóstico electrónico avanzado  
          • Fallas complejas motor y transmisión  
          • Diagnóstico para flotillas  
          • Mantenimiento basado en condición real  
        </p>
      </div>

      {/* IMÁGENES (SIN DISTORSIÓN) */}
      <div style={{
        display:"flex",
        justifyContent:"center",
        gap:"20px",
        marginTop:"40px",
        flexWrap:"wrap"
      }}>
        <img src="/motor.jpeg" style={{width:"300px", height:"auto", borderRadius:"8px"}} />
        <img src="/motorreparado.jpeg" style={{width:"300px", height:"auto", borderRadius:"8px"}} />
        <img src="/transmision.jpeg" style={{width:"300px", height:"auto", borderRadius:"8px"}} />
      </div>

      {/* UBICACIÓN */}
      <div style={{marginTop:"70px"}}>
        <h3>Ubicación</h3>

        <p style={{color:"#bbb"}}>
          Col. Buena Vista, Calle 20 #1113  
          Matamoros, Tamaulipas
        </p>

        <a 
          href="https://www.google.com/maps/search/?api=1&query=Matamoros+Tamaulipas+Buena+Vista+Calle+20+1113"
          target="_blank"
        >
          <button style={{
            marginTop:"10px",
            padding:"10px 25px",
            background:"#333",
            color:"white",
            border:"none",
            cursor:"pointer",
            borderRadius:"5px"
          }}>
            Ver en Google Maps
          </button>
        </a>
      </div>

      {/* FOOTER */}
      <div style={{marginTop:"60px", color:"#777", fontSize:"14px"}}>
        Atención por cita • Diagnóstico siempre se cobra
      </div>

    </div>
  );
}
