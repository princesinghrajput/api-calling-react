import React from 'react'
import { useEffect, useState } from 'react'

const GithubUser = () => {
    const [user, setUser] = useState([]);
    console.log(user);
   


    useEffect(()=>{
        fetch('https://api.github.com/users')
        .then(response=>response.json())
        .then(data=>setUser(data))
    }, [])



    // useEffect(() => {
    //     fetch('https://api.github.com/users/JohnDoe')
    //    .then(response => response.json())
    //    .then(data => setUser(data))
    //    .catch(error => console.log(error))
    // }, [])

  return (
    <div>
        {/* <h1>GitHub User Details</h1>
        <h2>{user.id}</h2>
        <p>Username: JohnDoe</p>
        <img src="" alt='image'/>  */}

        {user.map(user => (
            <div key={user.id}>
                <h1>{user.login}</h1>
                <img src={user.avatar_url} alt='user_image'/>
            </div>
        ))}
  
    </div>
  )
}

export default GithubUser