import React from 'react';

const SearchList = (props) => {

    // debugger;
    let videos = props.videos;
    let video_id = '';
    
    const callBackFunction = (video_id, video_title, video_description) =>{
        props.func(video_id, video_title, video_description);
        console.log("callback");
        console.log(video_id);

    }

    return ( 
        
        <div>
            {videos.map((video)=>{
                video_id = video.id.videoId
                return(
                    
                    <div >
                    <button onClick={()=>callBackFunction(video.id.videoId, video.snippet.title, video.snippet.description)}><img src={video.snippet.thumbnails.default.url} alt = ""/></button><br/>
                    <bold>{video.snippet.title}</bold><br/>
                    {video.snippet.description}
                    </div>
                );
            })}
        </div>
     );
}
 
export default SearchList;