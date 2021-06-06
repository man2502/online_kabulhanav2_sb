import React from 'react'
import {
  
  CCol,
  
  CJumbotron,
  CRow,
 
} from '@coreui/react'
import { makeStyles } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

// import { DocsLink } from 'src/reusable'
const useStyles = makeStyles((theme)=>({
  mainTitle :{
    fontWeight:'300',
    fontSize:'4.5rem',
    lineHeight:'1.2',
    [theme.breakpoints.down('xs')]:{
      fontSize: '2.2em'
    },
    [theme.breakpoints.between('sm','xs')]:{
      fontSize: '3em'
    }
  }
}))
const Jumbotrons = (props) => {
const {t} = useTranslation()
const classes = useStyles()
  return (
    <>
      <CRow>
        <CCol>
          
              <CJumbotron style={{backgroundColor:'#DDF7DDFF' ,border:'2px solid #38F738FF'}}>
                <h1 className={classes.mainTitle}>{t('welcome')}, {props.user_name.map(name => <span>{name} </span>)}</h1>
                {/* <h2 className="lead" style={{fontSize:'1.5em'}}>Bu siziň şahsy otagyňyz.</h2> */}
                <hr className="my-2" />
                {/* <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p> */}
                <p className="lead">
                  {/* <Button color="primary" variant="contained">Giňişleýin maglumatlar</Button> */}
                </p>
              </CJumbotron>
          
        </CCol>
       
      </CRow>
     
    </>
  )
}

export default Jumbotrons
