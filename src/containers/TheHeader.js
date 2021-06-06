import React from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'

// routes config
import routes from '../routes'

import { 
  TheHeaderDropdown,
 
}  from './index'
import LogoMini from 'src/views/logo/LogoMini'

import {  logOutThunk } from 'src/redux/profilePage-reducer'
import LanguageToggle from 'src/views/admin/header/LanguageToggle/LanguageToggle'
const TheHeader = (props) => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.changes.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        {/* <CIcon name="logo" height="48" alt="Logo"/> */}
        <LogoMini src={2}/>
      </CHeaderBrand>

        <CHeaderNav className="d-md-down-none mr-auto">
          <CHeaderNavItem className="px-3" >
            <CHeaderNavLink to="/main"><LogoMini src={2}/></CHeaderNavLink>
          </CHeaderNavItem>
          
          {/* <CHeaderNavItem  className="px-3">
            <CHeaderNavLink to="/users">Users</CHeaderNavLink>
          </CHeaderNavItem>
          <CHeaderNavItem className="px-3">
            <CHeaderNavLink>Settings</CHeaderNavLink>
          </CHeaderNavItem> */}
        </CHeaderNav>

      <CHeaderNav className="px-3">
        <span style={{border: '2px solid #ccc', padding: '10px',color:'green', borderRadius:'8px'}}>Sorag-jogap:  <a style={{color:'green', fontWeight:'bold'}} href='tel:+99312468812'>+99312468812</a></span>
        {/* <TheHeaderDropdownNotif/>
        <TheHeaderDropdownTasks/>
        <TheHeaderDropdownMssg/> */}
        <TheHeaderDropdown username= {props.username} exit={props.logOutThunk}/>
      {/* <button onClick={props.loginUserThunk()} style={{background: 'none', border:'none' ,cursor:'pointer'}} ><ExitToApp /></button>  */}
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes} 
          style={{fontSize:'1.3rem', color:'green'}}
        />
          <div className=" mfe-2 c-subheader-nav">
            {/* <CLink className="c-subheader-nav-link"href="#">
              <CIcon name="cil-speech" alt="Settings" />
            </CLink>
            <CLink 
              className="c-subheader-nav-link" 
              aria-current="page" 
              to="/dashboard"
            >
              <CIcon name="cil-graph" alt="Dashboard" />&nbsp;Dashboard
            </CLink> */}
            {/* <CLink className="c-subheader-nav-link" href="#">
              <CIcon name="cil-settings" alt="Settings" />&nbsp;Settings
            </CLink> */}
            <CLink className="c-subheader-nav-link" href="#">
              <LanguageToggle />
            </CLink>
          </div>
      </CSubheader>
    </CHeader>
  )
}

const mapStateToProps =(state)=>{
  return{
      username: state.profilePage.user.userName
  }
}

export default connect(mapStateToProps,{
  logOutThunk
}) (TheHeader)
