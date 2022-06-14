import React from 'react'
import DashBord from '../common/DashBord'
import DashbordNav from '../common/DashbordNav'
import { AiFillDelete, AiTwotoneEdit, AiFillFileAdd } from "react-icons/ai";

const MessageList = () => {
    return (
        <div className='d-flex'>
            <DashBord />

            <div className="w-100 " >
                <DashbordNav className="w-100 " />
                <div className='d-flex pt-3 ms-4'>
                    <div className='container-fluid mx-5 pt-5'>
                        <strong>Message List</strong>
                        <hr />
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>
                                        <div class="dropdown ">
                                            <a className="text-decoration-none text-dark " id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                :
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a class="dropdown-item" href="#"><AiTwotoneEdit className="me-2 text-secondary" />EDIT</a></li>
                                                <li><a class="dropdown-item" href="#"><AiFillDelete className="me-2 text-secondary" />DELETE </a></li>
                                                <li><a class="dropdown-item" href="#"><AiFillFileAdd className="me-2 text-secondary" />SOMTHING  </a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>
                                        <div class="dropdown ">
                                            <a className="text-decoration-none text-dark " id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                :
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a class="dropdown-item" href="#"><AiTwotoneEdit className="me-2 text-secondary" />EDIT</a></li>
                                                <li><a class="dropdown-item" href="#"><AiFillDelete className="me-2 text-secondary" />DELETE </a></li>
                                                <li><a class="dropdown-item" href="#"><AiFillFileAdd className="me-2 text-secondary" />SOMTHING  </a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>
                                        <div class="dropdown ">
                                            <a className="text-decoration-none text-dark " id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                :
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a class="dropdown-item" href="#"><AiTwotoneEdit className="me-2 text-secondary" />EDIT</a></li>
                                                <li><a class="dropdown-item" href="#"><AiFillDelete className="me-2 text-secondary" />DELETE </a></li>
                                                <li><a class="dropdown-item" href="#"><AiFillFileAdd className="me-2 text-secondary" />SOMTHING  </a></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageList
