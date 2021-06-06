import React, { useState } from "react"
import { FormControl, InputLabel, makeStyles, Select } from "@material-ui/core";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import s from "./SCard.module.css"


const useStyles = makeStyles((theme) => ({
    formControl: {
        marginTop: 25,
        margin: theme.spacing(1),
        minWidth: 180,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    optionItem:{
        padding: '5px',
        paddingBottom: '10px',
        
        fontSize: '1.2rem'
    }
}));
const SCard = (props) => {
    
    const classes = useStyles()
    const [state, setState] = useState({
        card_type_id: ''
    })
    const { t, i18n } = useTranslation()

    const handleChange = (e) => {
       
        // props.setActive(e.currentTarget.attributes.datakey.value)
        setState({
            ...state,
            card_type_id: e.target.value
        })
        // console.log(e.target.value)
    }
    return (
        <FormControl variant="outlined" className={classes.formControl} fullWidth>
            <InputLabel htmlFor="outlined-cardType-simple">{t('Select Card Type')}</InputLabel>
            <Controller
                name='card_type_id'
                defaultValue=""
                // rules={{required:true}}
                control={props.control}
                onChange={() => console.log("hello")}
                render={({ onChange, name, value }) => (
                    <Select
                        
                        value={value ? value : ""}
                        onChange={(e) => {
                            onChange(e)
                            handleChange(e)

                        }}
                        name={name}
                        label={t('Select Card Type')}
                        inputProps={{
                            id: 'outlined-cardType-simple',
                        }}
                    >   
                        {props.docData&&props.docData.length >0? props.docData.map(i => {
                            
                            return (
                                <option  className={classes.optionItem + ' '+ s.optionItem} datakey={i.orderId} value={i.id} key={i.value}>{i.name}</option>
                            )
                        }): <option className={classes.optionItem} value=''>None</option>}
                        {/* <option datakey={0} value={'rec'}>Recvisit</option>
                        <option datakey={1} value={'dir'}>Gorkezme</option> */}
                        
                    </Select>)
                }
            />

        </FormControl>
    )
}

export default SCard