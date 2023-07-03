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
                Вартість перевезення за кілограми
              </StyledTableCell>
            </StyledTableHeadRow>
            <TableRow>
              <StyledTableCell style={{ width: "30%" }}>
                <Typography variant="body2">
                  Вага
                  <br />
                  (до вказаної включно)
                </Typography>
              </StyledTableCell>
              <StyledTableCell style={{ width: "35%" }}>
                <Typography variant="body2">
                  У межах України
                  <br />
                  (до 4 днів)
                </Typography>
              </StyledTableCell>
              <StyledTableCell style={{ width: "35%" }}>
                <Typography variant="body2">
                  За кордон (Європа)
                  <br />
                  (до 21 днів)
                </Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell>0,25 кг</StyledTableCell>
              <StyledTableCell>25 грн</StyledTableCell>
              <StyledTableCell>50 грн</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>0,5 кг</StyledTableCell>
              <StyledTableCell>28 грн</StyledTableCell>
              <StyledTableCell>56 грн</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>1 кг</StyledTableCell>
              <StyledTableCell>30 грн</StyledTableCell>
              <StyledTableCell>60 грн</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>2 кг</StyledTableCell>
              <StyledTableCell>32 грн</StyledTableCell>
              <StyledTableCell>64 грн</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>5 кг</StyledTableCell>
              <StyledTableCell>35 грн</StyledTableCell>
              <StyledTableCell>70 грн</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>10 кг</StyledTableCell>
              <StyledTableCell>50 грн</StyledTableCell>
              <StyledTableCell>100 грн</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>15 кг</StyledTableCell>
              <StyledTableCell>65 грн</StyledTableCell>
              <StyledTableCell>130 грн</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>20 кг</StyledTableCell>
              <StyledTableCell>75 грн</StyledTableCell>
              <StyledTableCell>150 грн</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>30 кг</StyledTableCell>
              <StyledTableCell>95 грн</StyledTableCell>
              <StyledTableCell>190 грн</StyledTableCell>
            </TableRow>
          </TableBody>
          <TableHead>
            <StyledTableHeadRow>
              <StyledTableCell colSpan={4}>Вартість перевезення за Розмірами</StyledTableCell>
            </StyledTableHeadRow>
            <TableRow>
              <StyledTableCell style={{ width: "30%" }}>
                <Typography variant="body2">
                  Розмір найбільної сторони
                  <br />
                  (до вказаної включно)
                </Typography>
              </StyledTableCell>
              <StyledTableCell style={{ width: "35%" }}>
                <Typography variant="body2">
                  У межах України
                  <br />
                  (до 4 днів)
                </Typography>
              </StyledTableCell>
              <StyledTableCell style={{ width: "35%" }}>
                <Typography variant="body2">
                  За кордон (Європа)
                  <br />
                  (до 21 днів)
                </Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell>10 см</StyledTableCell>
              <StyledTableCell>7,50 грн</StyledTableCell>
              <StyledTableCell>15,00 грн</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>15 см</StyledTableCell>
              <StyledTableCell>9,00 грн</StyledTableCell>
              <StyledTableCell>18,00 грн</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>20 см</StyledTableCell>
              <StyledTableCell>10,00 грн</StyledTableCell>
              <StyledTableCell>20,00 грн</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>30 см</StyledTableCell>
              <StyledTableCell>15,00 грн</StyledTableCell>
              <StyledTableCell>30,00 грн</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>50 см</StyledTableCell>
              <StyledTableCell>20,00 грн</StyledTableCell>
              <StyledTableCell>40,00 грн</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>100 см</StyledTableCell>
              <StyledTableCell>30,00 грн</StyledTableCell>
              <StyledTableCell>60,00 грн</StyledTableCell>
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
            <TableRow>
              <StyledTableCell colSpan={2}>Маршрут</StyledTableCell>
              <StyledTableCell colSpan={2}>За кожні 50км до суми добавляється 1 грн</StyledTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TaryfyPage;
