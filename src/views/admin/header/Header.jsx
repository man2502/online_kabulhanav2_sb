import React from "react";
import { Container, Grid } from "@material-ui/core";
import s from "./Header.module.css"
import logo from "../../../assets/img/logo.png"
import { NavLink } from "react-router-dom"; 
import LanguageToggle from "./LanguageToggle/LanguageToggle";
import PhoneIcon from '@material-ui/icons/Phone';

const Header = (props) => {
    return (
        <div style={{ backgroundGridor: '#F7F7F9', paddingBottom: '10px' ,paddingTop:'10px'}}>

            <Container>
                <div className={s.wrapper}>
                    <Grid container alignItems='center'>
                        <Grid item md={4} lg={4} sm={12} xs={12}>
                            <NavLink to="/"><img src={logo} alt="logo" width={240} /></NavLink>
                        </Grid>
                        <Grid item lg={4} md={4} sm={6}xs={8}>
                            <div style={{paddingTop:'10px'}}><a className={s.helpNumber}  style={{color:'green', Gridor: '#aaffaa', fontWeight: 'bold' }} href="tel:+993468812"><PhoneIcon style={{ fontSize: '2.2rem' }} />+993-12-46-88-12</a></div>
                        </Grid>
                        <Grid item md={4} lg={4} sm={6} xs={4}>
                            <div className={s.userPanel}>
                                <span >
                                    {/* <Help className={s.helpButton} /> */}
                                </span>

                                <span className={s.lan}>
                                    <LanguageToggle />
                                </span>

                            </div>
                        </Grid>


                    </Grid>
                </div>
            </Container>
        </div>

    )
}

export default Header