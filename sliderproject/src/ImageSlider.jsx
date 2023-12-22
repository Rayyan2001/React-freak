import React, { useEffect, useState } from 'react'
import { data } from './Data'

const ImageSlider = () => {
    const [activeslider, setActiveSlider] = useState(0)

    const handleNext = () => {
        
        setActiveSlider((activeslider+1)%data.length)
    }
    const handlePrevious = () => {
        
        setActiveSlider(!activeslider? data.length-1 : activeslider-1)
    }

   
    useEffect(() => {
        const timer = setTimeout(() => {
            handleNext()
        }, 1000)

        return () => {
            clearTimeout(timer)
        }
    }, [activeslider]);

  return (
    <div className='flex justify-center'>
      <button className=' p-8' onClick={handlePrevious}> Previous</button>
      
      {data.map((url,i) =>
        
        (<img src={url} key={url} className={'w-[450px] h-[350px] object-contain ' + (activeslider===i? "block": "hidden")} alt=""  />)
        )}
      <button className='p-8' onClick={handleNext}>Next</button>
    </div>
  )
}

export default ImageSlider
