import React from 'react'
import axios from 'axios'
import { connect } from "react-redux"
import { propTypes } from 'react-bootstrap/esm/Image'

const TAHome = props => {

    const [grades, setGrades] = React.useState([])
    const [groups, setGroups] = React.useState([])
    const [group, setGroup] = React.useState(-1)
    const [changedGrades, setChangedGrades] = React.useState({})
    const id = 1
    console.log("token", props.token)
    React.useEffect(() => {
        console.log(props.token)
        axios.get('http://localhost:5000/api/grades/ta/groups', {
            headers: {
                Authorization: props.token
            }
        })
            .then((response) => {
                const newgroups = response.data
                setGroups(newgroups)
            })
            .catch(() => {

            })
    }, [])

    React.useEffect(() => {
        setChangedGrades({})
        axios.get(`http://localhost:5000/api/grades/ta/${group}`, {
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
    }, [group])

    const modifyChangedGrades = (index, newGrade) => {
        let tempChangedGrades = {...changedGrades}
        tempChangedGrades[index] = newGrade
        setChangedGrades(tempChangedGrades)
    }

    const submitGrades = () => {
        console.log("New Grades", changedGrades)

        Object.keys(changedGrades).forEach((index) => {
            const gradeObject = {...grades[index]}
            axios.put("http://localhost:5000/api/grades/changegrade", {
                grade: changedGrades[index],
                studentID: gradeObject.studentID,
                courseID: gradeObject.courseID
            },{
                headers: {
                    Authorization: props.token
                }
            })
        })
    }

    return (
        <React.Fragment>
            <label for="groups">selesct group</label>
            <select name="groups" id="groups" onChange={(event, value) => setGroup(event.target.value)}>
                <option value="0">select group</option>
                {
                    groups.map((group) => (
                        <option value={group}>{group}</option>
                    ))
                }
            </select>
            <table>
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Course ID</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        grades.map((grade, index) => (
                            <tr>
                                <td>{grade.studentID}</td>
                                <td>{grade.courseID}</td>
                                <td>
                                    <div key={grade._id}>
                                        <select name="grade" id="grade" defaultValue={grade.grade} onChange={(event) => modifyChangedGrades(index, event.target.value)}>
                                            <option value="null">No Grade</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                            <option value="D">D</option>
                                            <option value="F">F</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button onClick={submitGrades}>Submit</button>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        token: state.UserReducer.token
    }
}
export default connect(mapStateToProps)(TAHome);
