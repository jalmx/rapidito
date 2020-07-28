import React from 'react'
import Layout from '../components/layout'
import LoginSection from '../components/login/'

const Login = (props)=>(
  <Layout {...props}> 
    <LoginSection title="Login" {...props}/>
  </Layout>
)

export default Login
