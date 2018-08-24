import React, { Component } from 'react';
import Post from './Post';

const Feed = () => {

  const headerImg1 = [
    {
      headerImgSrc: "https://picsum.photos/200/100",
      headerAltText: "Feed 1"
    }
  ];

  const headerImg2 = [
    {
      headerImgSrc: "https://picsum.photos/200/100",
      headerAltText: "Feed 2"
    }
  ];

  const headerImg3 = [
    {
      headerImgSrc: "https://picsum.photos/200/100",
      headerAltText: "Feed 3"
    },
    {
      headerImgSrc: "https://picsum.photos/200/100",
      headerAltText: "Feed 3"
    }
  ];

  return (
    <div className="profile-feed">
        {/* <!-- First Feed Item --> */}
        <Post
          headerImgs={headerImg1}
          proImgSrc="https://picsum.photos/40"
          proAltText="Profile Picture"
          feedRecent={true}
          authorName="John Doe"
          isVerified={false}
          authorJob="Web Developer"
          timestamp="05/21"
          postText="Finished making my ecommerce store! I'm so glad that I finished it!"></Post>
        {/* <!-- Second Feed Item --> */}
        <Post
          headerImgs={headerImg2}
          proImgSrc="https://picsum.photos/40"
          proAltText="Profile Picture"
          feedRecent={false}
          authorName="John Doe"
          isVerified={false}
          authorJob="Web Developer"
          timestamp="05/17"
          postText="I'm sure Rex will be happy about the rope toy I made for him!"></Post>
        {/* <!-- Third Feed Item --> */}
        <Post
          headerImgs={headerImg3}
          proImgSrc="https://picsum.photos/40"
          proAltText="Profile Picture"
          feedRecent={false}
          authorName="John Doe"
          isVerified={false}
          authorJob="Web Developer"
          timestamp="05/14"
          postText="I'm making great progress so far. I can't to show you all what it will look like when it's done!"></Post>
        {/* <!-- Fourth Feed Item --> */}
        <Post
          headerImgs={[]}
          proImgSrc="https://picsum.photos/40"
          proAltText="Profile Picture"
          feedRecent={false}
          authorName="John Doe"
          isVerified={false}
          authorJob="Web Developer"
          timestamp="05/12"
          postText="I'm going to make an ecommerce store. I've always wanted to make one and I've finally decided to do something about it!"></Post>
      </div>
  );
};

export default Feed;
