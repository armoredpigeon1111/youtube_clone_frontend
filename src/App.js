
import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos:[],
      selectedVideo: null,
      comments: [],
      search: '',
     }
  }

  handleCallback = (searchData) =>{
    this.setState({search: searchData})
  }

  render() { 
    const {search} = this.state;
    return ( 
        <div>
          <Search search = {this.handleCallback}/>
          {search}
        </div>
     );
  }
}
 
export default App;
