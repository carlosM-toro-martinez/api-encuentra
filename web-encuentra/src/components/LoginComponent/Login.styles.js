import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(4),
        '& h4': {
            marginTop: '3rem',
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'uppercase'
        }
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        marginBottom: '5rem'
    },

}))