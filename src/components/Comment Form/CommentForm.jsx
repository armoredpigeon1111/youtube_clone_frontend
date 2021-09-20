import React, { Component } from 'react';
import axios from 'axios';


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments : props.comments
         }
    }

    async likeComment(commentID, video ) {
        let response = await axios.patch(`http://127.0.0.1:8000/${commentID}/likes/`);
        this.getComments(video)
        console.log("Like Added")
      }
    async dislikeComment(commentID, video ) {
        let response = await axios.patch(`http://127.0.0.1:8000/${commentID}/dislikes/`);
        this.getComments(video)
      }


    render() { 
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
                        {this.state.comments.map((comment) => {
                            return(
                                <div>
                                    <tr key = {comment.id}>
                                        <td>{comment.body}</td>
                                    </tr>
                                    <tr>
                                        <td><button onClick={this.likeThisComment()} >Likes:</button> {comment.likes}</td>
                                        <td><button onClick={this.likeThisComment()} >Disikes:</button> {comment.dislikes}</td>
                                    </tr>
                                </div>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            );
        }
          
    }

 
export default CommentForm;