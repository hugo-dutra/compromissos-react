import React, { useState } from 'react';
import './TopMenu.css'
import { Button, Menu, MenuItem } from '@material-ui/core';
import Dehaze from '@material-ui/icons/Dehaze'
import MoreVert from '@material-ui/icons/MoreVert'

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
        <Button size="small" style={{ backgroundColor: 'rgb(255, 255, 255)', margin: '5px' }} variant="text" color="default" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MoreVert fontSize="small"></MoreVert>
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