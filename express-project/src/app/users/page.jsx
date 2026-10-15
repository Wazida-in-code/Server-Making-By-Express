import React from 'react';

const UsersPage = async() => {
    const res = await fetch('http://localhost:5000/users');
    const users = await res.json();
    return (
        <div>
            <h1>I have {users.length} Users</h1>
        </div>
    );
};

export default UsersPage;