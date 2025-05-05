import React from 'react'
import {Button, Form, Input, message } from "antd";
import "./Auth.css";  // Importing CSS for consistency
import {Link} from 'react-router-dom'
import { RegisterUser } from '../apicalls/users'

function Register() {
  const registerData = async(values)=>{
      const response = await RegisterUser(values)
      console.log(response)
  }
  return (
    <div className="auth-container">
    <div className="auth-box">  
    <h1 className="title">Register for BookMyShow</h1>
    <Form layout="vertical" onFinish={registerData}>
    <Form.Item
      label={<span className="custom-white">Name</span>}
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your valid name!',
        },
      ]}
    >
    <Input type="text" placeholder="Enter your name" className="input-field"/>
    </Form.Item>

    <Form.Item
      label={<span className="custom-white">Email</span>}
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email address!',
        },
      ]}
    >
      <Input  type="email" placeholder="Enter your email" className="input-field"/>
    </Form.Item>

    <Form.Item
      label={<span className="custom-white">Password</span>}
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input valid password!',
        },
      ]}
    >
    <Input type="password" placeholder="Enter your password" className="input-field"/>
    </Form.Item>

    <Button type="primary" block htmlType="submit" className="auth-button">
            Register
          </Button>
    </Form>
    <p className="switch-text">
     Already a user? <Link to='/login'>Login here</Link>
    </p>
    </div>
    </div> 
  );
}

export default Register