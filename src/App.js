
// import About from './About';
import './App';
import Navbar from './Navbar';
 import Textform from './Textform';
import Alert from './Alert';
 import React,{useState} from 'react';
 
// import { BrowserRouter, Route,Routes } from "react-router-dom";


function App() {
 const [mode,setmode] = useState("light");
 const [alert,setalert]=useState(null)


 const showalert=(Message,type)=>{
  setalert({
    msg: Message,
    type: type
  })
  setTimeout(()=>{
 setalert(null)
 },3000)
 }
const removebody=()=>{
document.body.classList.remove("bg-light");
document.body.classList.remove("bg-dark");
document.body.classList.remove("bg-warning");
document.body.classList.remove("bg-success");
document.body.classList.remove("bg-danger");
document.body.classList.remove("bg-primary")
}
const toggleModes=(cls)=>{
  removebody()
  
  document.body.classList.add("bg-"+cls)
}
const toggleMode=()=>{
  if(mode==="light"){
  setmode("dark");
  document.body.style.backgroundColor="#042742";
  showalert("dark mode has been enabled","success")
  }
  else{
    setmode("light")
    document.body.style.backgroundColor="white";
    showalert("light mode has been enabled","warning")
  }
}
  return (
 <>
{/* <BrowserRouter> */}
 <Navbar mode={mode} toggleMode={toggleMode} toggleModes={toggleModes} />
 <Alert alert={alert}/>
 <div className="container my-2">
 
 {/* <Routes>
  <Route path="/about" element={<About/>}/>
  <Route path='/' element={}/>  */}
  <Textform showalert={showalert} heading="Enter the text to analyze" mode={mode} btn="ChangeUppercase"/>


 {/* </Routes> */}

 </div>
 {/* </BrowserRouter> */}
</>
  );
}

export default App;
