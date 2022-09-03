import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import NavBar  from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {


  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/categoria/:category" element={<ItemListContainer/>} />
        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <header className="App-header">
        
      </header> */}
      
      
    </div>
  );
}

export default App;
