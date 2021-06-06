import React from "react"
import { useTranslation } from "react-i18next"
import s from "./Needs.module.css"

const Needs =(props) =>{
    const {t ,i18n} =useTranslation()
    
    return(
        <div className={s.wrapper}> 
            <h2>{t('Needs Docs')}</h2>
            <div>
                {props.data? props.data.map(i =>{
                    return(
                        <div key={i.id}>{i.tm}</div>
                    )
                }): "no doc"}
            </div>
        </div>
    )
}


export default  Needs