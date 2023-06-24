import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./bannerHero.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { TbSquareRoundedNumber1, TbSquareRoundedNumber2, TbSquareRoundedNumber3 } from "react-icons/tb";

const BannerHero = () => {
  return (
    <div className="bannerContainer">
      <div className="blurred"></div>
      <Container className="contentContainer">
        <Grid container spacing={5} display="flex">

          <Grid item md={8} xs={6}>
            <Typography variant="h3" className="title">
              Міжнародне транспортне підприємство 
            </Typography>
          </Grid>

          <Grid item md={4} xs={6}>
            <Typography variant="h4" className="title">
              Deshko Company
            </Typography>
          </Grid>

          <Grid item md={4} xs={12}>
            <Typography variant="h2" sx={{mb:2}} className="numberIcon">
              <TbSquareRoundedNumber1/>
            </Typography>
            <Typography variant="h6" className="text">
              Текст1Текст1Текст1Текст1
            </Typography>
          </Grid>

          <Grid item md={4} xs={12}>
            <Typography  variant="h2" sx={{mb:2}} className="numberIcon">
              <TbSquareRoundedNumber2/>
            </Typography>
            <Typography variant="h6"  className="text">
              Текст2Текст2Текст2Текст2
            </Typography>
          </Grid>

          <Grid item md={4} xs={12}>
            <Typography variant="h2" sx={{mb:2}} className="numberIcon">
              <TbSquareRoundedNumber3/>
            </Typography>
            <Typography variant="h6" className="text">
              Текст3Текст3Текст3Текст3
            </Typography>
          </Grid>

          <Grid item xs={12} textAlign="center">
            <Typography variant="h4" className="title">
              Перевірити та створити посилку прямо зараз
            </Typography>

            <Button
              color="error"
              variant="contained"
              size="large"
              href="/"
              className="ctaButton"
              sx={{mt:3,  minWidth: "450px" }}
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
