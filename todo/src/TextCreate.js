import React, {useState} from 'react'
import './TextCreate.css';


function TextCreate() {

    function uppertext() {
        let newtext=text.toUpperCase();
        setText(newtext);
        console.log("uppertext called");
    }

    function lowertext() {
        let newtext=text.toLowerCase();
        setText(newtext);
        console.log("lowertext called");
    }

    function cleartext() {
        let newtext="";
        setText(newtext);
        console.log("cleartext called")
    }

    function inputtext(event) {
        let newtext = event.target.value;
        setText(newtext);
        console.log("inputtext called");
    }

    function copytext() {
        navigator.clipboard.writeText(text);
        alert("Text Copied");
        console.log("copytext called");
    }

    
    function calculatetime() {
        let textarray = text.split(" ");
        SetTime(0.008*(textarray.length)+" Minutes") 
        console.log("calculatetime called"+textarray);
    }
    
    const [text, setText] = useState(''); 

    const [time, SetTime] = useState('');

    return (
        <>
            <div>
                <p id="formlabel1" className="formlabel">Enter Your Text Here</p>
                <textarea value={text} id="textarea" onChange={inputtext} cols="30" rows="10" className="textarea"></textarea>
                </div>
            <div id="buttons">
                <button type="button" id="buttonsubmit1" onClick={uppertext} className="btn btn-primary">UpperText</button>
                <button type="button" id="buttonsubmit2" onClick={lowertext} className="btn btn-primary">LowerText</button>
                <button type="button" id="buttonsubmit3" onClick={copytext} className="btn btn-primary">CopyText</button>
                <button type="button" id="buttonsubmit4" onClick={cleartext} className="btn btn-primary">ClearText</button>
                <button type="button" id="buttonsubmit5" onClick={calculatetime} className="btn btn-primary">CalculateTime</button>
            </div>
            <div>
            <h2 id="timing" >Your Text Details:</h2>
            <p>Total {text.split(" ").length} words and {text.length} characters</p>
                <p id="time" className="time">Total Time Taken To Calculate: {time}</p>
            </div>
            <div >
            <h2 id="processedtext">Processed Text:</h2>
            <p>{text}</p>
            </div>
        </>
    )
}

export default TextCreate