import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar } from 'bootstrap/dist/css/bootstrap.css';
import './NavigationBar.css';

class SiteNavbar extends Component {
    render() {
        return (
            <nav className="NavbarItems navbar navbar-expand-lg bg-dark navbar-dark">
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        <img src={this.props.displayItems[0].image} alt="logo" className="logo"/>
                        polese.us
                    </Link>
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
                        {this.props.displayItems.map((item, index) => {
                            if (item.title !== 'Home') {
                                return (

                                        <li key={index} className={item.classItemName}>
                                            <Link class={item.classLinkName} to={item.path}>
                                                {item.title}
                                            </Link>
                                        </li>
                                )
                            }
                        })}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default SiteNavbar;
