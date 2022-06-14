import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';

import "./dashbord.css"
import { MdOutlineSpaceDashboard, MdSupervisedUserCircle, MdOutlinePadding, MdBackpack } from "react-icons/md";
import DashbordBox from '../Dashbord/DashbordBox';

const DashBord = ({ name }) => {

    // const [state, setState] = useState(JSON.parse(localStorage.getItem("admin-info")))

    // console.log((state.user.name))

    // let data = state ? <span className='text-warning'>{state.user.name}</span> : "lakhan";

    // const navigate = useNavigate()
    // const LogOut = async () => {
    //     localStorage.removeItem("admin-info")
    //     navigate("/login")

    //     console.log("logout kr do")
    // }


    // // userlsit

    // const userList = () => {
    //     alert("hello lakhan")
    // }



    return (
        <div className="container-fluid sidebar">
            <div className="content">
                <div className="img1">
                    <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="logo img" />
                </div>
                <div className="list">
                    <ul className='list-unstyled h6  pt-5'>
                        <Link to="/1" className='text-decoration-none text-dark '>
                            <li className='navbar-item active   my-3'><MdOutlineSpaceDashboard className='me-3 h4 ' />DashBord</li>
                        </Link>
                        <Link to="/2" className='text-decoration-none text-dark'>
                            <li className='navbar-item '><MdSupervisedUserCircle className='me-3 h4 ' />Message List</li>
                        </Link>
                        <li className='navbar-item active my-3'><MdOutlineSpaceDashboard className='me-3 h4 ' />DashBord</li>
                        <li className='navbar-item'><MdSupervisedUserCircle className='me-3 h4 ' />Message List</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashBord
