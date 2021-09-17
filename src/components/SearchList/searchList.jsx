import React from 'react';

const SearchList = (props) => {

    // debugger;
    let videos = props.videos;
    let video_id = '';
    
    const callBackFunction = (video_id) =>{
        props.func(video_id);
        console.log("callback");
        console.log(video_id);

    }

    return ( 
        
        <div>
            {videos.map((video)=>{
                video_id = video.id.videoId
                return(
                    
                    <div >
                    <button onClick={()=>callBackFunction(video.id.videoId)}><img src={video.snippet.thumbnails.default.url} /></button><br/>
                    <bold>{video.snippet.title}</bold><br/>
                    {video.snippet.description}
                    </div>
                );
            })}
        </div>
     );
}
 
export default SearchList;