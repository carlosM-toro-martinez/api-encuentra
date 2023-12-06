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
        //backgroundColor: '#C0C0C0'
    },
    textContainer: {
        width: '100%',
        color: 'white',
        '& h6': {
            color: 'white'
        }

    },
    footer: {
        display: 'flex',
        backgroundColor: '#FF4500',
        width: '100%',
        height: '3rem',
        justifyContent: 'center',
        alignItems: 'center'
    }

}))