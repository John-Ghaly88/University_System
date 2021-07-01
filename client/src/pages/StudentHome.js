import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { connect } from "react-redux"
import { propTypes } from 'react-bootstrap/esm/Image'

const StudentHome = (props) => {


    const [grades, setGrades] = React.useState([])


    React.useEffect(() => {
        axios.get('http://localhost:5000/api/grades/student',{
            headers: {
                Authorization: props.token
            }
    })
        .then((response) => {
            const newGrades = response.data
            setGrades(newGrades)
        })
        .catch(() => {

        })
    }, [])

    return (
        <React.Fragment>
            <table>
                <thead>
                    <tr>
                        {/* <th>Student ID</th>
                        <th>Instructer ID</th> */}
                        <th>Course ID</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        grades.map((grade) => (
                            <tr>
                                {/* <td>{grade.studentID}</td>
                                <td>{grade.instructerID}</td> */}
                                <td>{grade.courseID}</td>
                                <td>{grade.grade}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}


const mapStateToProps = state => {
    console.log("state", state)
    return {
        token: state.UserReducer.token
    }
}

export default connect(mapStateToProps)(StudentHome)