import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import BirthdayCakeBox from './BirthdayCakeBox';
import GladPask from './GladPask';

function NavBar () {
  return (
<ul className="nav justify-content-center">
    <BrowserRouter>
  <li className="nav-item">
    <Link to="/birthdaycakebox" className="nav-link active text-white">BIRTHDAY CAKE BOX</Link>
  </li>
  <li className="justify-content-end">
    <Link to="/gladpåsk" className="nav-link text-white">GLAD PÅSK</Link>
  </li>
  <Routes>
    <Route path="/birthdaycakebox" element={<BirthdayCakeBox />}> </Route>
    <Route path="/gladpask" element={<GladPask />}></Route>
  </Routes>
  </BrowserRouter>
</ul>
  );
};

export default NavBar;
