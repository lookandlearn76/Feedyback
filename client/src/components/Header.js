import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';


class Header extends Component {
  renderContent() {
    switch(this.props.auth){
      case null:
        return;
      case false:
        return <li><a className="waves-effect waves-light btn" href="/auth/google">Login With Google</a></li>
      default:
        return  [
          <li key='1'><Payments /></li>,
          <li key='3' style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
          <li key='2'><a className="waves-effect waves-light btn" href="/api/logout">Logout</a></li>
        ];
    }
  }
  render(){
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
          to={this.props.user ? './surveys' : '/'}
          className="center brand-logo"
          >
            FeedyBack
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

//function mapStateToProps(state){
//  return { auth: state.auth };
//}
//this below function is a re-factoring of the above one by destructuring.
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header)
