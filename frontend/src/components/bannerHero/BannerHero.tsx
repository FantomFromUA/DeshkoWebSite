import { Button, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import "./bannerHero.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { TbSquareRoundedNumber1, TbSquareRoundedNumber2, TbSquareRoundedNumber3 } from "react-icons/tb";
import { CustomerModel } from "../../types/customerModel";

const BannerHero = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const [customer, setCustomer] = React.useState<CustomerModel | null>(null);

  React.useEffect(() => {
    const customerJSON = localStorage.getItem("userInfo");

    if (customerJSON === null) {
      setCustomer(null);
      return;
    }
    setCustomer(JSON.parse(parcer(localStorage.getItem("userInfo"))));
  }, []);

  const parcer = (value: string | null): string => {
    if (value === null) return "";
    return value;
  };

  return (
    <div className="bannerContainer">
      <div className="blurred" />
      <Container className="contentContainer">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Typography variant={isMobile ? "h4" : "h3"} className="title" sx={{textAlign: isMobile ? "center" : "left"}}>
              Міжнародне транспортне підприємство
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant={isMobile ? "h5" : "h4"} className="title" sx={{textAlign: isMobile ? "center" : "left"}}>
              Deshko Company
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant={isMobile ? "h4" : "h2"} sx={{ mb: 2 }} className="numberIcon">
              <TbSquareRoundedNumber1 />
            </Typography>
            <Typography variant={isMobile ? "subtitle1" : "h6"} className="text">
              Швидко та якісно працюємо
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant={isMobile ? "h4" : "h2"} sx={{ mb: 2 }} className="numberIcon">
              <TbSquareRoundedNumber2 />
            </Typography>
            <Typography variant={isMobile ? "subtitle1" : "h6"} className="text">
              Завжди допомагаємо з найоптимальнішим планом доставки
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant={isMobile ? "h4" : "h2"} sx={{ mb: 2 }} className="numberIcon">
              <TbSquareRoundedNumber3 />
            </Typography>
            <Typography variant={isMobile ? "subtitle1" : "h6"} className="text">
              Без проблемно відсилаємо в найдальші куточки планети
            </Typography>
          </Grid>

          <Grid item xs={12} textAlign="center">
            <Typography variant={isMobile ? "h5" : "h4"} className="title">
              Перевірити посилку прямо зараз
            </Typography>

            {customer === null ? (
              <Button
                color="error"
                variant="contained"
                size={isMobile ? "medium" : "large"}
                href="/signup"
                className="ctaButton"
                sx={{ mt: 3, width: isMobile ? "100%" : "450px" }}
                endIcon={<BsFillArrowRightCircleFill />}
              >
                Створити власний кабінет
              </Button>
            ) : (
              <Button
                color="error"
                variant="contained"
                size={isMobile ? "medium" : "large"}
                href="/user"
                className="ctaButton"
                sx={{ mt: 3, width: isMobile ? "100%" : "450px" }}
                endIcon={<BsFillArrowRightCircleFill />}
              >
                Перейти у власний кабінет
              </Button>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default BannerHero;
