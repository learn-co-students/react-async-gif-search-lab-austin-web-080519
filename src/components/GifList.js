import React, { Component } from 'react';

class GifList extends Component {
    state = {  }

    
    render() { 
        return ( 
            <div className="gifs-list">
                <ul>
                    <li><img src={this.props.gifs[0]} width="200" height="200" alt="random-gif"></img></li>
                    <li><img src={this.props.gifs[1]} width="200" height="200" alt="random-gif"></img></li>
                    <li><img src={this.props.gifs[2]} width="200" height="200" alt="random-gif"></img></li>
                </ul>
            </div>
         );
    }
}
 
export default GifList;