import React from 'react';
import Post from './Post';

const Feed = (props) => {

  let postsJSX = [];
  let { posts } = props;

  if(posts){
    posts.map(post => {
      return postsJSX.push(
        <Post
          key={post.id}
          id={post.id}
          headerImgs={post.headerImgs}
          proImgSrc={post.proImgSrc}
          proAltText={post.proAltText}
          feedRecent={ (posts.indexOf(post) === 0) ? true : false}
          authorName={post.authorName}
          isVerified={post.isVerified}
          authorJob={post.authorJob}
          timestamp={post.timestamp}
          postText={post.postText}
          onDelete={props.onDelete}></Post>
      );
    });
  }

  return (
    <div className="profile-feed">
      {postsJSX}
    </div>
  );
};

export default Feed;
