import React from 'react';
import MaterialTable from 'material-table';
import contatoService from '../../services/contato.service';
import tableIcons from './table.icons'
import { useSelector, useDispatch } from 'react-redux';

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
            dispatch({ type: 'ADD_CONTATO', contato: newData })
            resolve();
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            contatoService(newData, 'UPDATE');
            dispatch({ type: 'EDIT_CONTATO', contato: newData })
            resolve()
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            const dadosAntigos = [...dados];
            const index = oldData.tableData.id;
            dadosAntigos.splice(index, 1);
            contatoService(oldData, 'DELETE');
            dispatch({ type: 'DEL_CONTATO', contato: dadosAntigos })
            resolve()
          }),
      }}
    />
  )
}