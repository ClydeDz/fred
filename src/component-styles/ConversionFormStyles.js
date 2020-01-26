import { makeStyles } from '@material-ui/core/styles';

const ConversionFormStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    h2: {
        color: theme.palette.primary.main,
    },
    formControl: {
        margin: theme.spacing(0, 0, 1, 0),
        minWidth: 120,
    },
}));

export default ConversionFormStyles;