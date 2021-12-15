import React, { Fragment } from "react";

import Navigation from "./Navigation";
import Header from "./Header";
import About from "./About";
import Team from "./Team";
import Services from "./Services";
import Footer from "./Footer";
import EmailOffCanvas from "./EmailOffCanvas";



import "./style.css";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Header />
      <About />
      <Team />
      <Services />  
      <Footer />   
      <EmailOffCanvas />
    </Fragment>
  );
}

export default App;
