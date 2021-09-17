import React, { Component } from 'react';

const SearchList = (props) => {

    debugger;
    let videos = props.videos;
    
    return ( 
        <div>
            {videos.map((video)=>{
                return(
                    video.items
                );
            })}
        </div>
     );
}
 
export default SearchList;