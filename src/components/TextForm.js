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
    const handleClearTextClick = () => {
        let newText = ''
        setText(newText)
    }
    const handleCopyTextClick = () => {
        document.getElementById('myText').select()
        navigator.clipboard.writeText(text)
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }
    
    return (
        <>
            <div className='container' style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        value={text} 
                        onChange={handleOnChange} 
                        style={{
                            color: props.mode === 'dark' ? 'white' : 'black',
                            backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                        }} 
                        id="myText" 
                        rows="8"
                    ></textarea>
                </div>
                <button onClick={handleUpperCaseClick} className="btn btn-primary mx-2">Convert to Uppercase</button>
                <button onClick={handleLowerCaseClick} className="btn btn-primary mx-2">Convert to Lowercase</button>
                <button onClick={handleClearTextClick} className="btn btn-primary mx-2">Clear Text</button>
                <button onClick={handleCopyTextClick} className="btn btn-primary mx-2">Copy Text</button>
                <button onClick={handleExtraSpaces} className="btn btn-primary mx-2">Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h1>Your text summay</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
        
    )
}

