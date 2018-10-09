import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {refreshAuthToken} from '../actions/auth';
import Nav from './layout/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './landing-page/LandingPage';
import Footer from './layout/Footer';
import SignIn from './auth/SignIn';
import SignUpPage from './auth/SignUpPage';
import Dashboard from './dashboard/Dashboard';
import CreateDeckForm from './deck/CreateDeckForm';
import EditDeckForm from './deck/EditDeckForm';
import Deck from './deck/Deck';
import Quiz from './quiz/Quiz';
import './App.css';


export class App extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
        // this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
        // this.stopPeriodicRefresh();
    }
  }

    componentWillUnmount() {
        this.stopPeriodicRefresh();
    }

    // startPeriodicRefresh() {
    //     this.refreshInterval = setInterval(
    //         () => this.props.dispatch(refreshAuthToken()),
    //         60 * 60 * 1000
    //     );
    // }

    stopPeriodicRefresh() {
        if (!this.refreshInterval) {
            return;
        }

        clearInterval(this.refreshInterval);
    }

  render() {
    return (
      <Router>
        <div className="app">
          <Nav />
          <main>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUpPage} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/create-deck' component={CreateDeckForm} />
            <Route exact path='/edit-deck' component={EditDeckForm} />
            <Route path='/deck/:id' component={Deck} />
            <Route path='quiz/:id' component={Quiz} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !==null,
  loggedIn: state.auth.currentUser !==null,
});

export default connect(mapStateToProps)(App);
