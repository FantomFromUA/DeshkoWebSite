import React, { useEffect } from "react";
import { Typography, Container, Box, Chip } from "@mui/material";
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

const UserCabinetPage: React.FC = () => {

  const [parcels, setParcels] = React.useState<ParcelModel[]>([]);
  const [customer, setCustomer] = React.useState<CustomerModel | null>();

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
    const newRows = [];
    for(let i = 0; i < parcels.length; i++){
      let parcel = parcels[i];
      
      let row = {
        id: parcel.number,
        dateOfShipment: parcel.dateOfShipment.toString(),
        dispatcher: parcel.dispatcher.name,
        customer: parcel.customer.name,
        department: `${parcel.department.region}, ${parcel.department.city}, вул. ${parcel.department.street}, ${parcel.department.buildingNumber}`,
        status: parcel.status,
        dateOfReceiving: parcel.dateOfReceiving
      }
      newRows.push(row);
    }
    setRows(newRows);
  }, [parcels])

  let [rows, setRows] = React.useState<GridRowsProp>([]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "Номер", width: 150 },
    { field: "dispatcher", headerName: "Відправник", width: 200 },
    { field: "customer", headerName: "Отримувач", width: 200},
    { field: "department", headerName: "Адреса отримання", width: 400 },
    {
      field: "status",
      headerName: "Статус",
      width: 150,
      valueGetter: (params: GridCellParams) => {
        const { value } = params;
        switch (value) {
          case "PROCESSING":
            return <Chip label="Oбробляється" size="small" />;
          case "IN_TRANSIT":
            return <Chip label="В дорозі" color="primary" size="small" />;
          case "RECEIVED":
            return <Chip label="Отримано" color="success" size="small" />;
          case "CANCELED":
            return <Chip label="Відміна" color="error" size="small" />;
          default:
            return "-";
        }
      },
      renderCell: (params: GridCellParams<any, any>) => {
        const { value } = params;
        return <div>{value}</div>;
      },
    },
    
    { field: "dateOfShipment", headerName: "Дата доставки", width: 200 },
    { field: "dateOfReceiving",  headerName: "Дата отримання", width: 200,},
  ];

  const renderCell = (params: GridCellParams<any, any>) => {
    if (
      params.value === undefined ||
      params.value === null ||
      params.value === ""
    ) {
      return <div>&mdash;</div>;
    }
    return params.value;
  };

  if(customer === null){
    return <ErrorPage/>
  }

  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h3">Вітаємо - UserName</Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        my={3}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Вихідні накладні
        </Typography>
        <Button href="/tracking">Відслідкувати посилку</Button>
      </Box>
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid
          sx={{ my: 5, "& .MuiDataGrid-footerContainer p": { marginTop: 2 } }}
          rows={rows}
          columns={columns.map((column) => ({
            ...column,
            renderCell,
          }))}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
    </Container>
  );
};

export default UserCabinetPage;
