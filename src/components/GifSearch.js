import React, {Component} from 'react';

export default class GifSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ""
        }
    }
    handleChange = (event) => {
        event.persist(); 
        this.setState({search: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.setSearch(this.state.search)
    }

    render(){
        return(
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <input type="text" onChange={this.handleChange} value={this.state.search}/>
                <input type="submit" value="Search"/>
            </form>
        )
    }
}