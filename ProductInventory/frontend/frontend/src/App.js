import "./App.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import CategoryDetails from "./components/CategoryDetails";
import CategorySummary from "./components/CategorySummary";
import HistoryList from "./components/HistoryList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <HashRouter>
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
      </HashRouter>
    </div>
  );
}

export default App;
