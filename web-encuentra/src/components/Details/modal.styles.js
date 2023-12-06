import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
    container: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '90%',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        color: '#FFDAB9',
        '& h2': {
            marginTop: '6rem',
            fontSize: '2rem',
            textAlign: 'center',
            marginBottom: '1.5rem',
            fontWeight: 'bold',
            textTransform: 'uppercase'
        },
        '& h3': {
            marginTop: '3rem',
            fontSize: '3rem',
            textAlign: 'center',
            marginBottom: '1.5rem',
            fontWeight: 'bold',
            textTransform: 'capitalize'
        },
        '& h4': {
            textAlign: 'center',
            textTransform: 'capitalice',
        },
        '& h6': {
            marginTop: '1rem',
            textTransform: 'capitalize',
        },
        '& p': {
            marginTop: 5,
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
                textTransform: 'capitalize',

            },
        },
    },
    row: {
        display: 'flex',
        justifyContent: 'space-around',
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