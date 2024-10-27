import React from 'react'
import { IoHome } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import { BsTable } from "react-icons/bs";
import { IoMdGrid } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
const Sidebar = () => {
return(
    <div className='sidebar' >
        <div className="d-flex flex-column flex-shrink-0 bg-body-tertiary"   style={{ width: '4.5rem' }}>
    {/* <a href="/" className="d-block p-3 link-body-emphasis text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
    
      <span className="visually-hidden">Icon-only</span>
    </a> */}
    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li className="nav-item">
      <Link to = '/' className="nav-link active py-3 border-bottom rounded-0" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Home" data-bs-original-title="Home">
      <IoHome className="bi pe-none" size={24}/>
        </Link>
      </li>
      <li>
        <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
        <BsSpeedometer2 className="bi pe-none" size={24}/> {/* <svg className="bi pe-none" width="24" height="24" role="img" aria-label="Dashboard"><use xlinkHref="#speedometer2"></use></svg> */}
        </a>
      </li>
      <li>
        <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Orders" data-bs-original-title="Orders">
        <BsTable className="bi pe-none" size={24}/>  {/* <svg className="bi pe-none" width="24" height="24" role="img" aria-label="Orders"><use xlinkHref="#table"></use></svg> */}
        </a>
      </li>
      <li>
        <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Products" data-bs-original-title="Products">
        <IoMdGrid className="bi pe-none" size={24}/> {/* <svg className="bi pe-none" width="24" height="24" role="img" aria-label="Products"><use xlinkHref="#grid"></use></svg> */}
        </a>
      </li>
      <li>
        <a href="#" className="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Customers" data-bs-original-title="Customers">
        <BsPersonCircle className="bi pe-none" size={24}/>   {/* <svg className="bi pe-none" width="24" height="24" role="img" aria-label="Customers"><use xlinkHref="#people-circle"></use></svg> */}
        </a>
      </li>
    </ul>
    <div className="dropdown border-top">
      <ul className="dropdown-menu text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
    </div>

)
}
export default Sidebar;