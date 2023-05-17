import React, {useState} from 'react'

export default function TextForm(props) {
    
    const [text, setText] = useState('')
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }
    
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
                </div>
                <button onClick={handleUpperCaseClick} className="btn btn-primary mx-2">Convert to Uppercase</button>
                <button onClick={handleLowerCaseClick} className="btn btn-primary mx-2">Convert to Lowercase</button>
            </div>
            <div className="container my-3">
                <h1>Your text summay</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
        
    )
}

