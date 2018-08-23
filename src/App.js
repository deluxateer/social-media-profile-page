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
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <main className="container">
          <Summary></Summary>
        </main>
        <footer>
          <div class="container">
            <ul class="list-inline">
              <li class="list-inline-item"><a href="#">About Us</a></li>
              <li class="list-inline-item"><a href="#">Privacy</a></li>
              <li class="list-inline-item"><a href="#">Terms</a></li>
              <li class="list-inline-item"><a href="#">Jobs</a></li>
              <li class="list-inline-item"><a href="#">API</a></li>
            </ul>
            <div class="legal">
              <p>&copy;CheckOut. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
