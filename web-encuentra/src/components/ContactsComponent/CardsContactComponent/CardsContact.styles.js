import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme => ({

    //#833601 cafe
    //#556B2F green
    //#C0C0C0 gris
    //#FFDAB9 texto claro
    container: {
        backgroundColor: '#C0C0C0',
        width: '17rem',
        height: '18rem',
        [mq('md')]: {
            height: '19rem',
            width: '20rem',
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