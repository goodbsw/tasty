import React from 'react';

const Nav = function() {
  return (
    <nav>
      <div className="nav-wrapper" style={{backgroundColor: "black"}}>
        <a href="#" className="brand-logo center">Tasty Road</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="#">Filter</a></li>
          <li><a href="#">Post</a></li>
        </ul>
      </div>
    </nav>
  );
};


export default Nav;