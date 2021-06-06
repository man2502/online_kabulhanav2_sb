import React from 'react';


const MainPageContainer = React.lazy(()=> import('./views/mainPage/MainPageContainer'))
const CreditPageContainer = React.lazy(()=> import ('./views/creditPage/CreditPageContainer'))
const CardsPageContainer = React.lazy(()=> import ('./views/cardsPage/CardsContainer'))
const DocsPageContainer = React.lazy(()=> import ('./views/docsPage/DocsPageContainer'))
const LoginPageContainer  =React.lazy(()=> import ('./views/admin/login/LoginPageContainer'))
const ProfilePageContainer = React.lazy(()=> import ('./views/profilePage/ProfilePageContainer'))
const RegisterContainer = React.lazy(()=> import ('./views/admin/login/register/RegisterContainer'))
// const PublicPayContainer = React.lazy(()=> import('./views/publicPay/PublicPayContainer'))
const ResetPasswordContainer = React.lazy(()=> import ('./views/admin/login/ResetPassword/ResetPasswordContainer'))
const ChangePasswordContainer = React.lazy(()=> import ('./views/changePassword/ChangePasswordContainer'))
const FeedBackContainer =React.lazy(()=> import('./views/feedbackPage/FeedBackContainer'))
const ReceptionContainer = React.lazy(()=> import('./views/receptionPage/ReceptionContainer'))
const routes = [
  { path: '/', name: 'Giriş' ,exact:true},
  { path: '/main', name: 'Baş-sahypa', component: MainPageContainer,},
  { path: '/password/reset', name: 'Dikeltmek', component: ResetPasswordContainer,},
  { path: '/login', name: 'LoginPage', component: LoginPageContainer, exact: true},
  { path: '/register', name: 'Register', component: RegisterContainer,exact: true },
  { path: '/credit', name: 'Karz-bölümi', component: CreditPageContainer,exact: true },
  { path: '/cards', name: 'Kart-bölümi', component: CardsPageContainer,exact: true },
  { path: '/docs', name: 'Güwänamalar bölümi', component: DocsPageContainer,exact: true },
  { path: '/profile', name: 'Profile', component: ProfilePageContainer,exact: true },
  {path: '/feedback', name:'Arz - şikaýat',component: FeedBackContainer, exact:true},
  {path: '/reception', name:'Online - kabulhana',component: ReceptionContainer, exact:true},

  // {path:'/publicpay', name:'Jemagat-tölegi',component: PublicPayContainer, exact: true},
  {path:'/profile/changePassword', name:'Açary-üýtgetmek',component: ChangePasswordContainer, exact: true}

  
];

export default routes;
