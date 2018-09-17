import React, { Component } from 'react';
import Nav from './layout/Nav';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LandingPage from './landing-page/LandingPage';
import Footer from './layout/Footer';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Dashboard from './dashboard/Dashboard';
import CreateDeck from './deck/CreateDeck';
import StudyDeck from './deck/StudyDeck';

import './App.css';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Nav />
          <main>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/create-deck' component={CreateDeck} />
            <Route exact path='/deck/:id' component={StudyDeck} />



          </main>
          <Footer/ >
        </div>
      </Router>
    );
  }
}

export default App;
