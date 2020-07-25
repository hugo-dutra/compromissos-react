import React from 'react';
import * as Material from '@material-ui/core';
import Contato from '../../models/contato.model';
import contatoService from '../../services/contato.service';
import './contatos.css'
import Table from '../design/Table';
import { useDispatch } from 'react-redux';
import VERBOS from '../../ENUMS/verbos.http'
const M = Material;


export default () => {
  const dispatch = useDispatch()
  const contato = new Contato();

  const adicionarContato = () => {

    contato.id = +new Date();
    const novoContato = { id: contato.id, nome: contato.nome, nascimento: contato.nascimento, email: contato.email };
    contatoService(novoContato, VERBOS.POST);
    dispatch({ type: 'ADD_CONTATO', contato: novoContato });

  }

  const colunas = [
    { title: 'Id', field: 'id', hidden: true },
    { title: 'Nome', field: 'nome' },
    { title: 'Nascimento', field: 'nascimento' },
    { title: 'Email', field: 'email' },
  ]


  return (
    <div className="container">
      <div className="form">
        <M.TextField id={'Nome'} label="Nome do contato" value={contato.nome} onChange={(e) => { contato.nome = e.target.value }} />
        <M.TextField id={'Nascimento'} label="Data de nascimento" value={contato.nascimento} onChange={(e) => { contato.nascimento = e.target.value }} />
        <M.TextField id={'Email'} label="Email" value={contato.email} onChange={(e) => { contato.email = e.target.value }} />
        <M.Button style={{ marginTop: '5px' }} onClick={adicionarContato} variant="contained" color="primary">Novo contato</M.Button>
      </div>
      <div className="material-table">
        <Table atualizarTabela={adicionarContato} columns={colunas}></Table>
      </div>
    </div>
  )
}