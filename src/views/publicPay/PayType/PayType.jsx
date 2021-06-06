import { Grid, makeStyles, Paper } from '@material-ui/core'
import { Home, Language, LinearScale, OfflineBolt, Waves } from '@material-ui/icons';
import React, { useRef } from 'react'
import Icon from '@material-ui/core/Icon';
import s from "./PayType.module.css"
import Payment from './Payment';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#2D4FCB',
        [theme.breakpoints.down('sm')]: {
            fontSize: 25
        },
    },
    icon: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 50
        },

        fontSize: 55,
        marginBottom: '10px'
    },

}));
const typeArr = [
    {id:0, name: 'Jaý', icon: Home },
    {id:1, name: 'Tok', icon: OfflineBolt },
    {id:2, name: 'Suw', icon: Waves },  
    {id:3, name: 'Gaz', icon: LinearScale },
    {id:4, name: 'Internet', icon: Language },

]
const PayType = (props) => {
    const classes = useStyles()
    const activePayment = useRef(0)
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = (id) => {
        setOpen(true);
        activePayment.current = id
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Payment open={open} handleClose={handleClose} data={typeArr[activePayment.current]}/>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    {typeArr.map(i => {
                        return (
                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                <Paper onClick={ ()=>{handleClickOpen(i.id)}} elevation={3} className={classes.paper + " " + s.typeItem}>
                                    <div >
                                        <Icon ><i.icon className={classes.icon} /></Icon>
                                    </div>
                                    {i.name}
                                </Paper>
                            </Grid>
                        )
                    })}


                </Grid>
            </div>

        </div>
    )
}



export default PayType