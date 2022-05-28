import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Purchase from "./components/Order/Purchase";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "./components/Register";
import Login from "./components/Login";
import Blog from "./components/Blog";
import Dashboard from "./components/Dashboard/Dashboard";
import MyProfile from "./components/Dashboard/MyProfile";
import MyOrders from "./components/Dashboard/MyOrders";
import AddReview from "./components/Dashboard/AddReview";
import Notfound from "./components/Notfound";
import Users from "./components/Dashboard/Users";
import RequireAuth from "./components/RequireAuth";
import RequireAdmin from "./components/RequireAdmin";
import Payment from "./components/Dashboard/Payment";
import AddAProduct from "./components/Dashboard/AddAProduct";
import ManageAllOrders from "./components/Dashboard/ManageAllOrders";
import ManageProducts from "./components/Dashboard/ManageProducts";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/tools/:id" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="users" element={<RequireAdmin>
            <Users></Users>
          </RequireAdmin>}></Route>
          <Route path="addaproduct" element={<RequireAdmin>
            <AddAProduct></AddAProduct>
          </RequireAdmin>}></Route>
          <Route path="manageallorders" element={<RequireAdmin>
            <ManageAllOrders></ManageAllOrders>
          </RequireAdmin>}></Route>
          <Route path="manageproducts" element={<RequireAdmin>
            <ManageProducts></ManageProducts>
          </RequireAdmin>}></Route>
        </Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
