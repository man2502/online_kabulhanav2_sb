import React, { useState } from "react";

import tmIcon from "../../../../assets/img/lang/tm.png"
import rusIcon from "../../../../assets/img/lang/rus.png"
import enIcon from "../../../../assets/img/lang/en.png"
import { Dropdown } from "semantic-ui-react";
import { useTranslation } from "react-i18next";


let languageOptions = [
    { key: "turkmen",  value: "tm", image: { src: tmIcon,alt: "tm" } },
    { key: "english",   value: "en", image: { src: enIcon, alt:"en" } },
    { key: "russian",   value: "ru", image: { src: rusIcon,alt: "ru" }},
];


const LanguageToggle = props => {
    const { t, i18n } = useTranslation();
    const changeLanguage =(language)=>{
        i18n.changeLanguage(language)
    }
    const handleChange = async (e)=>{   
       await changeLanguage(e.target.alt)
        
    }
    
    return (
        <Dropdown
        onChange={handleChange}
        inline
        options={languageOptions}
        defaultValue={languageOptions[0].value}
        
      />
    );
};
export default LanguageToggle;