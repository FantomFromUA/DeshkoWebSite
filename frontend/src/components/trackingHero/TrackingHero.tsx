import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { AiOutlineCalculator, AiOutlineQuestionCircle } from "react-icons/ai";
import { BsCalculator } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TrackingHero = () => {

  const navigate = useNavigate();

  const [parcelId, setParcelId] = useState("");

  const findPurcel = () => {
    navigate(`/parcel/${parcelId}`);
  }

  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        py: 7,
        my: 5,
        background: "#042c4b",
        minWidth: "100vw",
        height: "470px",
        boxShadow: "#f7fafa 0px 48px 100px 0px",
      }}
    >
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ ml: 10 }}
      >
        <Grid item xs={6} md={6}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Helvetica Neue"',
              fontWeight: "bold",
              color: "white",
              mb: 2,
            }}
          >
            Доставка на території України та світу
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "unset",
              color: "white",
              mb: 2,
              mr: 5,
            }}
          >
            Ваша точка опори - поруч. Надсилаємо туди, куди іншим не дістатись.
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              placeholder="Введіть номер відправлення"
              value={parcelId}
              onChange={e => setParcelId(e.target.value)}
              sx={{
                width: "75%",
                mt: 3,
                mb: 3,
                py: 1,
                backgroundColor: "white",
                borderRadius: 2,
                "& fieldset": { border: "none" },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      onClick={() => findPurcel()}
                      color="primary"
                      sx={{
                        "&:hover": {
                          background: "#dedede",
                        },
                      }}
                    >
                      <Typography sx={{ fontWeight: "bold", color: "black" }}>
                        Відстежити
                      </Typography>
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={6} md={6}>
        <Box
              component="img"
              src={require("../../images/tracking-hero.png")}
              sx={{
                height: "350px",
              }}
            />
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item>
              <Button
                startIcon={<BsCalculator />}
                variant="contained"
                size="medium"
                href="/taryfy"
                sx={{
                  minWidth: "17vw",
                  py: 3,
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Тарифи
              </Button>
            </Grid>
            <Grid item>
              <Button
                startIcon={<AiOutlineCalculator />}
                variant="contained"
                size="medium"
                href="/calculator"
                sx={{
                  minWidth: "17vw",
                  py: 3,
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Розрахувати
              </Button>
            </Grid>
            <Grid item>
              <Button
                startIcon={<BiLogIn />}
                variant="contained"
                size="medium"
                href="/signin"
                sx={{
                  minWidth: "17vw",
                  py: 3,
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Зареєструватись
              </Button>
            </Grid>
            <Grid item>
              <Button
                startIcon={<AiOutlineQuestionCircle />}
                variant="contained"
                size="medium"
                href="/contact"
                sx={{
                  minWidth: "17vw",
                  py: 3,
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                Контакти
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TrackingHero;
