import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search:'',
         }
    }

    handleChange = (event) =>{
        var search = this.state.search;
        this.props.handleCallback(search);
        this.setState({
            
            [event.target.name]: event.target.value         
        });
     }
 
     handleSubmit = (event) =>{
         debugger;
         this.props.App(event.target.search.value)
         event.preventDefault();
     }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Search:</label>
                <input name="search" onChange={this.handleChange} value = {this.state.search}></input>
                <button className="btn" type="submit">Search</button>
                </form>
            </div>
         );
    }
}
 
export default Search;