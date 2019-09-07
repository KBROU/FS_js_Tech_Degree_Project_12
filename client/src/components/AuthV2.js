import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

export default class AuthV2 extends Component {
  constructor() {
        super()
        //this.logoutAction = this.logoutAction.bind(this)
        //this.loginAction = this.logoinAction.bind(this)
    }

  loginAction2(event) {
    axios.get('/api/auth/login/facebook').then(response => {
      console.log(response.data)
    })
  }

  logoutAction2(event) {
    axios.get('/api/auth/logout').then(response => {
      console.log(response.data)
    })
  }

  logoutAction(event) {
    //event.preventDefault()
    fetch('/api/auth/logout', {
      method: "GET",
      // credentials: "include",
      // headers: {
      //   Accept: "application/json",
      //   "Content-Type": "application/json",
      //   "Access-Control-Allow-Credentials": true
      // }
    })
    .catch(error => {
       console.log('Logout error')
    });
  }

  loginAction(event) {
    //event.preventDefault()
    fetch('/api/auth/login/facebook', {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .catch(error => {
         console.log('Login error')
      });
    }

  render() {

    const loggedIn = this.props.loggedIn;

    if(loggedIn === true) {
      return           <div>
                        <div className="container text-lg-center pt-5">
                          <a href="/welcome" className="btn btn-light btn-lg">
                            <div>
                             <span className="button-label"> Start </span>
                            </div>
                          </a>
                        </div>
                        <div className="container text-lg-center pt-5">
                          <a href="#" className="btn btn-light btn-lg" onClick={this.logoutAction}>
                            <div>
                              <span className="svgIcon t-popup-svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                             </span>
                             <span className="button-label"> Logout </span>
                            </div>
                          </a>
                        </div>
                      </div>

    } else {
      return          <div className="container text-lg-center pt-5">
                        <section>
                          <Link to ="#" className="btn btn-light btn-lg" onClick={this.loginAction}>

                          <span className="svgIcon t-popup-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                         </span>
                         <span className="button-label"> Sign in with Facebook </span></Link>
                        </section>



                      </div>
    }

  }
}
