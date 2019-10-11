import React, { Component } from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {
    state = { 
        gifs: [],
        search: "bird"
     }

    componentDidMount() {
        this.fetchGifs();
    }

    onSubmit = (searchInput) => {
        this.setState({
            search: searchInput
        })
        this.fetchGifs(searchInput);
    }

    fetchGifs = (searchInput = this.state.search) => {

        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(response => response.json())
        .then(resp => {
            let originalUrls = resp.data.map( gif => {
                return gif.images.original.url
            })
            this.setState({
                gifs: originalUrls
            })
        })
    }

    render() { 
        return ( 
            <div>
                <GifSearch onSubmit={this.onSubmit}/>
                <GifList gifs={this.state.gifs}/>
            </div>
         );
    }
}
 
export default GifListContainer;