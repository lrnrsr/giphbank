import React, { Component } from "react";
import './display.css'

const loaded = {};

class Image extends Component {
    state = {
        isLoaded: loaded[this.props.src]
    };

    onLoad = () => {
        loaded[this.props.src] = true;
        this.setState(() => ({ isLoaded: true }));
    };

    render() {

        return (
            <div>
                <img
                    alt={this.props.alt}
                    src={this.props.src}
                    className='image-loaded'
                    onLoad={this.onLoad}
                />
                {!this.state.isLoaded && <div className="spinner" />}
            </div>
        )
    }
}

export default Image;