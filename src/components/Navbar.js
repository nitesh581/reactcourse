import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Alert from './Alert';

export default function Navbar(props) {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li>
                        </ul>
                        <div className='d-flex'>
                            <div onClick={() => {props.toggleMode('primary')}} className="bg-primary mx-2 rounded border" style={{width: '30px', height: '30px'}}></div>
                            <div onClick={() => {props.toggleMode('danger')}} className="bg-danger mx-2 rounded border" style={{width: '30px', height: '30px'}}></div>
                            <div onClick={() => {props.toggleMode('warning')}} className="bg-warning mx-2 rounded border" style={{width: '30px', height: '30px'}}></div>
                            <div onClick={() => {props.toggleMode('success')}} className="bg-success mx-2 rounded border" style={{width: '30px', height: '30px'}}></div>
                            <div onClick={() => {props.toggleMode('light')}} className="bg-light mx-2 rounded border" style={{width: '30px', height: '30px'}}></div>
                            <div onClick={() => {props.toggleMode('dark')}} className="bg-dark mx-2 rounded border" style={{width: '30px', height: '30px'}}></div>
                        </div>
                        {/* <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light': 'dark'}`}>
                            <input onChange={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div> */}
                    </div>
                </div>
            </nav>
            <Alert alert={props.alert}/>
            <div className='container my-3'>
                <Outlet />
            </div>
        </>        
    )
}
