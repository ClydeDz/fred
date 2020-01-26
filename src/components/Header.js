import React from 'react';
import Typography from '@material-ui/core/Typography'; 
import Avatar from '@material-ui/core/Avatar';
import HeaderStyles from '../component-styles/HeaderStyles';

export default function Header() {
  const classes = HeaderStyles();

    return (
      <div align="center">
        <Avatar alt="Fred" src="/images/fred.png" className={classes.large} />
        <Typography variant="h4" component="h1" align="center" className={classes.h1}>
          Fred - Your Purchasing Assistant
        </Typography> 
      </div> 
    );
  }