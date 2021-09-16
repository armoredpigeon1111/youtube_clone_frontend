import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search:'',
         }
    }

    callBackFunction = () =>{
        let searchData = this.state.search
        this.props.search(searchData);
    }

    handleChange = (event) =>{
        this.setState({          
            [event.target.name]: event.target.value         
        });
       
     }
 
     handleSubmit = (event) =>{
         debugger;
         event.preventDefault();
         this.callBackFunction();
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