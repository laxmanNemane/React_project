import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import Navbar from './Navbar'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="container home_page">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-1"></div>
          <div className="col-lg-8 col-md-8 col-sm-10 text-center my-5 ">
            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <h2> adipisicing elit.</h2>
            <img src="https://media.istockphoto.com/vectors/qr-code-icon-information-scan-eps-vector-id1190220856?s=612x612" alt="" />

            <p className='my-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quaerat atque dignissimos quae dicta culpa autem vero corrupti voluptatibus. Error nulla iure repellat.</p>
            <Link to="/usersignup">

              <button type="button" class="btn sign_up px-5 py-2 mx-2">Sign up for free! </button>
            </Link>
            <Link to="/login">

              <button type="button" class="btn btn-light px-5 py-2">Brows Store</button>
            </Link>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-1"></div>
        </div>
      </div>
    </>
  )
}

export default HomePage
