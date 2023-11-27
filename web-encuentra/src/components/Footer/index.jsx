import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useStyles } from "./footer.styles";

export default function Footer() {
  const classes = useStyles();
  return (
    <Box
      clasName={classes.wrapper}
      sx={{
        backgroundColor: 'rgba(51, 51, 51)',
        p: 2
      }}
    >
      <Container align="center">
        <Grid container>
          <Grid item xs={12} sm={12} clasName={classes.textContainer}>
            <Typography sx={{ color: 'white', fontSize: '2rem' }} component="h6" gutterBottom>
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
              sx={{ pl: 1, pr: 1, color: 'white' }}
            >
              <Instagram />
            </Link>
            <Link
              href="https://www.twitter.com/"
              sx={{ color: 'white' }}>
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" align="center" sx={{ color: 'white' }}>
            {"Copyright © "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}