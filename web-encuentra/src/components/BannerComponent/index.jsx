import React, { useContext } from 'react'
import { useStyles } from './bannerComponent.styles.js';
import imageBackground from '../../assets/images/moneda.jpg'
import { Typography } from '@material-ui/core';

function BannerComponent({ children }) {

    const classes = useStyles();
    return (
        <div
            style={{ backgroundImage: `url(${imageBackground})` }}
            className={classes.containerStyle}
        >
            <div className={classes.shadow}>
                <Typography variant='h4' className={classes.title} >Secciones y Apartados</Typography>
                {children}
            </div>
        </div>
    )
}

export default BannerComponent