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
      }}
    >
      <Grid
        container
        item
        lg={9}
        sx={{ mx: "auto", display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={9} md={3} sx={{ width: "100%"}}>
          <DefaultCounterCard
            count={100}
            title="Текст 1"
            description="Текст1Текст1Текст1Текст1 Текст1Текст1Текст1 Текст1Текст1"
          />
        </Grid>
        <Grid item xs={9} md={3} sx={{width: "100%"}}>
          <DefaultCounterCard
            count={200}
            title="Текст 2"
            description="Текст2Текст2Текст2Текст2Текст2 Текст2"
          />
        </Grid>
        <Grid item xs={9} md={3} sx={{width: "100%"}}>
          <DefaultCounterCard
            count={300}
            title="Текст 3"
            description="Текст 3 Текст3Текст3Текст3Текст3 Текст3Текст3Текст3"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default StatsBlock;
