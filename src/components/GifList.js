import React, {Component} from 'react';

export default class GifList extends Component {
    render(){
        return(
            <ul>
                {this.props.images.map((url, index)=> <li key={index}><img alt="gif" src={url}/></li>)}
            </ul>
        )
    }
}