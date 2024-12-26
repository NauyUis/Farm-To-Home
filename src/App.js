import './App.css';
import Navbar from './components/Navbar'
// import Home from './components/Home'
import Banner from './components/Banner';
import CategorySlider from './components/Category';


function App() {
  return (
    <div className="App">
      <div className="Content">
        <Navbar />
        <Banner />
        {/* <Home /> */}
        <CategorySlider />
      </div>
    </div>
  );
}

export default App;
