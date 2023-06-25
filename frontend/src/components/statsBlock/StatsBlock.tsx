import { Container, Grid } from "@mui/material";
import * as React from "react";
import DefaultCounterCard from "./DefaultCounterCard";

const StatsBlock = () => {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        py: 5,
        minWidth: "100vw",
        backgroundColor: "#fbfafa"
      }}
    >
      <Grid
        container
        item
        lg={9}
        sx={{ mx: "auto", display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={9} md={3} sx={{width: "100%"}}>
          <DefaultCounterCard
            count={10000}
            title="Більш, ніж"
            description="подоланих кілометрів з метою досягнення точки доставки"
          />
        </Grid>
        <Grid item xs={9} md={3} sx={{ width: "100%"}}>
          <DefaultCounterCard
            count={30}
            title="Понад"
            description="куди ми завжди готові надіслати ваші посилки"
          />
        </Grid>
        <Grid item xs={9} md={3} sx={{width: "100%"}}>
          <DefaultCounterCard
            count={1000}
            title="Більше"
            description="клієнтів, що нам довіряють та звертаються за нашими послугами"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default StatsBlock;
