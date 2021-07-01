import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { connect } from "react-redux"
import { propTypes } from 'react-bootstrap/esm/Image'

const ChangePassword = (props) => {

    const [error, setError] = React.useState(false)
    const [newPassword, setnewPassword] = React.useState("")
    const [ogPassword, setogPassword] = React.useState("")

    const history = useHistory()

    const changePWD = (e) => {
        e.preventDefault();

        axios.put('http://localhost:5000/api/users/changepwd', {
            newPassword,
            ogPassword
        },{
                headers: {
                    Authorization: props.token
                }
            
        })
            .then((response) => {
                setError(false)
            })
            .catch((err) => {
                setError(true)
            })
    }

    return (
        <React.Fragment>
            <h1>change password</h1>
            <form onSubmit={changePWD}>
                <label>
                    Current Password:
                    <input value={ogPassword} type="text" name="ogPassword" onChange={(event, value) => setogPassword(event.target.value)} />
                </label>
                <label>
                    New Password:
                    <input value={newPassword} type="password" name="newPassword" onChange={(event, value) => setnewPassword(event.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>

            {
                error ? <p style={{ color: 'red' }}>Incorrect password</p> : null
            }

        </React.Fragment>
    )



}
const mapStateToProps = state => {
    console.log("state", state)
    return {
        token: state.UserReducer.token
    }
}

export default connect(mapStateToProps)(ChangePassword)
