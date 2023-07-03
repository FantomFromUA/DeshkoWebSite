import * as React from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { BsEnvelopeFill, BsTelephoneFill } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Map from "../../components/map/Map";

const MukachevoCenter = {
  lat: 48.4392,
  lng: 22.7178,
};

const containerStyle = {
  width: "350px",
  height: "350px",
  borderRadius: "50%",
  border: "5px solid #042c4b",
};

const ContactPage: React.FC = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#fbfafa", minWidth: "100vw" }}>
        <Container
          component="section"
          sx={{ backgroundColor: "#fbfafa", py: 10 }}
        >
          <Grid container spacing={1} display="flex">
            <Grid item xs={6}>
              <Grid
                container
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Map center={MukachevoCenter} style={containerStyle} />
                <Button
                  variant="contained"
                  size="medium"
                  sx={{ bottom: -70, left: -70 }}
                  onClick={() => window.open("https://www.google.com/maps/place/%D0%9C%D1%83%D0%BA%D0%B0%D1%87%D0%B5%D0%B2%D0%BE,+%D0%97%D0%B0%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/")?.focus()}
                >
                  Переглянути на карті
                </Button>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                Контакти
              </Typography>
              <Typography variant="h6" sx={{ mb: 5 }}>
                Мукачево, офіс
              </Typography>

              <Grid container mb={2} display="flex" alignItems="center">
                <a
                  href="tel:+380505055555"
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    color: "black",
                  }}
                >
                  <BsTelephoneFill
                    size="17px"
                    style={{ marginRight: "15px" }}
                  />
                  <Typography sx={{ fontSize: "17px" }}>
                    +38 050 505 55 55
                  </Typography>
                </a>
              </Grid>

              <Grid container mb={2} display="flex" alignItems="center">
                <a
                  href="mailto:deshko.company@gmail.com"
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    color: "black",
                  }}
                >
                  <BsEnvelopeFill size="17px" style={{ marginRight: "15px" }} />
                  <Typography sx={{ fontSize: "17px" }}>
                    deshko.company@gmail.com
                  </Typography>
                </a>
              </Grid>

              <Grid container alignItems="center" mb={2}>
                <FaTelegram size="20px" style={{ marginRight: "15px" }} />
                <Typography sx={{ fontSize: "17px" }}>@deshko</Typography>
              </Grid>

              <Grid container alignItems="center" mb={2}>
                <TbWorld size="20px" style={{ marginRight: "15px" }} />
                <Typography sx={{ fontSize: "17px" }}>
                  Deshko Company, вул. Українська, 115,
                  <br /> Мукачево, 89611, Україна
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ContactForm />
    </Box>
  );
};

export default ContactPage;
