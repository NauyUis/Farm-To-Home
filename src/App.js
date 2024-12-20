import './App.css';
import Navbar from './components/Navbar'
// import Home from './components/Home'
import Banner from './components/Banner';


function App() {
  return (
    <div className="App">
      <div className="Content">
        <Navbar />
        <Banner />
        {/* <Home /> */}
      </div>
    </div>
  );
}

export default App;
