import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';
import './Nav.css';
import flashdeckLogo from '../../images/flashdeck-logo.png';

export class Nav extends React.Component {

  state = {
    mobileNavOpen: false,
  }

  componentWillMount() {
    window.addEventListener('mousedown', this.handleClickOutside, false);
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.handleClickOutside, false);
  }

  handleClickOutside = (e) => {
    if(this.node.contains(e.target)) {
      return;
    }
    this.setState({mobileNavOpen: false});
  }

  toggleMobileNav = () =>  {
    this.setState( (prevState) => {
      return {mobileNavOpen: !prevState.mobileNavOpen}
    } )
  }


  render() {
    return (
      <nav  id="topNav" className="nav">
        <div className="logo">
          <img className="logo-img" src={flashdeckLogo} alt="flashdeck logo"/>
          <Link to='/'>FlashDeck</Link>
        </div>
        <div  ref={node => this.node = node} className="resLinks" style={{display: (this.state.mobileNavOpen ? 'block' : 'none')}}>
          {this.props.currentUser ?
            <SignedInLinks onClick={this.toggleMobileNav} />
            : <SignedOutLinks onClick={this.toggleMobileNav}/>
          }
        </div>
        <div className="resLinks-wide" >
          {this.props.currentUser ?
            <SignedInLinks onClick={() => null} />
            : <SignedOutLinks />
          }
        </div>

        <i onClick = {this.toggleMobileNav}  className="fas fa-bars"></i>
      </nav>
    )
  }
}


const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
  }
}
export default connect(mapStateToProps)(Nav);