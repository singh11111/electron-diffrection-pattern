import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { BsStripe } from "react-icons/bs";
function Footer() {
  return (
    <div className="container-1">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <BsStripe className="bi pe-none" size={40} /><svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
      </div>
  
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-body-secondary" href="#"><IoLogoTwitter size={24}/><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="text-body-secondary" href="#"><FaInstagram size={24}/><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="text-body-secondary" href="#"><FaFacebook size={24}/><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
      </ul>
    </footer>
  </div>
  )
}

export default Footer
