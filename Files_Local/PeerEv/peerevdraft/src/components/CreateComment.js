import React, { Component } from 'react'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { createQuestion } from '../graphql/mutations'

class CreateComment extends Component {

    state = {
         qOwnerId: "",
         qOwnerUsername: "",
         qTitle: ""
    }

    componentWillMount = async () => {
         await Auth.currentUserInfo()
          .then(user => {
               this.setState({
                    qOwnerId: user.attributes.sub,
                    qOwnerUsername: user.username
               })
          })
    }

    handleChangeContent = event => this.setState({ 

         qTitle: event.target.value

     })

    handleAddQuestion = async event => {

          event.preventDefault()
          console.log("this props", this.props.TaskId)

          const input = {
               questionTaskId: this.props.TaskId,
               qOwnerId: this.state.qOwnerId,
               qOwnerUsername: this.state.qOwnerUsername,
               qTitle: this.state.qTitle,
               createdAt: new Date().toISOString()
          }
          await API.graphql(graphqlOperation(createQuestion, { input }))

          this.setState({ qTitle: ""}) // clear field
    }

    render() {

        return (
            <div>

              <form className="add-comment" onSubmit={this.handleAddQuestion} >

                  <textarea
                    type="text"
                     name="content"
                     rows="3"
                     cols="80"
                     required
                     placeholder="Type your question here"
                     value= {this.state.qTitle}
                     onChange={this.handleChangeContent}/>
               
               <input
                    className="btn"
                    type="submit"
                    style={{ 
                         fontSize: '19px', 
                         backgroundColor: "#ff9933",
                         width: "30%",
                         height: "50%"
                    }}
                    value="Add Question"/>
                     

            </form>
            </div>

        )
    }
}
export default CreateComment;
