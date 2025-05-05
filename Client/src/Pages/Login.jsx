import React from "react";
import { Button, Form, Input, message } from "antd";
import {Link} from 'react-router-dom'
import "./Auth.css";  // Custom CSS file for better styling
import { LoginUser } from "../apicalls/users";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate()
  const onFinish = async(values)=>{
    try {
      const response = await LoginUser(values)
      console.log(response)  
      if(response.success){
        localStorage.setItem("token",response.token)
        navigate('/')
      }else{
        console.log("You cant move forward")
      }
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="title">Login to BookMyShow</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item 
            label={<span className="custom-white">Email</span>}
            name="email"
            rules={[{ required: true, message: "Email is required" }]}
          >
            <Input type="email" placeholder="Enter your email" className="input-field"/>
          </Form.Item>

          <Form.Item
            label={<span className="custom-white">Password</span>}
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input type="password" placeholder="Enter your password" className="input-field"/>
          </Form.Item>

          <Button type="primary" block htmlType="submit" className="auth-button">
            Login
          </Button>
        </Form>
        <p className="switch-text">
          New User? <Link to='/register'>Regsiter here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;