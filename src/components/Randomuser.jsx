import { useState } from "react"
import './styles/randomuserstyle.css'

const  Randomuser = () => {
    const [user, setUser]= useState(null);
    const [loading, setLoading]=useState(false)
    const handleGenerate = async () => {
        setLoading(true)
        const res = await fetch ('https://randomuser.me/api/')
        const users = await res.json()
        setUser(users.results[0])
        setLoading(false)
    }


    return (
        <div className="randomuser-container">
            <h1>Random user Generator</h1>
            <button onClick={handleGenerate}>Generate</button>
            <hr />
            <h3>{loading ? 'Loading....': ''}</h3>
            {user && 
            <div className="user-container">
                <img src={user.picture.large} alt="" />
                <div>
                    <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
                    <h3>Age: <span>{user.dob.age}</span></h3>
                    <p>{user.location.city}, {user.location.state}, {user.location.country}</p>
                </div>
                <div>
                    <h3>Contact: <span>{user.email}</span></h3>
                    <h3>Phone: <span>{user.phone}</span></h3>
                    <h3>Cell: <span>{user.cell}</span></h3>
                </div>

            </div>
            }

        </div>
    )
}

export default Randomuser