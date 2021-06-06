import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'



// sidebar nav config
import navigation from './_nav'
import navigationOrg from "./_navOrg"
import LogoMini from 'src/views/logo/LogoMini';

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.changes.sidebarShow)
  const showCreditNav = useSelector(state => state.profilePage.user.isPerson)
  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/main">
        {/* <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        /> */}
          <LogoMini src={1}/>
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={showCreditNav? navigation: navigationOrg}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}



export default React.memo(TheSidebar)
