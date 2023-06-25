import * as React from "react";

import QuestionHero from "../../components/questionHero/QuestionHero";
import RegestrationBlock from "../../components/registrationBlock/RegistrationBlock";
import StatsBlock from "../../components/statsBlock/StatsBlock";
import InfoBar from "../../components/infoBar/InfoBar";
import TrackingHero from "../../components/trackingHero/TrackingHero";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import ServicesBlock from "../../components/servicesBlock/ServicesBlock";

const AboutPage: React.FC = () => {
  return (
    <div>
      <TrackingHero />
      <StatsBlock />
      <InfoBar />

      <Container component="section" sx={{ display: "flex", py: 5 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={require("../../images/main-about-section.jpg")}
              sx={{
                height: "auto",
                maxWidth: "75%",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Ми здатні забезпечити транспортом найбільшого виробника,
              організувати перевезення та якісні логістичні послуги.
            </Typography>
            <Typography variant="body1">
              Запрошуємо Вас скористатися послугами нашої транспортної компанії.
              Автомобільні перевезення експортних та імпортних вантажів
              здійснюються як за допомогою власної бази автомобільного
              транспорту (тентовані автомобілі VOLVO, MAN.IVECO. Mercedes - 20
              тонн), так і з залученням надійної мережі регіональних
              перевізників.
            </Typography>
            <Button
              color="error"
              variant="contained"
              size="large"
              href="/about"
              sx={{ width: "75%", marginTop: 3 }}
              className="button"
            >
              Дізнатись більше
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Divider
        variant="middle"
        sx={{ backgroundColor: "#042c4b", borderBottomWidth: 4, mt: 4 }}
      />
      <ServicesBlock />
      <RegestrationBlock />
      <QuestionHero />
    </div>
  );
};

export default AboutPage;
