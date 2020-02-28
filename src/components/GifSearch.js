import React, { Component } from 'react';

export default class GifSearch extends Component {
    constructor(props) {
        super(props)
    }



render() {
    console.log(this.props.userInput)
    return (
        <div>
            <form onSubmit={this.props.handleSubmit}>
            <label>Search:
            <input type="text" value={this.props.userInput} onChange={this.props.handleChange} name="search" />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

}
