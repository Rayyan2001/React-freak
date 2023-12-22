import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';

function Github()  {
    const data = useLoaderData()
// const [data, setData] = useState({})
//     useEffect(() => {
//         fetch('https://api.github.com/users/Rayyan2001')
//         .then(res => res.json())
//         .then(data=> {
//             console.log(data);
//             setData(data)
//         })
//     }, []);
    return (
        <div className='bg-gray-600 p-4 text-white text-3xl'>
            Github Follower: {data.followers}
            <img src={data.avatar_url} alt="" width={300} />
        </div>
    );
}

export default Github;


export const githubInfoLoader =async () => {
    
    const res = await fetch('https://api.github.com/users/Rayyan2001')
    return res.json()
} 