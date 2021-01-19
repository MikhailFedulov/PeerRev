import React, { Component } from 'react'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { updateTask } from '../graphql/mutations'


class EditTask extends Component {

    state = {
        show: false,
        id: "",
        taskOwnerId: "",
        taskOwnerUsername: "",
        taskTitle: "",
        taskBody: "",
        taskcontent: "",
        taskData: {
             taskTitle: this.props.taskTitle,
             taskBody: this.props.taskBody,
             taskcontent: this.props.taskcontent
        }

    }

    handleModal = () => {
         this.setState({ show: !this.state.show})
         document.body.scrollTop = 0
         document.documentElement.scrollTop = 0
    }

    handleUpdateTask = async (event) => {
         event.preventDefault()

         const input = {
              id: this.props.id,
              taskOwnerId: this.state.taskOwnerId,
              taskOwnerUsername: this.state.taskOwnerUsername,
              taskTitle: this.state.taskData.taskTitle,
              taskBody: this.state.taskData.taskBody,
              taskcontent: this.props.taskcontent

         }

         await API.graphql(graphqlOperation(updateTask, { input }))

         //force close the modal
         this.setState({ show: !this.state.show})

    }

    handleTitle = event => {
         this.setState({
             taskData: {...this.state.taskData, taskTitle: event.target.value}

         })
    }
    handleBody = event => {
         this.setState({ taskData: {...this.state.taskData,
          taskBody: event.target.value}})
    }
    componentWillMount = async () => {

        await Auth.currentUserInfo()
            .then(user => {
                 this.setState({
                     taskOwnerId: user.attributes.sub,
                     taskOwnerUsername: user.username
                 })
            })

    }

    render() {
         return (
             <>
             { this.state.show && (
                 <div className="modal">
                      <button className="close"
                         onClick={this.handleModal}>
                          X
                      </button>

                      <form className="add-post"
                         onSubmit={(event) => this.handleUpdateTask(event)}>

                             <input style={{fontSize: "19px"}}
                                  type="text" placeholder="Title"
                                  name="taskTitle"
                                  value={this.state.taskData.taskTitle}
                                  onChange={this.handleTitle} />

                             <input
                                style={{height: "150px", fontSize: "19px"}}
                                type="text"
                                name="taskBody"
                                value={this.state.taskData.taskBody}
                                onChange={this.handleBody}
                                />

                             <button>Update Task</button>


                      </form>


                 </div>
             )
             }



                <button onClick={this.handleModal}>Edit</button>
             </>


         )
    }
}

export default EditTask;
