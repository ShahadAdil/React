import './App.css';
import NavBar from './components/NavBar';
import HeroImage from './components/HeroImage';
import Logo from './components/Logo';
import Items from './components/Items';
// import GladPåsk from './components/GladPåsk'
// import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Logo />
          {/* <BrowserRouter> */}
        <NavBar />
          {/* </BrowserRouter> */}
        <HeroImage />
        <Items />
        {/* <GladPåsk/> */}


    </div>
  );
}

export default App;
