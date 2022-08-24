import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import CategoryDetails from "./components/CategoryDetails";
import CategorySummary from "./components/CategorySummary";
import HistoryList from "./components/HistoryList";

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
          <Route path='summary/' element={<CategorySummary />} />
          <Route path='history/' element={<HistoryList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
