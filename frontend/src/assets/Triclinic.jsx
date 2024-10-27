import React from 'react'

function Triclinic() {
  return (
    <div className='triclinic'>
  
      <form className="p-1 p-md-3 border rounded-3 bg-body-tertiary">
      <button className="btn btn-primary" type="button" disabled>
  <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
  <span role="status"><h1>Welcome to Triclinic system</h1> </span>
</button>
          <div className="form-floating mb-1">
            <h2>Enter your First Element Position*</h2>
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput"></label>
          </div>
          <div className="form-floating mb-1">
          <h2>Enter your Second Element Position</h2>
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword"></label>
          </div>
          <div className="form-floating mb-1">
          <h2>Enter your Third Element Position</h2>
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword"></label>
          </div>
          <div className="form-floating mb-1">
          <h2>Enter your Fourth Element Position</h2>
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword"></label>
          </div>
          <p><strong>    Center of Triclinic system is considered as (0,0,0)</strong></p>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Enter</button>
         
        </form>
    </div>
  )
}

export default Triclinic