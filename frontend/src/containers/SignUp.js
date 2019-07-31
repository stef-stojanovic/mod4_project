import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class SignUp extends Component {
    
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
        fetch('http://localhost:3000/create-account', {
            method: 'POST',
            headers: {
                'Content_Type': 'application/json'
            }, 
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(() => {window.location.replace('/login')})
        
    }

    
    render() {
        return (
            <div className='login_background'>
                <div>
                    <h3 className="text-center">Register</h3>
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
                        Confirm
                        </Button>
                        <div className="text-centered">
                            <a href="/login">Log In</a>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}
