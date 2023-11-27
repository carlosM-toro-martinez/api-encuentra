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
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        width: '100%',
        height: '100%',
        '& h4': {
            fontSize: '1rem',
            padding: '5rem 0 1rem 0',
            color: '#FFA07A',
            textAlign: 'center',
            fontWeight: 'bold',
            letterSpacing: '.1rem',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
            textTransform: 'uppercase',
        },
        [mq('md')]: {
            '& h4': {
                fontSize: '2.5rem',
                padding: '8rem 0 3rem 0',
                letterSpacing: '.8rem',
            },
        },
    },
}))