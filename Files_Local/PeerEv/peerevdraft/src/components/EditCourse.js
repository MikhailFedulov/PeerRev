import React, { Component } from 'react'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { updateCourse } from '../graphql/mutations'


class EditCourse extends Component {

    state = {
        show: false,
        id: "",
        courseOwnerId: "",
        courseOwnerUsername: "",
        courseTitle: "",
        courseBody: "",
        numberofstudents: "",
        courseData: {
             courseTitle: this.props.courseTitle,
             courseBody: this.props.courseBody,
             numberofstudents: this.props.numberofstudents
        }

    }

    handleModal = () => {
         this.setState({ show: !this.state.show})
         document.body.scrollTop = 0
         document.documentElement.scrollTop = 0
    }

    handleUpdateCourse = async (event) => {
         event.preventDefault()

         const input = {
              id: this.props.id,
              courseOwnerId: this.state.courseOwnerId,
              courseOwnerUsername: this.state.courseOwnerUsername,
              courseTitle: this.state.courseData.courseTitle,
              courseBody: this.state.courseData.courseBody,
              numberofstudents: this.props.numberofstudents

         }

         await API.graphql(graphqlOperation(updateCourse, { input }))

         //force close the modal
         this.setState({ show: !this.state.show})

    }

    handleTitle = event => {
         this.setState({
             courseData: {...this.state.courseData, courseTitle: event.target.value}

         })
    }
    handleBody = event => {
         this.setState({ courseData: {...this.state.courseData,
          courseBody: event.target.value}})
    }
    componentWillMount = async () => {

        await Auth.currentUserInfo()
            .then(user => {
                 this.setState({
                     courseOwnerId: user.attributes.sub,
                     courseOwnerUsername: user.username
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
                         onSubmit={(event) => this.handleUpdateCourse(event)}>

                             <input style={{fontSize: "19px"}}
                                  type="text" placeholder="Title"
                                  name="courseTitle"
                                  value={this.state.courseData.courseTitle}
                                  onChange={this.handleTitle} />

                             <input
                                style={{height: "150px", fontSize: "19px"}}
                                type="text"
                                name="courseBody"
                                value={this.state.courseData.courseBody}
                                onChange={this.handleBody}
                                />

                             <button>Update Course</button>


                      </form>


                 </div>
             )
             }



                <button onClick={this.handleModal}>Edit</button>
             </>


         )
    }
}

export default EditCourse;
