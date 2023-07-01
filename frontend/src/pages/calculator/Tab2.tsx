import {
  Box,
  Typography,
  TextField,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputAdornment,
  Button,
} from "@mui/material";
import * as React from "react";

const Tab2: React.FC = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        1. Маршрут
      </Typography>

      <TextField
        required
        id="international-place-to"
        label="Країна призначення"
        sx={{ width: "40%" }}
        margin="normal"
      />

      <Divider sx={{ background: "black", my: 4 }} />

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        2. Тип відплавлення
      </Typography>

      <RadioGroup row>
        <FormControlLabel value="first" label="Посилка" control={<Radio />} />
        <FormControlLabel
          value="second"
          label="Документи"
          control={<Radio />}
        />
        <FormControlLabel value="third" label="Лист" control={<Radio />} />
      </RadioGroup>

      <Divider sx={{ background: "black", my: 4 }} />
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        3. Параметри відправлення
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          mt: 2,
        }}
      >
        <TextField
          label="Вага, кг"
          sx={{ width: "30%" }}
          InputProps={{
            endAdornment: <InputAdornment position="end">кг</InputAdornment>,
            inputProps: {min: 0}
          }}
          type="number"
        />
        <TextField
          label="Максимальна сторона, см"
          sx={{ width: "30%" }}
          InputProps={{
            endAdornment: <InputAdornment position="end">см</InputAdornment>,
            inputProps: {min: 0}
          }}
          type="number"
        />
        <TextField
          label="Оголошена вартість, грн"
          sx={{ width: "30%" }}
          InputProps={{
            endAdornment: <InputAdornment position="end">грн</InputAdornment>,
            inputProps: {min: 0}
          }}
          type="number"
          // value={itemPrice}
          // onChange={e => setItemPrice(e.target.value)}
        />
      </Box>
      <Divider sx={{ background: "black", my: 4 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Button
          color="error"
          variant="contained"
          size="large"
          href="/contact"
          sx={{ p: 3, width: "40%" }}
          className="button"
        >
          Розрахувати вартість
        </Button>
        <Typography sx={{ color: "text.secondary", mx: 3 }}>
          * Під час розрахунку ви отримаєте приблизну вартість відправлення.
        </Typography>
      </Box>
      {/* Бокс для виведення результатів */}
      {/* <Box>
        <Typography variant="h6" sx={{my: 4, ml:3}}>Приблизна вартість: 3231 грн</Typography>
      </Box> */}
    </Box>
  );
};

export default Tab2;
