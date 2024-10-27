import React from 'react'
import { BsStripe } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Headers() {
  const navigate=useNavigate();
  const callLogin = () => {
    navigate('/Login');
  }
  const callSignUp = () => {
    navigate('/SignUp');
  }
  return (
    <div>
      <header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <BsStripe className="bi pe-none" size={40} />{/* <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg> */}
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" className="nav-link px-2 text-secondary">Home</Link></li>
          <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 text-white">About</a></li>
        </ul>


        <div className="text-end">
          <button type="button" onClick={callLogin} className="btn btn-outline-light me-2">Login</button>
          <button type="button" onClick={callSignUp} className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Headers
