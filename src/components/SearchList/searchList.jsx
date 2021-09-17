import React from 'react';

const SearchList = (props) => {

    debugger;
    let videos = props.videos;
    
    return ( 
        <div>
            {videos.map((video)=>{
                return(
                    
                    <div>{video.id.videoId}
                    <img src={video.snippet.thumbnails.default.url}/>
                    </div>
                );
            })}
        </div>
     );
}
 
export default SearchList;