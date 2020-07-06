import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
    return (
      <div>
      <Typography variant="body2" color="textSecondary" align="center">
        {`Copyright © ${new Date().getFullYear()} `}
        <Link color="inherit" href="https://clydedsouza.net/?ref=fred" target="blank">
          Clyde D'Souza
        </Link> 
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Fred\'s wonderful '}
        <Link color="inherit" href="https://www.oxygenna.com/freebies/get-the-coolest-free-material-avatars-from-oxygenna?ref=fred" target="blank">
          profile picture
        </Link>
      </Typography>
      </div>      
    );
  }