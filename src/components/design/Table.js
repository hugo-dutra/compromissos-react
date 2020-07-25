import React from 'react';
import MaterialTable from 'material-table';
import contatoService from '../../services/contato.service';
import tableIcons from './table.icons'
import { useSelector, useDispatch } from 'react-redux';
import VERBOS from '../../ENUMS/verbos.http'
import CONTATOS_REDUCER_TYPES from '../../store/reducers/contatosRecuderTypes';

export default (props) => {

  let dados = useSelector(state => state.contatosReducers.contatos)
  const dispatch = useDispatch();
  const columns = props.columns;

  return (
    <MaterialTable style={{ width: '100%' }} icons={tableIcons}
      title="Editable Preview"
      columns={columns}
      data={dados}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            newData['id'] = +new Date();
            dispatch({ type: CONTATOS_REDUCER_TYPES.ADD_CONTATO, contato: newData })
            resolve();
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            contatoService(newData, VERBOS.UPDATE);
            dispatch({ type: CONTATOS_REDUCER_TYPES.EDIT_CONTATO, contato: newData })
            resolve()
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            const dadosAntigos = [...dados];
            const index = oldData.tableData.id;
            dadosAntigos.splice(index, 1);
            contatoService(oldData, VERBOS.DELETE);
            dispatch({ type: CONTATOS_REDUCER_TYPES.DEL_CONTATO, contato: dadosAntigos })
            resolve()
          }),
      }}
    />
  )
}