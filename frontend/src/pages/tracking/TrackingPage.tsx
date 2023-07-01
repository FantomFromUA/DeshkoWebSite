import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { getParcelById } from "../../http/parcelHttp";
import { ParcelModel } from "../../types/parcelModel";

const TrackingPage: React.FC = () => {

  const [parcelId, setParcelId] = React.useState("");

  const findPurcel = () => {
    getParcelById(parcelId).then((parcel : ParcelModel) => {
        console.log(parcel);
        
    }).catch((error : Error) =>{
        alert(error.message);
    });
  }

  return (
    <Container
      component="section"
      sx={{ display: "flex", direction: "row", py: 10 }}
    >
      <Grid container spacing={3}>
        <Grid item sm={12} md={6} lg={6} alignContent="center">
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 5 }}>
            Трекінг
          </Typography>
          <TextField
            placeholder="Введіть номер відправлення"
            value={parcelId}
            onChange={e => setParcelId(e.target.value)}
            sx={{
              width: "100%",
              mb: 2,
              py: 1,
              backgroundColor: "#e6e6e6",
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
          ></TextField>
        </Grid>
        <Grid item sm={12} md={6} lg={6} alignContent="center">
          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
                Як скористатися?
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                На цій сторінці можна відстежувати міжнародні відправлення та
                відправлення по Україні. Для цього введіть у поле трек-номер, що
                складається з 9 символів, та натисніть кнопку «Відстежити».
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
          <Box>
            {/* Після натиску кнопки тут відображати результат */}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TrackingPage;
