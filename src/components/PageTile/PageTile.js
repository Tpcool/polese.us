import React, { Component } from 'react';

class PageTile extends Component {
    render() {
        return (
            <>
                <div class="col-md">test</div>
            </>
        )
    }
}

class PageGrid extends Component {
    render() {
        return (
            <section class="p-5">
                <div class="container">
                    <div class="row text-center">
                        <PageTile />
                        <PageTile />
                        <PageTile />
                    </div>
                </div>
            </section>
        )
    }
}

export default PageGrid;
