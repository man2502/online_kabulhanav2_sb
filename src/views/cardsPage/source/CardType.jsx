import { CircularProgress, Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'


const useStyles = makeStyles((theme) => ({
    wrapper: {
        marginTop: '25px',
        border: '2px solid #ddd',
        borderRadius: '15px',
        maxWidth:'1440px',
        marginLeft:'auto',
        marginRight:'auto',
        [theme.breakpoints.up('xs')]: {
            padding: '30px'
        }
    },
    mainTitle: {
        [theme.breakpoints.down('xs')]: {
            marginTop: '15px'
        }
    },
    
    loadingImg:{
        // width:'550px',
        // height:'350px',
        height:'100%',
        minHeight:'250px',
        [theme.breakpoints.down('xs')]:{
            width:'100%'
        },
        width:'90%',
        background:'rgba(0,0,0,0.1)',
        // border:'2px solid #2222ff',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'10px'
    },
    loadingImgContent:{
        
        color:'#fff',
        // height:'100%',
        zIndex:'999999'
    },
    imgWrapper:{
        position:'relative',
        [theme.breakpoints.down('xs')]:{
            textAlign:'center'
        },
        // height:'100%',
        // width:'100%'
    }
}))
const CardType = (props) => {
    const [loadedImg, setLoadedImg] = useState(false)
    const classes = useStyles()
    const base = props.docModeData&&props.activeItem.trim()?props.docModeData[Number(props.activeItem)-1]:''
    const img = '"online/'+base.image+'"'
    return (
        <div>
                    {/* <Container > */}
            {props.activeItem.length > 0 && <div className={classes.wrapper}>
                <div>

                    <Grid container spacing={2}>
                        <Grid lg={4} md={4} sm={6} xs={12}>
                            <div className={classes.imgWrapper}>

                           {!loadedImg&&<div className={classes.loadingImg}>
                                <span className={classes.loadingImgContent}><CircularProgress size={80} style={{color:'#fff'}}/></span>
                            </div>}
                            <img src={'https://online.turkmenturkbank.com.tm/'+base.image} style={loadedImg ? {maxWidth:'90%', height:'auto'} :{display: 'none'} }   alt='Card-IMG'onLoadStart={()=>{setLoadedImg(false)}} onLoad={()=>{setLoadedImg(true)}}/>
                            </div>
                        </Grid>
                        <Grid lg={8} md={8} sm={6} xs={12}>
                            <div>
                                <div className={'h1' + ' ' + classes.mainTitle} style={{ borderBottom: '1px solid #ddd' }}>{props.docModeData.length > 0 && props.activeItem.length > 0 ? base.name + ' karty' : ''}</div>

                                <p style={{ color: '#777' }}>plastik kartyny nagt pul bilen doldurmak çäksiz</p>
                                <br/>
                                <Grid container spacing={2}>
                                    <Grid item lg={4} md={4} sm={4} xs={12}>
                                        <div>
                                            <h2>{base.year_increase_amount}%</h2>
                                            <p style={{ color: '#777' }}>Ýyllyk hasaplama göterim derejesi</p>

                                        </div>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={4} xs={12}>
                                        <div>
                                            <h2>{base.commission}%</h2>
                                            <p style={{ color: '#777' }}>Nagt pul çekmegiň ýygymy</p>

                                        </div>
                                    </Grid>
                                    <Grid item lg={4} md={4} sm={4} xs={12}>
                                        <div>
                                            <h2>{base.day_money_restriction} TMT</h2>
                                            <p style={{ color: '#777' }}>gündelik nagt däl hasaplaşygyň çäklendirmesi</p>

                                        </div>
                                    </Grid>

                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>}
                    {/* </Container> */}
        </div>
    )
}



export default CardType