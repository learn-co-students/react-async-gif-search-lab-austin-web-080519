import React, { Component } from 'react';

export default class GifList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.gifs)
        let eachGif = this.props.gifs.map((url, index) => {
            return <li><img alt="gif" src={url} style={{maxHeight: '200px'}}/></li>
        })
        return(
            <div>
                <ul>
                { eachGif }
                </ul>
            </div>
        )
    }
}