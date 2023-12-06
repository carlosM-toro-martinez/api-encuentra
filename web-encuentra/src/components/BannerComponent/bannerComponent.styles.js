import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({
    containerStyle: {
        backgroundSize: 'cover',
        width: '100%',
        height: '50vh',
        borderBottom: '1rem solid #505050',
        [mq('md')]: {
            height: '150vh',
        },
    },
    shadow: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        width: '100%',
        height: '100%',
        '& h4': {
            padding: '5rem 1rem 1rem 1rem',
            marginBottom: '3rem',
            fontSize: '1rem',
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            letterSpacing: '.1rem',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
            textTransform: 'uppercase',
        },
        [mq('md')]: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',

            '& h4': {
                fontSize: '2.5rem',
                padding: '8rem 0 3rem 0',
                letterSpacing: '.5rem',
            },
        },
    },
}))