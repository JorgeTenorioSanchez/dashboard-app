// src/Dashboard.js
import React from "react";
<<<<<<< HEAD
import logo from "./assets/GT_1.png";
=======
import logo from "./assets/GT(Blanco).png";
>>>>>>> 5c95cb7 (Actualizacion proyecto 27/01/2026)

function Dashboard({ delegacion }) {
  const dashboards = {
    sevilla: "https://app.powerbi.com/view?r=tu_url_de_sevilla",
    madrid: "https://app.powerbi.com/view?r=tu_url_de_madrid",
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img src={logo} alt="Logo" className="dashboard-logo" />
        <h2>Dashboard Delegación {delegacion.charAt(0).toUpperCase() + delegacion.slice(1)}</h2>
      </header>

<<<<<<< HEAD
      <iframe
        src={dashboards[delegacion]}
        title={`Dashboard ${delegacion}`}
        frameBorder="0"
        allowFullScreen
        className="dashboard-frame"
      ></iframe>
=======
<iframe title="SQL_ATH_SERVICIOS" 
width="100%" 
height="100%" 
src="https://app.powerbi.com/view?r=eyJrIjoiMjFhZDMzNjAtNjE4ZS00NGY4LTliZTgtYzIzMWVjMmFhYzEyIiwidCI6IjdmNTI3ZDZhLWI5NGEtNDU3Mi04N2I0LTNjNjZmYjAwZjUxZSIsImMiOjh9" 
frameborder="0" 
allowFullScreen="true"></iframe>
>>>>>>> 5c95cb7 (Actualizacion proyecto 27/01/2026)
    </div>
  );
}

export default Dashboard;

