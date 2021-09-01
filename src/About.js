import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Test from './test.png';
import { AboutPageItems } from './constants/AboutPageItems.js';
import 'bootstrap/dist/css/bootstrap.css';
import './About.css';

class AboutSection extends Component {
    render() {
        return (
            <>
                <section class="p-4">
                    <div class="container">
                        <h2>{this.props.header}</h2>
                            <div class="col-md-12">
                                <img class="m-4 rounded float-start img-fluid" src={this.props.image} alt={this.props.imageAltText} />
                                <p class="lead my-3">{this.props.body}</p>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

function About() {
    return (
        <>
            <h1>Lorem Ipsum</h1>
            {AboutPageItems.map((item) => {
                return (
                    <AboutSection header={item.header} image={item.image} imageAltText={item.imageAltText} body={item.body}/>
                )
            })}
        </>
    )
}

export default About;
