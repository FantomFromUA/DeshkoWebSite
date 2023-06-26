import {
  Box,
  Typography,
  TextField,
  Grid,
  Container,
  Button,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../../http/userHttp";
import { CustomerModel } from "../../types/customerModel";
import { error } from "console";

const SignInPage = () => {

  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const login = parcer(data.get("email")?.toString());
    const password = parcer(data.get("password")?.toString());

    if(login === ""){
      alert("Введіть логін або емейл!");
      return;
    }

    if(password === ""){
      alert("Введіьб пароль!")
    }

    signin(login, password).then((customer : CustomerModel) => {
      localStorage.setItem('userInfo', JSON.stringify(customer));
      window.location.replace("/");
    }).catch((error : Error) => {
      alert(error.message)
    });
    
  };

  const parcer = (value : string | undefined) : string => {
    if(value === undefined) return "";
    return value;
  }

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
          Вхід
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Електронна пошта або Логін"
            name="email"
            autoComplete="email"
            autoFocus
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Ввійти
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link to="/signup">{"Не маєте аккаунту? Зареєструйтесь."}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignInPage;
