import React, { useState } from 'react'
import { useEffect } from 'react'

function UseEffects() {

  const [count , setCount] = useState(0);  
  
  useEffect(() => {
    if(count >= 1){
        document.title = `Chats (${count})`
    }else{
        document.title = `Chats`
    }
  }, [count])    
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