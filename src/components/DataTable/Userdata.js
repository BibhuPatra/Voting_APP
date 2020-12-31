import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
import axios from "axios";
import "./st.css";
import { Button } from "../Button";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
let temp = [];
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const [Open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClose = () => {
    setOpen(true);
  };
  const URL = "http://localhost:7153/api/Registration/GetRegistrationDeatils";
  axios
    .get(URL, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response.data);
      temp = response.data;
    })
    .catch((response) => {
      console.log(response.data);
      Open(true);
    });

  return (
    <>
      <div className="bulk">
        <Button className="btn1" onClick={handleClose}>
          Show Data
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>R_ID</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">UserType</StyledTableCell>
              <StyledTableCell align="center">User Email</StyledTableCell>
              <StyledTableCell align="center">Prefix</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Edit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {temp.map((temp2) => {
              return (
                <StyledTableRow key={temp2.rId}>
                  <StyledTableCell component="th" scope="s">
                    {temp2.rId}
                  </StyledTableCell>
                  <StyledTableCell align="center">{temp2.name}</StyledTableCell>
                  <StyledTableCell align="center">
                    {temp2.userId}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {temp2.email}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {temp2.preFix}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {temp2.address}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {
                      <div>
                        <DeleteIcon /> &nbsp;&nbsp;&nbsp;&nbsp;
                        <PersonAddRoundedIcon />
                      </div>
                    }
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
