import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './navbar.js'
import Sidebar from './sidebar.js'
import Bienvenida from './Bienvenida.js'
import {Redirect,Link} from 'react-router-dom';


export default class AdminHome extends Component {
    state = {
        rut: 0,
        cod_rol: "",
        verify: undefined,
        message: "",
    };

    componentDidMount = async () => {
        const res = await axios.get('/auth/adm/');
        this.setState({
            verify: res.data.resul,
            cod_rol: res.data.cod_rol,
            message: res.data.message
        });
    };

    componentWillUnmount = () => {
        alert(this.state.message);
    };

    logOut = async () => {
        const res = await axios.get("/auth/logout");
        this.setState({
            verify: res.data.logout,
            message: res.data.message
        });
    };
    
    render() {
        switch(this.state.verify) {
            case false:
                return <Redirect to={{ pathname: '/users/'+this.state.cod_rol}}/>;
            case null:
                return <Redirect to={{ pathname: '/'}}/>; 
            default:
                break;
        };
        if(this.state.verify)
        return (
            
            <div >
    
                <div class="layout has-sidebar fixed-sidebar">
                  <aside >
                    <Sidebar/>
                    </aside>                 
                  <div class="layout">
                    <header class="header"><Navbar logOut={this.logOut}/></header>
                    <Bienvenida/>


                    <div class="overlay"></div>
                  
                  </div>
                </div>            
 
            </div>
        )
        else 
        return <div/>
    };
}
