import React, { Component } from 'react';
import Display from '../display/display';
import getGifs from '../../api/client.api';
import './search.css'
import searchIcon from '../../search.svg'

class Search extends Component {
    state = {
        errors: '',
        gif: [],
        searchTerm: ''
    }

    getData = async () => {
        let gifs = await getGifs(this.state.searchTerm)
        gifs.data && gifs.data.length > 0 ?
            this.setState({
                errors: '',
                gifs: gifs.data
            })
            :
            this.setState({
                errors: 'No results found',
                gifs: [],
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

    resetSearch = () => {
        this.setState({
            errors: '',
            gifs: [],
            searchTerm: ''
        })
    }

    render() {
        return (
            <div className="search-center">
                <div
                    className="search-header-text"
                    onClick={this.resetSearch}
                >
                    GIPH<wbr />BANK
                    </div>
                <form
                    className="search-form"
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
                        <img
                            alt="search"
                            className="search-icon"
                            src={searchIcon}
                        />
                    </button>
                </form>
                {this.state.gifs && <Display gifs={this.state.gifs} />}
                {this.state.errors && <div className='search-error'>{this.state.errors}</div>}

            </div>
        )
    }
}
export default Search;