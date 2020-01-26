import { makeStyles } from '@material-ui/core/styles';

const HeaderStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      marginBottom: theme.spacing(1),
    },
    h1: {
      color: theme.palette.primary.main,
      marginBottom: theme.spacing(0),
    }
  }));


export default HeaderStyles;