import React from 'react'
import Avatar from '../img/Avatar.png'

const Register = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logo'>My React Chat</span>
                <span className='title'>Register</span>
                <form>
                    <input type='text' placeholder='Username' />
                    <input type='email' placeholder='Email' />
                    <input type='password' placeholder='Password' />
                    <input type='file' id='file' className='uploadFile' />
                    <label htmlFor='file'>
                        <img src={Avatar} alt='Avatar' className='avatarImg' />
                        <span className='uploadTitle'>Upload Your Avatar</span>
                    </label>
                    <button className='registerBtn'>Sign up</button>
                </form>
                <p>
                    Already have an account? <span className='loginBtn'>Login</span>
                </p>
            </div>
        </div>
    )
}

export default Register