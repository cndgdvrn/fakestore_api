import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductDetails from "./components/home/ProductDetails";
import CartItems from "./components/home/CartItems";

function App() {

// const fetching =  async () => {
//   const response = await axios.get('https://fakestoreapi.com/products/category/jewelery')
//   console.log(response.data);
// }

// fetching()

  return (
    <>
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails/>}/>
            <Route path="/cart" element={<CartItems/>} />
          </Routes>
        </Router>
      </PageContainer>
    </>
  );
}

export default App;
