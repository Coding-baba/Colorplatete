import React,{useState} from 'react'

export default function Textform(props) {


const onhandleclick=()=>{    
const newtext=text.toUpperCase()
settext(newtext);
props.showalert("Covert to Uppercase","success")
}
const onhandle=(event)=>{
    settext(event.target.value);
}
const onchngeclick=()=>{
  const text=document.getElementById("exampleFormControlTextarea1");
    text.select();
  navigator.clipboard.writeText(text.value)
  props.showalert("Copy to text","success")
}
const handleclick=()=>{
 const newtext=text.split(/[ ]+/)
 settext(newtext.join(" "))
 props.showalert("Remove to extrasapces","success")
}
const cleartext=()=>{
  const clear=" ";
  settext(clear);
  props.showalert("Text is clear","success")
}
const handlelower =()=>{
  const newt=text.toLowerCase();
  settext(newt)
  props.showalert("Convert to lowecase","success")
}
const[text,settext]=useState("Enter the text here")
  return (
    <>
<div className='container' >
    <h1 style={{color: props.mode==="dark"?"white":"grey"}}>{props.heading}</h1>
    <div className="mb-3 " >

  <textarea className="form-control" style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} id="exampleFormControlTextarea1" value={text}  onChange={onhandle} rows="8"></textarea>
</div>
<button className='btn btn-primary' onClick={onhandleclick}>Convert to upercase</button>
<button className='btn btn-primary mx-2'  onClick={handlelower}>Convert to lowercase</button>
<button className='btn btn-primary mx-2' onClick={onchngeclick}>Copy</button>
<button className='btn btn-primary mx-2' onClick={handleclick}>Remove Space</button>
<button className='btn btn-primary mx-2' onClick={cleartext}>cleartext</button>
</div>
<div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
    <h1>Your text /summary</h1>
    <p>{text.length>0? text.trim().split("").length:0} charcter{text.length}</p>
    <p>{text}</p>
</div>
    </>
  ) 
}
