import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useStyles } from './CarouselImgDetails.styles';

const images = [
  'https://cdn.bolivia.com/sdi/2018/12/15/sabias-que-potosi-llego-a-ser-alguna-vez-la-ciudad-mas-rica-del-mundo-694830.jpg',
  'https://media-cdn.tripadvisor.com/media/photo-s/17/2b/63/33/hotel-jardines-de-uyuni.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Vista_derecha_del_mascar%C3%B3n_de_la_Casa_Nacional_de_Moneda.jpg/800px-Vista_derecha_del_mascar%C3%B3n_de_la_Casa_Nacional_de_Moneda.jpg',
  'https://imagenes.20minutos.es/files/article_amp/uploads/imagenes/2022/11/10/kalapurka.jpeg',
  'https://www.laregion.bo/wp-content/uploads/2021/03/tarapaya-5.jpg',
  'https://cdn.bolivia.com/sdi/2018/12/15/sabias-que-potosi-llego-a-ser-alguna-vez-la-ciudad-mas-rica-del-mundo-694830.jpg',
];

function CarouselImagesDetailsComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    console.log(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <IconButton onClick={goToPrevSlide}>
        <ArrowBackIosIcon
          fontSize="inherit"
          style={{ fontSize: '4rem' }}
          className={`${classes.icons} ${classes.prevIcons}`} />
      </IconButton>
      <div className={classes.imgContainer}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className={classes.img} />
      </div>
      <IconButton onClick={goToNextSlide}>
        <ArrowForwardIosIcon
          fontSize="inherit"
          style={{ fontSize: '4rem' }}
          className={`${classes.icons} ${classes.nextIcons}`} />
      </IconButton>
    </div >
  )
}

export default CarouselImagesDetailsComponent