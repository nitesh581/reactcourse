import React, {useState} from 'react'

export default function TextForm(props) {
    
    const [text, setText] = useState('')
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Uppercase done', 'success')
    }
    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Lowercase done', 'success')
    }
    const handleClearTextClick = () => {
        let newText = ''
        setText(newText)
        props.showAlert('Text Cleared', 'success')
    }
    const handleCopyTextClick = () => {
        document.getElementById('myText').select()
        navigator.clipboard.writeText(text)
        document.getSelection().removeAllRanges();
        props.showAlert('Text Copied', 'success')
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert('Extra spaces removed', 'success')
    }
    
    return (
        <>
            <div className='container' style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        value={text} 
                        onChange={handleOnChange} 
                        style={{
                            color: props.mode === 'dark' ? 'white' : 'black',
                            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                        }} 
                        id="myText" 
                        rows="8"
                    ></textarea>
                </div>
                <button disabled={text.length === 0} onClick={handleUpperCaseClick} className="btn btn-primary mx-2 my-1">Convert to Uppercase</button>
                <button disabled={text.length === 0} onClick={handleLowerCaseClick} className="btn btn-primary mx-2 my-1">Convert to Lowercase</button>
                <button disabled={text.length === 0} onClick={handleClearTextClick} className="btn btn-primary mx-2 my-1">Clear Text</button>
                <button disabled={text.length === 0} onClick={handleCopyTextClick} className="btn btn-primary mx-2 my-1">Copy Text</button>
                <button disabled={text.length === 0} onClick={handleExtraSpaces} className="btn btn-primary mx-2 my-1">Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h1>Your text summay</h1>
                <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length ? text : 'Nothing to Preview'}</p>
            </div>
        </>        
    )
}

