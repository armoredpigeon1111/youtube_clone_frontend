import React from 'react';


const CommentView = (props) => {

    let video_id = props.selectedVideo;

    return (
        <div>
            <br/><br/>
            <table>
                <thead>
                    <tr>
                        
                        <th>Comments:</th>
                    </tr>
                </thead>
                <tbody>
                {props.comments.map((comment) => {
                    return(
                        <div>
                            <tr key = {comment.id}>
                                <td>{comment.body}</td>
                            </tr>
                            <tr>
                                <td><button/>Likes: {comment.likes}</td>
                                <td>Dislikes: {comment.dislikes}</td>
                            </tr>
                        </div>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}
 
export default CommentView;