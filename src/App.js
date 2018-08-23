import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Navbar from './Components/Navbar';
import Summary from './Components/Summary';
import Favorites from './Components/Favorites';
import Submition from './Components/Submition';
import Feed from './Components/Feed';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <main className="container">
          
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
