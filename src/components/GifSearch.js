import React, { Component } from 'react';

class GifSearch extends Component {
    state = { 
        searchInput: ""
     }

     handleChange = (event) => {
         this.setState({
            searchInput: event.target.value
         })
     }

     handleSubmit = (event) => {
         event.preventDefault();
         this.props.onSubmit(this.state.searchInput)
     }

    render() { 
        
        return ( 
            <div>
                <form onSubmit={this.handleSubmit} className="search-form">
                    <input onChange={this.handleChange} type="text"/>
                    <input type="submit" value="Search Gifs"></input>
                </form>
            </div>

         );
    }
}
 
export default GifSearch;