import estadoInicial from '../estadoInicial'

function reducer(state = estadoInicial, action) {
  console.log('En reducer', state, action)
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        estadoUsuario: 'logeado',
        user: action.payload[0],
        pass: action.payload[1],
      }

    case 'AGREGAR':
      const tareaNueva = {
        id: state.idTareaActual,
        tarea: action.payload,
        finalizado: false,
      }
      return {
        ...state,
        tareas: [...state.tareas, tareaNueva],
        idTareaActual: state.idTareaActual + 1,
      }
    case 'INCREMENTAR1':
      return { ...state, idTareaActual: state.idTareaActual + 1 }
    default:
      return state
  }
}

export default reducer
