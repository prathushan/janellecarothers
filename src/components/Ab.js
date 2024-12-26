// aboutbook.js
import React from 'react';
import '../components/Ab.css'; // Correct import syntax for global CSS

const Ab = ({ title }) => {
  return (
    <header>
      <div className="ab-cont">
        <h3>{title}</h3>
      </div>
    </header>
  );
}

export default Ab;