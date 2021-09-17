import React from 'react';


const CommentView = (props) => {

    return (
        <div>
            <br/><br/>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                {props.comments.map((comment) => {
                    return(
                            <tr key = {comment.id}>
                                <td>{comment.body}</td>

                            </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}
 
export default CommentView;