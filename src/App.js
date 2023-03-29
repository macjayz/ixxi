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
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Account from "./pages/account/Account";
import Address from "./pages/account/Address";
import SocialAccount from "./pages/account/SocialAccount";
import Reuseable from "./components/Product/Reuseable";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";

import AccountLayout from './layouts/AccountLayout'
import BiillingAddress from './pages/account/BiillingAddress'
import ShippingAddress from './pages/account/ShippingAddress'
import AccountDetails from './pages/account/AccountDetails'
import Orders from './pages/account/Orders'
import GiftVouchers from './pages/account/GiftVouchers'
import OrderItem from './pages/account/OrderItem'


function App() {
  return (
    <div className="App">
      <Router>
        <ToggleNav />
        <Switch>
          {/* Auth */}
          <Route path="/signIn" component={SignIn} />
          <Route path="/signUp" component={SignUp} />


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
          <Route path={'/my-account'}>
          <AccountLayout>
          <Route exact path={'/my-account'} component={Account} />
            <Route exact path={'/my-account/addresses'} >
                <Address />
            </Route>
            <Route exact path={'/my-account/addresses/edit-address/billing'} component={BiillingAddress} />
            <Route exact path={'/my-account/addresses/edit-address/shipping'} component={ShippingAddress} />
            <Route path={'/my-account/my-details'} component={AccountDetails} />
            <Route exact path={'/my-account/orders'} component={Orders} />
            <Route path={'/my-account/orders/:id'} component={OrderItem} />
            <Route exact path={'/my-account/social-accounts'} component={SocialAccount} />
            <Route exact path={'/my-account/gift-cards-and-vouchers'} component={GiftVouchers} />
          </AccountLayout>
        </Route>
            <Route exact path='/wishlist' component={WishList} />
            <Route exact path='/cart' component={Cart} />

          <Route exact path="*">
            Page Not Found
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
