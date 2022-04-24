import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Service from "./Pages/Home/Service/Service";

import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";
import NotFound from "./Shared/NotFound/NotFound";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Checkout from "./Pages/Checkout/Checkout";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="bg-dark">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/service/:serviceId"
          element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
