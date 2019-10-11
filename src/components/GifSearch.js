import React, { Component } from 'react';

class GifSearch extends Component {
    state = { 
        searchField: ''
     }

     handleChange = event => {
        event.persist()
        this.setState({
          searchField: event.target.value
        })
      }

      submitListener = (event) => {
          event.preventDefault()
          this.props.handleSubmit(this.state.searchField)
      }

    render() { 
        return ( 
            <div>
                <form onSubmit={ (event) => this.submitListener(event)}>
                    <input type='text' onChange={this.handleChange} value={this.state.searchField}></input>
                    <input type='submit'></input>
                </form>
            </div>
         );
    }
}
 
export default GifSearch;