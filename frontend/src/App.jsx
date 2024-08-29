import React,{useEffect} from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Home from "./components/layouts/Home";
import Footer from "./components/layouts/Footer";
import Menu from "./components/layouts/Menu";
import Cart from "./components/cart/Cart";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../src/components/users/Login'
import Register from '../src/components/users/Register'
import store from './store'
import { loadUser } from "./actions/userAction";

export default function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  },[])
  return (
    <BrowserRouter>
      <div className="App">

        <Header />

        <div className="container container-fluid">
          <Routes>

            <Route path="/" element={<Home />}/>
            <Route path="/eats/stores/:id/menus" element={<Menu/>}/>
            <Route path="/users/signup" element={<Register/>} />
            <Route path="/users/login" element={<Login/>} />
            
            

          </Routes>
        </div>

        <Footer />

      </div>
    </BrowserRouter>


  );
}
