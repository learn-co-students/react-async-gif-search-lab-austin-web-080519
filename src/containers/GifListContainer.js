import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    state = {
        search: '',
        gifs: []
    }

    componentDidMount() {

    };

    doTheFetch = (search) => {
            fetch(`http://api.giphy.com/v1/gifs/search?q=${search}s&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    gifs: data.data
                })
    
            })
    }

    handleSubmit = (search) => {
        console.log(search)
        this.setState({
            search: search
        })
        this.doTheFetch(search)
      }

    renderGifList = () => {
        return this.state.gifs.map( (gif, key) => {
            return < GifList imageURL={gif.images.original.url}/>
        })
        
    };

    render() { 
        return ( 
            <div>
                <div>
                    < GifSearch handleSubmit={this.handleSubmit} />
                </div>
                {this.renderGifList()}
            </div>
         );
    };
}
 
export default GifListContainer;