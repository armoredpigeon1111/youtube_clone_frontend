
import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/search';
import SearchList from './components/SearchList/searchList';
import axios from 'axios'
import MainVideo from './components/MainVideo/MainVideo';
import './components/API/youtube';
import CommentForm from './components/Comment Form/CommentForm';

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

  async getComments() {
    let response = await axios.get('127.0.0.1:8000/comments/')
    console.log(response)
    this.setState({
      comments: response.data
    })
  }

  async getVideos(search) {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search/`, {
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
      selectedVideo: 'Xo6E9R4_PtU'
    });
    console.log("GetVideos");
    console.log(response.data.items);
  }

  myCallback = (searchData) =>{
    this.setState({search: searchData});
    this.getVideos(searchData);
  }



  render() { 
    const {search} = this.state;
    const onSelect = (video) =>{
      this.setState({selectedVideo: video});
      console.log(video);
    }
    return ( 
        <div>
          <Search search = {this.myCallback}/>

          {this.state.search !== '' ?
          <SearchList videos = {this.state.videos} func = {onSelect}/>
          : <div>No Search</div>}

          <MainVideo selectedVideo = {this.state.selectedVideo}/>
          <CommentForm comments = {this.state.comments}/>
         

          
        </div>
     );
  }
}
 
export default App;
