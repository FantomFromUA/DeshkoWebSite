import { Button, Container, Grid, Typography } from "@mui/material";
import * as React from "react";

const RegistrationBlock = () => {

  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        py: 10,
        mb: 5,
        background: "#042c4b",
        minWidth: "100%",
      }}
    >
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6} md={6}>
          <img
            src={require("../../images/registration-block.png")}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              opacity: "60%",
            }}
          />
        </Grid>

        <Grid item xs={6} md={6}>
          <Typography
            variant="h3"
            sx={{
               
              fontWeight: "bold",
              color: "white",
              mb: 2,
            }}
          >
            Зареєструватись прямо зараз
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontFamily: "unset",
              color: "grey",
              mb: 2,
              mr: 5,
            }}
          >
            Першими дізнавайтесь за оновленнями, слідкуйте за своїми посилками
            та легко створюйте нові замовлення
          </Typography>

          <Button
            color="error"
            variant="contained"
            size="large"
            component="a"
            href="/signup"
            sx={{ minWidth: 350, marginTop: 3 }}
          >
            Реєстрація
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegistrationBlock;
