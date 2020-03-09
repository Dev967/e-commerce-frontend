import React from 'react';

//router
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';

//react-bootstrap
import {Navbar, Nav} from 'react-bootstrap';

//bootstrap CSS
import'./Assets/bootstrap-4.4.1-dist/css/bootstrap.min.css'; 

//Components
import Home from './Home';
import {Component2} from './Component2';
import Component3 from './Component3';
import ErrorMsg from './Error';
import {Provider} from './Context';
//Data
import navs from './Assets/navItems';
import ProductData from './Assets/HomeProducts';
import Data from './Assets/HomeProducts';

//Navbar
class MyNavbar extends React.Component{
    render(){
return(
    <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand >
        <NavLink to={navs[0].path} >CART</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        {navs.map(e=> <NavLink key={e.id} className="mx-2 text-white" to={e.path}>{e.name}</NavLink>)}
        </Nav>
        </Navbar.Collapse>
    </Navbar>
);
    }       
        }

class MainComponent extends React.Component{
    constructor(){
        super();
       this.modify =  this.modify.bind(this);
    }
    state ={
        data: [...Data]
    }
    modify(c){
        this.setState({data : c})
    }
    render(){
        return(
           <Provider value={{
               data: this.state.data,
               modifyData : this.modify
           }}>
                <BrowserRouter>
            <div>
                <MyNavbar />
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/Component2" component={Component2} exact/>
                    <Route path="/Component3" component={Component3} exact/>
                    <Route component={ErrorMsg}/>
                </Switch>
            </div>
            </BrowserRouter>
           </Provider>
        );
    }
}

export default MainComponent;