import React, { Suspense } from 'react';
import Users from '../components/Users';

const usersPromise = async () => {
    const res = await fetch('http://localhost:5000/users');
    return res.json();
}

const UsersPage = async() => {
    
    return (
        <div>
            <h1>I have Users...</h1>
            <Suspense fallback={"Loading..."}>
                <Users usersPromise={usersPromise} />
            </Suspense>
        </div>
    );
};

export default UsersPage;