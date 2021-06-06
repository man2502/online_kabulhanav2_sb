import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: 'fit-content',
    },
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 120,
    },
    formControlLabel: {
        marginTop: theme.spacing(1),
    },
}));


export default function View(props) {
    
    const classes = useStyles();
    const createStatus = (status) => {
    const changing =(text,color) =>{
        return <span style={{color: color}}>{text}</span>
    }
        switch (status) {
            case 1:
                return (
                    changing('Kabul edildi', '#00ff00')
                )
            case 0:
                return (
                    changing('Goybolsun', '#ff0000')
                )
            case 2:
                return (
                    changing('Garasylyar', 'orange')
                )
            case 3:
                return (
                    changing('Tamamlandy', '#0000ff')
                )
            default: return (
                    changing('Garasylyar', 'orange')
                )
        }
    }
    // debugger
    return (
        <React.Fragment>

            <Dialog
                fullWidth={true}
                maxWidth={'lg'}
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogTitle id="max-width-dialog-title"><strong>ID: {props.data.id}</strong></DialogTitle>
                <DialogContent>
                    <DialogContentText>

                    </DialogContentText>
                    {/* <pre>
                        {JSON.stringify(props.data)}
                    </pre> */}
                    <table cellSpacing={5} cellPadding={15}>
                        <tr>
                            <th>Amalyň görnüşi</th>
                            <td> </td>
                            <td>{props.data.name}</td>
                        </tr>
                        <tr>
                            <th>Senesi</th>
                            <td> </td>
                            <td>{props.data.fullDate}</td>
                        </tr>
                        <tr>
                            <th>Ýagdaýy</th>
                            <td> </td>
                            <td>{createStatus(props.data.status)}</td>
                        </tr>
                        <tr>
                            <th>Kim tarapyndan</th>
                            <td> </td>
                            <td>{props.data.username}  {props.data.surname}</td>
                        </tr>
                        {(props.data.is_hurry===1||props.data.is_hurry===0)&&<tr>
                            <th>Gyssaglymy</th>
                            <td> </td>
                            <td>{props.data.is_hurry===1? 'Hawa': 'Ýok'}</td>
                        </tr>}
                        {(props.data.will_delivered===1||props.data.will_delivered===0)&&<tr>
                            <th>Eltip bermek hyzmatyndan peýdalanan</th>
                            <td> </td>
                            <td>{props.data.will_delivered===1? 'Hawa': 'Ýok'}</td>
                        </tr>}
                        {props.data.amount_credit&&<tr>
                            <th>Kredit möçberi</th>
                            <td> </td>
                            <td>{props.data.amount_credit} TMT</td>
                        </tr>}
                        {props.data.percentage&&<tr>
                            <th>Kredit göterimi</th>
                            <td> </td>
                            <td>{props.data.percentage} %</td>
                        </tr>}
                        <tr>
                            <th>Jogapkär işgär</th>
                            <td> </td>
                            <td>Aman Amanow  <strong>email:</strong> aman.amanow@gmail.com</td>
                        </tr>
                    </table>

                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Ýapmak
          </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
