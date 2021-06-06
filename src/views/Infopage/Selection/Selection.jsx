import React, { useEffect, useState } from "react"
import { Button, Checkbox, FormGroup, FormControlLabel, FormControl, Grid, InputLabel, makeStyles, Select, Divider } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import s from "./Selection.module.css"
import { CheckBox, CheckBoxOutlineBlankOutlined, CheckBoxOutlined, Speed } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Loading } from "src/App";
import { Alert, AlertTitle } from "@material-ui/lab";

// import { setScheduleThunk } from "src/redux/calendar-reducer";

const useStyles = makeStyles((theme) => ({
    formControl: {
        // marginTop: 25,
        margin: theme.spacing(1),
        minWidth: 180,
        width: '50%',
        // marginRight:'auto',
        // marginLeft:'auto',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    optionItem: {
        padding: '5px',
        paddingBottom: '25px',
        fontSize: '1.5rem',

    },
    container: {
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    checkboxs: {
    },
    servicesCheckbox: {

    },
    checkboxIcon: {
        fontSize: '2rem',
        color:'#fff'
    },
    checkboxLabel: {
        fontSize: '1.5rem',
        color:'#fff'

    },
    servicePanel:{
        backgroundColor:'#3f51b5',
        border:'2px solid #ddd',
        borderRadius:'7px',
        padding:'10px'
    }
}));
const Selection = (props) => {
    // useEffect(()=>{
    //     setScheduleThunk()
    // },[])
    const hasHistory = props.collection.docMode
    const history = props.collection.docMode
    const history_info = props.collection.docModeInfo
    const classes = useStyles()

    const { t, i18n } = useTranslation()

    const [doc_mode, set_doc_mode] = useState(hasHistory ? history : '')
    const [doc_mode_info, set_doc_mode_info] = useState(history_info ? history_info : '')
    // const [is_hurry, set_is_hurry] = useState(false)
    // const [will_delivered, set_will_delivered] = useState(false)

    const setData = async () => {
        await props.setCollection({ ...{ docMode: doc_mode,docModeInfo: doc_mode_info } })
        props.handleNext()
    }

    const switchLang = (value)=>{
        switch(i18n.language){
            case 'tm':
                return value.name
            case 'ru':
                return value.nameRu
        }
    }
    // console.log(doc_mode)
    const Component = props.component
    return (
        <div style={{ paddingTop: '30px' }}>
            {props.isFetching && <Loading />}
            <Grid container spacing={2} justify={'center'} classes={{ container: classes.container }}>
                <Grid item lg={12} md={12} style={{ textAlign: 'center' }}>
                    <FormControl variant="outlined" className={classes.formControl} >
                        <InputLabel htmlFor="outlined-docMode-simple">{props.titles.selectDoc}</InputLabel>
                        <Select
                            onChange={(e) => {
                                // if (e.target.value!==''){
                                    // debugger
                                    const selectedIndex = Number(e.target.value);
                                    set_doc_mode(e.target.options[selectedIndex].attributes.datakey.value)
                                    set_doc_mode_info(e.target.value)

                                // }
                            }}
                            native
                            defaultValue={history_info ? history_info : 'none'}
                            label={props.titles.selectDoc}
                            inputProps={{
                                id: 'outlined-docMode-simple',
                            }}
                        >
                            <option aria-label="None" value="" datakey='' />
                            {props.docData && props.docData.length > 0 ? props.docData.map(i => {

                                return (
                                    <option className={classes.optionItem + ' ' + s.optionItem} datakey={i.id} value={i.orderId} key={i.id}>{switchLang(i)}</option>
                                )
                            }) : <option className={classes.optionItem} value=''>None</option>}


                        </Select>
                        {/* }}
                     /> */}

                        {/* <Button style={{position: 'absolute' ,bottom:'-66px' ,left: '65px'}} variant="contained" color="primary"  disabled>Next</Button>} */}


                    </FormControl>
                    <br />

                    <br />
                    <Button style={{ marginRight: '15px', marginLeft: '8px' }} variant="contained" disabled={props.activeStep === 0} onClick={props.handleBack} className={props.backButton}>Yza</Button>
                    <Button variant="contained" color="primary" disabled={doc_mode.length < 1} onClick={setData}>Indiki</Button>
                    <br/>
                    <br/>
                    {/* {props.isCard && !doc_mode.length < 1 && <div className={classes.servicePanel}>
                        <FormGroup row style={{justifyContent:'left',alignItems:'center'}}>
                            <FormControlLabel
                                classes={{ root: classes.checkboxs, label: classes.checkboxLabel }}
                                control={
                                    <Checkbox
                                        classes={{ root: classes.servicesCheckbox }}
                                        icon={<CheckBoxOutlineBlankOutlined classes={{ root: classes.checkboxIcon }} />}
                                        checkedIcon={<CheckBox classes={{ root: classes.checkboxIcon }} />}
                                        checked={is_hurry}
                                        color="primary"
                                        name='is_hurry'
                                        onChange={(e) => { set_is_hurry(e.target.checked) }}
                                    />
                                }
                                label='Gyssagly'
                            />

                            <FormControlLabel
                                classes={{ root: classes.checkboxs, label: classes.checkboxLabel }}
                                control={
                                    <Checkbox
                                        icon={<CheckBoxOutlineBlankOutlined classes={{ root: classes.checkboxIcon }} />}
                                        checkedIcon={<CheckBox classes={{ root: classes.checkboxIcon }} />}
                                        checked={will_delivered}
                                        color="primary"
                                        name='will_delivered'
                                        onChange={(e) => { set_will_delivered(e.target.checked) }}
                                    />
                                }
                                label='Eltip berme'
                            />

                        </FormGroup>

                    </div>}
                        {will_delivered&&<Alert severity="info" className={'h4'} style={{marginBottom:'10px'}}>
                            <AlertTitle className={'h4'} style={{textAlign:'left', fontWeight:'bold'}}>Goşmaça töleg</AlertTitle>
                            Eltip bermek hyzmatyndan peýdalanmak — <strong>{props.docData[doc_mode_info].delivery_amount} {props.docData[doc_mode_info].currency}</strong>
                        </Alert>}
                        {is_hurry&&<Alert className={'h4'} severity="info">
                            <AlertTitle className={'h4'} style={{textAlign:'left', fontWeight:'bold'}}>Goşmaça töleg</AlertTitle>
                            Gyssagly hyzmatyndan peýdalanmak — <strong>{props.docData[doc_mode_info].hurry_amount} {props.docData[doc_mode_info].currency}</strong>
                        </Alert>} */}


                </Grid>
                <Grid item lg={12} md={12}>
                    <Component docModeData={props.docData} activeItem={doc_mode_info} />
                </Grid>
            </Grid>
        </div>
    )
}

export default Selection