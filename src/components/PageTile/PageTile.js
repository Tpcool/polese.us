import React, { Component } from 'react';
import Logo from './logo.gif';
import './PageTile.css';

class PageTile extends Component {
    render() {
        var altText = this.props.title + " info tile";
        return (
            <>
                <div class="tile_wrapper col-lg">
                    <a class="tile_link" href={this.props.url}>
                        <img class="tile_image" src={this.props.image} alt={altText} />
                        <div class="tile_overlay tile_overlay--blur p-3">
                            <div class="tile_overlay_title_lg tile_overlay_title">{this.props.title}</div>
                            <p class="tile_overlay_description_lg tile_overlay_description">{this.props.description}</p>
                        </div>
                    </a>
                </div>
            </>
        );
    }
}

class PageGrid extends Component {
    renderPageGrid() {
        return (
            this.props.displayItems.map((item) => (
                <PageTile title={item.title} description={item.description} url={item.url} image={item.image}  />
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
