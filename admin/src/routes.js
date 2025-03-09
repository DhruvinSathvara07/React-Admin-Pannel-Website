import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const Home = React.lazy(() => import('./views/theme/HOME/Home'))
const HomeList = React.lazy(() => import('./views/theme/HomeList/HomeList'))
const HomeCard1 = React.lazy(() => import('./views/theme/HOME/HomeCard1'))
const HomeCard1List = React.lazy(() => import('./views/theme/HomeList/HomeCard1List'))
const HomeCard2 = React.lazy(() => import('./views/theme/HOME/HomeCard2'))
const HomeCard2List = React.lazy(() => import('./views/theme/HomeList/HomeCard2List'))
const HomeCard3 = React.lazy(() => import('./views/theme/HOME/HomeCard3'))
const HomeCard3List = React.lazy(() => import('./views/theme/HomeList/HomeCard3List'))
const HomeCard4 = React.lazy(() => import('./views/theme/HOME/HomeCard4'))
const HomeCard4List = React.lazy(() => import('./views/theme/HomeList/HomeCard4List'))

const DonateMedicine = React.lazy(() => import('./views/theme/DonateMedicine/DonateMedicine'))
const DonateMedicineList = React.lazy(() => import('./views/theme/DonateMedicineList/DonateMedicineList'))
const DonateMedicineCard1 = React.lazy(() => import('./views/theme/DonateMedicine/DonateCard1'))
const DonateMedicineCard1List = React.lazy(() => import('./views/theme/DonateMedicineList/DonateCard1List'))

const NGO = React.lazy(() => import('./views/theme/NGO/NGO'))
const NGOList = React.lazy(() => import('./views/theme/NGOList/NGOList'))
const NGOCard1 = React.lazy(() => import('./views/theme/NGO/NGOCard1'))
const NGOCard1List = React.lazy(() => import('./views/theme/NGOList/NGOCard1List'))
const NGOCard2 = React.lazy(() => import('./views/theme/NGO/NGOCard2'))
const NGOCard2List = React.lazy(() => import('./views/theme/NGOList/NGOCard2List'))
const Blog = React.lazy(() => import('./views/theme/Blog/Blog'))
const BlogList = React.lazy(() => import('./views/theme/BlogList/BlogList'))
const BlogCard = React.lazy(() => import('./views/theme/Blog/BlogCard'))
const BlogCardList = React.lazy(() => import('./views/theme/BlogList/BlogCardList'))
const About = React.lazy(() => import('./views/theme/About/About'))
const AboutList = React.lazy(() => import('./views/theme/AboutList/AboutList'))
const Mission = React.lazy(() => import('./views/theme/About/Mission'))
const MissionList = React.lazy(() => import('./views/theme/AboutList/MissionList'))
// const AboutCard = React.lazy(() => import('./views/theme/About/AboutCard'))
// const AboutCardList = React.lazy(() => import('./views/theme/AboutList/AboutCardList'))
const Contact = React.lazy(() => import('./views/theme/Contact/Contact'))
const ContactList = React.lazy(() => import('./views/theme/ContactList/ContactList'))

// edit page
const EditHomeList = React.lazy(() => import('./views/EditPages/Home/EditHomeList'))
const EditHomeCard1List = React.lazy(() => import('./views/EditPages/Home/EditHomeCard1List'))
const EditHomeCard2List = React.lazy(() => import('./views/EditPages/Home/EditHomeCard2List'))
const EditHomeCard3List = React.lazy(() => import('./views/EditPages/Home/EditHomeCard3List'))
const EditHomeCard4List = React.lazy(() => import('./views/EditPages/Home/EditHomeCard4List'))
const EditNgoList = React.lazy(() => import('./views/EditPages/Ngo/EditNgoList'))
const EditNgoCard1List = React.lazy(() => import('./views/EditPages/Ngo/EditNgoCard1List'))
const EditNgoCard2List = React.lazy(() => import('./views/EditPages/Ngo/EditNgoCard2List'))
const EditBlogList = React.lazy(() => import('./views/EditPages/Blog/EditBlogList'))
const EditBlogCardList = React.lazy(() => import('./views/EditPages/Blog/EditBlogCardList'))
const EditAboutList = React.lazy(() => import('./views/EditPages/About/EditAboutList'))
const EditMission = React.lazy(() => import('./views/EditPages/About/EditMission'))
const EditContact = React.lazy(() => import('./views/EditPages/Contact/EditContact'))

const EditDonateMedicineList = React.lazy(() => import('./views/EditPages/DonateMedicine/EditDonateMedicine'))
const EditDonateCard1List = React.lazy(() => import('./views/EditPages/DonateMedicine/EditDonateCard1'))




const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Home, exact: true },

  // home
  { path: '/theme/HOME/Home', name: 'Home title', element: Home },
  { path: '/theme/HomeList/HomeList', name: 'Home tittle List', element: HomeList },
  { path: '/theme/Home/HomeCard1', name: 'HomeCard1', element: HomeCard1 },
  { path: '/theme/HomeList/HomeCard1List', name: 'HomeCard1 List', element:HomeCard1List },
  { path: '/theme/Home/HomeCard2', name: 'HomeCard2', element: HomeCard2 },
  { path: '/theme/HomeList/HomeCard2List', name: 'HomeCard2 List', element:HomeCard2List },
  { path: '/theme/Home/HomeCard3', name: 'HomeCard3', element: HomeCard3 },
  { path: '/theme/HomeList/HomeCard3List', name: 'HomeCard3 List', element:HomeCard3List },
  { path: '/theme/Home/HomeCard4', name: 'HomeCard3', element: HomeCard4 },
  { path: '/theme/HomeList/HomeCard4List', name: 'HomeCard3 List', element:HomeCard4List },

  // donatemedicine
  { path: '/theme/DonateMedicine/DonateMedicine', name: 'DonateMedicine Title', element:DonateMedicine },
  { path: '/theme/DonateMedicineList/DonateMedicineList', name: 'DonateMedicine Title list', element:DonateMedicineList },
  { path: '/theme/DonateMedicine/DonateCard1', name: 'DonateMedicine Card1', element:DonateMedicineCard1 },
  { path: '/theme/DonateMedicineList/DonateCard1List', name: 'DonateMedicine Card1 List', element:DonateMedicineCard1List },

  { path: '/theme/NGO/NGO', name: 'NGO', element:NGO},
  { path: '/theme/NGOList/NGOList', name: 'NGO List', element:NGOList },
  { path: '/theme/NGO/NGOCard1', name: 'NGO Card1', element:NGOCard1},
  { path: '/theme/NGOList/NGOCard1List', name: 'NGO Card1 List', element:NGOCard1List },
  { path: '/theme/NGO/NGOCard2', name: 'NGO Card2', element:NGOCard2},
  { path: '/theme/NGOList/NGOCard2List', name: 'NGO Card2 List', element:NGOCard2List },
  { path: '/theme/Blog/Blog', name: 'Blog', element:Blog},
  { path: '/theme/BlogList/BlogList', name: 'Blog List', element:BlogList },
  { path: '/theme/Blog/BlogCard', name: 'Blog Card', element:BlogCard},
  { path: '/theme/BlogList/BlogCardList', name: 'Blog Card List', element:BlogCardList },
  { path: '/theme/About/About', name: 'About', element:About},
  { path: '/theme/AboutList/AboutList', name: 'About List', element:AboutList },
  { path: '/theme/About/Mission', name: 'Mission', element:Mission},
  { path: '/theme/AboutList/MissionList', name: 'Mission List', element:MissionList },
  // { path: '/theme/About/AboutCard', name: 'About Card', element:AboutCard},
  // { path: '/theme/AboutList/AboutCardList', name: 'About Card List', element :AboutCardList },
  { path: '/theme/Contact/Contact', name: 'Contact', element:Contact},
  { path: '/theme/ContactList/ContactList', name: 'Contact List', element:ContactList },

  // editpages
  { path: '/EditPages/Home/EditHomeList/:id', name: 'Home List Edit', element:EditHomeList },
  { path: '/EditPages/Home/EditHomeCard1List/:id', name: 'Home List Edit', element:EditHomeCard1List },
  { path: '/EditPages/Home/EditHomeCard2List/:id', name: 'Home List Edit', element:EditHomeCard2List },
  { path: '/EditPages/Home/EditHomeCard3List/:id', name: 'Home List Edit', element:EditHomeCard3List },
  { path: '/EditPages/Home/EditHomeCard4List/:id', name: 'Home List Edit', element:EditHomeCard4List },

  { path: '/EditPages/Ngo/EditNgoList/:id', name: 'Ngo List Edit', element:EditNgoList },
  { path: '/EditPages/Ngo/EditNgoCard1List/:id', name: 'Ngo card1 List Edit', element:EditNgoCard1List },
  { path: '/EditPages/Ngo/EditNgoCard2List/:id', name: 'Ngo card2 List Edit', element:EditNgoCard2List },

  { path: '/EditPages/Blog/EditBlogList/:id', name: ' List Edit', element:EditBlogList },
  { path: '/EditPages/Blog/EditBlogCardList/:id', name: ' List Edit', element:EditBlogCardList },

  { path: '/EditPages/About/EditAboutList/:id', name: ' List Edit', element:EditAboutList },
  { path: '/EditPages/About/EditMission/:id', name: ' List Edit', element:EditMission },


  { path: '/EditPages/Contact/EditContact/:id', name: ' List Edit', element:EditContact },

  { path: '/EditPages/DonateMedicine/EditDonateMedicine/:id', name: ' List Edit', element:EditDonateMedicineList },
  { path: '/EditPages/DonateMedicine/EditDonateCard1/:id', name: ' List Edit', element:EditDonateCard1List },


]

export default routes
