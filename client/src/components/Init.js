import React, { Component } from 'react'
import Login from './Login'

export default class Init extends Component {
    render() {
        return (
            <div className="altura-login">
                <div className="text-center">
                    <p className="title text-white">SAER</p>
                </div>
                <Login/>
                <div className="text-center m-3 text-white">
                    <h5>© Copyright 2020 | Todos los derechos reservados al desarrollo de administración de edificios SAER</h5>
                </div>
            </div>
        )
    }
}
