import React, { use } from 'react';

const Users = ({usersPromise}) => {
    const users = use(usersPromise())
    return (
        <div>
            <h2>I have {users.length} users</h2>
        </div>
    );
};

export default Users;