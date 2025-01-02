import './App.css';
import Navbar from './homepageComponents/Navbar'
// import Home from './components/Home'
import Banner from './homepageComponents/Banner';
import CategorySlider from './homepageComponents/Category';
import Collection from './homepageComponents/Collection';
import ProductCarousel from './homepageComponents/TopProduct';
import MemberAndStoreCredit from './homepageComponents/MemberAndStoreCredit';
import Footer from './homepageComponents/footer';

function App() {
  return (
    <div className="App">
      <div className="Content">
        <Navbar />
        <Banner />
        {/* <Home /> */}
        <CategorySlider />
        <Collection />
        <ProductCarousel />
        <MemberAndStoreCredit />
        <Footer />
      </div>
    </div>
  );
}

export default App;
