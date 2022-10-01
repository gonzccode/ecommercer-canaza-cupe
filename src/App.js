import './App.css';
import { Routes, Route} from "react-router-dom";
import NavBar  from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter } from "react-router-dom";
import {CartProvider} from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/categoria/:category" element={<ItemListContainer/>} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
