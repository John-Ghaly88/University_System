import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { connect } from "react-redux";
import { loginAction } from '../store/reducers/user/user.actions';

const Login = (props) => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState(false)

    const history = useHistory()

    const login = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:5000/api/users/login', {
            email,
            password
        })
        .then((response) => {
            setError(false)
            props.loginAction(response.data.token)
            if (response.data.msg.role === "admin")
                history.push('/Admin')
            else if (response.data.msg.role === "student")
                history.push('/Student')
            else if (response.data.msg.role === "ta")
                history.push('/TA')
        })
        .catch((err) => {
            setError(true)
        })
    }

    return (
        <React.Fragment>
            <h1>Login Page</h1>
            <form onSubmit={login}>
                <label>
                    Email:
                    <input  value={email} type="email" name="email" onChange={(event, value) => setEmail(event.target.value) } />
                </label>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <label>
                    Password:
                    <input value={password} type="password" name="password" onChange={(event, value) => setPassword(event.target.value) } />
                </label>
                &nbsp;
                &nbsp;
                <input type="submit" value="Login" />
            </form>

            {
                error ? <p style={{ color: 'red'}}>Incorrect email or password</p> : null
            }
        </React.Fragment>
    )
}

export default connect(null, { loginAction })(Login);