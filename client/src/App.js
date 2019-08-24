// /client/App.js
import React, { Component } from 'react';
import {
    Route
} from 'react-router-dom';

//App Components
import Header from './components/Header';
import Navibar from './components/Navibar';
import Welcome from './components/Welcome';


class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: {}
    }
  }

  componentDidMount () {
    this.getUser();
    window.onpopstate = (e) => {
          this.getUser();
        }
  }

  getUser = () => {
    fetch('http://localhost:3001/api/auth/login/success', {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then((data) => data.json())
      .then((res) => this.setState({ loggedIn: true, user: res.user }))
      .catch(error => {
        this.setState({
          loggedIn: false,
          error: "Failed to authenticate user"
        });
      });
  }



  // here is our UI
  // it is easy to understand their functions when you
  // see them render into our screen
  render() {
    return (
      <div>
        <Route
          exact path="/"
          render={ (props) =>
                <Header
                  {...props}
                  loggedIn={this.state.loggedIn}
                  name={this.state.user.name}
                  photo={this.state.user.photo}
                />
          }
        />

        <Route
          path="/welcome"
          render={ (props) =>
              <div>
                <Navibar
                  {...props}
                  loggedIn={this.state.loggedIn}
                  name={this.state.user.name}
                  photo={this.state.user.photo}
                />
                <Welcome
                  {...props}
                  name={this.state.user.name}
                />
              </div>

          }

        />
      </div>
    );
  }
}

export default App;
