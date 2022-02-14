import './App.css';
import Header from './components/header/Header';
import WhatWeDo from './components/whatWeDo/WhatWeDo';
import AboutUs from './components/aboutUs/AboutUs';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import FindUs from './components/findUs/FindUs';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <WhatWeDo/>
      <AboutUs/>
      {/* <FindUs/> */}
      <Footer/>
    </div>
  );
}

export default App;
