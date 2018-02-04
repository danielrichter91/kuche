import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    var headerClass = 'header ' + this.props.headerColor;
    return (
        <div className={headerClass}>
            <div className='container flex justify-content align-items'>
                <div className='flex'>
                    {/* <a href="/" className='logo-text'>Kuche</a> */}
                    <Link className='logo-text' to="/">Kuche</Link>
                </div>
                <div>
                    <Link className='top-link' to="/recipes">Recipes</Link>
                </div>
            </div>
        </div>
    );
  }
}

export default Header;
