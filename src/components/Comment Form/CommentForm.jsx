import React, { Component } from 'react';
import axios from 'axios';
import CreateComment from '../CreateComment/createComment';
import './CommentForm.css'


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments : props.comments,
            comment: '',
            selectedVideo: props.selectedVideo,
         }
    }

    likeComment = async(commentID) => {
        await axios.patch(`http://127.0.0.1:8000/comments/${commentID}/likes/`);
        // this.getComments(video)
        console.log("Like Added")
      }
    dislikeComment = async(commentID) => {
        await axios.patch(`http://127.0.0.1:8000/comments/${commentID}/dislikes/`);
        // this.getComments(video)
      }


    render() { 
            return (
                <div>
                    <CreateComment comments = {this.state.comments} selectedVideo = {this.state.selectedVideo}/>

                    <br/><br/>
                    <table>
                        <thead>
                            <tr>
                                <th>Comments:</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.comments.map((comment) => {
                            return(
                                
                                    <tr key = {comment.id}>
                                        <td>{comment.body}</td>
                                        <td><button  onClick={()=>this.likeComment(comment.id)} >Likes:</button> {comment.likes}</td>
                                        <td><button  onClick={()=>this.dislikeComment(comment.id)} >Disikes:</button> {comment.dislikes}</td>
                                    </tr>
                                
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            );
        }
          
    }

 
export default CommentForm;