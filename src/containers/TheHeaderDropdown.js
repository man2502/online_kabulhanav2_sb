import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {  useHistory } from 'react-router-dom';


const TheHeaderDropdown = (props) => {
  const history = useHistory()
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar" style={{ width: "100%", display: 'flex', alignItems: 'center' }}>
          <AccountCircleIcon color="primary" style={{ fontSize: '2.5rem' }} />
          <span style={{ fontSize: '1.3rem' }}>{props.username}</span>
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">

        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Akkaunt</strong>
        </CDropdownItem>
        <CDropdownItem onClick={()=>{history.push('/profile')}}>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
        <CDropdownItem onClick={()=>{history.push('/profile/changePassword')}}>

          <CIcon name="cil-settings" className="mfe-2" />Paroly çalyşmak

        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" />
          Tölegler
          <CBadge color="secondary" className="mfs-auto">42</CBadge>
        </CDropdownItem>

        <CDropdownItem divider />
        <CDropdownItem onClick={() => { props.exit() }}>
          <span >

            <CIcon name="cil-lock-locked" className="mfe-2" />
          Cykmak
          </span>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}


export default TheHeaderDropdown