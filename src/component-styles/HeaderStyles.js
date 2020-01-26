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
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    h1: {
      color: theme.palette.primary.main,
    }
  }));


export default HeaderStyles;