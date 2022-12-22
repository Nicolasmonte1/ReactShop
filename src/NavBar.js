import './App.css';

export const NavBar = () => {
    return (
    <nav className="navbar">

       <a href="#" className="text-logo">MOOVE BANDS</a>
    
       <ul>
           <li>
               <a className="nodeco navlink" href="home.html">HOME</a>
           </li>
           <li>
               <a className="nodeco navlink" href="productos.html">PRODUCTOS</a>
           </li>
           <li>
               <a className="nodeco navlink" href="comprar.html">COMO COMPRAR</a>
           </li>
           <li>
               <a className="nodeco navlink" href="contacto.html">CONTACTO</a>
           </li>
       </ul>
       
    </nav>
    );
  }