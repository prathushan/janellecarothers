import React from 'react';
import '../App.css';


import trailer1 from '../asserts/images/trailer/trailer1.jpg';
import trailer2 from '../asserts/images/trailer/trailer2.jpg';
import trailer3 from '../asserts/images/trailer/trailer3.jpg';
import trailer4 from '../asserts/images/trailer/trailer4.jpg';
import trailer5 from '../asserts/images/trailer/trailer5.jpg';
import trailer6 from '../asserts/images/trailer/trailer6.jpg';
import trailer7 from '../asserts/images/trailer/trailer7.jpg';
import trailer8 from '../asserts/images/trailer/trailer8.jpg';
import trailer9 from '../asserts/images/trailer/trailer9.jpg';



// Import all other images similarly

const TrailerPage = () => {
  return (
    <div className="trailer-page">

    
      <div className="trailer-text">
      <h4>EMAIL FOR RATES</h4>
        </div>

      <div className="trailer-image">
        <img src={trailer9} alt="Trailer 9" /><br></br>
        <img src={trailer8} alt="Trailer 8" />
        <img src={trailer7} alt="Trailer 7" />
        <img src={trailer6} alt="Trailer 6" />
        <img src={trailer5} alt="Trailer 5" />
        <img src={trailer4} alt="Trailer 4" />
        <img src={trailer3} alt="Trailer 3" />
        <img src={trailer2} alt="Trailer 2" />
        <img src={trailer1} alt="Trailer 1" />
      </div>
      <div className="trailer-text">
        <h4>WE PRICE MATCH!</h4>
        <p>
          JANELLENICOLECAROTHERS@GMAIL.COM 
          // i CURE NUDITY INC. // DIMENSIONS // HEIGHT 13′ 5′′ // LENGTH 48′ // 
          WIDTH 8′ 7′′ // WASHER AND DRYER // DOUBLE DECKER ROWS OF RACK SPACE // 
          REFRIGERATOR // MICROWAVE // CENTRAL AIR // COMMON AREA // WORK SPACES // 
          DOUBLE ENTRANCE // LIFT GATE // SMART TV // KOHLER GENERATOR 20K
        </p>
      </div>
    </div>
  );
};
export default TrailerPage;
