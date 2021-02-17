import { Component } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listCourses } from '../graphql/queries'

class HomePage extends Component {

    state = {
        courses: []
    }

    getCourses = async () => {
        const result = await API.graphql(graphqlOperation(listCourses))
        this.setState({ courses: result.data.listCourses.items})
    }

    render() {
        this.getCourses()
        const { courses } = this.state

        return (
            <div id="Home-Page">
                <h1>You've Enrolled Into {this.state.courses.length} Courses</h1>
                {
                    courses.map(( course ) => {
                        return (
                            <div>
                                <p>{course.courseTitle }</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default HomePage;