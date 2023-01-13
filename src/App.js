import React, { useState } from 'react'

import './App.css'
import FuncClick from './FuncClick';
import ClassClick from './ClassClick';

const App = () => {
  const [sh, setsh]= useState(false);
  const [cs, setcs]=useState(false);
 

  const funcclick = ()=>{
   setsh(!sh)
  }

  const clssclick= ()=>{
setcs(!cs)
  }

  return (
    <div>
      <h1>Styling using Functional and class componant</h1>
      <div className='btn-div'>
      <button onClick={funcclick}>To see Styling in functional </button>
      <button onClick={clssclick}>To see Styling in class</button>
      </div>
      <div className='sub-div'>
      {sh ? <FuncClick/>: ""}
      {cs ? <ClassClick /> : ""}
      </div>
     
    </div>
  )
}

export default App
