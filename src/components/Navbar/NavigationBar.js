import React, { Component } from 'react';
import { Nav, Navbar } from 'bootstrap/dist/css/bootstrap.css';
import { MenuItems } from './MenuItems.js';
import './NavigationBar.css';
import NavLogo from './logo.gif';

class MyNavbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems navbar navbar-expand-lg bg-dark navbar-dark">
                <div class="container">
                    <img src={NavLogo} alt="logo" className='logo'/>
                    <a href="polese.us" class="navbar-brand">polese.us</a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navmenu"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navmenu">
                        <ul class="navbar-nav">
                            {MenuItems.map((item, index) => {
                                return (
                                    <li key={index} className={item.classItemName}>
                                        <a className={item.classLinkName} href={item.url}>
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default MyNavbar
