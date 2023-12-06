import React, { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import {
  TextField,
  Button,
  Container,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
} from '@mui/material';
import { useStyles } from './AddBusiness.styles';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import businessUpdateServices from '../../async/services/put/businessUpdateServices';
import businessAddService from '../../async/services/post/businessAddServices';
import { useQuery } from 'react-query';
import sectionsService from '../../async/services/sectionsService';
import businessOneService from '../../async/services/businessOneService';


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


const AddBusinessComponent = () => {

  const { data, isLoading, isError, error, refetch } = useQuery(`sectionsAdmin`, () => sectionsService());
  const classes = useStyles();
  const { id } = useParams();
  const location = useLocation();
  const navigation = useNavigate();
  const [businessData, setBusinessData] = useState({
    name: '',
    description: '',
    days_attention: '',
    logo_url: '',
    phone_number: '',
    website_url: '',
    mail: '',
    address: '',
    coordinates: '',
    section_id: '',
    image: null
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setBusinessData((prevData) => ({
      ...prevData,
      [name]: name === 'image' ? files[0] : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      for (const key in businessData) {
        if (key === 'image' && businessData[key] !== null) {
          formData.append(key, businessData[key]);
        } else {
          formData.append(key, businessData[key]);
        }
      }
      const promiseResult = await id ?
        businessUpdateServices(id, formData) :
        businessAddService(formData);
      promiseResult.then((data) => {
        navigation('/signup', { state: data.business_id })
      }).catch((error) => {
        console.error('Error al resolver la promesa:', error);
      });


    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm" className={classes.formContainer}>
      <Typography variant="h4" align="center" gutterBottom>
        {id ? 'editar Establesimiento' : 'Agregar Nuevo Establesimiento'}
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: '2rem', alignItems: 'center' }}>
            <label htmlFor="logoInput" style={{ marginBottom: '8px', color: 'white' }}>
              Por favor, introduce el icono de su establecimiento:
            </label>
            <input
              id="logoInput"
              type="file"
              accept="image/*"
              onChange={handleChange}
              name="image"
              required
              style={{ marginBottom: '16px', color: 'white' }}
            />
          </Box>
          <ValidationTextField
            required
            fullWidth
            label="Nombre"
            name="name"
            value={businessData.name}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <ValidationTextField
            required
            fullWidth
            label="Descripción"
            name="description"
            value={businessData.description}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <FormControl fullWidth sx={{ marginBottom: 2, color: 'white' }}>
            <InputLabel id="section-label" style={{ color: 'white' }}>
              Dias de Atencion
            </InputLabel>
            <Select
              id="days_attention"
              name="days_attention"
              value={businessData.days_attention}
              label="Días de Atención"
              onChange={handleChange}
              required
              sx={{ color: 'white', '& fieldset': { borderColor: 'white' } }}
            >
              <MenuItem value='Lunes - Viernes'>
                Lunes - Viernes
              </MenuItem>
              <MenuItem value='Lunes - Sabado'>
                Lunes - Sabado
              </MenuItem>
              <MenuItem value='Lunes - Domingo'>
                Lunes - Domingo
              </MenuItem>
            </Select>
          </FormControl>
          <ValidationTextField
            fullWidth
            label="Número de Teléfono"
            name="phone_number"
            required
            value={businessData.phone_number}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <ValidationTextField
            fullWidth
            label="URL del Sitio Web"
            name="website_url"
            value={businessData.website_url}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />

          <ValidationTextField
            fullWidth
            label="Correo Electrónico"
            name="mail"
            value={businessData.mail}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <ValidationTextField
            fullWidth
            label="Dirección"
            name="address"
            required
            value={businessData.address}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <ValidationTextField
            fullWidth
            label="Coordenadas (latitud, longitud)"
            name="coordinates"
            required
            value={businessData.coordinates}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />

          <FormControl fullWidth sx={{ marginBottom: 2, color: 'white' }}>
            <InputLabel id="section-label" style={{ color: 'white' }}>
              Sección
            </InputLabel>
            <Select
              labelId="section-label"
              id="section-select"
              name="section_id"
              required
              value={businessData.section_id}
              label="Sección"
              onChange={handleChange}
              sx={{ color: 'white', '& fieldset': { borderColor: 'white' } }}
            >
              {!isLoading && !error ? (
                data?.map((section) => (
                  <MenuItem key={section.section_id} value={section.section_id}>
                    {section.title}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value="" sx={{ color: 'white' }}>
                  Cargando...
                </MenuItem>
              )}
            </Select>
          </FormControl>
          <ValidationTextField
            fullWidth
            label="ID de Sección"
            name="section_id"
            value={businessData.section_id}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
        </div>
        <Button
          type='submit'
          variant="outlined"
          className={classes.button}
        >
          {id ? 'ACTUALIZAR DATOS' : 'AGREGAR NUEVO'}
        </Button>
      </form>
    </Container>
  );
};

export default AddBusinessComponent;
