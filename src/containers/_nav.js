import React from 'react'
import CIcon from '@coreui/icons-react'


const _nav =  [
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Hyzmatlar']
  },
   {
     _tag: 'CSidebarNavItem',
     name: 'Karz bolumi',
      icon: 'cil-calculator',
      to: '/credit',
      
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Kart bolumi',
      icon: 'cil-credit-card',
      to : '/cards',
      
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Güwänama bölümi',
      icon: 'cil-notes',
      to : '/docs',
      
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Arz - şikaýat bölümi',
      to: '/feedback',
      icon: 'cil-lock-locked',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Onlaýn kabulhana',
      icon: 'cil-notes',
      to : '/reception',
      
    },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Jemagat Tölegi',
    //   icon: 'cil-notes',
    //   to: '/publicpay',
      
    // },
    {
      _tag: 'CSidebarNavTitle',
      _children: ['Profile']
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Baş sahypa',
      to: '/main',
      icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
      // badge: {
      //   color: 'info',
      //   text: 'NEW',
      // }
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Profile',
      to: '/profile',
      icon: 'cil-user',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Gizlin açary çalyşmak',
      to: '/profile/changePassword',
      icon: 'cil-lock-locked',
    },
    
  // 
]

export default _nav
