import {
  cilBook,
  cilContact,
  cilFile,
  cilLan,
  cilListNumbered,
  cilPencil,
  cilPeople
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavItem, CNavTitle } from '@coreui/react'
import React from 'react'

const _nav = [

  {
    component: CNavTitle,
    name: 'home'
  },
  {
    component: CNavItem,
    name: 'Home title',
    to: '/theme/HOME/Home',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Home Title List',
    to: '/theme/HomeList/HomeList',
    icon: <CIcon icon={cilListNumbered} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Card 1',
    to: '/theme/Home/HomeCard1',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Card1 List',
    to: '/theme/HomeList/HomeCard1List',
    icon: <CIcon icon={cilListNumbered} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Card 2',
    to: '/theme/Home/HomeCard2',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Card2 List',
    to: '/theme/HomeList/HomeCard2List',
    icon: <CIcon icon={cilListNumbered} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Card 3',
    to: '/theme/Home/HomeCard3',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Card3 List',
    to: '/theme/HomeList/HomeCard3List',
    icon: <CIcon icon={cilListNumbered} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Card 4',
    to: '/theme/Home/HomeCard4',
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Card4 List',
    to: '/theme/HomeList/HomeCard4List',
    icon: <CIcon icon={cilListNumbered} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Donate Medicine'
  },
  {
    component: CNavItem,
    name: 'DonateMedicine Title',
    to: '/theme/DonateMedicine/DonateMedicine',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'DonateMedicine Title List',
    to: '/theme/DonateMedicineList/DonateMedicineList',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'DonateMedicine Card1',
    to: '/theme/DonateMedicine/DonateCard1',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'DonateMedicine Card1List',
    to: '/theme/DonateMedicineList/DonateCard1List',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'NGO'
  },
  {
    component: CNavItem,
    name: 'NGO Title',
    to: '/theme/NGO/NGO',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'NGO Title List',
    to: '/theme/NGOList/NGOList',
    icon: <CIcon icon={cilLan} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'NGO Card1',
    to: '/theme/NGO/NGOCard1',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'NGO Card1List',
    to: '/theme/NGOList/NGOCard1List',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'NGO Card2',
    to: '/theme/NGO/NGOCard2',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'NGO Card2List',
    to: '/theme/NGOList/NGOCard2List',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'blog'
  },
  {
    component: CNavItem,
    name: 'Blog Title',
    to: '/theme/Blog/Blog',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Blog Title List',
    to: '/theme/BlogList/BlogList',
    icon: <CIcon icon={cilLan} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Blog Card',
    to: '/theme/Blog/BlogCard',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Blog Card List',
    to: '/theme/BlogList/BlogCardList',
    icon: <CIcon icon={cilLan} customClassName="nav-icon" />,
  }
  // {
  //   component: CNavTitle,
  //   name: 'about'
  // },
  // {
  //   component: CNavItem,
  //   name: 'About Title',
  //   to: '/theme/About/About',
  //   icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'About Title List',
  //   to: '/theme/AboutList/AboutList',
  //   icon: <CIcon icon={cilLan} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'About Mission',
  //   to: '/theme/About/Mission',
  //   icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'About Mission List',
  //   to: '/theme/AboutList/MissionList',
  //   icon: <CIcon icon={cilLan} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Contact'
  // },
  // {
  //   component: CNavItem,
  //   name: 'Contact Title',
  //   to: '/theme/Contact/Contact',
  //   icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Contact Title List',
  //   to: '/theme/ContactList/ContactList',
  //   icon: <CIcon icon={cilLan} customClassName="nav-icon" />,
  // },
]

export default _nav
