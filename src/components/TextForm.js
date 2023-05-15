import React, {useState} from 'react'

export default function TextForm(props) {
    
    const [text, setText] = useState('Enter text here')
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
            </div>
            <button onClick={handleUpperCaseClick} className="btn btn-primary">Convert to Uppercase</button>
        </div>
    )
}
