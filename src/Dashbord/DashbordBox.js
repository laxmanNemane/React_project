import React from 'react'
import { Link } from 'react-router-dom'
import DashBord from '../common/DashBord'
import DashbordNav from '../common/DashbordNav'

const DashbordBox = () => {
    return (
        <div className='d-flex'>
            <DashBord />



            <div className="w-100 " >
                <DashbordNav className="w-100 " />
                <div className='d-flex pt-3 ms-4'>
                    <Link to="/2" className='text-decoration-none text-dark'>
                        <div className='box shadow ms-2 me-3' style={{ width: "250px", height: "200px", borderRadius: "20px" }}>
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col-lg-12 pb-2 pt-4">User</div>
                                    <div className="col-lg-12 py-2"><h3>350</h3></div>
                                    <div className="col-lg-12 py-2"><p>User Archive</p></div>
                                </div>
                            </div>

                        </div>
                    </Link>

                    <div className='box shadow ms-2 me-3' style={{ width: "250px", height: "200px", borderRadius: "20px" }}>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-lg-12 pb-2 pt-4">User</div>
                                <div className="col-lg-12 py-2"><h3>350</h3></div>
                                <div className="col-lg-12 py-2"><p>User Archive</p></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashbordBox
