import { Button, Container } from "@material-ui/core"
import React from "react"
// import s from "./../admin/login/LoginPage.module.css"
import { useTranslation } from 'react-i18next';
import { NavLink } from "react-router-dom"

import Header from "../admin/header/Header"
import { makeStyles } from '@material-ui/core'
import { AccountBalance, Person } from "@material-ui/icons";
import { Col, Row } from "react-bootstrap"
// import AutoAnswer from "./InfoSection/AutoAnswer/AutoAnswer"
// import axios from "axios"
// import { loginUserThunk } from "../../redux/mainPage-reducer"


import { useDispatch, } from "react-redux";
import InfoBlock from "../base/infoBlock/InfoBlock";
import Footer from "../admin/footer/Footer";

const useStyles = makeStyles((theme) => ({
    title: {
        color:'#fff',
        [theme.breakpoints.down('sm')]: {
            fontSize: 18
        },
        fontSize: 25, display: 'inline-block', margin: '0px'
    },
    icon: {
        marginRight: '6px',
        color:'#fff',

        fontSize: '2.1rem',
        [theme.breakpoints.down('sm')]:{
        fontSize: '1.8rem',
      
        },
    },
    wrapper: {
        textAlign: 'center',
        backgroundColor: '#F7F7F9',
        height: '100vh'
    },
    mainTitle: {
        textTransform: 'uppercase',
        color: '#454545',
        paddingTop: '30px',
        paddingBottom: '30px',
    },
    mainTitleH1: {
        fontWeight: 'bold',
        color: '#454545',
        letterSpacing: '1px',
        [theme.breakpoints.down('xs')]:{
            fontSize:'2.5rem'
        },
        fontSize: '3.3rem'
    },
    buttonWrapper:{
        height:'20vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:'30px',
        width:'50%',
        [theme.breakpoints.down('sm')]:{
            width: '80%'
        },
        [theme.breakpoints.between('sm','md')]:{
            width: '60%'
        },
        infoBlock:{
            // [theme.breakpoints.between('sm','xs')]:{
            //     marginTop:'30px'
            // },
            // [theme.breakpoints.down('xs')]:{
            //     marginTop:'50px'
            // }
        }

    },
    selectButton:{
        height: '70px', borderRadius: '10px', marginTop: '15px', width: '100%'
    }
}))

const MainSelect = (props) => {

    const { t, i18n } = useTranslation();
    const classes = useStyles()

    const arr = [{ text: 'Edara tarap', Icon: AccountBalance, isPerson: false, align: 'right', marginRight: '50px' }, { text: 'şahsy tarap', Icon: Person, isPerson: true, algin: 'left', marginLeft: '50px' }]

    const dispatch = useDispatch()
    // const sidebarShow = useSelector(state => state.changes.isPerson)

    const togglePerson = async () => {
        const val = true
        await dispatch({ type: 'setTempUserType', isPerson: val })
        //   
    }

    const toggleNotPerson = async () => {
        const val = false
        await dispatch({ type: 'setTempUserType', isPerson: val })

    }
    return (
        <div className={classes.wrapper}>
            <Header />
            <Container>
                <div className={classes.mainTitle} >
                    <h1 className={classes.mainTitleH1}>{t('Online reception')}</h1>
                    {/* <p>{t('Use banking services online')}</p> */}
                </div>
                <div className={classes.buttonWrapper}>
                    <Row style={{ textAlign: 'center' }}>
                        {arr.map((i) => {
                            return (
                                <Col lg={6} md={6} sm={6}>
                                    <div >
                                        <NavLink to='/login' style={{textDecoration:'none'}}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                size='none'
                                                className={classes.selectButton}
                                                startIcon={<i.Icon classes={{root: classes.icon}}/>}
                                                onClick={i.isPerson ? togglePerson : toggleNotPerson}
                                            >
                                                <div className={classes.title}>{i.text}</div>
                                            </Button>
                                        </NavLink>
                                    </div>

                                </Col>
                            )
                        })}

                    </Row>
                </div>
            </Container>

            <div className={classes.infoBlock}>
                {/* <InfoSection /> */}
                <InfoBlock />

            </div>
            <Footer />
        </div>
    )
}


export default MainSelect