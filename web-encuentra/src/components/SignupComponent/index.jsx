import React, { useContext, useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import { Container, Typography, TextField, Button } from '@mui/material';
import { useStyles } from './Signup.styles';
import registerSession from '../../async/services/post/registerSession';
import { useLocation, useNavigate, Redirect, Navigate } from 'react-router-dom';
import loginSession from '../../async/services/post/loginSession';
import { MainContext } from '../../context/MainContext';

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

function SignupComponent() {
    const { user, setUser } = useContext(MainContext);
    const classes = useStyles();
    const navigation = useNavigate();
    const location = useLocation();
    const { state } = location;
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        business_id: state ? state : null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newData = formData;
            const promiseResult = await registerSession(newData);
            setUser(newData);
            navigation('/establishmentAdmin/socialNet', { state: state })


        } catch (error) {
            console.error(error);
        }
    };

    if (!state) {
        return <Navigate to="/establishmentAdmin" />;
    }

    return (
        <Container maxWidth="xs" className={classes.container}>
            <Typography variant="h4" align="center" gutterBottom>
                Crear Cuenta
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <ValidationTextField
                    label="Nombre de Usuario"
                    variant="outlined"
                    fullWidth
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <ValidationTextField
                    label="Contraseña"
                    variant="outlined"
                    fullWidth
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="primary">
                    Registrarse
                </Button>
            </form>
        </Container>
    );
};

export default SignupComponent