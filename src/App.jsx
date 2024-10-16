import React from "react";
import Header from "./components/header/Header";
// import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <>
      <Header />
      {/* <Nav /> */}
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
