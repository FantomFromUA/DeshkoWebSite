import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./bannerHero.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { TbSquareRoundedNumber1, TbSquareRoundedNumber2, TbSquareRoundedNumber3 } from "react-icons/tb";

const BannerHero = () => {
  return (
    <div className="bannerContainer">
      <div className="blurred"></div>
      <Container
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Grid container spacing={5} display="flex">

          <Grid item md={8} xs={6}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: '"Helvetica Neue"',
                fontWeight: "bold",
                color: "white"
              }}
            >
              Міжнародне транспортне підприємство 
            </Typography>
          </Grid>

          <Grid item md={4} xs={6}>
          <Typography
              variant="h4"
              sx={{
                fontFamily: '"Helvetica Neue"',
                fontWeight: "bold",
                color: "white"
              }}
            >
              Deshko Company
            </Typography>
          </Grid>

          <Grid item md={4}  xs={12}>
          <Typography
              sx={{
                fontSize: "h2.fontSize",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 2
              }}
            >
              <TbSquareRoundedNumber1/>
            </Typography>
      
          <Typography
              variant="subtitle1"
              sx={{
                fontSize: "h6.fontSize",
                fontFamily: '"Helvetica Neue"', 
                color: "white"
              }}
            >
              Текст1Текст1Текст1Текст1
            </Typography>
          </Grid>

          <Grid item md={4}  xs={12}>
          <Typography
              sx={{
                fontSize: "h2.fontSize",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 2
              }}
            >
              <TbSquareRoundedNumber2/>
            </Typography>

          <Typography
              variant="subtitle1"
              sx={{
                fontSize: "h6.fontSize",
                fontFamily: '"Helvetica Neue"', 
                color: "white"
              }}
            >
              Текст2Текст2Текст2Текст2
            </Typography>
          </Grid>

          <Grid item md={4}  xs={12}>
          <Typography
              sx={{
                fontSize: "h2.fontSize",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 2
              }}
            >
              <TbSquareRoundedNumber3/>
            </Typography>

          <Typography
              variant="subtitle1"
              sx={{
                fontSize: "h6.fontSize",
                fontFamily: '"Helvetica Neue"',
                color: "white"
              }}
            >
             Текст3Текст3Текст3Текст3
            </Typography>
          </Grid>

          <Grid item xs={12} textAlign="center">
          <Typography
              variant="h4"
              sx={{
                fontFamily: '"Helvetica Neue"',
                fontWeight: "bold",
                color: "white"
              }}
            >
             Перевірити та створити посилку прямо зараз
            </Typography>

            <Button
                color="error"
                variant="contained"
                size="large"
                component="a"
                href="/"
                sx={{ minWidth: 350, marginTop: 3,  }}
                endIcon={<BsFillArrowRightCircleFill />}
              >
                Створити власний кабінет
            </Button>
          </Grid>
          
        </Grid>
      </Container>
    </div>
  );
};

export default BannerHero;
