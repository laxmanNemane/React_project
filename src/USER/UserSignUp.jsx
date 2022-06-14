import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar'
import "./sign.css"


const UserSignUp = () => {




    const [email, setemail] = useState("");
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");
    const [error, seterror] = useState("");
    const navigate = useNavigate();
    // const [state, setstate] = useState([])

    // const [users, setUsers] = useState([])


    // user data
    const [state, setState] = React.useState([{
        firstName: "",
        lastName: ""
    }])


    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }
    const Register = () => {

        alert("hello lakhan")

        let item = state
        console.log(item)
        localStorage.setItem("user", JSON.stringify(item))
    }

    // console.log(users)


    // console.log(user)


    return (
        <div>
            <Navbar />
            <section className="vh-100 gradient-custom  signup">
                <div className="container  h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-2 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                                    {/* form */}
                                    <form>
                                        <label>
                                            First name
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={state.firstName}
                                                onChange={handleChange}
                                            />
                                        </label>
                                        <label>
                                            Last name
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={state.lastName}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </form>
                                    <button onClick={Register}>Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserSignUp

