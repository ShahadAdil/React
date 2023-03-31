import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar () {
  return (
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="justify-content-end">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>
  );
};

export default NavBar;
