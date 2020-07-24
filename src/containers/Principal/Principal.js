import React from 'react';
import './Principal.css'
import TopMenu from '../../components/Layout/TopMenu';
import SideMenu from '../../components/Layout/SideMenu';
import Content from '../../components/Layout/Content';

export default () => {
  return (
    <div className="principal">
      <TopMenu></TopMenu>
      <div className="col">
        <SideMenu className="side"></SideMenu>
        <Content className="content"></Content>
      </div>

    </div>
  )
}