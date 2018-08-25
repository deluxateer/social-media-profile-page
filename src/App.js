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
          authorName: "John Doe",
          isVerified: false,
          authorJob: "Web Developer",
          timestamp: "05/17",
          postText: "I'm sure Rex will be happy about the rope toy I made for him!"
        }
      ],
      favPosts: [
        {
          id: 0,
          headerImgs: [
            {
              headerImgSrc: "https://picsum.photos/200/100",
              headerAltText: "Favorites 1"
            }
          ],
          proImgSrc: "https://picsum.photos/40",
          proAltText: "Profile Picture",
          authorName: "Jane Smith",
          isVerified: true,
          authorJob: "Embroidery Artisan",
          timestamp: "03/23",
          postText: "I finally made the quilt I've always dreamed of making!"
        },
        {
          id: 1,
          headerImgs: [
            {
              headerImgSrc: "https://picsum.photos/200/100",
              headerAltText: "Favorite 2"
            },
            {
              headerImgSrc: "https://picsum.photos/200/100",
              headerAltText: "Favorite 2"
            }
          ],
          proImgSrc: "https://picsum.photos/40",
          proAltText: "Profile Picture",
          authorName: "Chance Jackson",
          isVerified: false,
          authorJob: "Polisher",
          timestamp: "03/16",
          postText: "It's amazing to see how much simple polishing can do to bring out the beauty in a steel object!"
        }
      ]
    }

  deleteFavPost = (postId) => {
    let updatedPosts = this.state.favPosts.filter(currPost => {
      return currPost.id !== postId;
    });
    this.setState({
      favPosts: updatedPosts
    });
  };

  deleteFeedPost = (postId) => {
    let updatedPosts = this.state.feedPosts.filter(currPost => {
      return currPost.id !== postId;
    });
    this.setState({
      feedPosts: updatedPosts
    });
  };

  createPost = (text, image) => {
    let currDate = new Date();
    let updatedPosts = this.state.feedPosts;
    updatedPosts.unshift({
      id: Date.now(),
      headerImgs: [{
        headerImgSrc: image,
        headerAltText: `Feed ${this.state.feedPosts.length}`
      }],
      proImgSrc: "https://picsum.photos/40",
      proAltText: "Profile Picture",
      authorName: "John Doe",
      isVerified: false,
      authorJob: "Web Developer",
      timestamp: `${currDate.getMonth()+1} / ${currDate.getDate()}`,
      postText: text
    });
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
          <Favorites
            favPosts={this.state.favPosts}
            onDelete={this.deleteFavPost}></Favorites>
          <div className="post-collection">
            <Submition
              onCreate={this.createPost}></Submition>
            <Feed
              posts={this.state.feedPosts}
              onDelete={this.deleteFeedPost}></Feed>
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
