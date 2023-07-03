import React from "react";
import { Button, Container, Typography } from "@mui/material";

const ErrorPage: React.FC = () => {
  console.log(123);
  
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        src={require("../../images/error.jpeg")}
        alt="Error"
        style={{ width: "50%", marginBottom: 16 }}
      />
      <Typography variant="h6" component="div" sx={{ textAlign: "center" }}>
        На жаль, таку сторінку не знайдено.
      </Typography>
      <Button
        color="error"
        variant="contained"
        size="large"
        href="/"
        sx={{ minWidth: 350, marginTop: 3 }}
      >
        На головну
      </Button>
    </Container>
  );
};

export default ErrorPage;
