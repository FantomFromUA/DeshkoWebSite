import { Box, Chip } from '@mui/material';
import { DataGrid, GridCellParams, GridColDef, GridRowsProp, GridToolbar } from '@mui/x-data-grid';
import * as React from 'react';

const Tab1 : React.FC<{rows : GridRowsProp}> = ({rows}) => {

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

    return (
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
    );
}
 
export default Tab1;