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
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import * as React from "react";
import { getDistance, getLatAndLong } from "../../http/geoPoint";
import { calculateParcelPrice } from "../../http/parcelHttp";
import { ForeignDepartments } from "../../utils/departments";

const Tab2: React.FC = () => {

  const [destination, setDestination] = React.useState("");
  const [parcelType, setParcelType] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [side, setSide] = React.useState("");
  const [itemPrice, setItemPrice] = React.useState("");
  
  const [price, setPrice] = React.useState();

  const MAIN_OFFICE_CORDINATES = ['22.7179', '48.4419']

  const calculate = () => {
    if(!validate()){
      return;
    }
    
    getLatAndLong(destination).then(resSecond => {
      getDistance(MAIN_OFFICE_CORDINATES[0], MAIN_OFFICE_CORDINATES[1], resSecond[0], resSecond[1]).then(distanse => {
        calculateParcelPrice(distanse, parcelType, weight, side, itemPrice, true).then(price => {
          setPrice(price);
        });
        console.log(distanse);
        
      });
    });
  }

  const validate = () : boolean => {

    if(destination === ""){
      alert("Введіть точкy призначення!")
      return false;
    }

    if(parcelType === ""){
      alert("Виберіть тип посилки!")
      return false;
    }

    if(weight === ""){
      alert("Введіть вагу посилки!")
      return false;
    }

    if(side === ""){
      alert("Введіть максимально сторону посилки!")
      return false;
    }

    return true;
  }

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

      <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Країна призначення</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={destination}
            label="From"
            sx={{ width: "70%" }}
            onChange={e => setDestination(e.target.value)}
          >
            {ForeignDepartments.map((dep, index) => (
              <MenuItem value={dep} key={index}>{dep}</MenuItem>
            ))}
          </Select>
        </FormControl>

      <Divider sx={{ background: "black", my: 4 }} />

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        2. Тип відправлення
      </Typography>

      <RadioGroup row>
        <FormControlLabel 
          value="first" 
          label="Посилка" 
          control={<Radio />} 
          onChange={e => setParcelType("Посилка")} 
        />
        <FormControlLabel
          value="second"
          label="Документи"
          control={<Radio />}
          onChange={e => setParcelType("Документи")} 
        />
        <FormControlLabel 
          value="third" 
          label="Лист" 
          control={<Radio />}
          onChange={e => setParcelType("Лист")}  
        />
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
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
        <TextField
          label="Максимальна сторона, см"
          sx={{ width: "30%" }}
          InputProps={{
            endAdornment: <InputAdornment position="end">см</InputAdornment>,
            inputProps: {min: 0}
          }}
          type="number"
          value={side}
          onChange={e => setSide(e.target.value)}
        />
        <TextField
          label="Оголошена вартість, грн"
          sx={{ width: "30%" }}
          InputProps={{
            endAdornment: <InputAdornment position="end">грн</InputAdornment>,
            inputProps: {min: 0}
          }}
          type="number"
          value={itemPrice}
          onChange={e => setItemPrice(e.target.value)}
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
          sx={{ p: 3, width: "40%" }}
          className="button"
          onClick={() => calculate()}
        >
          Розрахувати вартість
        </Button>
        <Typography sx={{ color: "text.secondary", mx: 3 }}>
          * Під час розрахунку ви отримаєте приблизну вартість відправлення.
        </Typography>
      </Box>
      {/* Бокс для виведення результатів */}
      {price && <Box>
        <Typography variant="h6" sx={{my: 4, ml:3}}>Приблизна вартість: {price} грн</Typography>
      </Box>}
    </Box>
  );
};

export default Tab2;
