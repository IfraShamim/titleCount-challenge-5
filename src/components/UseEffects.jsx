import React, { useState } from 'react'
import { useEffect } from 'react'

function UseEffects() {

  const [count , setCount] = useState(0);  
  
  useEffect(() => {
    document.title = `Chats (${count})`
  })    
  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => {
        setCount(count + 1);
    }}>Add Value</button>
    </>
  )
}

export default UseEffects