import React from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState(
    // {
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color:props.mode==='dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'black':'white'
    } 

  return (
    <div className= "container" style={myStyle}>
        <h2 className="my-2">About Us</h2>
            <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
            <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                Analyze Your Text
            </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body" style={myStyle}>
                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or anything.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                Free To Use
            </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils
                reports the number of characters and words, thus suitable for writing text with word/character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Browser Compatible
            </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browsers such as Chrome, Microsoft Edge, Firefox etc. It suits to count characters in facebook, 
                blogs, books, excel sheet, etc.
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
