
import React, { Component } from 'react';
import './App.css';
import Search from './components/Search/search';
import SearchList from './components/SearchList/searchList';
import axios from 'axios'
import MainVideo from './components/MainVideo/MainVideo';
import './components/API/youtube';
import CommentForm from './components/Comment Form/CommentForm';
// import RelatedVideos from './components/RelatedVideos/relatedVideos';

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
     }
  }

  componentDidMount(){
    this.getComments();
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
        key: 'AIzaSyAJLJK5AN-qdr5IU71kZqtDKYItM0doVbY',
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

  // async getRelatedVideos() {
  //   let response = await axios.get(` https://www.googleapis.com/youtube/v3/search`, {
  //     params:{
  //       part: 'snippet',
  //       maxResults: 5,
  //       key: 'AIzaSyAJLJK5AN-qdr5IU71kZqtDKYItM0doVbY',
  //       relatedToVideoID: this.state.selectedVideo,
  //       type: 'video'
  //     }
  //   });
  //   console.log(response);
  //   this.setState({
  //     relatedVideos: response.data.items,
  //     selectedVideo: this.state.selectedVideo
  //   });
  //   console.log("GetRelatedVideos");
  //   console.log(response.data.items);
  // }

  myCallback = (searchData) =>{
    this.setState({search: searchData});
    this.getVideos(searchData);
  }

  render() { 
    const {search} = this.state;
    const onSelect = (video, video_title, video_description) =>{
      this.setState({selectedVideo: video, videoTitle: video_title, 
        videoDescription: video_description});
      console.log(video);
    }
    return ( 
        <div>
          <Search search = {this.myCallback}/>

          {this.state.search !== '' ?
          <SearchList videos = {this.state.videos} func = {onSelect}/>
          : <div></div>}

          <MainVideo selectedVideo = {this.state.selectedVideo} 
            videoTitle = {this.state.videoTitle} 
            videoDescription ={this.state.videoDescription}
            // relatedVideos = {this.getRelatedVideos}
            />
          <CommentForm comments = {this.state.comments} />
          {/* <RelatedVideos videos = {this.state.relatedVideos} 
          func = {onSelect}/> */}
        </div>
     );
  }
}
 
export default App;
