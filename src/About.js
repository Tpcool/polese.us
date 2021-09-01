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
                        <div class="row">
                            <div class="col-md-12">
                                <img class={IsOdd(this.props.index) ? "fit-image img-fluid m-4 rounded float-start" : "fit-image img-fluid m-4 rounded float-end"} src={this.props.image} alt={this.props.imageAltText} />
                                <p class="lead my-3">{this.props.body} aaaand {this.props.index}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

// Main section, then nested subsection. Main section contains section tag and row separator and image, subsection contains subheaders and content
class AboutSubSection extends Component {
    render() {
        return (
            <>
                <h1>placeholder</h1>
            </>
        );
    }
}

function IsOdd(num) {
    if (num % 2 === 1) return true;
    else return false;
}

function About() {
    return (
        <>
            <div class="container pt-4">
                <h1>Lorem Ipsum</h1>
            </div>
            {AboutPageItems.map((item, index) => {
                return (
                    <AboutSection header={item.header} image={item.image} imageAltText={item.imageAltText} body={item.body} index={index}/>
                )
            })}
        </>
    )
}

export default About;
