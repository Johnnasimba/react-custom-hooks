import React, { useState, useEffect } from 'react';

import Card from '../card/card.component';

const User = ({userId}) => {

    const [user, setUser] = useState(null);

    useEffect(
        () => {
            async function fetchUser() {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
                const users = await res.json();
                setUser(users[0]);

            }
            fetchUser();
        },[userId]);

    return(
        <Card >
            {
                user ? (
                    <div>
                        <h3>{user.username}</h3>
                        <p>{user.name}</p>
                    </div>                        
                ) : (
                    <p>User not found</p>
                )
            }

        </Card>
    );
};

export default User;