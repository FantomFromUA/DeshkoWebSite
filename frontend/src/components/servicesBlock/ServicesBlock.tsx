import { Button, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import ServiceCard from "../servicesCard/ServiceCard";

const ServicesBlock = () => {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        py: 10,
        mb: 5,
      }}
    >
      <Grid container spacing={3}>
        <Grid item sm={12} md={4} lg={4} alignContent="center">
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 5 }}>
            Поштові послуги
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 2 }}>
            Замовляйте доставку у найвіддаленіші куточки України, відправляйте й
            отримуйте посилки з усього світу і навпаки.
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Виберіть доставку, яка найкраще підійде вам за термінами пересилання
            і вартістю.
          </Typography>
          <Button
            color="error"
            variant="contained"
            size="large"
            href="/services"
            sx={{ width: "75%", marginTop: 5 }}
            className="button"
          >
            Детальніше
          </Button>
        </Grid>
        <Grid item sm={12} md={8} lg={8}>
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item>
              <ServiceCard title="Доставка по Україні" icon='"../../images/plane-icon.png"' />
            </Grid>
            <Grid item>
              <ServiceCard title="Доставка документів" icon='"../../images/plane-icon.png"' />
            </Grid>
            <Grid item>
              <ServiceCard title="Доставка за межі України" icon='"../../images/plane-icon.png"' />
            </Grid>
            <Grid item>
              <ServiceCard title="Доставка в Україну" icon='"../../images/plane-icon.png"'/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicesBlock;
