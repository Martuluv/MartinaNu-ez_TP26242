import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await register(formData.email, formData.password);
      navigate("/admin", { replace: true });
    } catch (error) {
      console.error(error);
      setError("No se pudo registrar. Revisá el correo y la contraseña.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Crear cuenta de administrador</h2>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          minLength="6"
          required
        />
      </div>

      {error && <p className="error">{error}</p>}

      <button className="btn bg-primary" type="submit">
        Registrarme
      </button>

      <p>
        ¿Ya tenés cuenta? <Link to="/admin/login">Iniciar sesión</Link>
      </p>
    </form>
  );
};
