import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Summary from './Components/Summary';
import Favorites from './Components/Favorites';
import Submition from './Components/Submition';
import Feed from './Components/Feed';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas, fab);

class App extends Component {
  state = {
      feedPosts: [
        {
          id: 0,
          headerImgs: [{
            headerImgSrc: "https://picsum.photos/200/100",
            headerAltText: "Feed 1"
          }],
          proImgSrc: "https://picsum.photos/40",
          proAltText: "Profile Picture",
          feedRecent: true,
          authorName: "John Doe",
          isVerified: false,
          authorJob: "Web Developer",
          timestamp: "05/21",
          postText: "Finished making my ecommerce store! I'm so glad that I finished it!"
        },
        {
          id: 1,
          headerImgs: [{
            headerImgSrc: "https://picsum.photos/200/100",
            headerAltText: "Feed 2"
          }],
          proImgSrc: "https://picsum.photos/40",
          proAltText: "Profile Picture",
          feedRecent: false,
          authorName: "John Doe",
          isVerified: false,
          authorJob: "Web Developer",
          timestamp: "05/17",
          postText: "I'm sure Rex will be happy about the rope toy I made for him!"
        },
        {
          id: 2,
          headerImgs: [
            {
              headerImgSrc: "https://picsum.photos/200/100",
              headerAltText: "Feed 3"
            },
            {
              headerImgSrc: "https://picsum.photos/200/100",
              headerAltText: "Feed 3"
            }
          ],
          proImgSrc: "https://picsum.photos/40",
          proAltText: "Profile Picture",
          feedRecent: false,
          authorName: "John Doe",
          isVerified: false,
          authorJob: "Web Developer",
          timestamp: "05/14",
          postText: "I'm making great progress so far. I can't to show you all what it will look like when it's done!"
        },
        {
          id: 3,
          headerImgs: [],
          proImgSrc: "https://picsum.photos/40",
          proAltText: "Profile Picture",
          feedRecent: false,
          authorName: "John Doe",
          isVerified: false,
          authorJob: "Web Developer",
          timestamp: "05/12",
          postText: "I'm going to make an ecommerce store. I've always wanted to make one and I've finally decided to do something about it!"
        }
      ]
    }

  deletePost = (postId) => {
    let updatedPosts = this.state.feedPosts.filter(currPost => {
      console.log(currPost.id, postId);
      return currPost.id !== postId;
    });
    console.log(updatedPosts);
    this.setState({
      feedPosts: updatedPosts
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <main className="container">
          <Summary></Summary>
          <Favorites></Favorites>
          <div className="post-collection">
            <Submition></Submition>
            <Feed
              posts={this.state.feedPosts}
              onDelete={this.deletePost}></Feed>
          </div>
        </main>
        <footer>
          <div className="container">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">About Us</a></li>
              <li className="list-inline-item"><a href="#">Privacy</a></li>
              <li className="list-inline-item"><a href="#">Terms</a></li>
              <li className="list-inline-item"><a href="#">Jobs</a></li>
              <li className="list-inline-item"><a href="#">API</a></li>
            </ul>
            <div className="legal">
              <p>&copy;CheckOut. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
