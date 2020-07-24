import React from 'react';

import './SideMenu.css'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TemaPrincipal from '../../theme/temaPrincipal'
import PeopleAlt from '@material-ui/icons/PeopleAlt';
import Phone from '@material-ui/icons/Phone';
import Event from '@material-ui/icons/Event';
import { useHistory } from "react-router-dom"

export default (props) => {
  let history = useHistory();
  const contatosHandler = () => {
    history.push("/");
  }

  const telefonesHandler = () => {
    history.push('/telefones');
  }

  const compromissosHandler = () => {
    history.push('/compromissos')
  }



  return (
    <div className='side-menu'>
      <List style={{ height: '100vh', backgroundColor: TemaPrincipal.palette.primary.dark }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader style={{ borderBottom: '5px solid white', color: 'white' }} component="div" id="nested-list-subheader">
            AÇÕES
          </ListSubheader>
        }>
        <ListItem onClick={contatosHandler} button style={{ backgroundColor: TemaPrincipal.palette.primary.dark, color: TemaPrincipal.palette.primary.light }}>
          <ListItemIcon>
            <PeopleAlt style={{ color: TemaPrincipal.palette.primary.light }} />
          </ListItemIcon>
          <ListItemText primary="Contatos" />
        </ListItem>
        <ListItem onClick={telefonesHandler} button style={{ backgroundColor: TemaPrincipal.palette.primary.dark, color: TemaPrincipal.palette.primary.light }}>
          <ListItemIcon>
            <Phone style={{ color: TemaPrincipal.palette.primary.light }} />
          </ListItemIcon>
          <ListItemText primary="Telefones" />
        </ListItem>
        <ListItem onClick={compromissosHandler} button style={{ backgroundColor: TemaPrincipal.palette.primary.dark, color: TemaPrincipal.palette.primary.light }}>
          <ListItemIcon>
            <Event style={{ color: TemaPrincipal.palette.primary.light }} />
          </ListItemIcon>
          <ListItemText primary="Compromissos" />
        </ListItem>
      </List>

    </div>

  )
}