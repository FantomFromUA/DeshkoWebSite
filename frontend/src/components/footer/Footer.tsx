import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./footer.css";
import {
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaPhoneAlt,
} from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}

  return (
    <div className="text-white">
      <Typography component="footer" className={"footer"}>
        <Container maxWidth="lg" sx={{ my: 8, display: "flex" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} lg={6} alignContent="center">
              <Typography
                sx={{
                  fontSize: { xs: "h6.fontSize", sm: "h5.fontSize" },
                  fontWeight: "bold",
                }}
              >
                За додатковою інформацією звертайтесь
              </Typography>
              <Button
                color="error"
                variant="contained"
                size="large"
                href="/contact"
                sx={{ width: "75%", marginTop: 3 }}
                className="button"
                endIcon={<BiSend />}
              >
                Залишити повідомлення
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box
                component="ul"
                sx={{ m: 0, listStyle: "none", p: 0 }}
                textAlign={{ xs: "center", sm: "left" }}
              >
                <Box
                  component="li"
                  sx={{
                    py: 0.5,
                    fontSize: "h6.fontSize",
                     
                  }}
                >
                  <Link onClick={scrollToTop} to="/about" className="link text-decoration-none">
                    Про нас
                  </Link>
                </Box>
                <Box
                  component="li"
                  sx={{
                    py: 0.5,
                    fontSize: "h6.fontSize",
                     
                  }}
                >
                  <Link onClick={scrollToTop} to="/tracking" className="link text-decoration-none">
                    Трекінг
                  </Link>
                </Box>
                <Box
                  component="li"
                  sx={{
                    py: 0.5,
                    fontSize: "h6.fontSize",
                  }}
                >
                  <Link onClick={scrollToTop} to="/calculator" className="link text-decoration-none">
                    Калькулятор розрахунку
                  </Link>
                </Box>
                <Box
                  component="li"
                  sx={{
                    py: 0.5,
                    fontSize: "h6.fontSize",
                     
                  }}
                >
                  <Link onClick={scrollToTop} to="/taryfy" className="link text-decoration-none">
                    Тарифи
                  </Link>
                </Box>
                <Box
                  component="li"
                  sx={{
                    py: 0.5,
                    fontSize: "h6.fontSize",
                     
                  }}
                >
                  <Link onClick={scrollToTop} to="/contact" className="link text-decoration-none">
                    Контакти
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className="social-icons">
                <Link className="m-1 link text-white h3" to="/">
                  <FaInstagram />
                </Link>
                <Link className="m-1 link text-white h3" to="/">
                  <FaFacebook />
                </Link>
                <Link className="m-1 link text-white h3" to="/">
                  <FaTelegram />
                </Link>
                <Link className="m-1 link text-white h3" to="/">
                  <FaPhoneAlt />
                </Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Typography>
      <div className="bg-dark text-center p-3">© 2023 Deshko Company</div>
    </div>
  );
};

export default Footer;
