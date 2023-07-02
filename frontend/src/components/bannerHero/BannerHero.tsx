import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./bannerHero.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { TbSquareRoundedNumber1, TbSquareRoundedNumber2, TbSquareRoundedNumber3 } from "react-icons/tb";
import { CustomerModel } from "../../types/customerModel";

const BannerHero = () => {

  const [customer, setCustomer] = React.useState<CustomerModel | null>(null);

  React.useEffect(() => {
    const customerJSON = localStorage.getItem("userInfo");
    
    if(customerJSON === null){
      setCustomer(null);
      return;
    }
    setCustomer(JSON.parse(parcer(localStorage.getItem("userInfo"))));
  }, [])

  const parcer = (value : string | null) : string => {
    if(value === null) return "";
    return value;
  }

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
              Швидко та якісно працюємо
            </Typography>
          </Grid>

          <Grid item md={4} xs={12}>
            <Typography  variant="h2" sx={{mb:2}} className="numberIcon">
              <TbSquareRoundedNumber2/>
            </Typography>
            <Typography variant="h6"  className="text">
              Завжди допомагаємо з найоптимальнішим планом доставки
            </Typography>
          </Grid>

          <Grid item md={4} xs={12}>
            <Typography variant="h2" sx={{mb:2}} className="numberIcon">
              <TbSquareRoundedNumber3/>
            </Typography>
            <Typography variant="h6" className="text">
              Без проблемно відсилаємо в найдальші куточки планети
            </Typography>
          </Grid>

          <Grid item xs={12} textAlign="center">
            <Typography variant="h4" className="title">
              Перевірити посилку прямо зараз
            </Typography>

            {customer === null
              ?
            <Button
              color="error"
              variant="contained"
              size="large"
              href="/signup"
              className="ctaButton"
              sx={{mt:3,  minWidth: "450px" }}
              endIcon={<BsFillArrowRightCircleFill />}
            >
              Створити власний кабінет
            </Button> :
             <Button
             color="error"
             variant="contained"
             size="large"
             href="/user"
             className="ctaButton"
             sx={{mt:3,  minWidth: "450px" }}
             endIcon={<BsFillArrowRightCircleFill />}
           >
             Перейти у власний кабінет
           </Button>
}

          </Grid>
          
        </Grid>
      </Container>
    </div>
  );
};

export default BannerHero;
