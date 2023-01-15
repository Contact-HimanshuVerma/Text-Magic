import React, { useState } from 'react'







export default function TextForm(props) {
    const [text,setText] = useState('Enter text here');

    
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase", "Success! ")
    }

    const handleLoClick = () => {
      let newText = text.toLowerCase()
      setText(newText)
      props.showAlert("Converted to Lowercase", "Success! ")
    }

    const handleClearText = () => {
      let newText = ''
      setText(newText)
      props.showAlert("Text has been cleared", "Success! ")
    }
    
    const handleOnChange = (event) => {
        console.log("handleOnChange")
        setText(event.target.value)    
    }

    const handleCopyText = (event) => {
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied", "Success! ")
    }

    const handleExtraSpace = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Text Formatted", "Success! ")
    }

   
    
  return (
    <>
      <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
        <h1 >{props.heading}</h1>
        <div className='mb-3'>
        <textarea className="form-control mb-3" style={{backgroundColor:props.mode==="dark"?"grey":"white", color:props.mode==="dark"?"white":"black"}} value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        {/* <button className="btn btn-primary mx-1 my-1" onClick={handleCapitalization}>Capitalization</button> */}
      </div>

      <div className="container my-2" style={{color:props.mode==="dark"?"white":"black"}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).length} words, {text.length} characters</p>
        <p>{text.split(/\s+/).length*.008} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
      </div>
    </>
  )
}
