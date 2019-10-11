import React, { Component } from 'react';

class Giflist extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <img alt='gif' src={this.props.imageURL}></img>
            </div>
         );
    }
}
 
export default Giflist;