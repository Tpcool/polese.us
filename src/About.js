import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AboutPageItems } from './constants/AboutPageItems.js';
import 'bootstrap/dist/css/bootstrap.css';
import './About.css';

class AboutSection extends Component {
    render() {
        const startImage = "float-md-start me-md-4";
        const endImage = "float-md-end ms-md-4";
        var imageClass = "img-fluid my-4 rounded custom-fit-image " + (IsOdd(this.props.index) ? startImage : endImage);

        return (
            <>
                <section class="p-4">
                    <div class="container">
                        <div class="d-md-flex">
                            <div>
                                <div class="text-center">
                                    <img class={imageClass} src={this.props.image} alt={this.props.imageAltText} />
                                </div>
                                <h2>{this.props.header}</h2>
                                <p class="lead my-3">{this.props.body}</p>
                                {this.props.subsection.map((item) => {
                                    return (
                                        <AboutSubsection subheader={item.subheader} subbody={item.subbody} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

class AboutSubsection extends Component {
    render() {
        return (
            <>
                <h3>{this.props.subheader}</h3>
                <p class="lead my-3">{this.props.subbody}</p>
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
                <h1>About me</h1>
            </div>

            {AboutPageItems.map((item, index) => {
                return (
                    <AboutSection
                        index={index} header={item.header}
                        image={item.image} imageAltText={item.imageAltText}
                        body={item.body} subsection={item.subsection} />
                );
            })}
        </>
    )
}

export default About;
