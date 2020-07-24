import React from 'react';
import './Content.css'
import Telefones from '../cruds/telefones';
import Contatos from '../cruds/contatos';
import Compromissos from '../cruds/compromissos';
import { Switch, Route } from 'react-router-dom'

export default () => {
  return (
    <div className="content">
      <Switch>
        <Route path="/" exact={true} component={Contatos} />
        <Route path="/telefones" exact={true} component={Telefones} />
        <Route path="/compromissos" exact={true} component={Compromissos} />
      </Switch>
    </div>

  )
}