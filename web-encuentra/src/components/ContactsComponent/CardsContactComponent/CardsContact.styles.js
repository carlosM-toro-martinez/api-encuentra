import { makeStyles } from '@material-ui/core';
import mq from '../../../config/mq';

export const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: '#C0C0C0',
        width: '17rem',
        height: '20rem',
        [mq('md')]: {
            height: '27rem',
            width: '20rem',
        }
    },
    image: {
        height: 200,
        [mq('md')]: {
            height: 250,
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