import React from 'react';
import AboutBook from '../components/Ab';
import '../App.css';

const Book = ({ title }) => {
  return (
    <div className="ab-cont">
      <div>
        <AboutBook title={title} />
      </div>

    </div>
  );
};

export default Book;
