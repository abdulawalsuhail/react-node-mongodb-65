import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // const {id} = useParams();
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            console.log('delete user id', id)
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = users.filter(user => user._id !== id)
                        setUsers(remaining)
                    }
                })
        }
    }
    // const handleUpdate = (id, name, email) => {
    //     const updatedUser = { name, email };
    //     const url = `http://localhost:5000/user/${id}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedUser)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('success', data);
    //             alert('users added successfully!!!');
               
    //         })
    // }
    return (
        <div>
            <p>Home page:{users.length}</p>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}
                    >
                        {user.name}::{user.email}
                        <Link to={`/update/${user._id}`}><button>Update</button></Link>
                        <button onClick={() => handleUserDelete(user._id)}>X</button></li>)
                }
            </ul>
        </div>
    );
};

export default Home;