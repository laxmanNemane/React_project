import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../component/Navbar'
import "./Login.css"

const LoginForm = () => {

    const AdminUser = {
        email: "dodgeadmin@yopmail.com",
        password: "123456"
    }


    // state for admin
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, seterror] = useState("");
    const navigate = useNavigate();
    const [er, setEr] = useState()




    // form value getting

    const handleSubmit = (e) => {
        e.preventDefault();
    }




    // console.log(email)
    // console.log(password)
    // console.log(AdminUser.email)
    // console.log(AdminUser.password)


    // login button

    const Login = async () => {

        // if(email==""){
        //     setEr("username is required*")
        // }else{
        //     alert("nahi data hai")
        // }




        if (password === AdminUser.password && email === AdminUser.email) {



            let item = { email, password }
            let result = await fetch("https://dodgeqr.prometteur.in/api/admin/login",
                {
                    method: "POST",
                    headers: {
                        "content-Type": "application/json",
                        "Accept": "application/json"

                    },
                    body: JSON.stringify(item)
                })
            result = await result.json();
            localStorage.setItem("admin-info", JSON.stringify(result))
            alert("Login Successfully")
            navigate("/1")
        } else {
            seterror("please fill the correct Details*")
        }
    }


    // forget password

    const forget = async () => {
        console.log("helloe")


        // let response = await fetch("https://dodgeqr.prometteur.in/api/admin/forgot_password",
        // {
        //     method: "POST",
        //     headers: {
        //         "content-Type": "application/json",
        //         "Accept": "application/json"

        //     },
        //     body: JSON.stringify(email)
        // })
        // response = response.json();
        // localStorage.setItem("admin-info", JSON.stringify(response))
        // alert(" Successfully reset")


    }



    return (
        <div className=''>
            <Navbar />
            <div className="container-fluid body  ">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 text-center py-3  login_page" >
                        <form action="login_form" onSubmit={handleSubmit}>
                            <h4 className=''>Login Form</h4>
                            <div className="text-danger text-start ms-5 ps-5 py-2">{error}</div>
                            <div>
                                <label htmlFor="email" className='' style={{ width: "80px" }}>Email:</label>
                                <input type="text" name='email' id='email' placeholder='email' onChange={e => setemail(e.target.value)} value={email} />

                            </div><br />
                            <div>
                                <label htmlFor="password" className='' style={{ width: "80px" }}>Password:</label>
                                <input type="text" name='password' id='password' placeholder='password' onChange={e => setpassword(e.target.value)} value={password} />

                            </div>
                            <div className='py-2'>
                                <input type="checkbox" /> <label htmlFor="radio_name">Remember Me</label>
                                <span className='ms-5' onClick={forget}>Forget Password</span>
                            </div>
                            <br />
                            <button className='btn btn-outline-primary me-2' onClick={Login}>Log In</button>
                            <Link to="/usersignup">
                                <button className='btn btn-outline-success me-2 ms-2' >Sign Up</button>
                            </Link>
                        </form>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div >
        </div>
    )
}

export default LoginForm;
