import React from 'react';
import design from '../../public/images/design.png';
import Cubic from '../../public/images/Cubic.svg';
import Monoclinic from '../../public/images/Monoclinic.svg';
import Triclinic from '../../public/images/Triclinic.svg';
import Orthorhombic from '../../public/images/Orthorhombic.svg';
import Hexagonal from '../../public/images/Hexagonal.svg';
import Tetragonal from '../../public/images/Tetragonal.svg';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate();
  const callcubic = () => {
    navigate('/Cubic');
  }
  const calltriclinic = () => {
    navigate('/Triclinic');
  }
  const callMonoclinic = () => {
    navigate('/Monoclinic');
  }
  const callOrthorhombic = () => {
    navigate('/Orthorhombic');
  }
  const callTrigonal = () => {
    navigate('/Trigonal');
  }
  const callHexagonal = () => {
    navigate('/Hexagonal');
  }
  const callTetragonal = () => {
    navigate('/Tetragonal');
  }
  return (
    <>
    
      <div className="home">
        <div>
<button className="btn btn-primary" type="button" disabled>
  <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
  <span role="status"><h1>Welcome to Electron Differction Pattern</h1> </span>
</button>
        <div className="container-3">
            <div className="container-5">
            <div className="item">
            <button type="button" onClick={callcubic} className="btn btn-primary">Cubic</button>
              <img className="mainimages" src={Cubic} alt="Cubic" />
            </div>
            <div className="item">
            <button type="button" onClick={calltriclinic} className="btn btn-secondary">Triclinic</button>
              <img className="mainimages" src={Triclinic} alt="Triclinic" />
            </div>
            <div className="item">
            <button type="button" onClick={callMonoclinic} className="btn btn-success">Monoclinic</button>
              <img className="mainimages" src={Monoclinic} alt="Monoclinic" />
            </div>
            <div className="item">
            <button type="button"onClick={callOrthorhombic} className="btn btn-danger">Orthorhombic</button>
              <img className="mainimages" src={Orthorhombic} alt="Orthorhombic" />
            </div>
          </div>
          <div className="container-6">
            <div className="item">
            <button type="button"onClick={callTrigonal} className="btn btn-warning">Trigonal</button>
              <img className="mainimages" src={Cubic} alt="Trigonal" />
            </div>
            <div className="item">
            <button type="button"onClick={callHexagonal} className="btn btn-info">Hexagonal</button>
              <img className="mainimages" src={Hexagonal} alt="Hexagonal" />
            </div>
            <div className="item">
            <button type="button" onClick={callTetragonal} className="btn btn-light">Tetragonal</button>
              <img className="mainimages" src={Tetragonal} alt="Tetragonal" />
            </div>
          </div>
          </div>
        </div>
        <div className="container-4">
          <img className="mainrightsideimage" src={design} alt="Design" />
        </div>
      </div>
    </>
  );
}

export default Home;

