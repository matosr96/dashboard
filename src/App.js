import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingBox from "./components/LoadingBox";
import CategoriesScreen from "./screens/CategoriesScreen";
import ClientsScreen from "./screens/ClientsScreen";
import ExpensesScreen from "./screens/ExpensesScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductsScreen from "./screens/ProductsScreen";
import SellsScreen from "./screens/SellsScreen";
import UsersScreen from "./screens/UsersScreen";

export default function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, error, userInfo } = userSignin;

  return (
    <BrowserRouter>
      <div className="App">
        {loading ? (
          <LoadingBox />
        ) : (
          <>
            {userInfo ? (
              <Layout>
                <Routes>
                  <Route path="/home" element={<HomeScreen />}></Route>
                  <Route path="/users" element={<UsersScreen />}></Route>
                  <Route
                    path="/categories"
                    element={<CategoriesScreen />}
                  ></Route>
                  <Route path="/products" element={<ProductsScreen />}></Route>
                  <Route path="/clients" element={<ClientsScreen />}></Route>
                  <Route path="/sells" element={<SellsScreen />}></Route>
                  <Route path="/expenses" element={<ExpensesScreen />}></Route>
                </Routes>
              </Layout>
            ) : (
              <Routes>
                <Route path="/" element={<LoginScreen />}></Route>
              </Routes>
            )}
          </>
        )}
      </div>
    </BrowserRouter>
  );
}
