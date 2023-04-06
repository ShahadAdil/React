import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Route,Routes} from 'react-router-dom';
import Menu from './Menu';
import Home from './Home'
import About from './About';

function NavBar () {
  return (<>
<ul className="nav justify-content-center">
    <li className="nav-item">
    <Link to="/home" className="nav-link active text-white">Home</Link>
  </li>
  <li className="nav-item">
    <Link to="/menu" className="nav-link active text-white">Menu</Link>
  </li>
  <li className="justify-content-end">
    <Link to="/about" className="nav-link text-white">About</Link>
  </li>
  {/* <li className="justify-content-end">
    <Link to="/gladpask" className="nav-link text-white">GLAD PÅSK</Link>
  </li> */}
</ul>
 <Routes>
 <Route path="/menu" element={<Menu />}> </Route>
 {/* <Route path="/gladpask" element={<GladPask />}></Route> */}
 <Route path="/home" element={<Home />}></Route>
 <Route path="/about" element={<About />}></Route>
</Routes>
</>
  );

};

export default NavBar;
