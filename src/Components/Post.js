import React, { Component } from 'react';
import SocialMedia from './SocialMedia';

const Post = ({ headerImgs, proImgSrc, proAltText, feedRecent, authorName, isVerified, authorJob, timestamp, postText }) => {
  let HeaderImgsJSX = [];
  let key = 0;
  if (headerImgs) {
    headerImgs.map(img => {
      HeaderImgsJSX.push(<img key={key++} className="card-img-top" src={img.headerImgSrc} alt={img.headerAltText}/>);
    });
  }
  return (
    <div className={feedRecent ? "post card feed-most-recent" : "post card"}>
      {HeaderImgsJSX}
      <div className="card-body">
        <div className="post-header">
          <img src={proImgSrc} className="rounded img-thumbnail" alt={proAltText}/>
          <div className="post-author">
            <h3 className="card-title"><a href="#">{authorName} {isVerified && <i className="fas fa-check-circle"></i>}</a></h3>
            <h4 className="card-subtitle mb-2 text-muted">{authorJob}</h4>
          </div>
          <span className="post-timestamp">{timestamp}</span>
        </div>
        <p className="card-text">{postText}</p>
        <div className="post-social-links">
          <SocialMedia></SocialMedia>
        </div>
      </div>
    </div>
  );
};

export default Post;
