import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <a className="navbar-brand" href="#">
        <img src="https://picsum.photos/30" className="d-inline-block align-top" alt="Logo" />
        CheckOut
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link px-3" href="#">FAQs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="#">PUBLIC</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="#">FRIENDS</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="https://picsum.photos/30/27" className="d-inline-block align-top" alt="Profile Picture"/>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">My Profile</a>
              <a className="dropdown-item" href="#">Settings</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Log Out</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
