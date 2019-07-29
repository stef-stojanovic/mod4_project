import React, { Component } from 'react'

export default class LoginPage extends Component {
    
    state = {
        username: '',
        password: '' 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/users/authenticate', {
            method: 'POST',
            headers: {
                'Content_Type': 'application/json'
            }, 
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(r => r.json())
        .then( user => localStorage.setItem('token', user.auth_token))
        
    }

    
    render() {
        return (
            <div>
                <h3>Login Form</h3>
                <form> 
                    <input name="username" type="text" onChange={this.handleChange}></input><br></br>
                    <input name="password" type="text" onChange={this.handleChange}></input><br></br>

                    <input type="submit" onClick={this.handleSubmit}></input>

                </form>
            </div>
        )
    }
}
