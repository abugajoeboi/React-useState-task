import React, { useState } from 'react'


export default function Counter() {
    const [counter, setConuter]=useState(8)

    function counterHandler(){
        setConuter(counter + 1);
    }
  return (
    <div>
        <p>Counter:{counter}</p>
        <button onClick={counterHandler}>click to increase</button>
        

    </div>
  )
}
