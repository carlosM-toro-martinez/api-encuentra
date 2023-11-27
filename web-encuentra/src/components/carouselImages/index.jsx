import { useContext, useState } from 'react';
import { useStyles } from './carouselImages.styles';
import { Grid, Slide, Typography } from '@material-ui/core';
import { SectionContext } from '../../context/SectionContext';
import sectionsService from '../../async/services/sectionsService';
import { useQuery } from 'react-query';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const dataMock = [
  { key: '1', text: 'Item 1', name: 'museos', title: 'Museos', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Vista_derecha_del_mascar%C3%B3n_de_la_Casa_Nacional_de_Moneda.jpg/800px-Vista_derecha_del_mascar%C3%B3n_de_la_Casa_Nacional_de_Moneda.jpg' },
  { key: '2', text: 'Item 2', name: 'museos', title: 'Gastronomia', img: 'https://imagenes.20minutos.es/files/article_amp/uploads/imagenes/2022/11/10/kalapurka.jpeg' },
  { key: '3', text: 'Item 3', name: 'recreacionales', title: 'Lugares Recreacionales', img: 'https://www.laregion.bo/wp-content/uploads/2021/03/tarapaya-5.jpg' },
  { key: '4', text: 'Item 4', name: 'pubs', title: 'Pubs y Bares', img: 'https://boliviaemprende.com/wp-content/uploads/2023/08/Cervezas-Potosina-y-Potosina-Light-incursionan-en-el-competitivo-mercado-de-Estados-Unidos.jpg' },
  { key: '5', text: 'Item 5', name: 'iglesias', title: 'Hospedaje', img: 'https://media-cdn.tripadvisor.com/media/photo-s/17/2b/63/33/hotel-jardines-de-uyuni.jpg' },
  { key: '6', text: 'Item 6', name: 'miradores', title: 'Atractivos Naturales', img: 'https://cdn.bolivia.com/sdi/2018/12/15/sabias-que-potosi-llego-a-ser-alguna-vez-la-ciudad-mas-rica-del-mundo-694830.jpg' },
];

const images = [
  'https://cdn.bolivia.com/sdi/2018/12/15/sabias-que-potosi-llego-a-ser-alguna-vez-la-ciudad-mas-rica-del-mundo-694830.jpg',
  'https://media-cdn.tripadvisor.com/media/photo-s/17/2b/63/33/hotel-jardines-de-uyuni.jpg',
  'https://cdn.bolivia.com/sdi/2018/12/15/sabias-que-potosi-llego-a-ser-alguna-vez-la-ciudad-mas-rica-del-mundo-694830.jpg',
  'https://cdn.bolivia.com/sdi/2018/12/15/sabias-que-potosi-llego-a-ser-alguna-vez-la-ciudad-mas-rica-del-mundo-694830.jpg',
  'https://media-cdn.tripadvisor.com/media/photo-s/17/2b/63/33/hotel-jardines-de-uyuni.jpg',
  'https://cdn.bolivia.com/sdi/2018/12/15/sabias-que-potosi-llego-a-ser-alguna-vez-la-ciudad-mas-rica-del-mundo-694830.jpg',
  // Agrega más URLs de imágenes según sea necesario
];

const CarouselImagesComponent = ({ listCardRef }) => {
  const { setRoute, route, setSection } = useContext(SectionContext);
  const [startIndex, setStartIndex] = useState(0);


  const { data, isLoading, isError, error } = useQuery(`sections`, () => sectionsService());

  const updateData = (screen, section) => {
    listCardRef.current.scrollIntoView({ behavior: 'smooth' });
    setRoute(screen);
    setSection(section);
  };


  const goToNextSlide = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex <= images.length - 3 ? newIndex : images.length - 3;
    });
  };

  const goToPrevSlide = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex >= 0 ? newIndex : 0;
    });
  };

  const mockSlice = dataMock.slice(startIndex, startIndex + 3);

  const classes = useStyles();
  return (
    < div className={classes.wrapper}>
      <div className={classes.containerDesktop} >
        <IconButton onClick={goToPrevSlide} disabled={startIndex === 0}>
          <ArrowBackIosIcon
            fontSize="inherit"
            style={{ color: startIndex === 0 ? 'gray' : 'white', fontSize: '4rem' }} />
        </IconButton>
        {!isLoading ? mockSlice.map((item, index) => (
          <Slide
            key={index}
            direction={index === 0 ? 'right' : index === 2 ? 'left' : 'up'}
            in={true}
            timeout={1000}
            mountOnEnter
            unmountOnExit
          >
            <div
              key={item.key}
              onClick={() => updateData(item.title, item.name)}
              className={classes.itemContainer}>
              <div className={classes.item}
                style={{
                  backgroundColor:
                    item.title === route ?
                      '#556B2F' :
                      '#C0C0C0'
                }}
              >
                <img
                  src={item.img}
                  alt={`Slide ${startIndex + index + 1}`}
                  className={classes.image}
                />
              </div>
              <Typography className={classes.titleSecctions} >{item.title}</Typography>
            </div>
          </Slide>
        )) :
          <>
            <Grid>
              <Grid className={classes.item}
                style={{
                  backgroundColor: '#C0C0C0'
                }}>
              </Grid>
            </Grid>
            <Grid>
              <Grid className={classes.item}
                style={{
                  backgroundColor: '#C0C0C0'
                }}>
              </Grid>
            </Grid>
            <Grid>
              <Grid className={classes.item}
                style={{
                  backgroundColor: '#C0C0C0'
                }}>
              </Grid>
            </Grid>
          </>
        }
        <IconButton onClick={goToNextSlide} disabled={startIndex === dataMock.length - 3}>
          <ArrowForwardIosIcon
            fontSize="inherit"
            style={{ color: startIndex === dataMock.length - 3 ? 'gray' : 'white', fontSize: '4rem' }} />
        </IconButton>
      </div>


      <div className={classes.containerMovil} >
        {!isLoading ? dataMock.map((item, index) => (
          <Slide
            key={index}
            direction={index === 0 ? 'right' : index === 2 ? 'left' : 'up'}
            in={true}
            timeout={1000}
            mountOnEnter
            unmountOnExit
          >
            <div
              key={item.key}
              onClick={() => updateData(item.title, item.name)}
              className={classes.itemContainer}>
              <div className={classes.item}
                style={{
                  backgroundColor:
                    item.title === route ?
                      '#556B2F' :
                      '#C0C0C0'
                }}
              >
                <img
                  src={item.img}
                  className={classes.image}
                />
              </div>
              <Typography className={classes.titleSecctions} >{item.title}</Typography>
            </div>
          </Slide>
        )) :
          <>
            <Grid>
              <Grid className={classes.item}
                style={{
                  backgroundColor: '#C0C0C0'
                }}>
              </Grid>
            </Grid>
            <Grid>
              <Grid className={classes.item}
                style={{
                  backgroundColor: '#C0C0C0'
                }}>
              </Grid>
            </Grid>
            <Grid>
              <Grid className={classes.item}
                style={{
                  backgroundColor: '#C0C0C0'
                }}>
              </Grid>
            </Grid>
          </>
        }
      </div>
    </div >
  );
};

export default CarouselImagesComponent;