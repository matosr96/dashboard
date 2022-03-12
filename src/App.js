import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

export default function App() {

  const user = false;
  return (
    <BrowserRouter>
    <div className="App">
      {user? (

        <Layout>
        <Routes>
          <Route path='/home' element={<HomeScreen />}></Route>
        </Routes>
          
      </Layout>
      ) : (
        <Routes>
          
          <Route path='/' element={<LoginScreen />}></Route>
        </Routes>
      )}
    </div>
    </BrowserRouter>
  );
}
