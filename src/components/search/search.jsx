import React, { Component, lazy, Suspense } from 'react';
import getGifs from '../../api/client.api';
import './search.css'
import searchIcon from '../../search.svg'
const Display = lazy(() => import('../display/display'))

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: '',
            searchTerm: ''
        }
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
                        <img
                            alt="search"
                            className="search-icon"
                            src={searchIcon}
                        />
                    </button>
                </form>
                {this.state.gifs &&
                    <Suspense fallback={<div className="search-loader"></div>}>
                        <Display gifs={this.state.gifs} />
                    </Suspense>
                }
                {this.state.errors && <div className='search-error'>{this.state.errors}</div>}

            </div>
        )
    }
}
export default Search;