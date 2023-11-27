import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({

    //#833601 cafe
    //#556B2F green
    //#C0C0C0 gris
    //#FFDAB9 texto claro
    Container: {
        margin: '7rem 0 8rem 2rem',
        color: '#FFDAB9',
        '& h4': {
            color: '#FFDAB9',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: '1.8rem',
            marginBottom: '2rem'
        },
        [mq('md')]: {
            '& h4': {
                fontSize: '3rem',
                marginBottom: '3rem',
            }
        }
    },
    containerDesktop: {
        display: 'none',
        [mq('md')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
    containerMovile: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [mq('md')]: {
            display: 'none',

        }
    }
}))