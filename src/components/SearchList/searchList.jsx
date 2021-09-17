import React from 'react';

const SearchList = (props) => {

    debugger;
    let videos = props.videos;
    
    return ( 
        <div>
            {videos.map((video)=>{
                return(
                    <div>{video.id.videoid}</div>
                );
            })}
        </div>
     );
}
 
export default SearchList;