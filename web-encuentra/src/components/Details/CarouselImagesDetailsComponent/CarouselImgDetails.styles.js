import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icons: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        color: 'white',
        cursor: 'pointer',
        fontSize: '4rem'
    },
    nextIcons: {
        right: theme.spacing(2),
        [mq('md')]: {
            right: theme.spacing(-7),
        },
    },
    prevIcons: {
        left: theme.spacing(3),
        [mq('md')]: {
            left: theme.spacing(-5),
        },
    },
    imgContainer: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    img: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '22rem',
        width: '22rem',
        [mq('md')]: {
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '30rem',
            width: '40rem'
        },
    },
}))