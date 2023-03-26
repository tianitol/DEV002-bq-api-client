import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Login from './vistas/Login';
import Home from './vistas/Home';
import Ordenes from './vistas/Ordenes';
import Cocina from './vistas/Cocina';
import NotFound from './vistas/NotFound';

function App() {
  const [user, setUser] = useState (null);

  useEffect(() => {
    //consultar en API o en  localStorage para setear mi user,
    //para que aunque se haga un refresh se setee que la usuaria está logueada


  }, []);

  if(!user){
    return (
      <Routes>
      <Route path="/" element={<Login setUser={setUser} />} />
      <Route path='login' element={<Login />} />
      <Route path='ordenes' element={<Login setUser={setUser} />} />
      <Route path='cocina' element={<Login setUser={setUser} />} />
      <Route path='*' element={<NotFound />} />
   </Routes>
    )
  }

  if(user.rol === 'mesero'){
    return (
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='ordenes' element={<Ordenes />} />
      <Route path='cocina' element={<Ordenes />} />
   </Routes>
    )
  }
  if(user.rol === 'cocina'){
    return (
      <Routes>
      <Route path="/" element={<Cocina />} />
      <Route path='login' element={<Login />} />
      <Route path='ordenes' element={<Cocina />} />
      <Route path='cocina' element={<Cocina />} />
   </Routes>
    )
  }


  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='ordenes' element={<Ordenes />} />
      <Route path='cocina' element={<Cocina />} />
   </Routes>
   
  );
}

export default App;
