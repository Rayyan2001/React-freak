import React, { useState } from 'react';

const Header = () => {

    // const [name, setName] = useState("Anurag")
    
    const arr = useState("Anurag")
    const name = arr[0]
    const setName = arr[1]

    return (
        <div>
            <h2 className='flex justify-center text-3xl'>Hello {name}</h2>
            <button className='p-2 m-4 rounded-full bg-blue-500' onClick={()=>{setName("Biraj")}}>Click me </button>
        </div>
    );
}

export default Header;
