import contatoService from '../../services/contato.service';
import VERBOS from '../../ENUMS/verbos.http'
import CONTATOS_REDUCER_TYPES from './contatosRecuderTypes'

const INITIAL_STATE = {
  contatos: contatoService({}, VERBOS.GET)
}

const contatoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONTATOS_REDUCER_TYPES.ADD_CONTATO:
      return {
        ...state,
        contatos: [...state.contatos, action.contato]
      }
    case CONTATOS_REDUCER_TYPES.EDIT_CONTATO:
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
    case CONTATOS_REDUCER_TYPES.DEL_CONTATO:
      return {
        ...state,
        contatos: [...action.contato]
      }
    default:
      return state;
  }

}

export default contatoReducer;