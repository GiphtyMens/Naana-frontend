import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/index";
import Login from "./auth/user/Login";
import Register from "./auth/user/Register";
import ProtectRoute from "./routes/ProtectedRoutes";
import Dashboard from "./Admin";
import Account from "./Admin/Layout/Account";
import Appointment from "./Admin/Layout/Appointment";
import Default from "./Admin/Layout/Default";
import Services from "./Admin/Layout/Services";
import RegisterShop from "./auth/admin/Rgister";
import LoginShop from "./auth/admin/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/index";
import Contact from "./pages/contact";
import Shops from "./pages/Shop";
import AboutUs from "./pages/aboutUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectRoute />}></Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="auth/login-shop" element={<LoginShop />} />
          <Route path="auth/register-shop" element={<RegisterShop />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/about" element={<AboutUs />} />
          {/* dashboard */}
          <Route path="/d" element={<Dashboard />}>
            <Route path="account" element={<Account />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="default" element={<Default />} />
            <Route path="services" element={<Services />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
