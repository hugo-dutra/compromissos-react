import contatoService from '../../services/contato.service';

const INITIAL_STATE = {
  contatos: contatoService({}, 'GET')
}

const contatoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_CONTATO':
      return {
        ...state,
        contatos: [...state.contatos, action.contato]
      }
    case 'EDIT_CONTATO':
      const idx = state.contatos.findIndex(obj => obj.id === action.contato.id)
      return {
        ...state,
        contatos: state.contatos.map((contato, i) => {
          if (i === idx) {
            return action.contato
          }
          return contato;
        })
      }
    case 'DEL_CONTATO':
      return {
        ...state,
        contatos: [...action.contato]
      }
    default:
      return state;
  }

}

export default contatoReducer;