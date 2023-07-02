import React, { SyntheticEvent, useEffect } from "react";
import { Typography, Container, Box, Chip, Divider, Tabs, Tab } from "@mui/material";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
import { Button } from "react-bootstrap";
import { ParcelModel } from "../../types/parcelModel";
import { CustomerModel } from "../../types/customerModel";
import { getUserParcels } from "../../http/parcelHttp";
import ErrorPage from "../error/ErrorPage";
import Tab1 from "./Tab1";

interface TabPanelProps {
  value: number;
  index: number;
  children: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ value, index, children }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};


const UserCabinetPage: React.FC = () => {

  const [parcels, setParcels] = React.useState<ParcelModel[]>([]);
  const [customer, setCustomer] = React.useState<CustomerModel | null>();

  const [value, setValue] = React.useState<number>(0);

  const [rows1, setRows1] = React.useState<GridRowsProp>([]);
  const [rows2, setRows2] = React.useState<GridRowsProp>([]);

  React.useEffect(() => {
    const customerJSON = localStorage.getItem("userInfo");
    
    if(customerJSON === null){
      setCustomer(null);
      return;
    }
    const user : CustomerModel = JSON.parse(parcer(localStorage.getItem("userInfo")));
    
    setCustomer(user);
    
    getUserParcels(user?.id).then((parcelsResponse : ParcelModel[]) => {
      setParcels(parcelsResponse);
    }).catch(error => {
      console.log(error.message);
      
    });
  }, [])

  const parcer = (value : string | null) : string => {
    if(value === null) return "";
    return value;
  }
  
  React.useEffect(() => {
    const newRows1 = [];
    const newRows2 = [];
    for(let i = 0; i < parcels.length; i++){
      let parcel = parcels[i];
      
      let row = {
        id: parcel.number,
        dateOfShipment: parcel.dateOfShipment.toString(),
        dispatcher: parcel.dispatcher?.name,
        customer: parcel.customer?.name,
        department: `${parcel.department.region}, ${parcel.department.city}, вул. ${parcel.department.street}, ${parcel.department.buildingNumber}`,
        status: parcel.status,
        dateOfReceiving: parcel.dateOfReceiving
      }
      if(customer?.id === parcel.customer.id) newRows1.push(row);
      else newRows2.push(row)
    }
    setRows1(newRows1);
    setRows2(newRows2);
  }, [parcels])

  
    
  if(customer === null){
    return <ErrorPage/>
  }


  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h3">Вітаємо - {customer?.name}</Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        my={3}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Ваші накладні
        </Typography>
        <Button href="/tracking">Відслідкувати посилку</Button>
      </Box>
      <Container
        sx={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            mb: 6
        }}
      >
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        variant="fullWidth"
      >
          <Tab
            label="Вхідні посилки"
            sx={{
              py: 5,
              "&.Mui-selected": {
                color: "white",
                backgroundColor: "green",
                transition: "background-color 0.5s ease-out",
              },
            }}
          />
          <Tab
            label="Вихідні посилки"
            sx={{
              py: 5,
              "&.Mui-selected": {
                color: "white",
                backgroundColor: "green",
                transition: "background-color 0.8s ease-out",
              },
            }}
          />
      </Tabs>

        <TabPanel value={value} index={0}>
          <Tab1 rows={rows1}/>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Tab1 rows={rows2}/>
        </TabPanel>
      </Container>
    </Container>
  );
};

export default UserCabinetPage;
