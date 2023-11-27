import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
    container: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        padding: '2rem',
        color: '#FFDAB9',
        '& h2': {
            marginTop: '4rem',
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '1.5rem'
        },
        '& h6': {
            fontSize: '1.2rem',
        },
        '& p': {
            marginTop: 5,
            padding: '1rem 1rem 1rem 1rem',
            textAlign: 'center'
        },
        [mq('md')]: {
            '& h2': {
                fontSize: '3rem'
            },
            '& p': {
                marginTop: 5,
                padding: '1rem 8rem 1rem 8rem',
                textAlign: 'center'
            },
            '& h6': {
                fontSize: '1.5rem',
            },
        },
    },
    imageContainer: {
        paddingTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
    },
    img: {
        height: '30rem',
        width: '50rem'
    },
}))