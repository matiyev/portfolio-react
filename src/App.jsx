import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Experience />
      {/* <Portfolio /> */}
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;