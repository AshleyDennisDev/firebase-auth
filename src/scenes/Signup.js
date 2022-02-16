import {useState} from 'react'
import {Link} from 'react-router-dom'

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleFormSubmit = (event) => {
        event.preventDefault();
        alert(`Trying to sign-up as ${email}`);
    }
    return(
        <>
    <h1>Signup</h1>
    <hr/>
    <form onSubmit={handleFormSubmit}> 
        <label>Email: 
            <input type ='email' value={email} onchange={e => setEmail(e.target.vaule)} /></label>
        <br/>
        <label>Password: 
            <input type ='password' value={password} onchange={e => setPassword(e.target.vaule)} /></label>
        <br/>
        <input type='submit' value='Sign up'/>

    </form>
    <p> Already a user? <Link to='/login'>Login</Link></p>
    </>
    )
}

export default SignUp;