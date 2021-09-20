import React, { Component } from 'react';
import axios from 'axios';


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments : props.comments,
            comment: ''
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

    addComment = async() => {
        await axios.post(`http://127.0.0.1:8000/comments/`, this.state.comment);
        // this.getComments(video)
      }  

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value         
        });
     }
 
     handleSubmit = (event) =>{
         event.preventDefault();
        this.addComment();
     }  

    render() { 
            return (
                <div>

                    <form onSubmit ={this.handleSubmit}>
                        <label>Comment:</label>
                        <input name="comment" onChange={this.handleChange} value={this.state.comment}></input>
                        <button className="btn" type="submit">Add Comment</button>
                    </form>

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
                                        <td><button onClick={()=>this.likeComment(comment.id)} >Likes:</button> {comment.likes}</td>
                                        <td><button onClick={()=>this.dislikeComment(comment.id)} >Disikes:</button> {comment.dislikes}</td>
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