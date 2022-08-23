import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import CategoryDetails from "./components/CategoryDetails";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='category/:categoryId/' element={<CategoryDetails />} />
          <Route
            path='category/:categoryId/products/:id/'
            element={<ProductDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
