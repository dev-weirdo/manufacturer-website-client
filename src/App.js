import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Purchase from "./components/Order/Purchase";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/tools/:id" element={<Purchase></Purchase>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
