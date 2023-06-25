import React from "react";
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  padding: theme.spacing(1),
}));

const StyledTableHeadRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "#d1cfcf",
  color: "white",
}));

const TaryfyPage = () => {
  return (
    <Container sx={{my:5}}>
      <TableContainer>
        <Table>
          <TableHead>
            <StyledTableHeadRow>
              <StyledTableCell colSpan={4}>
                Вартість пересилання (відділення–відділення), грн із ПДВ
              </StyledTableCell>
            </StyledTableHeadRow>
            <TableRow>
              <StyledTableCell style={{ width: "25%" }}>
                <Typography variant="body2">
                  Вага
                  <br />
                  (до вказаної включно)
                </Typography>
              </StyledTableCell>
              <StyledTableCell style={{ width: "25%" }}>
                <Typography variant="body2">
                  Найдовша сторона
                  <br />
                  (до вказаної включно)
                </Typography>
              </StyledTableCell>
              <StyledTableCell style={{ width: "25%" }}>
                <Typography variant="body2">
                  У межах області
                  <br />
                  (до 4 днів, до 3 днів у межах міста)
                </Typography>
              </StyledTableCell>
              <StyledTableCell style={{ width: "25%" }}>
                <Typography variant="body2">
                  У межах України
                  <br />
                  (до 6 днів, до 4 днів між обласними центрами)
                </Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell>0,25 кг</StyledTableCell>
              <StyledTableCell rowSpan={9}>70 см</StyledTableCell>
              <StyledTableCell>25</StyledTableCell>
              <StyledTableCell>35</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>0,5 кг</StyledTableCell>
              <StyledTableCell>28</StyledTableCell>
              <StyledTableCell>35</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>1 кг</StyledTableCell>
              <StyledTableCell>30</StyledTableCell>
              <StyledTableCell>35</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>2 кг</StyledTableCell>
              <StyledTableCell>32</StyledTableCell>
              <StyledTableCell>40</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>5 кг</StyledTableCell>
              <StyledTableCell>35</StyledTableCell>
              <StyledTableCell>45</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>10 кг</StyledTableCell>
              <StyledTableCell>50</StyledTableCell>
              <StyledTableCell>60</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>15 кг</StyledTableCell>
              <StyledTableCell>65</StyledTableCell>
              <StyledTableCell>75</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>20 кг</StyledTableCell>
              <StyledTableCell>75</StyledTableCell>
              <StyledTableCell>85</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>30 кг</StyledTableCell>
              <StyledTableCell>95</StyledTableCell>
              <StyledTableCell>100</StyledTableCell>
            </TableRow>
          </TableBody>
          <TableHead>
            <StyledTableHeadRow>
              <StyledTableCell colSpan={4}>Точка видачі*</StyledTableCell>
            </StyledTableHeadRow>
            <TableRow>
              <StyledTableCell colSpan={2}>Вага (до вказаної включно)</StyledTableCell>
              <StyledTableCell colSpan={2}>Вартість, грн із ПДВ</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell colSpan={2}>2 кг</StyledTableCell>
              <StyledTableCell colSpan={2}>15,00</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell colSpan={2}>5 кг</StyledTableCell>
              <StyledTableCell colSpan={2}>20,00</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell colSpan={2}>10 кг</StyledTableCell>
              <StyledTableCell colSpan={2}>25,00</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell colSpan={2}>15 кг</StyledTableCell>
              <StyledTableCell colSpan={2}>30,00</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell colSpan={2}>20 кг</StyledTableCell>
              <StyledTableCell colSpan={2}>35,00</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell colSpan={2}>30 кг</StyledTableCell>
              <StyledTableCell colSpan={2}>40,00</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell colSpan={4}>
                * Відправлення приймається у відділенні та вручається одержувачу у цьому самому відділенні без передавання
                на сортувальний центр. Відправлення доступне до видачі одразу після його приймання.
              </StyledTableCell>
            </TableRow>
          </TableBody>
          <TableHead>
            <StyledTableHeadRow>
              <StyledTableCell colSpan={4}>Оголошена цінність</StyledTableCell>
            </StyledTableHeadRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell colSpan={2}>За оцінку відправлення</StyledTableCell>
              <StyledTableCell colSpan={2}>1% від повної суми оголошеної цінності, але не менше 1 грн</StyledTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TaryfyPage;
