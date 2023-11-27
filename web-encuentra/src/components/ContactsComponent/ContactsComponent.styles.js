import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({

    //#833601 cafe
    //#556B2F green
    //#C0C0C0 gris
    //#FFDAB9 texto claro
    Container: {
        margin: '7rem 0 8rem 2rem',
        maxWidth: '90rem',
        color: '#FFDAB9',
        '& h4': {
            marginBottom: '1rem',
            color: '#FFDAB9',
            fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
            fontSize: '1.5rem',
            textAlign: 'center',
            textTransform: 'uppercase'
        },
        [mq('md')]: {
            '& h4': {
                marginBottom: '2rem',
                color: '#FFDAB9',
                fontSize: '3rem',
            },
        }
    },
    contanerDesktop: {
        display: 'none',
        [mq('md')]: {
            display: 'flex',
        }
    },
    contanerMovile: {
        display: 'flex',
        [mq('md')]: {
            display: 'none',

        }
    }
}))