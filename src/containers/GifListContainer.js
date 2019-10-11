import React, {Component} from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'


export default class GifListContainer extends Component {
    constructor(){
        super();
        this.state = {
            images: [],
            search: ""
        }
    }

    setSearch = (val) => {
        this.setState({search: val})
    }

    componentDidUpdate(){
        return fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                images: json.data.slice(0, 3).map(img => img.images.original.url)
            })
        })
    }

    render(){
        return(
            <div>
                <GifSearch setSearch={this.setSearch} />
                <GifList images={this.state.images}/>
            </div>
            
        )
    }
}