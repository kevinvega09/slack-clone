import {Link } from 'react-router-dom';

export default function Register() { 
    return(
        <div>
            <h1>Register</h1>
            <form>
                <input type='text' placeholder='Full Name' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <button type='submit'>Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
    )
}