import React from 'react'
import { useState } from 'react'
export default function About() {
  const [count, setCount] = useState(0)
  const [click, setClick] = useState(false);

  
  
  function handleClick() {
    click ? setCount(count + 1) : setCount(count - 1);
    setClick(!click)
  }
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>{click?'increment':'decrement' } count  </button> <br />
    </div>
  )
}
