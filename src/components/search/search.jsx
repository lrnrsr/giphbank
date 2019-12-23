import React, { Component } from 'react';
import Display from '../display/display'
import getGifs from '../../api/client.api';
import './search.css'
import searchIcon from '../../../src/search.svg'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gifs: [],
            searchTerm: ''
        }
    }
    getData = async () => {
        let gifs = await getGifs(this.state.searchTerm)
        this.setState({
            gifs: gifs.data
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.getData()
    }

    onChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <div className="search-center">
                <div
                    className="search-header-text"
                    onClick={() => this.props.history.push('/')}
                >
                    GIPHBANK
                    </div>
                <form
                    className="search-form-style"
                    onSubmit={this.onSubmit}
                >
                    <input
                        className='search-input'
                        type='text'
                        placeholder='Search all the GIFs'
                        onChange={this.onChange}
                        value={this.state.searchTerm}
                    />
                    <button className="search-button">
                        <img className="search-icon" alt="search" src={searchIcon} />
                    </button>
                </form>

                {this.state.gifs && <Display gifs={this.state.gifs} />}

            </div>
        )
    }
}
export default Search;