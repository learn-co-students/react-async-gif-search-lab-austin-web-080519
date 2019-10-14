import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'


export default class GifListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gifs: [],
            userInput: '',
        }
    }
    

    handleChange = (event) => {
        this.setState({userInput: event.target.value})
    }


    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.userInput}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(response => response.json())
        .then(response => {
            let gifArray = response.data.map((obj, index) => {
                return obj.images.original.url
            }) 
            this.setState({ gifs: gifArray})
        })
    }
    
    render() {
        return (
            <div>
                <GifSearch  handleChange={this.handleChange} 
                            userInput={this.state.userInput}
                            handleSubmit={this.handleSubmit} 
                            
                />
                <GifList  gifs={this.state.gifs} />
            </div>
            
        )
    }
}


