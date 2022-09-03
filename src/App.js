import './App.css';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/estilos.css';
import './components/CartWidget/cart.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './components/ItemListContainer/estilo.css'
import ItemCounter from './components/ItemCounter/ItemCounter';



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="header">
        <ItemListContainer greeting ='texto'/>
       <ItemCounter/>
      </header>
    </div>
  );
}

export default App;
