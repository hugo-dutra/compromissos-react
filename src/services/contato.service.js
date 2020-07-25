import Contato from "../models/contato.model"
import VERBOS from '../ENUMS/verbos.http'

const inserirContato = (contato: Contato) => {
  console.log(contato);
  const contatosDb = localStorage['contatos'] !== undefined ? JSON.parse(localStorage['contatos']) : [];
  Object.assign(contato, { tableData: { id: contato.id } })
  contatosDb.push(contato)
  localStorage['contatos'] = JSON.stringify(contatosDb);
}

const listarContatos = () => {
  const contatosDb = localStorage['contatos'] !== undefined ? JSON.parse(localStorage['contatos']) : [];
  return contatosDb;
}

const excluirContato = (contato: Contato) => {
  const contatosDb = localStorage['contatos'] !== undefined ? JSON.parse(localStorage['contatos']) : [];
  const novosContatos = contatosDb.filter(ct => {
    return ct.id !== contato.id
  });
  localStorage['contatos'] = JSON.stringify(novosContatos);
}

const alterarContato = (contato: Contato) => {
  const contatosDb = localStorage['contatos'] !== undefined ? JSON.parse(localStorage['contatos']) : [];
  const idx = contatosDb.findIndex(c => c.id === contato.id)
  contatosDb[idx] = contato;
  localStorage['contatos'] = JSON.stringify(contatosDb);
}



export default (contato: Contato, metodo: String): any => {
  switch (metodo) {
    case VERBOS.POST:
      return inserirContato(contato);
    case VERBOS.GET:
      return listarContatos();
    case VERBOS.DELETE:
      return excluirContato(contato);
    case VERBOS.UPDATE:
      return alterarContato(contato);
    default:
      break;
  }
}





