import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
    return (
      <>
      <Typography variant="body2" color="textSecondary" align="center">
        {`Copyright © ${new Date().getFullYear()} `}
        <Link color="inherit" href="https://clydedsouza.net/?ref=fred" target="blank">
          Clyde D'Souza
        </Link>
        &nbsp;&#47;&nbsp;
        <Link color="inherit" href="https://sponsor.clydedsouza.net/" target="blank">
          Sponsor this project
        </Link> 
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Issues, ideas or more? '}
        <Link color="inherit" href="https://github.com/ClydeDz/fred/issues/new" target="blank">
          Submit them here
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Fred\'s wonderful '}
        <Link color="inherit" href="https://www.oxygenna.com/freebies/get-the-coolest-free-material-avatars-from-oxygenna?ref=fred" target="blank">
          profile picture
        </Link>
      </Typography>
      </>      
    );
  }