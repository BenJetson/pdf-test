import Report from "./Report";
import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const FancyReport = () => (
  <Report title="Fancy Report" filename="fancy.pdf">
    {/* You could dynamically generate this ... this example does not. */}
    <h1>Report</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempor,
      ante et porttitor semper, velit lorem dictum augue, quis ultrices dui mi
      porttitor ante. Sed pretium lacus orci, vitae dictum dui lacinia eu.
      Quisque tempor odio enim, feugiat maximus arcu egestas non. Nulla pharetra
      metus eget sodales aliquam. In rhoncus arcu id ligula convallis, vitae
      faucibus ligula luctus. Nam sollicitudin id est et sagittis. Ut
      scelerisque massa in nunc feugiat, vitae vestibulum nibh efficitur.
      Vivamus ac feugiat libero, vestibulum porta neque. Donec feugiat gravida
      fringilla. Vivamus volutpat, nunc a hendrerit iaculis, odio massa semper
      ligula, nec euismod dolor nibh sit amet erat.
    </p>
    <p>
      In ultricies orci at orci luctus, sit amet lobortis est condimentum.
      Praesent mollis quis nisl nec feugiat. Nulla ornare justo ornare lobortis
      luctus. Pellentesque vehicula dolor erat, at aliquam felis tincidunt
      rutrum. Cras pharetra, dui ac fringilla efficitur, orci elit vestibulum
      nulla, a aliquet leo diam non enim. Donec nibh mi, fermentum luctus eros
      eu, fringilla mattis felis. Curabitur vestibulum sit amet mauris non
      elementum.
    </p>
    <h2>Table 1</h2>
    <CustomizedTables />
    <h2>Table 2</h2>
    <CustomizedTables />
    <h2>Table 3</h2>
    <CustomizedTables />
    <h2>Table 4</h2>
    <CustomizedTables />
    <h2>Table 5</h2>
    <CustomizedTables />
  </Report>
);

export default FancyReport;
