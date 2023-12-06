import { useStyles } from './navBar.styles';
import sectionsService from '../../async/services/sectionsService';
import React, { useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useQuery } from 'react-query';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import AppBarComponent from './AppBarComponent';
import potosyBlack from '../../assets/images/iconPotosy.jpg'
import { useNavigate } from 'react-router-dom';
import { MainContext } from '../../context/MainContext';


const drawerWidth = 200;

const DrawerHeader = styled('div')(({ theme }) => ({
  backgroundColor: 'rgba(51, 51, 51, 0)',
  display: 'flex',
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const NavBar = (props) => {
  const { children } = props;
  const classes = useStyles();
  const { data, isLoading, isError, error } = useQuery('sections', () => sectionsService());
  const { auth, user } = useContext(MainContext);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(`/${route}`)
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarComponent setOpen={setOpen} open={open} />
      <Drawer
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            backgroundColor: 'rgba(51, 51, 51, 0.2)',
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader >
          <img
            src={potosyBlack}
            width='80px'
            height='80px'
            style={{
              borderRadius: '50%',
              overflow: 'hidden',
            }} />
          <IconButton onClick={handleDrawerClose} style={{ color: 'white', marginLeft: '4.5rem' }}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ backgroundColor: 'white' }} />
        <List>
          <ListItem >
            <ListItemButton sx={{ color: 'white' }} onClick={() => handleNavigate('')} >
              <ListItemIcon>
                <HomeIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={'Inicio'} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ color: 'white' }} onClick={() => handleNavigate('about')} >
              <ListItemIcon>
                <InfoIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={'Acerca de'} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ color: 'white' }} onClick={() => handleNavigate('contacts')} >
              <ListItemIcon>
                <ContactsIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={'Contactos'} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider sx={{ backgroundColor: 'white' }} />
        {auth && !user ?
          <List>
            <ListItem >
              <ListItemButton sx={{ color: 'white' }} onClick={() => handleNavigate('admin')} >
                <ListItemText primary={'Control de Establecimientos'} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ color: 'white' }} onClick={() => handleNavigate('admin/sections')} >
                <ListItemText primary={'Control de Apartados'} />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton sx={{ color: 'white' }} onClick={() => handleNavigate('admin/news')} >
                <ListItemText primary={'Control de Noticias'} />
              </ListItemButton>
            </ListItem>
          </List>
          : null}
        {auth && user ?
          <List>
            <ListItem >
              <ListItemButton sx={{ color: 'white' }} onClick={() => navigate('/establishmentAdmin/home', { state: user.business_id })} >
                <ListItemText primary={'Mi Establecimiento'} />
              </ListItemButton>
            </ListItem>
          </List>
          : null}
      </Drawer>
    </Box>
  )
}

export default NavBar;
