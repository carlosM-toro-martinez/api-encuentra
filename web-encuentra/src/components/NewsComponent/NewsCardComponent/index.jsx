import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useStyles } from './NewsCard.styles';

function NewsCardComponent() {
  const classes = useStyles();
  return (
    <Card sx={{ display: 'flex', width: '23rem', cursor: 'pointer', }}>
      <CardMedia
        component="img"
        sx={{ width: 140 }}
        image="http://turismo.potosi.bo/fotoupload/3df583468e52f69e6633c7f4f06f6bf3.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#C0C0C0' }}>
        <CardContent sx={{
          flex: '1 0 auto'
        }}>
          <Box className={classes.containerText} sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
          }}>
            <Typography variant="h5" sx={{ color: 'red' }}>
              Live From Space Live From Space Live From Space Live From Space
            </Typography>
          </Box>
          <Box className={classes.containerText} sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
          }}>

            <Typography sx={{ color: 'black' }}>
              Mac Miller Mac Miller Mac Miller Mac Miller Mac Miller Mac Miller Mac Miller Mac Miller Mac Miller
              Mac Miller Mac Miller Mac Miller Mac Miller Mac Miller Mac Miller Mac Miller Mac Miller Mac Miller
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  )
}

export default NewsCardComponent