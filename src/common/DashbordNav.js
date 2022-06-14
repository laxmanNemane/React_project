import React from 'react'
import DashBord from './DashBord'
import { AiFillBell } from "react-icons/ai";
import { Navigate, useNavigate } from 'react-router-dom';

const DashbordNav = () => {
    let data = JSON.parse(localStorage.getItem("admin-info"))
    // console.log(data.user.name)
    const navigate = useNavigate();


    const LogOut=()=>{
        localStorage.removeItem("admin-info")
        navigate("/login")
    }

    return (
        <div className='dashbordnav'>
 
            <div className='Nav d-flex align-items-center '>
                <h3>Hello, <span className='text-warning'>{data.user.name}!</span></h3>
                <ul className='d-flex list-unstyled ms-auto me-5'>
                    <li className='me-5 h4 pt-4'><AiFillBell /></li>
                    <li className='me-5'>
                        <li class="dropdown">
                            <button class="border-button  rounded-3" type='button'  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src='https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' className="user_image pb-3"></img>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <hr/>
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Contact</a></li>
                                <hr/>
                                <li><a class="dropdown-item" href="#" onClick={LogOut}>Logout</a></li>
                            </ul>
                        </li>


                    </li>

                </ul>
            </div>


        </div>
    )
}

export default DashbordNav
