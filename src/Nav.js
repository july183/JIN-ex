import logo from './logo.svg';
import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import './Nav.css';

class Navi extends Component{
    constructor(prop){
        super(prop);
        this.state ={ naviState : false, }
    }
    toggle = () =>{               
        this.setState({
                naviState : !this.state.naviState, 
            });
    }
    render(){

        return (
              <Navbar >
                  <NavbarBrand tag='h1'>
                      <a href='/'>
                          <img src='./logo/log1.png' style={{ height: 80 }} />
                      </a>
                  </NavbarBrand>
                  
                  <Nav data-open={this.state.naviState} className='d-none d-md-flex ' id="gnb" >
                      <NavItem>
                          <NavLink href='#about'>
                              장기렌트
                          </NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink href='#portfolio'>
                              단기렌트
                          </NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink href='#contact'>
                             매장찾기
                          </NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink href='#ttx1' className='scroll-page'>
                             이달의 추천
                          </NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink href='#contact'>
                             <img src='./logo/1.jpg' />
                          </NavLink>
                      </NavItem>
                  </Nav>
              </Navbar>  
            )
    }
 
}

export default Navi;
