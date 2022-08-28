import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddProductForm from "./components/AddProductForm";
import UpdateProductForm from "./components/UpdateProductForm";
import AllCategoryList from "./components/AllCategoryList";
import AllOrder from "./components/AllOrder";
import AddOrderForm from "./components/AddOrderForm";
import Navbar from "./components/Navbar";
import UploadFiles from "./components/UploadFiles";

function App() {
  return (
    <div className='App'>
      <div>
        <Navbar />
        <HashRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='upload/' element={<UploadFiles />} />
            <Route path='add-product/' element={<AddProductForm />} />
            <Route path='add-order/' element={<AddOrderForm />} />
            <Route path='order/' element={<AllOrder />} />
            <Route
              path='category-product/:categoryId/'
              element={<AllCategoryList />}
            />
            <Route
              path='update-product/:productId/'
              element={<UpdateProductForm />}
            />
          </Routes>
        </HashRouter>
      </div>
      <footer class=''>
        <div class=' p-4 bg-dark text-white'>
          <div class=' text-center'>
            <h4>
              Developed By
              <h2>Shahriar Ruposh</h2>
            </h4>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
