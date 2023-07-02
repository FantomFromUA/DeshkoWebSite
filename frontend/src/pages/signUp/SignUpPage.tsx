import {
  Box,
  Typography,
  TextField,
  Grid,
  Container,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { RegistrationCustomerModel } from "../../types/registrationCustomerModel";
import validator from "validator";
import { checkIfValidRegestration, registration } from "../../http/userHttp";
import * as React from "react";

const SignUpPage = () => {
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = parcer(data.get("name")?.toString());
    const phone = parcer(data.get("phone")?.toString());
    const email = parcer(data.get("email")?.toString());
    const login = parcer(data.get("login")?.toString());
    const password = parcer(data.get("password")?.toString());
    let flag = false;

    if (name === "") {
      setNameError("Заповніть поле з іменем");
      flag = true;
    }

    if (!validator.isMobilePhone(phone) || phone === "") {
      setPhoneError("Введіть коректний номер телефону");
      flag = true;
    }

    if (!validator.isEmail(email) || email === "") {
      setEmailError("Введіть коректний емейл");
      flag = true;
    }

    if (login === "") {
      setLoginError("Заповніть поле з Логіном");
      flag = true;
    }

    if (!validator.isStrongPassword(password) || password === "") {
      setPasswordError(
        "Пароль повинен містити: 1 букву в вищому регістрі, 1 букву в нижньому регість, 1 цифру, 1 спеціальний символ, та бути завдовжки мінімум 8 символів"
      );
      flag = true;
    }

    if (flag)  return;

    checkIfValidRegestration(phone, email, login)
      .then(() => {
        const customer: RegistrationCustomerModel = {
          name,
          phone,
          email,
          login,
          password,
        };
        registration(customer).catch((error: Error) => alert(error.message));
        alert("Тепер підтвердіть свою пошту");
        navigate("/signin");
      })
      .catch((error: Error) => {
        alert(error.message);
      });
  };

  
  const parcer = (value: string | undefined): string => {
    if (value === undefined) return "";
    return value;
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          my: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Реєстрація
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Імʼя"
            name="name"
            autoComplete="name"
            autoFocus
            error={Boolean(nameError)}
            helperText={nameError}
            onChange={() => setNameError("")} 
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Номер телефону"
            name="phone"
            autoComplete="phone"
            error={Boolean(phoneError)}
            helperText={phoneError}
            onChange={() => setPhoneError("")}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Електронна пошта"
            name="email"
            autoComplete="email"
            error={Boolean(emailError)}
            helperText={emailError}
            onChange={() => setEmailError("")}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="login"
            label="Логін"
            name="login"
            autoComplete="login"
            error={Boolean(loginError)}
            helperText={loginError}
            onChange={() => setLoginError("")}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            id="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <MdOutlineVisibilityOff />
                    ) : (
                      <MdOutlineVisibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(passwordError)}
            helperText={passwordError}
            onChange={() => setPasswordError("")}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link to="/signin">{"Вже маєте аккаунт? Вхід"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpPage;
