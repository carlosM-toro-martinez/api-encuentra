import { useStyles } from './modal.styles'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import background from '../../assets/images/background.jpg'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import MapIcon from '@mui/icons-material/Map';
import CarouselImagesDetailsComponent from './CarouselImagesDetailsComponent';


function Details({ data }) {
  const location = useLocation();
  const { name,
    description,
    coordinates,
    precio,
    dias,
    telefono,
    manana,
    tarde,
    face,
    web,
    precioExtranjeros,
    mail,
    calle,
    attributes,
    extension,
    observations,
    image,
    images } = location.state;

  const navigate = useNavigate();
  // const handleNavigate = (route) => {
  //   navigate(`/${route}`)
  // }

  const classes = useStyles();
  return (
    <Box sx={{ backgroundImage: `url(${background})` }} className={classes.container}>
      <div className={classes.box}>
        <Typography component="h2">
          {name}
        </Typography>
        <CarouselImagesDetailsComponent />
        <Typography>
          {description}
        </Typography>
        <Typography variant="h6" component="h6" >
          Informacion
        </Typography>
        <Typography variant="h6" component="h6">
          Horarios de Atencion
        </Typography>
        <Typography>
          Mañana: {manana}
        </Typography>
        <Typography>
          Tarde: {tarde}
        </Typography>
        <Typography variant="h6" component="h6">
          Precio
        </Typography>
        <Typography>
          Precio Locales: {precio} bs
        </Typography>
        <Typography>
          Precio Extrangero: {precioExtranjeros} bs
        </Typography>
        <Typography variant="h6" component="h6">
          Contactos
        </Typography>
        <Typography>
          Telefono:  {telefono}
        </Typography>
        <Typography>
          Mail:  {telefono}
        </Typography>
        {/* <Link id="modal-modal-description" href={web} sx={{ mt: 2 }}>
          {web}
        </Link> */}
        {/* <Button variant="text" color="default">
                        Como Llegar
                    </Button> */}
        <Button
          variant="outlined"
          startIcon={<MapIcon />}>
          <Link
            to={`/map`}
            state={{ calle, coordinates }}>
            Como Llegar
          </Link>
        </Button>

      </div>
    </Box>
  )
}

export default Details;