import React from "react"
import { Grid, makeStyles, Paper } from "@material-ui/core"
import s from "./ProfilePage.module.css"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    item: {
        padding: theme.spacing(2),
        border: '2px solid #EBEDEF'
    },
    keysItem: {
        color: theme.palette.primary.main
    }
}));

const keys = {
    userName: 'Username',
    name: 'Ady',
    surname: 'Familiýasy',
    phone: 'Telefon belgisi',
    email: 'Email'
}

            
const ProfilePage = (props) => {
    const classes = useStyles()
    return (
        <div className={s.wrapper}>
            <Paper className={classes.paper}>
                <h2>Profile</h2>
                <Grid container>
                    <Grid item lg={6} md={6} sm={6} xs={6} className={classes.item} style={{ textAlign: 'right', borderRight: 'none' }}>
                        <ul>
                            <li><h3 className={classes.keysItem}>{keys.userName}</h3></li>
                            <li><h3 className={classes.keysItem}>{keys.name}</h3></li>
                            <li><h3 className={classes.keysItem}>{keys.surname}</h3></li>
                            <li><h3 className={classes.keysItem}>{keys.phone}</h3></li>
                            <li><h3 className={classes.keysItem}>{keys.email}</h3></li>
                        </ul>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6} className={classes.item} style={{ textAlign: 'left' }}>
                        <ul style={{paddingLeft:'0'}}>
                            <li><h3 className={classes.varsItem}>{props.userName? props.userName: '-'}</h3></li>
                            <li><h3 className={classes.varsItem}>{props.name? props.name: '-'}</h3></li>
                            <li><h3 className={classes.varsItem}>{props.surname? props.surname: '-'}</h3></li>
                            <li><h3 className={classes.varsItem}>{props.userPhone? props.userPhone: '-'}</h3></li>
                            <li><h3 className={classes.varsItem}>{props.userEmail? props.userEmail: '-'}</h3></li>
                        </ul>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}



export default ProfilePage