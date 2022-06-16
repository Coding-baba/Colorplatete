import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
 <>
 
 <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode==="light"? "dark": "light"}`} href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode==="light"? "dark": "light"}`} aria-current="page" href='#'>Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${props.mode==="light"? "dark": "light"}`} href="#">About</a>
        </li>
        </ul>
        <div className="d-flex">
  <div className="bg-primary  rounded mx-3 " onClick={()=>props.toggleModes("primary")} style={{height:"30px",width: "30px"}}></div>
  <div className="bg-warning  rounded mx-3 " onClick={()=>props.toggleModes("warning")} style={{height:"30px",width: "30px"}}></div>

  <div className="bg-success  rounded mx-3 " onClick={()=>props.toggleModes("success")} style={{height:"30px",width: "30px"}}></div>

  <div className="bg-danger  rounded mx-3 " onClick={()=>props.toggleModes("danger")} style={{height:"30px",width: "30px"}}></div>

        </div>
        <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.toggleMode}/>
  <label className={`form-check-label text-${props.mode==="light"? "dark": "light"}`} htmlFor="flexSwitchCheckDefault" >Enable dark mode </label>
</div>
        </div>
    </div>
  
</nav>

 </>
  )
}


Navbar.propTypes = {
    title: PropTypes.string
  }

Navbar.defaultProps ={
    title: "Textutilis"
}