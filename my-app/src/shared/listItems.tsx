import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import {
  Link
} from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <Link to="/exploration">
      <ListItemButton>
          <span style={{ marginRight: '40px', textDecoration: "none"}}>{'🔮'}</span>
          <ListItemText primary="Exploration" />       
      </ListItemButton>
    </Link>
    <Link to="/about">
      <ListItemButton>
          <span style={{ marginRight: '40px', textDecoration: "none"}}>{'📖'}</span>
          <ListItemText primary="About" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

