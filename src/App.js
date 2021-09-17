
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

  async getVideos() {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search/`, {
      params:{
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCBrMSzk3GmmDSgej52easCbphBZlr2ljE',
        q: this.state.search,
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
    this.getVideos();
  }

  render() { 
    const {search} = this.state;
    return ( 
        <div>
          <Search search = {this.myCallback}/>
          <SearchList videos = {this.state.videos} />
          <MainVideo selectedVideo = {this.state.selectedVideo}/>
          <CommentForm comments = {this.state.comments}/>
          {this.state.search !== '' ?
          
          this.state.videos.map((video)=>{
            return(
              <div>{video.id.videoid}</div>
            );
          })

          : <div>No Search</div>}
          
        </div>
     );
  }
}
 
export default App;
