import React from 'react'
import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import { useStyles } from './NewsComponent.styles';
import NewsCardComponent from './NewsCardComponent';

function NewsComponent() {
    const classes = useStyles();
    return (
        <Box className={classes.Container}>
            <Typography variant="h4" >
                Noticias y Novedades
            </Typography>
            <Box className={classes.containerDesktop} >
                <ImageList cols={2} gap={50}>
                    <>
                        <ImageListItem>
                            <NewsCardComponent />
                        </ImageListItem>
                    </>
                    <>
                        <ImageListItem>
                            <NewsCardComponent />
                        </ImageListItem>
                    </>
                    <>
                        <ImageListItem>
                            <NewsCardComponent />
                        </ImageListItem>
                    </>
                </ImageList>
            </Box>
            <Box className={classes.containerMovile} >
                <ImageList cols={1} gap={25}>
                    <>
                        <ImageListItem>
                            <NewsCardComponent />
                        </ImageListItem>
                    </>
                    <>
                        <ImageListItem>
                            <NewsCardComponent />
                        </ImageListItem>
                    </>
                    <>
                        <ImageListItem>
                            <NewsCardComponent />
                        </ImageListItem>
                    </>
                </ImageList>
            </Box>
        </Box>
    )
}

export default NewsComponent