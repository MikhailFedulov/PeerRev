import React, { Component } from 'react'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import DisplayTasks from './DisplayTasks'

class CommentPost extends Component {



    render() {
        const { qTitle, qOwnerUsername, createdAt} = this.props.questionData

         return (
                <div className="comment">
                    <span style={{ fontStyle: "italic", color: "#0ca5e297"}}>
                        {"Commment by: " } { qOwnerUsername}
                        {" on "}
                        <time style={{ fontStyle: "italic"}}>
                            { " "}
                            { new Date(createdAt).toDateString()}

                        </time>
                    </span>
                    <p> { qTitle }</p>

                </div>
         )
    }
}
export default CommentPost
