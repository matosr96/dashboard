import React from "react";

export default function LoginScreen() {
  return (
    <div className="login__container">
      <div className="login__card">
        <div className="login__card-header">
          <h2>LA CIABBATTA</h2>
        </div>
        <div className="login__card-body">

        <p>Ingresar al sistema</p>

        <form action="">
          <div className="form-group">
            <i class="bx bxs-user"></i>
            <input type="text" placeholder="ingrese usuario" />
          </div>
          <div className="form-group">
            <i class="bx bxs-lock-alt"></i>
            <input type="password" placeholder="Ingrese contrasena" />
          </div>
          <button className="login__button">Ingresar</button>
        </form>
        </div>
      </div>
    </div>
  );
}
