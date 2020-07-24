import React from 'react';
import './Content.css'
import Telefones from '../cruds/telefones';
import Contatos from '../cruds/contatos';
import Compromissos from '../cruds/compromissos';

export default () => {
  return (
    <div className="content">
      <Telefones></Telefones>
      <Contatos></Contatos>
      <Compromissos></Compromissos>
    </div>

  )
}