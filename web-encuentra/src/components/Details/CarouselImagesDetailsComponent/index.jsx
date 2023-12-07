import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useStyles } from './CarouselImgDetails.styles';

function CarouselImagesDetailsComponent({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  //const correctedUrl = logo_url.replace(/\\/g, '/');
  // const imagesUrl = images.map((image) => {
  //   image.image_url.replace(/\\/g, '/');
  // })

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
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
        <img src={images[currentIndex].image_url} alt={`Slide ${currentIndex + 1}`} className={classes.img} />
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