import { Box, Button, Container, TextField, Typography } from "@mui/material";
import * as React from "react";
import { BiSend } from "react-icons/bi";

const ContactForm = () => {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 9,
      }}
    >
      <Typography
        variant="h4"
        sx={{ wordWrap: "break-word", width: "50%", textAlign: "center" }}
      >
        Залишити заявку на безкоштовну консультацію
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "60ch" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="name"
          label="Імʼя та прізвище"
          variant="standard"
        />
        <TextField
          required
          id="phone-number"
          label="Номер телефону"
          variant="standard"
        />
        <TextField required id="email" label="E-mail" variant="standard" />
        <TextField
          required
          id="comment"
          label="Коментар"
          variant="standard"
          multiline
          rows={4}
        />
        <Button
          color="error"
          variant="contained"
          size="large"
          component="a"
          href="/contact"
          sx={{ marginTop: 3, width: "60ch" }}
          endIcon={<BiSend />}
        >
          Надіслати
        </Button>
      </Box>
    </Container>
  );
};

export default ContactForm;
