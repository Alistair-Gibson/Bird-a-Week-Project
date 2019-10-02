import React, { Component } from "react";
import NavBar from "./components/navbar";
import Contact from "./components/contact";
import About from "./components/about";
import CardList from "./components/cardlist";
import Footer from "./components/footer";
import "./App.css";
import { birds } from "./birds";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "contact"
    };
  }

  onRouteChange = route => {
    this.setState({ route: route });
  };

  render() {
    return (
      <div>
        <NavBar onRouteChange={this.onRouteChange} />
        {this.state.route === "home" ? (
          <CardList birds={birds} />
        ) : this.state.route === "about" ? (
          <About />
        ) : (
          <Contact />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
