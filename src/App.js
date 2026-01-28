// src/App.js
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Dashboard from "./Dashboard";
import "./App.css";
import logo from "./assets/GT(Blanco).png";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [delegacion, setDelegacion] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.delegacion === "sevilla" || data.delegacion === "madrid") {
          setDelegacion(data.delegacion);
        } else {
          setError("Delegación no reconocida");
        }
      } else {
        setError("Usuario no encontrado en la base de datos");
      }
    } catch {
      setError("Email o contraseña incorrectos");
    }
    setLoading(false);
  };

  if (loading) {
    return <div className="login-container"><p>Cargando...</p></div>;
  }

  if (delegacion) {
    return <Dashboard delegacion={delegacion} />;
  }

  return (
  <div className="login-page">
    <img src={logo} alt="Logo empresa" className="logo-top" />
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      <p className="footer-text">© 2025 Grupo Empresarial Tenorio</p>
    </div>
  </div>
  );
}

export default App;
