import React, { Component } from 'react'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { createQuestion } from '../graphql/mutations'




class CreateComment extends Component {

    state = {
         qOwnerId: "",
         qOwnerUsername: "",
         qTitle: "",
         qBody: ""
    }

    componentDidMount = async () => {
         await Auth.currentUserInfo()
          .then(user => {
               this.setState({
                    qOwnerId: user.attributes.sub,
                    qOwnerUsername: user.username
               })
          })
    }

    handleChangeContentT = event => this.setState({ qTitle : event.target.value })
    handleChangeContentB = event => this.setState({ qBody : event.target.value })
    handleAddQuestion = async event => {
          event.preventDefault()

          const input = {
               qTaskId: this.props.taskId,
               qOwnerId: this.state.qOwnerId,
               qOwnerUsername: this.state.qOwnerUsername,
               qTitle: this.state.qTitle,
               qBody: this.state.qBody,
               createdAt: new Date().toISOString()
          }
          await API.graphql(graphqlOperation(createQuestion, { input }))

          this.setState({ qTitle: "", qBody: ""}) // clear field
    }

    render() {

        return (
            <div>

              <form className="add-comment"
                onSubmit={this.handleAddQuestion}>

                <textarea
                  type="text"
                   name="content"
                   rows="3"
                   cols="40"
                   required
                   placeholder="Add Question Title."
                   value= {this.state.qTitle}
                   onChange={this.handleChangeContentT}/>

                  <textarea
                    type="text"
                     name="content"
                     rows="3"
                     cols="40"
                     required
                     placeholder="Add Question describtion"
                     value= {this.state.qBody}
                     onChange={this.handleChangeContentB}/>

                     <input
                      className="btn"
                      type="submit"
                      style={{ fontSize: '19px'}}
                      value="Add Comment"/>

            </form>
            </div>

        )
    }
}
export default CreateComment
