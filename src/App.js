import './App.css';
import { ReactDOM } from 'react-dom';
import { BrowserRouter as Router,Routes, Route, Link, Switch } from 'react-router-dom';



import ProfessionalgetStarted from './Professional/getStarted.component';
import Professionalregister1 from './Professional/register1.component';
import Professionalregister2 from './Professional/register2.component';
import Professionallogin from './Professional/login.component';
import Professionalforgetpassword from './Professional/forgetpassword.component';
import Professionalverification from './Professional/verification.component';
import Professionalhome from './Professional/homePage.component';
import Professionallearning from './Professional/learning.component';
import Professionalinstructor from './Professional/instructor.component';
import ProfessionalcoursePurchase from './Professional/coursePurchase.component';
import Professionalaccount from './Professional/account.component';
import ProfessionalaboutUs from './Professional/aboutUs.component';
import Professionalprivacy from './Professional/privacyPolicy.component';
import Professionalsupport from './Professional/support.component';
import Professionalalbum from './Professional/album.component';
import Professionalwallet from './Professional/wallet.component';



import getStarted from './User/getStarted.component';
import register1 from './User/register1.component';
import register2 from './User/register2.component';
import login from './User/login.component';
import mobileLogin from './User/mobileLogin.component';
import forgetpassword from './User/forgetpassword.component';
import forgetpasswordOtp from './User/forgetPasswordOtp.component';
import changePass from './User/changePassword.component';
import verification from './User/verification.component';
import home from './User/homePage.component';
import learning from './User/learning.component';
import instructor from './User/instructor.component';
import coursePurchase from './User/coursePurchase.component';
import account from './User/account.component';
import aboutUs from './User/aboutUs.component';
import privacy from './User/privacyPolicy.component';
import support from './User/support.component';
import album from './User/album.component';
import landingPage from './User/LandingPage.component';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/dashboard" component={home} />
      <Route exact path="/getstarted" component={getStarted} />
      <Route exact path="/register1" component={register1} />
      <Route exact path="/register2" component={register2} />
      <Route exact path="/login" component={login} />
      <Route exact path="/mobile-login" component={mobileLogin} />
      <Route exact path="/forgetpassword" component={forgetpassword} />
      <Route exact path="/forgetpassword-otp" component={forgetpasswordOtp} />
      <Route exact path="/changePassword" component={changePass} />
      <Route exact path="/verification" component={verification} />
      <Route exact path="/learning" component={learning} />
      <Route exact path="/instructor" component={instructor} />
      <Route exact path="/coursePurchase" component={coursePurchase} />
      <Route exact path="/account" component={account} />
      <Route exact path="/aboutUs" component={aboutUs} />
      <Route exact path="/privacy" component={privacy} />
      <Route exact path="/support" component={support} />
      <Route exact path="/album" component={album} />
      <Route exact path="/" component={landingPage} />




      <Route exact path="/professional-getstarted" component={ProfessionalgetStarted} />
      <Route exact path="/professional-login" component={Professionallogin} />
      <Route exact path="/Professional-register1" component={Professionalregister1} />
      <Route exact path="/Professional-register2" component={Professionalregister2} />
      <Route exact path="/Professional-forgetpassword" component={Professionalforgetpassword} />
      <Route exact path="/Professional-verification" component={Professionalverification} />
      <Route exact path="/Professional-learning" component={Professionallearning} />
      <Route exact path="/Professional-instructor" component={Professionalinstructor} />
      <Route exact path="/Professional-coursePurchase" component={ProfessionalcoursePurchase} />
      <Route exact path="/Professional-account" component={Professionalaccount} />
      <Route exact path="/Professional-aboutUs" component={ProfessionalaboutUs} />
      <Route exact path="/Professional-privacy" component={Professionalprivacy} />
      <Route exact path="/Professional-support" component={Professionalsupport} />
      <Route exact path="/Professional-album" component={Professionalalbum} />
      <Route exact path="/Professional-home" component={Professionalhome} />
      <Route exact path="/Professional-wallet" component={Professionalwallet} />


    </Switch>
    </Router>
  );
}

export default App;
