import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Container,
  Typography,
  Box,
} from '@mui/material';
import { useStyles } from './AddPromotions.styles';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import promotionsUpdateService from '../../../async/services/put/promotionsUpdateService';
import promotionsAddServices from '../../../async/services/post/promotionsAddServices';
import promotionsService from '../../../async/services/promotionsService';


const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: '#E0E3E7',
    borderWidth: 1,
    color: 'white'
  },
  '& input:invalid + fieldset': {
    borderColor: 'white',
    borderWidth: 1,
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& textarea:valid + fieldset': {
    borderColor: '#E0E3E7',
    borderWidth: 1,
    color: 'white'
  },
  '& textarea:invalid + fieldset': {
    borderColor: 'white',
    borderWidth: 1,
  },
  '& .MuiInputBase-multiline': {
    color: 'white',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'white',
  },
  '& .MuiFormHelperText-root': {
    color: 'white',
  },
  '& fieldset': {
    borderColor: 'white !important',
  },
});

const AddPromotions = () => {
  const classes = useStyles();
  const { id } = useParams();
  const location = useLocation();
  const { data, isLoading, error, refetch } = useQuery('promotions', () => promotionsService(location.state));
  const navigation = useNavigate();
  const item = location?.state?.item;
  const [promotionsData, setPromotionsData] = useState({
    promotion_details: '',
    price: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPromotionsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newData = { ...promotionsData, business_id: location.state };
      await id ? promotionsUpdateService(id, newData) : promotionsAddServices(newData);
      refetch();
      setPromotionsData({
        promotion_details: '',
        price: '',
      })
    } catch (error) {
      console.error(error);
    }
  };

  const handleNavigation = () => {
    navigation('/establishmentAdmin/products', { state: location.state })
  };

  if (!location.state) {
    return <Navigate to="/establishmentAdmin" />;
  }

  return (
    <Container maxWidth="sm" className={classes.formContainer}>
      <Typography variant="h4" align="center" gutterBottom>
        {id ? 'Editar Promoción' : 'Agregar Nueva Promoción'}
      </Typography>
      <Table sx={{ marginBottom: '3rem', justifyContent: 'center', alignItems: 'center' }}>
        <TableHead>
          <TableRow sx={{
            color: 'white'
          }}>
            <TableCell sx={{ color: 'white' }}>Detalle</TableCell>
            <TableCell sx={{ color: 'white' }}>Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading && !error ? data.map(item => (
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
      </Table>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <ValidationTextField
            fullWidth
            label="Detalles de la Promoción"
            name="promotion_details"
            value={promotionsData.promotion_details}
            onChange={handleChange}
          />
          <ValidationTextField
            fullWidth
            label="Precio"
            name="price"
            value={promotionsData.price}
            onChange={handleChange}
          />
        </Box>
        <Button type="submit" variant="outlined" className={classes.button}>
          {id ? 'Actualizar Datos' : 'Agregar'}
        </Button>
        <Button className={classes.buttonFinish} onClick={handleNavigation}>
          Siguiente
        </Button>
      </form>
    </Container>
  );
};

export default AddPromotions;
