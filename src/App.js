import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Brands from "./components/Menu/ThirdMenu/Brands";
import Clothing from "./components/Menu/ThirdMenu/Clothing";
import Dresses from "./components/Menu/ThirdMenu/Dresses";
import WomanScreen from "./components/women/WomanScreen";
import MenScreen from "./components/men/MenScreen";
import KidsScreen from "./components/kids/KidsScreen";
import FitnessScreen from "./components/fitness/FitnessScreen";

import Home from "./components/Menu/ThirdMenu/Home";
import ToggleNav from "./components/ToggleNav";
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import Account from './pages/myaccount/Account'
import AccountOrders from './pages/myaccount/AccountOrders'
import MyDetails from './pages/myaccount/MyDetails'
import Address from './pages/myaccount/Address'
import Payment from './pages/myaccount/Payment'
import SocialAccount from './pages/myaccount/SocialAccounts'
import ContactPreferences from './pages/myaccount/ContactPreferences'
import Reuseable from "./components/Product/Reuseable";

function App() {
  return (
    <div className="App">
      <Router>
        <ToggleNav />
        <Switch>
          {/* Auth */}
          <Route path="/auth/signIn" component={SignIn} />
          <Route path="/auth/signUp" component={SignUp} />

          <Route path={"/my-account"} component={Account}></Route>

          <Route path="/" exact component={Home}></Route>
          <Route path="/brand" exact component={Brands}></Route>
          <Route path="/cloth" exact component={Clothing}></Route>
          <Route path="/dress" exact component={Dresses}></Route>
          <Route path="/women" exact component={WomanScreen}></Route>
          <Route path="/men" exact component={MenScreen}></Route>
          <Route path="/kid" exact component={KidsScreen}></Route>
          <Route path="/fitness" exact component={FitnessScreen}></Route>
          <Route path="/reuse" exact component={Reuseable}></Route>


		    {/* Account Routes */}
			<Route path={'/my-account/orders'} component={AccountOrders} />
        <Route path={'/my-account/my-details'} component={MyDetails} />
        <Route path={'/my-account/addresses'} component={Address} />
        <Route path={'/my-account/payment-methods'} component={Payment} />
        <Route path={'/my-account/contact-preferences'} component={ContactPreferences} />
        <Route path={'/my-account/social-accounts'} component={SocialAccount} />
        

        <Route exact path='*'>
          Page Not Found
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
