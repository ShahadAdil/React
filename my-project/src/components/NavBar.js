import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Route,Routes} from 'react-router-dom';
import Menu from './Menu';
import GladPask from './Product';
import Home from './Home'

function NavBar () {
  return (<>
<ul className="nav justify-content-center">
    <li className="nav-item">
    <Link to="/home" className="nav-link active text-white">Home</Link>
  </li>
  <li className="nav-item">
    <Link to="/menu" className="nav-link active text-white">MENU</Link>
  </li>
  {/* <li className="justify-content-end">
    <Link to="/gladpask" className="nav-link text-white">GLAD PÅSK</Link>
  </li> */}
</ul>
 <Routes>
 <Route path="/menu" element={<Menu />}> </Route>
 {/* <Route path="/gladpask" element={<GladPask />}></Route> */}
 <Route path="/home" element={<Home />}></Route>
</Routes>
</>
  );

};

export default NavBar;
