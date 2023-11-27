import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import { useStyles } from './listCards.styles';
import fontEncuentra from '../../assets/images/fondo.jpg';
import CardItem from './cardItem';
import ImageList from '@mui/material/ImageList';
import { useQuery } from 'react-query';
import museumsService from '../../async/services/museumsService';
import { SectionContext } from '../../context/SectionContext';
import { ImageListItem, Typography } from '@material-ui/core';
import background from '../../assets/images/background.jpg'

function ListCard({ listCardRef }) {
  const classes = useStyles({ image: fontEncuentra });
  const { section, route } = useContext(SectionContext);
  //const { data, isLoading, isError, error } = useQuery('newsArticles', () => articlesRecentService());
  const { data, isLoading, isError, error } = useQuery(`${section}`, () => museumsService(section));
  return (
    <Grid style={{ backgroundImage: `url(${background})` }}>
      <Grid className={classes.boxShadow}>

        <Grid className={classes.descriptionSection}>
          <Typography variant="h5" ref={listCardRef}>{route}</Typography>
          <Typography variant="h4">
            Museo conventual perteneciente a la Orden de las Carmelitas Descalzas que, en tiempo de colonia, eran hermanas de claustro, actualmente es un convento activo, donde habitan hermanas de la orden ya mencionada, en el interior del museo se puede apreciar arte sacro, como también la historia de la vida cotidiana de las hermanas Carmelitas.
          </Typography>
        </Grid>
        <div className={classes.containerDesktop} >
          <ImageList sx={{ margin: 3 }} cols={3} gap={50}>
            {isLoading ? <h1>Cargando...</h1> : data.data.map(item => (
              <>
                <ImageListItem key={item.id} sx={{ width: '18rem' }}>
                  {/* <ImageVolumeComponent data={item.attributes} /> */}
                  <CardItem key={item.id} data={item} />
                </ImageListItem>
              </>

            ))}

          </ImageList>
        </div>
        <div className={classes.containerMovil} >
          <ImageList sx={{ justifyContent: 'center', textAlign: 'center' }} cols={2} gap={25}>
            {isLoading ? <h1>Cargando...</h1> : data.data.map(item => (
              <>
                <ImageListItem key={item.id} sx={{ width: '18rem' }}>
                  {/* <ImageVolumeComponent data={item.attributes} /> */}
                  <CardItem key={item.id} data={item} />
                </ImageListItem>
              </>

            ))}

          </ImageList>
        </div>
      </Grid>
    </Grid>

  )
}

export default ListCard;