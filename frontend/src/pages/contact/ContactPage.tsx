import * as React from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import { Container, Grid, Typography, Button } from "@mui/material";
import { BsEnvelopeFill, BsTelephoneFill } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Map from "../../components/map/Map";

const MukachevoCenter = {
  lat: 48.4392,
  lng: 22.7178
};

const containerStyle = {
  width: "350px",
  height: "350px",
  borderRadius: '50%',
  border: "5px solid #042c4b"
};

const ContactPage: React.FC = () => {
  
  return (
    <div>
      <Container
        component="section"
        sx={{ backgroundColor: "#fbfafa", minWidth: "100vw", my: 0, py: 10 }}
      >
        <Grid container spacing={1} display="flex">
          <Grid item xs={6}>
            <Grid container display="flex" alignItems="center" justifyContent="center">
            <Map center={MukachevoCenter} style={containerStyle} />
            <Button variant="contained"
                size="medium" sx={{bottom:-70, left:-70}}>Переглянути на карті</Button>
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
                <BsTelephoneFill size="17px" style={{ marginRight: "15px" }} />
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

      <ContactForm />
    </div>
  );
};

export default ContactPage;
