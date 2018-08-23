import React, { Component } from 'react';
import SocialMedia from './SocialMedia';

const Summary = () => {
  return (
    <div className="profile-summary card">
      <div className="card-header">
        <h2>Summary</h2>
      </div>
      <img src="https://picsum.photos/200" className="card-img-top rounded mx-auto d-block img-thumbnail profile-picture" alt="Profile Picture" />
      <div className="card-body text-center">
        <h3 className="card-title">John Doe</h3>
        <h4 className="card-subtitle mb-2 text-muted">Web Developer</h4>
        <div className="card-text">
          <p className="dob">Born: June 9, 1993</p>
          <p className="interests">Interests: Coding, Music Composition, Sculpting, Goldsmithing</p>
        </div>
        <SocialMedia></SocialMedia>
      </div>
    </div>
  );
};

export default Summary;
