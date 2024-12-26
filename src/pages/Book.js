import React from 'react';
import AboutBook from '../components/Ab';
import '../App.css';

const Book = ({ title }) => {
  return (
    <div className="ab-cont">
      <div>
        <AboutBook title={title} />
      </div>
      
    
      <div className="book-btn">
        <button className="book-click-here-btn">Get It Here</button>
      </div>
    </div>
  );
};

export default Book;
