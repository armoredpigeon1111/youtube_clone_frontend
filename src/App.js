
import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/search';
import SearchList from './components/SearchList/searchList';
import axios from 'axios'
import MainVideo from './components/MainVideo/MainVideo';
import './components/API/youtube';

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

  async getVideos(search) {
    let response = await axios.get(`search`, {
      params:{
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCBrMSzk3GmmDSgej52easCbphBZlr2ljE',
        q: search,
        type: 'video'
      }
    });
    console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
    console.log(response.data.items)
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
          <MainVideo selectedVideo = "kAS__7slsFs"/>
        </div>
     );
  }
}
 
export default App;
