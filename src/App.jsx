import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import './store/store'
import ReduxTodo from "./components/ReduxTodo";
import Navbar from "./components/Navbar";
import CartPage from "./components/CartPage";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ReduxTodo />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
