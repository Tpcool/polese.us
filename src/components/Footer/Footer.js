import React, { Component } from 'react';
import { Footer } from 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';

class SiteFooter extends Component {
    render() {
        return (
            <body class="d-flex flex-column min-vh-100">
                <footer class="p-4 mt-auto bg-dark text-white text-center position-relative">
                    <div class="container">
                        <p class="lead">&copy; Thomas Polese {new Date().getFullYear()}</p>
                    </div>
                    <a href="#" class="position-absolute bottom-0 end-0 p-4 jump">
                        <div class="h1">🆙</div>
                    </a>
                </footer>
            </body>
        );
    }
}

export default SiteFooter;
