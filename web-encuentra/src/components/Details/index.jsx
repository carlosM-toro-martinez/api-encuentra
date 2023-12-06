import { useStyles } from './modal.styles'
import Box from '@mui/material/Box';
//import Button from '@material-ui/core/Button';
import Typography from '@mui/material/Typography';
import background from '../../assets/images/background.jpg'
import { useLocation, useNavigate, Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import MapIcon from '@mui/icons-material/Map';
import CarouselImagesDetailsComponent from './CarouselImagesDetailsComponent';
import businessUpdateServices from '../../async/services/put/businessUpdateServices';
import { useQuery } from 'react-query';
import businessFindOne from '../../async/services/businessFindOneService';
import { Twitter, WhatsApp, Facebook, Instagram } from '@mui/icons-material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

const OpeningHours = ({ openinghours }) => {
  return (
    <Box sx={{ flexDirection: 'column' }}>
      <Typography>
        {openinghours[0].weekend}
      </Typography>
      <Typography>
        {openinghours[0].morning_hours ? `Mañana: ${openinghours[0].morning_hours[0]} -  ${openinghours[0].morning_hours[1]}` : ''}
      </Typography>
      <Typography>
        {openinghours[0].afternoon_hours ? `Tarde: ${openinghours[0].afternoon_hours[0]} - ${openinghours[0].afternoon_hours[1]}` : ''}
      </Typography>
    </Box>
  );
};

const BusinessContact = ({ data }) => {
  return (
    <Box sx={{ display: 'flex', margin: '0 20rem 0 20rem' }}>
      <Box sx={{ flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" component="h6" style={{ color: '#3498db' }}>
            <PhoneIcon /> Telefono
          </Typography>
          <Typography>
            {data.phone_number}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          <Typography variant="h6" component="h6" style={{ color: '#e74c3c' }}>
            <EmailIcon /> Correo
          </Typography>
          <Typography>
            {data.mail}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" component="h6" style={{ color: '#2ecc71' }}>
            <PublicIcon /> Sitio Web
          </Typography>
          <Typography>
            {data.website_url}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h6" component="h6" style={{ color: '#f39c12' }}>
            <LocationOnIcon /> Direccion
          </Typography>
          <Typography>
            {data.address}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const socialNetworks = [
  { name: 'Twitter', icon: <Twitter />, color: '#1DA1F2' },
  { name: 'WhatsApp', icon: <WhatsApp />, color: '#25D366' },
  { name: 'Facebook', icon: <Facebook />, color: '#1877F2' },
  { name: 'Instagram', icon: <Instagram />, color: '#E1306C' },
];

const SocialNetworks = ({ socialnetworks }) => {
  return (
    <Box sx={{ flexDirection: 'column', marginTop: '2rem' }}>
      {socialNetworks.map((network) => (
        <Button
          key={network.name}
          variant="contained"
          style={{ backgroundColor: network.color, marginRight: '8px' }}
          startIcon={network.icon}
        >
          {network.name}
        </Button>
      ))}
    </Box>
  );
};

const Products = ({ products }) => {
  return (
    <Box sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {products[0]?.product_id ? <Typography variant="h4" component="h4">
        Productos
      </Typography> : null}
      {products[0]?.product_id ? <Table sx={{ marginBottom: '3rem', justifyContent: 'center', alignItems: 'center' }}>
        <TableHead>
          <TableRow sx={{
            color: 'white'
          }}>
            <TableCell sx={{ color: 'white' }}>Detalle</TableCell>
            <TableCell sx={{ color: 'white' }}>Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products[0]?.product_id ? products.map(item => (
            <TableRow key={item.product_id} sx={{ color: 'white' }}>
              {/* <TableCell sx={{
                    color: 'white', textTransform: 'capitalize', overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: '300px'
                  }}>{item?.attributes?.image?.data?.attributes?.url}</TableCell> */}
              <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>{item?.product_details}</TableCell>
              <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>{item?.price}</TableCell>
            </TableRow>
          ))
            : null}
        </TableBody>
      </Table> : null}
    </Box>
  );
};

const Promotions = ({ promotions }) => {
  return (
    <Box sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {promotions[0]?.promotion_id ? <Typography variant="h4" component="h4">
        Promociones
      </Typography> : null}
      {promotions[0]?.promotion_id ? <Table sx={{ marginBottom: '3rem', justifyContent: 'center', alignItems: 'center' }}>
        <TableHead>
          <TableRow sx={{
            color: 'white'
          }}>
            <TableCell sx={{ color: 'white' }}>Detalle</TableCell>
            <TableCell sx={{ color: 'white' }}>Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {promotions[0]?.promotion_id ? promotions.map(item => (
            <TableRow key={item.promotion_id} sx={{ color: 'white' }}>
              {/* <TableCell sx={{
                    color: 'white', textTransform: 'capitalize', overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: '300px'
                  }}>{item?.attributes?.image?.data?.attributes?.url}</TableCell> */}
              <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>{item?.promotion_details}</TableCell>
              <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>{item?.price}</TableCell>
            </TableRow>
          ))
            : null}
        </TableBody>
      </Table> : null}
    </Box>
  );
};


function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError, error, refetch } = useQuery(`businessOne`, () => businessFindOne(id));
  const { auth, user } = useContext(MainContext);

  //const correctedUrl = logo_url.replace(/\\/g, '/');
  const handleStateChange = async (data) => {
    try {
      const newData = { ...data, name: data.business_name, description: data.business_description, state: !data.state, coordinates: `(${data.coordinates.x}, ${data.coordinates.y})` };
      await businessUpdateServices(data.business_id, newData);
      navigate('/admin');
    } catch (error) {
      console.error('Error update business:', error);
    }
  }

  const classes = useStyles();
  return (
    <Box className={classes.container}>
      {!isLoading && !error ? data.map((data) => (
        <div className={classes.box}>
          <Typography variant="h2" component="h2">
            {data.business_name}
          </Typography>
          <CarouselImagesDetailsComponent images={data.images} />
          <SocialNetworks socialnetworks={data.socialnetworks[0]} />
          <Typography variant="h3" component="h3">
            datos relevantes
          </Typography>
          <Typography component="h6">
            {data.business_description}
          </Typography>
          <BusinessContact data={data} />
          <OpeningHours openinghours={data.openinghours} />
          <Products products={data.products} />
          <Promotions promotions={data.promotions} />
          <Button variant="outlined" startIcon={<MapIcon />} sx={{ marginBottom: '3rem' }}>
            <Link
              to={`/map`}
              state={{ address: data.address, coordinates: data.coordinates }}
              style={{ color: '#3498db', textDecoration: 'none' }}
            >
              Como Llegar
            </Link>
          </Button>
          {!data.state && auth && !user ? <Button variant="contained" onClick={() => handleStateChange(data)} >
            Agregar Establecimiento
          </Button> : null}
        </div>
      ))
        : null}
    </Box>
  )
}

export default Details;