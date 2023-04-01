import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar () {
  return (
<ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">BIRTHDAY CAKE BOX</a>
  </li>
  <li className="justify-content-end">
    <a className="nav-link" href="#">GLAD PÅSK</a>
  </li>
</ul>
  );
};

export default NavBar;
