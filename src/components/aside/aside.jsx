import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Aside() {

    const [selectMenu, setSelectMenu] = useState('home')

  return (
    <aside>
      <div className="sidebar">
        <Link to="/home" onClick={() => setSelectMenu('home')}       className={selectMenu === "home"? "active" : ""} ><i className='bx bxs-home' ></i> Inicio</Link>
        <Link to="/users" onClick={() => setSelectMenu('users')}      className={selectMenu === "users"? "active" : ""} ><i className='bx bxs-user' ></i> Usuarios</Link>
        <Link to="/categories" onClick={() => setSelectMenu('categories')} className={selectMenu === "categories"? "active" : ""} ><i className='bx bxs-category' ></i> Categorias</Link>
        <Link to="/products" onClick={() => setSelectMenu('products')}   className={selectMenu === "products"? "active" : ""} ><i className='bx bxl-product-hunt' ></i> Productos</Link>
        <Link to="/clients" onClick={() => setSelectMenu('clients')}    className={selectMenu === "clients"? "active" : ""} ><i className='bx bxs-user-pin' ></i> Clientes</Link>
        <details>
          <summary><i className="bx bxs-pie-chart-alt-2"></i> Ventas</summary>
          <ul>
            <Link to="/sells">Administrar ventas</Link>
            <Link to="/">Crear venta</Link>
          </ul>
        </details>
        <span className="line"></span>
        <Link to="/" onClick={() => setSelectMenu('')}    className={selectMenu === ""? "active" : ""} ><i className='bx bxs-detail' ></i> Nomina</Link>
        <Link to="/expenses" onClick={() => setSelectMenu('expenses')}    className={selectMenu === "expenses"? "active" : ""} ><i className='bx bxs-file-export' ></i> Gastos</Link>
        <Link to="/reports" onClick={() => setSelectMenu('reports')}    className={selectMenu === "reports"? "active" : ""} ><i className="bx bxs-pie-chart-alt-2"></i> Reportes</Link>
      </div>
    </aside>
  );
}
