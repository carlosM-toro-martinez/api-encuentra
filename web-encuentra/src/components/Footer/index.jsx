import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useStyles } from "./footer.styles";
import footerBackground from '../../assets/images/1potosi.jpg';

export default function Footer() {
  const classes = useStyles();
  return (
    <Box
      className={classes.wrapper}
    >
      <Box align="center" sx={{ backgroundImage: `url(${footerBackground})`, width: '100%' }} >

        <Box className={classes.textContainer}>
          <Typography sx={{ color: 'white', fontSize: '2rem' }} component="h6" >
            Siguenos
          </Typography>
          <Link
            sx={{ color: 'white' }}
            href="https://www.facebook.com/"
            color="inherit">
            <Facebook />
          </Link>
          <Link
            href="https://www.instagram.com/"
            color="inherit"
            sx={{ color: 'white' }}
          >
            <Instagram />
          </Link>
          <Link
            href="https://www.twitter.com/"
            sx={{ color: 'white' }}>
            <Twitter />
          </Link>
        </Box>
      </Box>
      <Box className={classes.footer}>
        <Typography variant="h6" align="center" sx={{ color: 'black', fontWeight: 'bold' }}>
          {"Copyright © "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Box>
  );
}