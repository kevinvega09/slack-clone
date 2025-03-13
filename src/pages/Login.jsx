import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




export default function Login() { 
    const navigate = useNavigate();

    const handleLogin = (e) => {
        
        const email = e.target[0].value;
        const password = e.target[1].value;
    
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
    
        if(email === 'kevinvega09@gmail.com' && password === '123456') {
            //localStorage.setItem('user', JSON.stringify({ email }));
            console.log('Logged in');
            navigate('/chat');
        } else {
            e.preventDefault();
            alert('Invalid credentials');
            return;
        }
    
       
        
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <button type='submit'>Login</button>
            </form>
           <p>Don't have an account?<Link to="/register">Register</Link></p>
        </div>
    )
}
