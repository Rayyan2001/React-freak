import { useState } from 'react'
import './App.css'

function App () {
  const [color, setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>  
          <button onClick={( ) => {setColor('red')} }
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'red'}}
          >
            Red
          </button>
          <button onClick={( ) => {setColor('green')} }
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'green'}}
          >
            Green
          </button>
          <button onClick={( ) => {setColor('blue')} }
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'blue'}}
          >
            Blue
          </button>
          <button onClick={( ) => {setColor('orange')} }
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'orange'}}
          >
            Orange
          </button>
          <button onClick={( ) => {setColor('Purple')} }
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'Purple'}}
          >
            Purple
          </button>
          <button onClick={( ) => {setColor('Violet')} }
          className='outline-none px-4 py-1 rounded-full  shadow-lg text-black'
          style={{backgroundColor: 'Violet'}}
          >
            Violet
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
