import React, { useEffect, useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { Button, Dialog, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 300,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    borderTop: "3px solid #3f51b5",
    borderBottom: "2px solid #ddd",
    color: "#3f51b5",
    fontWeight: "bold",
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

const calculte = (a, b, c) => {
  return a + b + c;
};

const ConfirmInfo = (props) => {
  const [payOpen, setPayOpen] = useState(false);
  // const [openConfirm,setConfirm] = useState(props.open)
  const classes = useStyles();
  // debugger
  const onSubmit = () => {
    if (props.data.priceData) {
      setPayOpen(true);
    } else {
      props.agree();
    }
  };

  const onBack = () => {
    if (props.data.priceData) {
      setPayOpen(false);
    } else {
      props.handleClose();
    }
  };

  return (
    <div>
      {props.data.priceData && (
        <Dialog
          open={payOpen}
          style={{ zIndex: "9999999999" }}
          onClose={props.handleClose}
          aria-labelledby="alert-dialog-title2"
          aria-describedby="alert-dialog-description2"
          maxWidth="md"
          fullWidth
        >
           <DialogTitle id="alert-dialog-titlePay">
          <h2 style={{ padding: "20px", fontFamily: "Montserrat" }}>
            {"Tölegi tassyklamagyňyzy haýyş edýäris"}
          </h2>
        </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <div>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Tölegiň ady</StyledTableCell>
                      <StyledTableCell align="left">
                        Tölegiň möçberi
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell align="left">
                        "Gyssagly" hyzmatyndan peýdalanmak
                      </StyledTableCell>
                      <StyledTableCell
                        align="left"
                        style={{ fontWeight: "bold" }}
                      >
                        {props.services.is_hurry
                          ? props.data.priceData.hurry_amount
                          : "0"}{" "}
                        {props.data.priceData.currency
                          ? props.data.priceData.currency
                          : "TMT"}
                      </StyledTableCell>
                    </StyledTableRow>
                    {props.services.will_delivered && (
                      <StyledTableRow>
                        <StyledTableCell align="left">
                          "Eltip bermek" hyzmatyndan peýdalanmak
                        </StyledTableCell>
                        <StyledTableCell
                          align="left"
                          style={{ fontWeight: "bold" }}
                        >
                          {props.services.will_delivered
                            ? props.data.priceData.delivery_amount +
                              " " +
                              props.data.priceData.currency
                            : " 0"}
                        </StyledTableCell>
                      </StyledTableRow>
                    )}

                    <StyledTableRow>
                      <StyledTableCell align="left">
                        {props.data.titles.paymentName}
                      </StyledTableCell>
                      <StyledTableCell
                        align="left"
                        style={{ fontWeight: "bold" }}
                      >
                        {props.data.priceData.payment}{" "}
                        {props.data.priceData.currency
                          ? props.data.priceData.currency
                          : "TMT"}
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                  <div>
                    <h2 style={{ color: "#3f51b5", fontFamily: "Montserrat" }}>
                      Jemi
                    </h2>
                    <h1>
                      {calculte(
                        props.services.is_hurry
                          ? props.data.priceData.hurry_amount
                          : 0,
                        props.services.will_delivered
                          ? props.data.priceData.delivery_amount
                          : 0,
                        props.data.priceData.payment
                      )}{" "}
                      {props.data.priceData.currency
                        ? props.data.priceData.currency
                        : " TMT"}
                    </h1>
                  </div>
                </Table>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{ justifyContent: "center" }}>
            <Button
              onClick={()=>{setPayOpen(false)}}
              className={props.backButton + " " + "responsiveButton"}
              variant="contained"
            >
              Düzetmek
            </Button>

            <Button
              onClick={props.agree}
              className={"responsiveButton"}
              color="primary"
              variant={"contained"}
              autoFocus
            >
              Töleg
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          <h2 style={{ padding: "20px", fontFamily: "Montserrat" }}>
            {"Maglumatlary tassyklamagyňyzy haýyş edýäris"}
          </h2>
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            {props.data.priceData && (
              <div>
                <Grid container justify="center">
                  <Grid item lg={8} md={8} sm={12}>
                    <div>
                      <h2
                        style={{ color: "#3f51b5", fontFamily: "Montserrat" }}
                      >
                        Töleg
                      </h2>
                      <table cellPadding={10} cellSpacing={5}>
                        <tr>
                          <td>"Gyssagly" hyzmatyndan peýdalanmak</td>
                          <td>
                            {props.dataDoc.is_hurry
                              ? props.data.priceData.hurry_amount
                              : ""}{" "}
                            {props.data.priceData.currency
                              ? props.data.priceData.currency
                              : "TMT"}
                          </td>
                        </tr>
                        {props.dataDoc.will_delivered && (
                          <tr>
                            <td>"Eltip bermek" hyzmatyndan peýdalanmak</td>
                            <td>
                              {props.dataDoc.will_delivered
                                ? props.data.priceData.delivery_amount +
                                  " " +
                                  props.data.priceData.currency
                                : " 0"}
                            </td>
                          </tr>
                        )}
                        <tr>
                          <td>{props.data.titles.paymentName}</td>
                          <td>
                            {props.data.priceData.payment}{" "}
                            {props.data.priceData.currency
                              ? props.data.priceData.currency
                              : "TMT"}
                          </td>
                        </tr>
                      </table>
                    </div>
                  </Grid>
                  <Grid item lg={4} md={4} sm={12}>
                    <div>
                      <h2
                        style={{ color: "#3f51b5", fontFamily: "Montserrat" }}
                      >
                        Jemi
                      </h2>
                      <h1>
                        {calculte(
                          props.dataDoc.is_hurry
                            ? props.data.priceData.hurry_amount
                            : 0,
                          props.dataDoc.will_delivered
                            ? props.data.priceData.delivery_amount
                            : 0,
                          props.data.priceData.payment
                        )}{" "}
                        {props.data.priceData.currency
                          ? props.data.priceData.currency
                          : " TMT"}
                      </h1>
                    </div>
                  </Grid>
                </Grid>
              </div>
            )}
          </DialogContentText> */}
          <br />
          <DialogContentText id="alert-dialog-description">
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Soraglar</StyledTableCell>
                  <StyledTableCell align="left">Jogaplar</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.data.data.map((row) => (
                  <StyledTableRow key={row.name}>
                    {/* <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell> */}
                    <StyledTableCell align="left">{row.value}</StyledTableCell>
                    <StyledTableCell
                      align="left"
                      style={{ fontWeight: "bold" }}
                    >
                      {row.name}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </DialogContentText>
          <br />
          {/* <DialogContentText>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatum, corporis corrupti ullam vero est.
                            </p>
                    </DialogContentText> */}
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          <Button
            onClick={()=>{props.handleClose()}}
            className={props.backButton + " " + "responsiveButton"}
            variant="contained"
          >
            Düzetmek
          </Button>

          <Button
            onClick={onSubmit}
            className={"responsiveButton"}
            color="primary"
            variant={"contained"}
            autoFocus
          >
            Tassyklaýaryn
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmInfo;
