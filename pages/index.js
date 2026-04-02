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
      padding: "40px"
    }}>

      {/* HEADER */}
      <h1 style={{fontSize: "42px", letterSpacing: "2px"}}>
        BORDERLINE PERFORMANCE
      </h1>

      <p style={{color:"#aaa", marginTop:"10px"}}>
        Diagnóstico avanzado • Ingeniería automotriz • Solución real
      </p>

      {/* MENSAJE PRINCIPAL */}
      <div style={{marginTop:"80px"}}>
        <h2 style={{fontSize:"28px"}}>
          No cambiamos piezas. Encontramos la causa real.
        </h2>

        <p style={{color:"#bbb", marginTop:"15px"}}>
          Especialistas en fallas complejas. Diagnóstico profesional con enfoque técnico.
        </p>

        {/* BOTÓN */}
        <a href={whatsappLink} target="_blank">
          <button style={{
            marginTop:"30px",
            padding:"15px 35px",
            background:"#00c853",
            color:"white",
            border:"none",
            fontSize:"16px",
            cursor:"pointer",
            borderRadius:"5px"
          }}>
            Agendar diagnóstico
          </button>
        </a>
      </div>

      {/* IMÁGENES */}
      <div style={{
        display:"flex",
        justifyContent:"center",
        gap:"20px",
        marginTop:"60px",
        flexWrap:"wrap"
      }}>
        <img src="/motor.jpeg" width="260" style={{borderRadius:"8px"}} />
        <img src="/motorreparado.jpeg" width="260" style={{borderRadius:"8px"}} />
        <img src="/transmision.jpeg" width="260" style={{borderRadius:"8px"}} />
      </div>

      {/* FOOTER */}
      <div style={{marginTop:"80px", color:"#777", fontSize:"14px"}}>
        Matamoros, Tamaulipas • Atención por cita
      </div>

    </div>
  );
}
