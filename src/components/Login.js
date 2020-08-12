import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
  constructor() {
    super()
    this.usuario = React.createRef()
    this.password = React.createRef()
    this.state = { mensajeError: '' }
  }
  /*   actualizarUsuario = (e) => this.setState({ user: e.target.value })

  actualizarPassword = (e) => this.setState({ pass: e.target.value }) */

  procesarLogin = (e) => {
    //console.log(this.state.usuario, this.state.password);
    if (this.usuario.current.value !== '' && this.password.current.value !== '')
      fetch('http://xpense.develotion.com/login.php', {
        method: 'POST',
        //headers:{},
        body: JSON.stringify({
          usuario: this.usuario.current.value,
          password: this.password.current.value,
        }),
      })
        .then((r) => {
          console.log(r.status)
          return r.json()
        })
        .then((respuesta) => {
          console.log(respuesta)
          if (respuesta.codigo === 200) {
            localStorage.setItem('id', respuesta.id)
            localStorage.setItem('apiKey', respuesta.apiKey)

            this.props.dispatch({
              type: 'LOGIN',
              payload: [this.usuario.current.value],
            })
          } else {
            this.setState({ mensajeError: respuesta.mensaje })
          }
        })
    else this.setState({ mensajeError: 'No debe dejar campos en blanco' })
  }

  render() {
    return (
      <div>
        <label>
          Usuario:
          <input
            type="text"
            ref={this.usuario} /* onChange={this.actualizarUsuario}  */
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            ref={this.password} /* onChange={this.actualizarPassword} */
          />
        </label>
        <br />
        <input type="button" value="Ingresar" onClick={this.procesarLogin} />
        <p>{this.state.mensajeError}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps)(Login)
