import './App.css';
import Navbar from './components/Navbar'
// import Home from './components/Home'
import Banner from './components/Banner';
import CategorySlider from './components/Category';
import Collection from './components/Collection';


function App() {
  return (
    <div className="App">
      <div className="Content">
        <Navbar />
        <Banner />
        {/* <Home /> */}
        <CategorySlider />
        <Collection />
      </div>
    </div>
  );
}

export default App;
