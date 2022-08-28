import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import NavBar  from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {


  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/detalle" element={<ItemDetailContainer />} />
      </Routes>
      {/* <header className="App-header">
        
      </header> */}
      
      
    </div>
  );
}

export default App;
