import React from "react";

export default function Home() {
  const whatsappNumber = "528683905686";
  const message = "Hola, mi vehículo tiene una falla y quiero diagnóstico";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div style={{fontFamily:"Arial", background:"#0f0f0f", color:"white"}}>
      <header style={{padding:"20px"}}>
        <h1>BORDERLINE PERFORMANCE</h1>
        <p>Diagnóstico avanzado · Solución de fallas complejas</p>
      </header>

      <section style={{padding:"40px", textAlign:"center"}}>
        <h2>No cambiamos piezas. Encontramos la causa real.</h2>

        <a href={whatsappLink} target="_blank">
          <button style={{padding:"15px", background:"#25D366", color:"white"}}>
            WhatsApp
          </button>
        </a>
      </section>

      <section style={{padding:"40px"}}>
        <img src="/motor-danado.jpg" style={{width:"100%"}} />
        <img src="/motor-armado.jpg" style={{width:"100%", marginTop:"20px"}} />
        <img src="/transmision.jpg" style={{width:"100%", marginTop:"20px"}} />
      </section>
    </div>
  );
}