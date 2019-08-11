import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

export default class Navibar extends React.Component {

  constructor(props) {
    super(props);
    this.test = this.props.test;
  }
  render() {
    return (
      <div w-100="true">
        <Navbar color="light" light expand="md" w-100="true">
          <NavbarBrand href="/">Home</NavbarBrand>
            <Nav className="ml-auto" navbar>
            { !this.props.loggedIn
            ? (
                <NavItem>
                  <NavLink class="h5" href="http://localhost:3001/api/auth/login/facebook">Login</NavLink>
                </NavItem>
              )
            : (
                <Nav pills navbar>
                  <NavItem>
                    <NavLink disabled >
                      <blockquote class="blockquote text-center">
                        <p class="h6 text-dark">{this.props.name}{<br />}Signed In</p>
                      </blockquote>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink disabled >
                      <img src={this.props.photo}/>
                    </NavLink>
                  </NavItem>
                  <NavItem className="mt-2">
                    <NavLink href="http://localhost:3001/api/auth/logout" active>
                      <p class="h6 text-white">Logout</p>
                    </NavLink>
                  </NavItem>
                </Nav>
              )
            }
            </Nav>
        </Navbar>
      </div>
    );
  }
}
