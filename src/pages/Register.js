import React from 'react'

const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>my react chat</span>
                <span className='title'>Register</span>
                <form>
                    <input type='text' placeholder='Username' />
                    <input type='email' placeholder='Email' />
                    <input type='password' placeholder='Password' />
                    <input type='file' id='file' style={{ display: 'none' }} />
                </form>
            </div>
        </div>
    )
}

export default Register