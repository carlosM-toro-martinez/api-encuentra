import { useStyles } from './modal.styles'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate, Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import MapIcon from '@mui/icons-material/Map';
import CarouselImagesDetailsComponent from './CarouselImagesDetailsComponent';
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
import { useContext, useState } from 'react';
import { MainContext } from '../../context/MainContext';
import businessStateUpdateService from '../../async/services/put/businessStateUpdateServices';

const OpeningHours = ({ openinghours }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      {openinghours[0].weekend ? <Typography>
        {openinghours[0].weekend}
      </Typography> : null}
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
    <Table>
      <TableHead>
        <TableRow sx={{
          color: 'white'
        }}>
          {data.phone_number ? <TableCell sx={{ color: 'white' }}>
            <Typography style={{ color: '#3498db' }}>
              <PhoneIcon /> Telefono
            </Typography>
          </TableCell> : null}

          {data.mail ? <TableCell sx={{ color: 'white' }}>
            <Typography style={{ color: '#e74c3c' }}>
              <EmailIcon /> Correo
            </Typography>
          </TableCell> : null}
          {data.website_url ? <TableCell sx={{ color: 'white' }}>
            <Typography style={{ color: '#2ecc71' }}>
              <PublicIcon /> Sitio Web
            </Typography>
          </TableCell> : null}
          {data.address ? <TableCell sx={{ color: 'white' }}>
            <Typography style={{ color: '#f39c12' }}>
              <LocationOnIcon /> Direccion
            </Typography>
          </TableCell> : null}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow sx={{ color: 'white' }}>
          {data.phone_number ? <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>
            <Typography>
              {data.phone_number}
            </Typography>
          </TableCell> : null}
          {data.mail ? <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>
            <Typography>
              {data.mail}
            </Typography>
          </TableCell> : null}
          {data.website_url ? <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>
            <Typography>
              {data.website_url}
            </Typography>
          </TableCell> : null}
          {data.address ? <TableCell sx={{ color: 'white', textTransform: 'capitalize' }}>
            <Typography >
              {data.address}
            </Typography>
          </TableCell> : null}
        </TableRow>
      </TableBody>
    </Table>
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
  const [showTable, setShowTable] = useState(false);

  const handleToggleTable = () => {
    setShowTable(!showTable);
  };
  return (
    <Box sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Button onClick={handleToggleTable} sx={{ marginBottom: '1rem' }}>
        {showTable ? 'Ocultar Productos' : 'Mostrar Productos'}
      </Button>
      {showTable && products[0]?.product_id ? <Typography variant="h4" component="h4">
        Productos
      </Typography> : null}
      {showTable && products[0]?.product_id ? <Table sx={{ marginBottom: '3rem', justifyContent: 'center', alignItems: 'center' }}>
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
  const [showTable, setShowTable] = useState(false);

  const handleToggleTable = () => {
    setShowTable(!showTable);
  };
  return (
    <Box sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Button onClick={handleToggleTable} sx={{ marginBottom: '1rem' }}>
        {showTable ? 'Ocultar Promociones' : 'Mostrar Promociones'}
      </Button>
      {showTable && promotions[0]?.promotion_id ? <Typography variant="h4" component="h4">
        Promociones
      </Typography> : null}
      {showTable && promotions[0]?.promotion_id ? <Table sx={{ marginBottom: '3rem', justifyContent: 'center', alignItems: 'center' }}>
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

  const handleStateChange = async (data) => {
    try {
      const newData = { state: !data.state };
      await businessStateUpdateService(data.business_id, newData);
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
          <OpeningHours openinghours={data.openinghours} />
          <Typography variant="h3" component="h3">
            mas informacion
          </Typography>
          <Typography component="h6">
            {data.business_description}
          </Typography>
          <BusinessContact data={data} />
          <Products products={data.products} />
          <Promotions promotions={data.promotions} />
          <Button variant="contained" startIcon={<MapIcon />}
            sx={{ marginBottom: '3rem', backgroundColor: '#FF4500', width: '50%', height: '3rem' }}>
            <Link
              to={`/map`}
              state={{ address: data.address, coordinates: data.coordinates }}
              style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}
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
//#FF4500
export default Details;