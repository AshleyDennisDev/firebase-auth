import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { app } from '../ConnectAuth'
import Button from 'react-bootstrap/Button';


export default function Login ({setUser, user}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider()
    const auth = getAuth(app);

    useEffect(() => {
        const localUser= localStorage.getItem('displayName')
        console.log("LocalUser from LS", localUser)
        
        if(localUser){
            setUser({...user, displayName: localUser})
        }
        else{
            setUser(null)
        }
        //navigate('/')
    } , [])
   
    const handleFormSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                navigate('/')
            })
            .catch(alert)
    }

    const handleGoogleLogin= () => {
            signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
                localStorage.setItem('displayName', result.user.displayName)
                localStorage.setItem('avatar', result.user.photoURL)
                localStorage.setItem('uid', result.user.uid)

                console.log('this is my result', result.user.displayName)
                navigate('/')
            })
            .catch(alert)
    }

    console.log('here is my user from my parent component', user)

    return(
        <>
    <h1>Login</h1>
    <hr/>
    <form onSubmit={handleFormSubmit}> 
        <label>Email: 
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} /></label>
        <br/>
        <label>Password: 
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} /></label>
        <br/>
        <input type='submit' value='Login'/>

    </form>
    <button 
    onClick={handleGoogleLogin}
    style={{
        backgroundColor: 'black', 
        color: 'white', 
        border: 'none'}}>
        Login with Google</button>
        <br/>
        <Button>Test</Button>
    <p> Not a user? <Link to='/signup'>Sign Up</Link></p>
    </>
    )
}
