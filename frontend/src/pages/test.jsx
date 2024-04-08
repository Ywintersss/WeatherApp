import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Test() {
    const [users, setUser] = useState([])

    useEffect(() => {
        axios.get('/test')
            .then(response => {
                const contentType = response.headers['content-type'];
                if (contentType && contentType.includes('application/json')) {  
                    setUser(response.data.users);
                } else {
                    throw new Error('Response is not in JSON format');
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [])

    return (
        <div>
            {users.map((user, i) => (
                    <h3 key={i}>{user.username}</h3>
                )
            )}
            <a href="/">Home</a>
        </div>
    )
}