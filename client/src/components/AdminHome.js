import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './navbar.js'
import {Redirect,Link} from 'react-router-dom';

export default class AdminHome extends Component {
    state = {
        rut: 0,
        cod_rol: "",
        verify: true,
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
            verify: res.data.resul,
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
            <div>
                <Navbar/>
                <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                    <br/>
                    <br/>
                    <br/>
                    <br/>  
                        <h1 className="display-4">BIENVENIDO A SGI</h1>
                        <br/>
                        <p className="lead">Sistema de Gestión para Importaciones</p>
                    </div>
                    </div>
                </div>
            </div>  

        )
    };
}
