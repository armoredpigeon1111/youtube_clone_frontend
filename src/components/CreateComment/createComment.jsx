import React, { Component } from 'react';
import axios from 'axios';
import './createComment.css'



class CreateComment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comment: '',
            video_id: props.selectedVideo,
            likes: 0,
            dislikes: 0,
            reply_id: null,
         }
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

    addComment = async() => {
        const comment = {
            video_id: this.state.video_id,
            body: this.state.comment,
            likes: this.state.likes,
            dislikes: this.state.dislikes,
            reply_id: null
        };
        try{
            let response = await axios.post(`http://127.0.0.1:8000/comments/`, comment);
            console.log(response);
        }
        catch{
            console.log("Unsuccessful Comment Add");
        }


      }   

    render() { 
        return ( 
            <form onSubmit ={this.handleSubmit}>
                <label>Leave A Comment:</label>
                <input className="maskedBox" size="100" name="comment" onChange={this.handleChange} value={this.state.comment}></input>
                <button className="btn" type="submit">Add Comment</button>
            </form>
         );
    }
}
 
export default CreateComment;