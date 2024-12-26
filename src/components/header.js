import React from 'react';
import '../components/header.css'; // Correct import syntax for global CSS

const Header = () => {
  return (
    <header>
      <div className="header">
        <h1 className="h1-custom">janelle carothers</h1>  {/* Added className */}
        <h3 className="h3-custom">Costume Designer + Stylist</h3>
      </div>
    </header>
  );
}

export default Header;
