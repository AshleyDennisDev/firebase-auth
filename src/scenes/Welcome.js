import React from "react";

function Welcome({user}) {
    console.log(user)
    return(
    <>

    <h1>Welcome</h1>

    <h2>{user.displayName || user.email}</h2>
    {user.photoURL && <img src={user.photoURL} alt='profile pic of logged-in user' />}
    </>

    )
}

export default Welcome;