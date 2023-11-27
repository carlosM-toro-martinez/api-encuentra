import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { useStyles } from './CardsContact.styles';

function CardsContactComponent() {
  const classes = useStyles();
  return (
    <Card sx={{ backgroundColor: '#C0C0C0' }} className={classes.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="http://turismo.potosi.bo/fotoupload/3df583468e52f69e6633c7f4f06f6bf3.jpg"
          alt="Live from space album cover"
        />
        <CardContent >
          <Box>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
          </Box>
          <Box sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
          }}>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver Mas
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardsContactComponent