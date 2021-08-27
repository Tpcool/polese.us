import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.gif';
import './PageTile.css';

class PageTile extends Component {
    render() {
        var altText = this.props.title + " info tile";
        return (
            <>
                <div class="tile_wrapper col-lg">
                    <Link to={this.props.path}>
                        <img class="tile_image" src={this.props.image} alt={altText} />
                        <div class="tile_overlay tile_overlay--blur p-3">
                            <div class="tile_overlay_title_lg tile_overlay_title">{this.props.title}</div>
                            <p class="tile_overlay_description_lg tile_overlay_description">{this.props.description}</p>
                        </div>
                    </Link>
                </div>
            </>
        );
    }
}

class PageGrid extends Component {
    renderPageGrid() {
        return (
            this.props.displayItems.map((item) => (
                <PageTile title={item.title} description={item.description} path={item.path} image={item.image}  />
            ))
        );
    }

    render() {
        return (
            <section class="p-5">
                <div class="container">
                    <div class="row text-center">
                        {this.renderPageGrid()}
                    </div>
                </div>
            </section>
        );
    }
}

export default PageGrid;

/*
renderPageGrid() {
    return (
        this.props.displayItems.map((item) => (
            <PageTile title={item.title} description={item.description} url={item.url} image={item.image}  />
        ))
    );
}
*/

/*renderPageGrid() {this.props.displayItems.map((item, index) => {
    if (item.title !== 'Home') {
        return (

                <li key={index} className={item.classItemName}>
                        {item.title}
                </li>
        )
    }
})}*/
