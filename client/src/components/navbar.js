import React, { Component } from 'react'
import {Redirect,Link} from 'react-router-dom';



export default class Navbar extends Component {
    render() {
        return (
            <header class="header">
            
            <nav className="navbar navbar-expand-lg color_sitio navbar-dark">
                
                <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <span className="navbar-brand mb-0 h1">SGI</span>
                </nav>
                    <div className="container">
                        <Link className="navbar-brand" to="#">Hola, Administrador</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                
                                <li className="nav-item active">
                                    <button type="button" className="btn warning" onClick={this.logOut}>
                                        Cerrar sesión  
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                </header>
        )
    }
}
