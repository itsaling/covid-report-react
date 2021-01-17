import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { CovidCases } from "./components/CovidCases";
import { GlobalProvider } from "./components/context/GlobalState";
import { Resources } from "./components/pages/Resources";
import { DropdownState } from "./components/DropdownState";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="app">
          <Navbar />
          <Route
            exact
            path="/"
            render={(props) => (
              <div className="flex-box">
                <Container className="text-center">
                  <Header />
                  <CovidCases />
                </Container>
              </div>
            )}
          ></Route>

          <Route
            path="/resources"
            render={(props) => (
              <>
                <div className="custom-container">
                  <DropdownState />
                </div>
                <Container fluid className="info">
                  <br></br>
                  <div className="card-deck">
                    <Resources />
                  </div>
                </Container>
              </>
            )}
          ></Route>
          <Footer />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
