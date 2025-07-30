import React, { useState } from 'react'
export default function TextForm() {
    const[text,setText]=useState("Enter the text");
    let mytext=()=>{
        console.log("Button is working")
        let newText = text.toUpperCase();
        setText(newText)
    }

    let mytext2=()=>{
        console.log("Button is working")
        let lower=text.toLowerCase();
        setText(lower)
    }
    let mytext3=()=>{
        console.log("Button is working")
        setText("")
    }
  let mytext4 = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };
    let textchange=(event)=>{
        console.log("Your text change is working")
        setText(event.target.value)
    }
  return (
    <>
    <div style={{backgroundColor:'Yellow', minHeight: '100vh'}}>
 <div className="container my-3" >
    <h1>Enter your text here</h1>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label">Example textarea</label>
            <textarea className="form-control" value={text} onChange={textchange}  id="myBox" rows="3"></textarea>
            <button className="btn btn-primary mt-3" onClick={mytext} onChange={textchange}>Uppercase</button>
            <button className="btn btn-primary mx-1 mt-3" onClick={mytext2} onChange={textchange}>Lowercase</button>
            <button className="btn btn-primary mx-1 mt-3" onClick={mytext3} onChange={textchange}>Delete</button>
            <button className="btn btn-primary mx-1 mt-3" onClick={mytext4} onChange={textchange}>Copy</button>
        </div>
 </div>
 <div className="container">
<h1>Text info</h1>
<p>{text.split(" ").length}words and {text.length} characters</p>

 </div>
 </div>
 </>
  )
}
