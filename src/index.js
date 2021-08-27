import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import HomePage from './Home.js';
import AboutPage from './About.js';
// import ResumePage from './Resume.js'
import ProjectsPage from './Projects.js';
// import MusicPage from './Music.js';
// import CaveStoryWiiPage from './CaveStoryWii.js';
// import SymfonikevPage from './Symfonikev.js';
// import MegaManGameboyPage from './MegaManGameboy.js';
import BlogPage from './Blog.js';
import ContactPage from './Contact.js';
import SiteNavbar from './components/Navbar/NavigationBar.js';
import SiteFooter from './components/Footer/Footer.js';
import { MenuItems } from './constants/MenuItems.js';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <SiteNavbar displayItems={MenuItems} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/projects" component={ProjectsPage} />
            <Route exact path="/blog" component={BlogPage} />
            <Route exact path="/contact" component={ContactPage} />
            <SiteFooter />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
{this.props.displayItems.map((item, index) => {
    return (
        <Route exact path="" component="" />
    )
})}
*/

/*

*/
