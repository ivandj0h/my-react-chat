import React from 'react'

const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>My React Chat</span>
                <span className='title'>Login</span>
                <form>
                    <input type='email' placeholder='Email' />
                    <input type='password' placeholder='Password' />
                    <button className='registerBtn'>Sign in</button>
                </form>
                <p>
                    Do not have an account? <span className='registerBtn'>Sign up</span>
                </p>
            </div>
        </div>
    )
}

export default Login