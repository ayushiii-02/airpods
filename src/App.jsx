import React from "react";
import AirpodsNavbar from "./components/AirpodsNavbar";
import Home from "./components/Home";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Vid from "./components/Vid";
import AirpodsShowcase from "./components/AirPodsShowcase";
import Headphones from "./components/Headphones";
import AirPodsComparison from "./components/AirpodsComparison";
import Album from "./components/Album";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <AirpodsNavbar />
      {/* Other components go here */}
      <Home />
      <Features />
      <HowItWorks />
      <Vid />
      <AirpodsShowcase />
      <Headphones />
      <AirPodsComparison />
      <Album />
      <Footer />
    </div>
  );
}

export default App;
