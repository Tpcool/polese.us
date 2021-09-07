import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ProjectsPageItems } from './constants/ProjectsPageItems.js';
import 'bootstrap/dist/css/bootstrap.css';
import './Projects.css';

class ProjectTile extends Component {
    render() {
        return (
            <>
                <article class="p-4">
                    <div class="p-3 container border border-dark border-5 rounded-3">
                        <div class="row">
                            <div class="col-md-4">
                                <img class="img-fluid" src={this.props.image} alt={this.props.imageAltText} />
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <h2 class="text-center">{this.props.title}</h2>
                                    <a class="fs-3 text-center" href={this.props.link}>Project link</a>
                                    <p class="pt-3 fs-5 text-justify">{this.props.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </>
        );
    }
}

function Projects() {
    return (
        <>
            <div class="container pt-4">
                <h1>My projects</h1>
            </div>

            {ProjectsPageItems.map((item) => {
                return (
                    <ProjectTile
                        title={item.title} image={item.image}
                        imageAltText={item.imageAltText} link={item.link}
                        description={item.description} />
                );
            })}
        </>
    );
}

export default Projects;
