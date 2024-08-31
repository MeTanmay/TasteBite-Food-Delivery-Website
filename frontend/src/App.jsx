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
import Profile from "./components/users/Profile"
import UpdateProfile from "./components/users/UpdateProfile"
import ForgotPassword from '../src/components/users/ForgotPassword'
import NewPassword from '../src/components/users/NewPassword'
import OrderSuccess from './components/cart/OrderSuccess'
import ListOrders from './components/order/ListOrders'
import OrderDetails from './components/order/OrderDetails'

export default function App() {
  // dipatched exactly once when the component is first rendered , and check if user is authenticated or not
  // console.log(store);

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
            <Route path="/users/me" element={<Profile/>} />
            <Route path="/users/me/update" element={<UpdateProfile/>} />
            <Route path="/users/forgotPassword" element={<ForgotPassword/>} />
            <Route path="/users/resetPassword/:token" element={<NewPassword/>} />
            <Route path="/cart" element={<Cart/>} />

            <Route path="/success" element={<OrderSuccess/>} />
            <Route path="/eats/orders/me/myOrders" element={<ListOrders/>} />
            <Route path="/eats/orders/:id" element={<OrderDetails/>} />
            <Route path="*" element={<h1>The Page does not exist</h1>} />

          </Routes>
        </div>

        <Footer />

      </div>
    </BrowserRouter>


  );
}
