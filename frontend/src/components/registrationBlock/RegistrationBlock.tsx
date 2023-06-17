import { Button, Container } from "@mui/material";
import * as React from "react";

const RegistrationBlock = () => {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 20,
      }}
    >
      <h2>Зареєструватись прямо зараз</h2>
      <Button color="primary" size="large">
        Реєстрація
      </Button>
    </Container>
  );
};

export default RegistrationBlock;
