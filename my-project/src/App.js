import './App.css';
import NavBar from './components/NavBar';
import HeroImage from './components/HeroImage';
import Logo from './components/Logo';
import Items from './components/Items';
// import GladPåsk from './components/GladPåsk'


function App() {
  return (
    <div className="App">
        <Logo />
        <NavBar />
        <HeroImage />
        <Items />
        {/* <GladPåsk/> */}


    </div>
  );
}

export default App;
