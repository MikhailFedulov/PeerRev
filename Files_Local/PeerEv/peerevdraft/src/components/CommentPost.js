import React, { Component } from 'react'

class CommentPost extends Component {


    render() {
        const { qTitle, qBody, qOwnerId, createdAt} = this.props.questionData
        console.log(this.props.questionData)
         return (
                <div className="comment">
                    <span style={{ fontStyle: "italic", color: "#0ca5e297"}}>
                        {"Commment by: " } { qOwnerId}
                        {" on "}
                        <time style={{ fontStyle: "italic"}}>
                            { " "}
                            { new Date(createdAt).toDateString()}

                        </time>
                    </span>
                    <p> { qTitle }</p>
                    <p> { qBody }</p>

                </div>
         )
    }
}
export default CommentPost
