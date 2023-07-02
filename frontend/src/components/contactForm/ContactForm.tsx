import { Box, Button, Container, TextField, Typography } from "@mui/material";
import * as React from "react";
import { BiSend } from "react-icons/bi";
import validator from 'validator';
import { EmailModel } from "../../types/emailModel";
import { sendContactEmail } from "../../http/emailcontact";

const ContactForm = () => {

  const [name, setName] = React.useState("");
  const [phone, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [nameError, setNameError] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [descriptionError, setDescriptionError] = React.useState("");

  const submitEmail = () => {
    let flag = false;

    if(name === "") {
      setNameError("Заповніть поле з іменем");
      flag = true;
    }
    if(!validator.isMobilePhone(phone)){
      setPhoneError("Введіть коректний номер телефону");
      flag = true;
    } 
    if(!validator.isEmail(email)){
      setEmailError("Введіть коректну пошту");
      flag = true;
    } 
    if (description === "") {
      setDescriptionError("Залиште коментар")
      flag = true;
    }
    if (flag) return;

    const contactEmail : EmailModel = {
      name,
      phone,
      email,
      description
    }

    sendContactEmail(contactEmail);
  }

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
          value={name}
          onChange={e => {setName(e.target.value); setNameError("")}}
          label="Імʼя та прізвище"
          variant="standard"
          error={Boolean(nameError)}
            helperText={nameError}
        />
        <TextField
          required
          id="phone-number"
          value={phone}
          onChange={e => {setPhoneNumber(e.target.value); setPhoneError("")}}
          label="Номер телефону"
          variant="standard"
          error={Boolean(phoneError)}
          helperText={phoneError}
        />
        <TextField 
          required 
          id="email" 
          label="E-mail" 
          value={email}
          onChange={e => {setEmail(e.target.value); setEmailError("")}}
          variant="standard" 
          error={Boolean(emailError)}
          helperText={emailError}
        />
        <TextField
          required
          id="comment"
          label="Коментар"
          value={description}
          onChange={e => {setDescription(e.target.value); setDescriptionError("")}}
          variant="standard"
          multiline
          rows={4}
          error={Boolean(descriptionError)}
          helperText={descriptionError}
        />
        <Button
          color="error"
          variant="contained"
          size="large"
          component="a"
          onClick={() => submitEmail()}
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
