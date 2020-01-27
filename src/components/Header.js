import React from 'react';
import Typography from '@material-ui/core/Typography'; 
import Avatar from '@material-ui/core/Avatar';
import HeaderStyles from '../component-styles/HeaderStyles';

export default function Header() {
  const classes = HeaderStyles();
  const avatarImage = process.env.PUBLIC_URL + "/images/fred.png"

    return (
      <div align="center">
        <Avatar alt="Fred" src={avatarImage} className={classes.large} />
        <Typography variant="h4" component="h1" align="center" className={classes.h1}>
          Fred - Your Purchasing Assistant
        </Typography> 
      </div> 
    );
  }