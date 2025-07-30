import React, { useState } from 'react'
export default function Calculator() {
    const[first,setfirst]=useState(0);
            const[second,setSecond]=useState(0);
            const[res,setRes]=useState(' ');
            const[message,setMessage]=useState(' ');
            const firstno=(e)=>
        {
            setfirst(e.target.value)
        }
        const secondno=(e)=>
        {
            setSecond(e.target.value)
        }
        let add=(result)=>{
            result.preventDefault();
            result=parseInt(first)+parseInt(second)
            setRes(result)
        }
        let sub=(result)=>{
            result.preventDefault();
            result=parseInt(first)-parseInt(second)
            setRes(result)
        }
        let mul=(result)=>{
            result.preventDefault();
            result=parseInt(first)*parseInt(second)
            setRes(result)
        }
        let div=(result)=>{
            result.preventDefault();
            result=parseInt(first)/parseInt(second)
            setRes(result)
        }
  return (
   <div className="container">
        <h1>Calculator</h1>
        <form >
            <div>
                <label>Enter first no.</label>
            <input type="text" placeholder="Input firstno" value={first} onChange={firstno}></input>
            </div>
            <div>
                <label>Enter second no.</label>
            <input type="text" placeholder="Input secondno" value={second} onChange={secondno}></input>
            </div>
            <div>
                <button className='btn btn-primary mx-3 mt-1' onClick={add}>Addtion</button>
                <button className='btn btn-primary mx-3 mt-1' onClick={sub} > Substraction</button>
                <button className='btn btn-primary mx-3 mt-1' onClick={mul}> Multiplication</button>
                <button className='btn btn-primary mx-3 mt-1' onClick={div} > Divide</button>
            </div>
            <div className='center'>
            <h4>{message}</h4>
            <p>Result: {res}</p>
            </div>
        </form>
    </div>
  )
}
