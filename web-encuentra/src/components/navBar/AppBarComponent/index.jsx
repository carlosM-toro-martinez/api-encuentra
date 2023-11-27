import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
    Box,
    AppBar,
    Toolbar,
    IconButton,
    InputBase,
    Badge,
    MenuItem,
    Menu,
    useScrollTrigger
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Slide } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function HideOnScroll(props) {
    const { children, window, threshold } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        threshold: threshold || 50,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
    threshold: PropTypes.number,
};

export default function AppBarComponent(props) {
    const { setOpen, open } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const navigate = useNavigate();

    const handleNavigate = (route) => {
        navigate(`/${route}`)
    }

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={() => handleNavigate('')}>
                <IconButton
                    size="large"
                    color="inherit">
                    <Badge badgeContent={4} color="error">
                        <HomeIcon />
                    </Badge>
                </IconButton>
                <p>Inicio</p>
            </MenuItem>
            <MenuItem onClick={() => handleNavigate('news')}>
                <IconButton
                    size="large"
                    color="inherit">
                    <Badge badgeContent={3} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Noticias Y Novedades</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    return (
        <Box>
            <HideOnScroll {...props}>
                {/* <Typography>hola</Typography> */}
                <AppBar open={open} sx={{
                    backgroundColor: 'rgba(51, 51, 51, 0.6 )'
                }}>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            onClick={handleDrawerOpen}
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: '4rem' }}>
                            <IconButton
                                size="large"
                                color="inherit"
                                onClick={() => handleNavigate('')}>
                                <Badge color="error">
                                    <HomeIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                color="inherit"
                                onClick={() => handleNavigate('news')}
                            >
                                <Badge badgeContent={3} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
