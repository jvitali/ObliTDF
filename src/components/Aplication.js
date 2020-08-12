import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Dashboard from './Dashboard'
import Registro from './Registro'

class Aplication extends Component {
  render() {
    switch (this.props.estadoUsuario) {
      case 'logeado':
        return (
          <div>
            <Dashboard />
          </div>
        )
      case 'registrarse':
        return (
          <div>
            <Registro />
          </div>
        )
      default:
        return (
          <div>
            <Login />
          </div>
        )
    }
  }
}

const mapStateToProps = (state) => ({
  estadoUsuario: state.estadoUsuario,
})

export default connect(mapStateToProps)(Aplication)
