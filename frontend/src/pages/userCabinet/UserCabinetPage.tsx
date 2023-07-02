import React from "react";
import { Typography, Container, Box, Chip } from "@mui/material";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";
import { Button } from "react-bootstrap";

const UserCabinetPage: React.FC = () => {
  const rows: GridRowsProp = [
    {
      id: 1,
      dispatcher: "Hello",
      department: "World",
      dateOfShipment: "01.01.2003",
      status: "відміна",
    },
    {
      id: 2,
      dispatcher: "DataGridPro",
      department: "is Awesome",
      status: "в дорозі",
    },
    { id: 3, dispatcher: "MUI", department: "is Amazing", status: "отримано" },
  ];

  const columns: GridColDef[] = [
    { field: "id", headerName: "Номер", width: 150 },
    { field: "dateOfShipment", headerName: "Дата доставки", width: 150 },
    { field: "dispatcher", headerName: "Отримувач", width: 250 },
    { field: "department", headerName: "Адреса отримання", width: 250 },
    {
      field: "status",
      headerName: "Статус",
      width: 150,
      valueGetter: (params: GridCellParams) => {
        const { value } = params;
        switch (value) {
          case "обробляється":
            return <Chip label="Oбробляється" size="small" />;
          case "в дорозі":
            return <Chip label="В дорозі" color="primary" size="small" />;
          case "отримано":
            return <Chip label="Отримано" color="success" size="small" />;
          case "відміна":
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
    {
      field: "dateOfReceiving",
      type: "dateTime",
      headerName: "Дата отримання",
      width: 150,
    },
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
          Ваші накладні
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
