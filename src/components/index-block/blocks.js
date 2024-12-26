import React from 'react';
import './blocks.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import resumeImage from '../../asserts/images/jane-resume.jpg';
import portfolioImage from '../../asserts/images/jane-portfolio.jpg';
import TrailerImage from '../../asserts/images/jane-house.jpeg';
import BookImage from '../../asserts/images/jane-book.jpg';
import AboutImage from '../../asserts/images/jane-about.jpeg';
import GentlemansImage from '../../asserts/images/jane-gentleman.jpeg';

const Blocks = () => {
  const navigate=useNavigate();

  const handleImageClick=(path)=>{
      navigate(path);

  };

  return (
    <div>
      <div className="block">
        <Link to="/resume" className="container1">
          <img src={resumeImage} alt="Resume" className="image" />
          <div className="text" onClick={()=>handleImageClick('/resume')}  style={{ cursor: 'pointer' }} >Resume
          </div>
        </Link>
        <Link to="/portfolio" className="container2">
          <img src={portfolioImage} alt="Portfolio" className="image" />
          <div className="text" onClick={()=>handleImageClick('/portfolio')}  style={{ cursor: 'pointer' }} >Portfolio</div>
        </Link>
      </div>

      <div className="block">
        <Link to="/trailer" className="container1">
          <img src={TrailerImage} alt="Trailer Rental" className="image" />
          <div className="text" onClick={()=>handleImageClick('/trailer')}  style={{ cursor: 'pointer' }} >Trailer Rental</div>
        </Link>
        <Link to="/book" className="container2">
          <img src={BookImage} alt="Book" className="image" />
          <div className="text" onClick={()=>handleImageClick('/book')}  style={{ cursor: 'pointer' }} >Book</div>
        </Link>
      </div>

      <div className="block">
        <Link to="/about" className="container1">
          <img src={AboutImage} alt="About" className="image" />
          <div className="text" onClick={()=>handleImageClick('/about')}  style={{ cursor: 'pointer' }} >About</div>
        </Link>
        <Link to="/gentlemans-lab" className="container2">
          <img src={GentlemansImage} alt="Gentleman's Lab" className="image" />
          <div className="text" onClick={()=>handleImageClick('/gentlemen')}  style={{ cursor: 'pointer' }} >Gentleman's Lab</div>
        </Link>
      </div>
    </div>
  );
};

export default Blocks;
