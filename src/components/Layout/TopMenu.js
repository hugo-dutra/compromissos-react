import React, { useState } from 'react';
import './TopMenu.css'
import { Button, Menu, MenuItem } from '@material-ui/core';
import Dehaze from '@material-ui/icons/Dehaze'

export default () => {
  const [anchorEl, setAnchorEl] = useState(0);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    handleClose();
  }

  const handleAccount = () => {
    handleClose();
  }

  const handleLogout = () => {
    handleClose();
  }

  return (
    <div className="top-menu">
      <div>
        <Button style={{ backgroundColor: 'rgb(53, 49, 49)', margin: '5px' }} variant="contained" color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <Dehaze fontSize="small"></Dehaze>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleProfile}>Profile</MenuItem>
          <MenuItem onClick={handleAccount}>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>

    </div>
  );
}