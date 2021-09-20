
import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/search';
import SearchList from './components/SearchList/searchList';
import axios from 'axios'
import MainVideo from './components/MainVideo/MainVideo';
import './components/API/youtube';
import CommentForm from './components/Comment Form/CommentForm';
import RelatedVideos from './components/RelatedVideos/relatedVideos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos:[],
      selectedVideo: null,
      comments: [],
      search: '',
      videoTitle: '',
      videoDescription: '',
      relatedVideos: [],
      dataloaded: false,
     }
  }

  componentDidMount(){
    console.log("Inside component did mount");
  }


  async getComments(video) {
    let response = await axios.get(`http://127.0.0.1:8000/comments/${video}/`)
    this.setState({
      comments: response.data,
      dataloaded: true
    })
  }

  async getVideos(search) {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search/`, {
      params:{
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyAKepytxUmWxBY5Q5bdSatiMDLGhFI9o1I',
        q: search,
        type: 'video'
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: this.state.selectedVideo,
    });

  }

  async getRelatedVideos(selectedVideo) {
    let response = await axios.get(` https://www.googleapis.com/youtube/v3/search`, {
      params:{
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyAKepytxUmWxBY5Q5bdSatiMDLGhFI9o1I',
        relatedToVideoId: selectedVideo,
        type: 'video'
      }
    });
    console.log(response);
    this.setState({
      relatedVideos: response.data.items,
      selectedVideo: this.state.selectedVideo
    });
    console.log("GetRelatedVideos");
    console.log(response.data.items);
  }

  myCallback = (searchData) =>{
    this.setState({search: searchData});
    this.getVideos(searchData);
  }



  render() { 
    const {search} = this.state;
    const onSelect = (video, video_title, video_description) =>{
      this.setState({selectedVideo: video, videoTitle: video_title, 
        videoDescription: video_description})
        this.getRelatedVideos(video);  
        this.getComments(video);
    }



    return ( 
        <div>
          <Search search = {this.myCallback}/>

          {this.state.search !== '' ?
          <SearchList videos = {this.state.videos} func = {onSelect}/>
          : <div></div>}

          {this.state.selectedVideo && <MainVideo selectedVideo = {this.state.selectedVideo} 
            videoTitle = {this.state.videoTitle} 
            videoDescription ={this.state.videoDescription}
            />}
            {console.log("Comments in state: ", this.state.comments)}
          {this.state.dataloaded && <CommentForm comments = {this.state.comments} selectedVideo = {this.state.selectedVideo} /> }
          <RelatedVideos videos = {this.state.relatedVideos} />
        </div>
     );
  }
}
 
export default App;
