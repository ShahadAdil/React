import './App.css';
import NavBar from './components/NavBar';
import HeroImage from './components/HeroImage';
import Logo from './components/Logo';
import Items from './components/Items';

function App() {
  return (
    <div className="App">
        <Logo />
        <NavBar />
        <HeroImage />
        <Items />

    </div>
  );
}

export default App;
