import './App.css';
import NavBar from './components/NavBar';
import HeroImage from './components/HeroImage';
import Logo from './components/Logo';
import Products from './components/products';

function App() {
  return (
    <div className="App">
        <Logo />
        <NavBar />
        <HeroImage />
        <Products />

    </div>
  );
}

export default App;
