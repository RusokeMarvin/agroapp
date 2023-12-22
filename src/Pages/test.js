import React, { useState } from 'react'

const Test = () => {
    const [data,setData] = useState(0)
    const increment = () =>{
        setData(prevdata => prevdata+1)
    }
    const decrement = () =>{
        setData(prevdata => prevdata-1)
    }
  return (
    <div>
        <button onClick={increment}>+</button>
        {data}
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Test