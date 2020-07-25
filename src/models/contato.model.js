import Telefone from "./telefone.model";
import Compromisso from "./compromisso.model";

export default class Contato {
  id: Number;
  nome: String;
  nascimento: Date;
  email: String;
  telefones: Telefone[];
  compromissos: Compromisso[];
}