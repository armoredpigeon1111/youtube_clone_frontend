
import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/search';
import SearchList from './components/SearchList/searchList';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos:[],
      selectedVideo: null,
      comments: [],
      search: '',
      apiKey: 'AIzaSyCBrMSzk3GmmDSgej52easCbphBZlr2ljE',
     }
  }

  async getVideos() {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.state.search}&key=${this.state.apiKey}`);
    console.log(response);
    this.setState({
      videos: response.data,
    });
  }

  myCallback = (searchData) =>{
    this.setState({search: searchData})
  }

  render() { 
    const {search} = this.state;
    return ( 
        <div>
          <Search search = {this.myCallback}/>
          <SearchList videos = {this.state.videos} />
        </div>
     );
  }
}
 
export default App;
