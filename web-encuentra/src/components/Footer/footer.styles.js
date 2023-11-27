import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({

    desktopContainer: {
        [mq('xxs')]: {
            display: 'none'
        },
        [mq('sm')]: {
            display: 'flex'
        },
        color: theme.palette.primary.main,
        background: theme.palette.neutro1.main,
        fontFamily: 'Montserrat-Ligth',
        fontSize: '1rem',
    },
    wrapper: {
        backgroundColor: 'rgba(51, 51, 51)',
        marginTop: '10rem',
    },
    textContainer: {
        color: 'white',
        '& h6': {
            color: 'white'
        }

    }

}))