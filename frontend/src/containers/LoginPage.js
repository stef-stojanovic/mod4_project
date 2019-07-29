import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';





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
            <div className='login_background'>
                <div>
                    <h3 className="text-center">Sign In</h3>
                    <Form className="login-form"> 
                    <FormGroup>
                        <Label>Username</Label>
                            <Input name="username" placeholder="username" type="text" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input name="password" placeholder="password" type="password" onChange={this.handleChange}/>
                    </FormGroup>
                        <Button className="btn-lg btn-dark btn-block" onClick={this.handleSubmit}>
                        Log in
                        </Button>
                        <div className="text-centered">
                            <a href="">Sign Up</a>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}
