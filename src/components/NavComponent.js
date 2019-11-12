import React, {Component} from 'react';
import {Navbar, NavbarBrand, NavLink, Nav,
   NavItem, NavbarToggler, Collapse } from 'reactstrap';


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        return (
            <div>
            <Navbar color="faded" light expand="md" >
                <div className="container">
                    <NavbarBrand className="mr-auto" color="faded" href="#">
                        <img alt="logoImg" src="./images/dsc-logo.png"
                         width="64px"
                         height="47px"
                        style={{marginLeft: '0+px',
                        position: "relative",
                        paddingLeft: '0px'
                      }}/>
                    </NavbarBrand>
                    <NavbarToggler onClick= {this.toggleNav} className="mr-2" />
                    <Collapse isOpen={this.state.isOpen} navbar>
                      <Nav className="ml-auto" navbar>
                          <NavItem>
                              <NavLink href="#"
                              style={{fontFamily:'OpenSans',
                              fontStyle:'normal',
                              fontWeight: 'normal',
                              fontSize: '14px',
                              lineHeight: '19px',
                              color: 'rgba(0, 0, 0, 0.6)'}}>About</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink href="#"
                              style={{fontFamily:'OpenSans',
                              fontStyle:'normal',
                              fontWeight: 'normal',
                              fontSize: '14px',
                              lineHeight: '19px',
                              color: 'rgba(0, 0, 0, 0.6)'}}>Team</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink href="#" style={{fontFamily:'OpenSans',
                              fontStyle:'normal',
                              fontWeight: 'normal',
                              fontSize: '14px',
                              lineHeight: '19px',
                              color: 'rgba(0, 0, 0, 0.6)'}}>Events</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink href="#" style={{fontFamily:'OpenSans',
                              fontStyle:'normal',
                              fontWeight: 'normal',
                              fontSize: '14px',
                              lineHeight: '19px',
                              color: 'rgba(0, 0, 0, 0.6)'}}>Contact</NavLink>
                          </NavItem>
                      </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <hr/>
            </div>
        );
    }
}

export default Navigation;
