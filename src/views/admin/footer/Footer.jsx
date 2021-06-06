import { Container, Grid, makeStyles } from '@material-ui/core'
import { Email, Phone, Room } from '@material-ui/icons'
import React from 'react'
import LogoMini from 'src/views/logo/LogoMini'

const useStyles = makeStyles((theme) =>({
    wrapper:{
        textAlign:'left',
        // padding: theme.spacing(4),
        backgroundColor:'#f7f7f9',
        
        

    },
    mainContent:{
        paddingTop:theme.spacing(4),
        paddingBottom:theme.spacing(4),
        borderTop:'1px solid #ddd',


    },
    itemWrapper: {
        
        textAlign:'left'
    },
    itemHeader: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom:'1rem',
        fontSize:'1.3rem',
    },
    icon:{
        fontSize:'2rem'
    },
    headerContent:{
        paddingLeft:'5px'
    },
    logoWrapper:{
        marginBottom:'1rem'
    },
    footer:{
        borderTop:'1px solid #ddd',
        padding:theme.spacing(2),
        backgroundColor:'#fff',
        fontFamily:'Montserrat'

    },
    contentTitle:{
        margin:'0',
        fontSize:'1rem',
        color:'#212529',
        fontFamily:'Montserrat'
    }
}))

const Footer = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
            <Container>
                <div className={classes.mainContent}>

                <Grid container >
                    <Grid item lg={3} md={3} sm={4} style={{borderRight:'2px solid green'}}>
                        <div className={classes.logoWrapper}><LogoMini src={2} /></div>
                        {/* <p className={classes.contentTitle}>Geljegiňizi biz bilen dörediň!</p> */}
                    </Grid>
                    <Grid item lg={1} md={1}></Grid>
                    <Grid item lg={8} md={8} sm={7}>
                        <Grid container spacing={2}>
                            <Grid item lg={4} md={4} sm={4} xs={12}>
                                <div className={classes.itemWrapper}>
                                    <div className={classes.itemHeader}>
                                        <Phone  className={classes.icon}/><span className={classes.headerContent}>Telefon </span>
                                    </div>
                                    <div>
                                        <p className={classes.contentTitle}>(+993 12) 46-88-12</p>
                                        <p className={classes.contentTitle}> (+993 12) 46-88-12</p>
                                        <p className={classes.contentTitle}>(+993 12) 46-88-12</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={12}>
                                <div className={classes.itemsWrapper}>
                                    <div className={classes.itemHeader}>
                                        <Room className={classes.icon}/> <span className={classes.headerContent}>Salgy </span>
                                    </div>
                                    <div>
                                        <p className={classes.contentTitle}>ş.Aşgabat,Türkmenbaşy şaýoly 126</p>
                                        <p className={classes.contentTitle}>Türkmenistan, 744013</p>
                                        <p className={classes.contentTitle}>(+993 12) 46-85-64</p>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={12}>
                                <div className={classes.itemsWrapper}>
                                    <div className={classes.itemHeader}>
                                        <Email className={classes.icon}/> <span className={classes.headerContent}>Email </span>
                                    </div>
                                    <div>
                                        <p className={classes.contentTitle}>info@senagat</p>
                                    </div>
                                </div>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
                </div>

            </Container>
                <footer className={classes.footer}>
                    <Container>
                        <div style={{fontFamily:'Montserrat'}}>2021ý.Ähli hukuklar goragly @Senagat-Bank</div>
                    </Container>
                </footer>
        </div>
    )
}

export default Footer