import logo from '../img/logo-rectangular.jpg'



const NavBar = () => {
    return (
        <div className="navBar-container">
            <div>
                <img src={logo} className="App1-logo" alt="logo" />
            </div>
            <div className='navBar'>
                <li><a href="">Inicio</a></li>
                <li><a href="">Menú</a></li>
                <li><a href="">Nosotros</a></li>
                <li><a href="">Registro</a></li>
            </div>
                       
        </div>
    ) ; 
};

export default NavBar;