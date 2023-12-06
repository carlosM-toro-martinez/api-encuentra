import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
    boxShadow: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        width: '100%',
        height: '100%'
    },
    descriptionSection: {
        textAlign: 'center',
        padding: '0rem 1rem 0rem 1rem',
        '& h4': {
            marginTop: '2rem',
            fontSize: '0.8rem',
            color: '#C0C0C0',
            fontFamily: 'Roboto-bold',
            fontStyle: 'normal',
        },
        '& h5': {
            fontSize: '1.5rem',
            padding: '1rem 0 1rem 0',
            color: '#FFDAB9',
            textAlign: 'center',
            fontWeight: 'bold',
            letterSpacing: '.3rem',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
            textTransform: 'uppercase',
            transform: 'skew(-10deg)',
            textAlign: 'center',
            background: 'linear-gradient(to right, #FFD966, #FF4500)',
            padding: theme.spacing(1),
            color: 'black',
            fontWeight: 'bold',
        },
        [mq('md')]: {
            padding: '1rem 20rem 1rem 20rem',
            '& h4': {
                fontSize: '2rem',
            },
            '& h5': {
                fontSize: '2rem',
                letterSpacing: '.3rem',
            },
        },
    },
    containerDesktop: {
        display: 'none',
        [mq('md')]: {
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
        }
    },
    containerMovil: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        [mq('md')]: {
            display: 'none',
        }
    },
    // wrapperDesktop: {
    //     display: 'none',
    //   },
    //   wrapperMobile: {
    //     display: 'block',
    //   },
    //   [mq('lg')]: {
    //     wrapperDesktop: {
    //       display: 'block',
    //     },
    //     wrapperMobile: {
    //       display: 'none',
    //     }
    //   },

}))