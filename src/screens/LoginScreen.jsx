import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userActions";
import AlertBox from "../components/AlertBox";

export default function LoginScreen() {
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(username, password));
  }

  return (
    <div className="login__container">
      <div className="login__card">
        <div className="login__card-header">
          <h2>LA CIABBATTA</h2>
        </div>
        <div className="login__card-body">
          <p>Ingresar al sistema</p>

          {error&& <AlertBox message={error}/> }
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <i class="bx bxs-user"></i>
              <input type="text" placeholder="ingrese usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <i class="bx bxs-lock-alt"></i>
              <input type="password" placeholder="Ingrese contrasena" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="login__button">Ingresar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
