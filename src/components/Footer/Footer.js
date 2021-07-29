import React, { Component } from 'react';
import { Footer } from 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';

class SiteFooter extends Component {
    render() {
        return (
            <footer className="p-4 bg-dark text-white text-center position-relative">
                <div className="container">
                    <p className="lead">&copy; Thomas Polese {new Date().getFullYear()}</p>
                </div>

                <a href="#" class="position-absolute bottom-0 end-0 p-4 jump">
                    <div class="h1">🆙</div>
                </a>
            </footer>
        );
    }
}

export default SiteFooter;
