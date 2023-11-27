import { makeStyles } from '@material-ui/core';
import mq from '../../config/mq';

export const useStyles = makeStyles(theme => ({

    //#833601 cafe
    //#556B2F green
    //#C0C0C0 gris
    //#FFDAB9 texto claro
    wrapper: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
    },
    containerDesktop: {
        display: 'none',
        [mq('md')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    containerMovil: {
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        [mq('md')]: {
            display: 'none',
        },
    },
    itemContainer: {
        display: 'inline-block'
    },
    item: {
        display: 'flex',
        width: '10rem',
        height: '10rem',
        margin: '.5rem',
        border: '1px solid black',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            border: '8px solid #556B2F',
        },
        [mq('md')]: {
            width: '17rem',
            height: '17rem',
            margin: '1.5rem',
            '&:hover': {
                border: '8px solid #556B2F',
                marginTop: '1.1rem'
            },
        },
    },
    image: {
        width: '9rem',
        height: '9rem',
        color: 'black',
        objectFit: 'cover',
        display: 'inline-block',
        [mq('md')]: {
            width: '16rem',
            height: '16rem',
            color: 'black',
            objectFit: 'cover',
        },
    },
    titleSecctions: {
        color: '#FFDAB9',
        textAlign: 'center',
        fontFamily: 'NotoSerifDisplay_ExtraCondensed-BlackItalic',
        marginTop: '0.35rem',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        [mq('md')]: {
            marginTop: '1rem',
            fontSize: '1.4rem',
        },
    },
}))