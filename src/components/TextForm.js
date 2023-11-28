import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleLoClick = () =>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleclearClick = () =>{
        // console.log("Uppercase was clicked");
        let newText = ""
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }

    const handleTitleClick = () =>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
          }).join(' ');
        setText(newText)
        props.showAlert("Converted to Title Case", "success")
    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[  ] + /)
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces", "success")
    }

    const handleCopy = () => {
        let text = document.getElementById("textBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard", "success")
    }

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // setText('new text')
    return (
        <>
    <div className="container"  style = {{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} id="textBox"  style = {{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn-btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn-btn-primary mx-2 my-2" onClick={handleTitleClick}>Title Case</button>
        <button className="btn-btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn-btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn-btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        <button className="btn-btn-primary mx-2 my-2" onClick={handleclearClick}>Clear Text</button>        
    </div>
    <div className="container my-3" style = {{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0?text: "Enter something in the textbox to preview"}</p>
    </div>
    </>
  )
}
