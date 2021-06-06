import { Card, CardContent, CardHeader, Grid, makeStyles, Typography } from '@material-ui/core'
import { Description } from '@material-ui/icons'
import React, { useRef } from 'react'

const useStyles = makeStyles((theme) => ({
    needsItem: {
        fontWeight: 'bold'
    },
    table: {
        width: '100%'
    },
    leftPart: {
        textAlign: 'left',
        textTransform: 'initial'
    },
    cardTitle: {
        // color: 'blue',
        // marginBottom: '10px',
        padding: '15px 15px 15px 15px',
        [theme.breakpoints.down('xs')]: {
            backgroundColor: 'rgba(185, 208, 255, 0.41)',
            color: '#000'
        },
    },
    cardContent: {
        fontWeight:'600',
        padding: '15px 15px 15px 15px',
        margin: 0,
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem'
        }
    },

    cardItemH: {
        width: '100%',


    },
    cardItem: {
        borderRight: '2px solid #f2f2f2',
        [theme.breakpoints.down('xs')]: {
            border: '2px solid #ccc'
        },
        // borderBottom: '2px solid #ccc',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        

    },
    hr:{
        [theme.breakpoints.down('xs')]:{
            display:'none'
        },
        
    },
    creditTableWrapper:{
        border: '2px solid #ddd',
        padding:'10px',
        borderRadius:'5px'
    },
    wrapper:{
        textAlign:'center',
        marginTop:'25px',
        maxWidth:'1440px',
        marginLeft:'auto',
        marginRight:'auto',
        [theme.breakpoints.up('xs')]: {
            padding: '30px'
        }
    }

}))
const changeItemTitle = (title) => {
    switch (title) {
        case 'time': return 'Möhleti'
        case 'percentage': return 'Göterim'
        case 'amount': return 'Karzyň möçberi'

    }
}
const createTime = (time) => {
    if (time <= 6) return time + ' aý'
    else return time / 12 + ' ýyl'
}
const needPeople = (value) => {
    if (Number(value) > 16000) return 'Girew emlägi we üçünji tarapyň zamunlygy'
    else if (Number(value) > 8000) return '2 raýatyň zamunlygy'
    else if (Number(value) <= 8000) return '1 raýatyň zamunlygy'

}
const CreditType = (props) => {
    const activeItem = props.activeItem.trim()?Number(props.activeItem)-1:''
    const classes = useStyles()
    
    return (
        <div className={classes.wrapper}>
            {props.activeItem.length <= 0 && <div>

                {/* <Description style={{ color: '#2D4FCB', fontSize: '10rem', }} /> */}

            </div>}
            {props.activeItem.length > 0 && <div className={classes.creditTableWrapper}>
                {/* <div className='h3'>{props.docModeData.length > 0 && props.activeItem.length > 0 ? props.docModeData[Number(props.activeItem) - 1].name + ' karty' : ''}</div> */}
                <Grid container spacing={1}>

                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <div className={classes.cardItem}>
                            <div className={classes.cardItemH}>

                                <div className={classes.cardTitle}>Möhleti</div>
                                <div className={'h2' + ' ' + classes.cardContent}>{createTime(props.docModeData[activeItem].time)}</div>

                            </div>
                        </div>
                   </Grid>

                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <div className={classes.cardItem}>
                            <div className={classes.cardItemH}>
                                <div className={classes.cardTitle}>Karzyň möçberi</div>
                                <div className={'h2' + ' ' + classes.cardContent}>{props.docModeData[activeItem].amount} manada çenli</div>

                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <div className={classes.cardItem} style={{borderRight:'none'}}>
                            <div className={classes.cardItemH} >
                                <div className={classes.cardTitle}>Göterim</div>
                                <div className={'h2' + ' ' + classes.cardContent}>{props.docModeData[activeItem].percentage} %</div>

                            </div>
                        </div>
                    </Grid>
                    {/* hr */}
                    <Grid item lg={4} md={4} sm={4} xs={12} className={classes.hr}>
                        <hr style={{width:'80%',borderWidth:'1px'}}/>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12} className={classes.hr}>
                        <hr style={{width:'80%',borderWidth:'1px'}}/>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12} className={classes.hr}>
                        <hr style={{width:'80%',borderWidth:'1px'}}/>
                    </Grid>

                    {/* 2 part */}
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <div className={classes.cardItem}>
                            <div className={classes.cardItemH}>
                                <div className={classes.cardTitle}>Karzy gaýtarmagyň üpjünçiligi</div>
                                <div className={'h3' + ' ' + classes.cardContent}>{needPeople(props.docModeData[activeItem].amount)}</div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12} >

                        <div className={classes.cardItem}>
                            <div className={classes.cardItemH}>
                                <div className={classes.cardTitle}>Karzy üzmegiň çeşmeleri</div>
                                <div className={'h3' + ' ' + classes.cardContent}>{props.docModeData[activeItem].debt_repayment_sources}</div>

                            </div>
                        </div>

                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>

                        <div className={classes.cardItem} style={{borderRight:'none'}}>
                            <div className={classes.cardItemH}>
                                <div className={classes.cardTitle}>Karzy üzmegiň usuly</div>
                                <div className={'h3' + ' ' + classes.cardContent}>{props.docModeData[activeItem].debt_repayment_ways}</div>

                            </div>
                        </div>



                    </Grid>
                </Grid>

            </div>}
            <br/><br/>
        </div>
    )
}



export default CreditType