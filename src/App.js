import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/estilos.css';
import './components/CartWidget/cart.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './components/ItemListContainer/estilo.css'


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="header">
        <ItemListContainer greeting={'Bienvenidos, qué vas a merendar hoy?'} />
      </header>
    </div>
  );
}

export default App;
