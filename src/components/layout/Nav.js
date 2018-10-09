import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import './Nav.css';





export class Nav extends React.Component {

  state = {
    widowWidth: window.innerWidth,
    mobileNavVisible: false,
  }

  handleResize() {
    this.setState({windowWidth: window.innerWidth});
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  navigationLinks() {
    return (
      <div className="resLinks">
        {this.props.currentUser ?
          <SignedInLinks onClick={this.handleNavClick} />
          : <SignedOutLinks onClick={this.handleNavClick}/>
          }
     </div>
    )
  }

  renderMobileNav() {
    if(this.state.mobileNavVisible) {
      return this.navigationLinks();
    }
  }

  handleNavClick =() => {
    if(!this.state.mobileNavVisible) {
      this.setState({mobileNavVisible: true});
    } else {
      this.setState({mobileNavVisible: false});
    }
  }

  renderNavigation() {
    if(this.state.windowWidth <= 960) {
      return (
        <div className="mobile_nav">
          <p onClick={this.handleNavClick}><i className="fas fa-bars"></i></p>{this.renderMobileNav()}
        </div>
      );
    } else {
      return (
        <div className="nav_menu">
          {this.navigationLinks()}
        </div>
      )
    }
  }

  render() {
    return (
      <nav id="topNav" className="nav">
          <div className="logo">
            <Link to='/'>FlashDeck</Link>
          </div>
          {this.renderNavigation()}

        </nav>
    )
  }


  // console.log(props);


}


const mapStateToProps = state => {
  // console.log(state);
  return {
    currentUser: state.auth.currentUser,
  }

}
export default connect(mapStateToProps)(Nav);