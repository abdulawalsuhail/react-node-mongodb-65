import React from 'react';

const AddUser = () => {


    const handleAddUser = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value

        const user = { name, email }


        // send data to the server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('user added successfully!!!')
                e.target.reset()
            })
    }
    return (
        <div>
            <h1>Please add a new user</h1>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' placeholder='Enter Your Name' required />
                <br />
                <input type="email" name='email' placeholder='Enter Your Email' required />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;