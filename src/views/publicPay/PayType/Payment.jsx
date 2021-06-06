import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import NumberFormat from 'react-number-format';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    paper:{
        width:'50%',
        [theme.breakpoints.down('sm')]:{
          width:'80%'
        },
        [theme.breakpoints.down('xs')]:{
          width:'90%'
        }
    }
}))

export default function Payment(props) {
    const classes = useStyles()

  return (
    <div>
      <Dialog classes={{paper: classes.paper}} open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
            <h2>{props.data.name} tölegi</h2>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           Tölegi amala aşyrmak üçin öý telefon belgiňizi giriziň
          </DialogContentText>
          <div>
                <Grid container spacing={2}>
                    <Grid item md={6} sm={6} xs={12}>
                        <NumberFormat fullWidth {...props} customInput={TextField} maxLength={8} variant={'outlined'} label="Öý telefon belgisi"/>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                        <NumberFormat fullWidth {...props} thousandSeparator={true} suffix={' TMT'} customInput={TextField} maxLength={8} variant={'outlined'} label="Töleg mukdary"/>                        
                    </Grid>
                </Grid>
          </div>
                    
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Ýapmak
          </Button>
          <Button onClick={props.handleClose} variant='contained' color="primary">
            Tölemek
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
