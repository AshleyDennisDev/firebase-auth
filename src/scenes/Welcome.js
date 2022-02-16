
import { useNavigate } from "react-router-dom";
import { getAuth, signOut} from 'firebase/auth'

function Welcome({user}) {
    console.log(user)
    const auth = getAuth()

    const navigate = useNavigate()

    const handleLogout = () => {
        signOut(auth)
        .then(() => {
        console.log("then logout")
        localStorage.clear()
        // setUser(null)
        navigate('/login')
    })
    .catch(err => {
        console.error(err)
    })
    }

    return(
    <>

    <h1>Welcome</h1>

    <h2>{user.displayName || user.email}</h2>
    {user.photoURL && <img src={user.photoURL} alt='profile pic of logged-in user' />}
    <button onClick={handleLogout}>Logout</button>
    </>

    )
}

export default Welcome;