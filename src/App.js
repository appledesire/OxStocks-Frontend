import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './components/home/Dashboard';
import Crypto from './components/home/Crypto';
import Aboutus from './components/home/Aboutus';
import Contactus from './components/home/Contactus';
import Oxlabs from './components/home/Oxlabs';
import Oxschools from './components/home/Oxschool';
import Roadmap from './components/home/Roadmap';
import Oxchain from './components/home/Oxchain';
import Footer from './components/include/Footer';
import Terms from './components/home/Footer/Terms';
import Privacy from './components/home/Footer/Privacy';
// market
import Marketplace from './components/home/marketplace/Marketplace';
import MarketplaceDetail from "./components/home/marketplace/Marketplace_detail";
import MarketplaceCategory from './components/home/marketplace/Marketplace_category';
// market
// mining
import Oxmining from './components/home/Oxmining';
// mining
// Oxcoin
import Oxcoin from './components/home/Oxcoin';
// Location
import Location from './components/home/Location';
// Location
//auth
import Login from './components/auth/Login';
import Register from './components/auth/Register';
//auth
//Wallet
import Wallet from './components/home/Wallet';
import Oxworld from './components/home/Oxworld';
//news
import News from './components/home/news/News';
import Detail from './components/home/news/Detail';

import { Provider } from 'react-redux';
import store from './store';


import { LOGOUT } from './actions/types';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import Referral from "./components/home/Referral";
import Partnerships from "./components/home/Partnerships";
//account
import AccountDash from './components/home/account/Dashboard';
import AccountExchange from './components/home/account/Exchange';
import AccountNFT from './components/home/account/NFT';
import AccountWallet from './components/home/account/Wallet';
import AccountProfile from './components/home/account/Profile';

//forget password
import ForgetPassword from './components/home/forget_pass/ForgetPassword';
import OTP from './components/home/forget_pass/OTP';
import ResetPassword from './components/home/forget_pass/ResetPassword';

import Connect from './components/home/Connect';

// import PrivateRoute from './components/routing/PrivateRoute';

import './App.css';

const App = () => {

    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
    return (
      <Provider store={store}>
        <Router>
            <Routes>
              <Route exact path="/" element={ <Dashboard /> } />
              <Route exact path="/dashboard" element={ <Dashboard /> } />
              <Route exact path="/ERC20Crypto" element={ <Crypto /> } />
              <Route exact path="/aboutus" element={ <Aboutus /> } />
              <Route exact path="/contactus" element={ <Contactus /> } />
              <Route exact path="/oxlabs" element={ <Oxlabs /> } />
              <Route exact path="/oxschools" element={ <Oxschools /> } />
              <Route exact path="/roadmap" element={ <Roadmap /> } />
              <Route exact path="/oxchain" element={ <Oxchain /> } />
              <Route exact path="/terms" element={ <Terms /> } />
              <Route exact path="/privacy" element={ <Privacy /> } />
              <Route exact path="/login" element={ <Login /> } />
              <Route exact path="/register" element={ <Register /> } />
              <Route exact path="/marketplace" element={ <Marketplace /> } />
              <Route exact path="/marketplaceDetail" element={ <MarketplaceDetail /> } />
              <Route exact path="/marketplaceCategory" element={ <MarketplaceCategory /> } />
              <Route exact path="/location" element={ <Location /> } />
              <Route exact path="/oxmining" element={ <Oxmining /> } /> 
              <Route exact path="/oxcoin" element={ <Oxcoin /> } /> 
              <Route exact path="/wallet" element={ <Wallet /> } /> 
              <Route exact path="/oxworld" element={ <Oxworld /> } /> 
              <Route exact path="/news" element={ <News /> } /> 
              <Route exact path="/news/:id" element={ <Detail /> } /> 
              
              <Route exact path="/referral" element={ <Referral /> } />
              <Route exact path="/partnerships" element={ <Partnerships /> } />
              <Route exact path="/account/dashboard" element={ <AccountDash /> } />
              <Route exact path="/account/exchange" element={ <AccountExchange /> } />
              <Route exact path="/account/nft" element={ <AccountNFT /> } />
              <Route exact path="/account/wallet" element={ <AccountWallet /> } />
              <Route exact path="/account/profile" element={ <AccountProfile /> } />

              <Route exact path="/forgetpassword" element={ <ForgetPassword /> } />
              <Route exact path="/OTP" element={ <OTP /> } />
              <Route exact path="/resetpassword" element={ <ResetPassword /> } />
              
              <Route exact path="/connect" element={ <Connect /> } />
            </Routes>
            <Footer />
        </Router>
      </Provider>
    )
}

export default App;