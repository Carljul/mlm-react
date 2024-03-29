import {
    IonBadge,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';

// Icons
import { BiHomeAlt } from "react-icons/bi";
import { RxPerson } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { HiOutlineViewGrid } from "react-icons/hi";

// Pages
import Home from './home/Home';
import Cart from './cart/Cart';
import Categories from './categories/Categories';
import Orders from './orders/Orders';
import Account from './account/Account';
import ProductDetails from './item/details/Details';
import Shipping from './address/Shipping';
import Wishlist from './wishlist/Wishlist';
import Track from './orders/track/Track';
import Cards from './cards/Cards';
import Notifications from './notifications/Notifications';
import OrderDetails from './orders/details/Details';
import Review from './item/review/Review';
import Filtered from './filtered/Filtered';
import NotificationDetails from './notifications/details/Details';
import Profile from './profile/Profile';
import Wallet from './wallet/Wallet';
import Genealogy from './genealogy/Genealogy';
import AddCards from './cards/AddCard';
  
const Navigation: React.FC = () => {
    return (
        <IonTabs>
            {/* Routes */}
            <IonRouterOutlet>
                <Route path="/" component={Home}/>

                <Route path="/app/home" component={Home} />
                <Route path={`/app/product/details/:id`} component={ProductDetails} />
                <Route path={`/app/review/:id`} component={Review} />
                <Route path={`/app/product/filtered/:filter`} component={Filtered} />
                <Route path="/app/profile" component={Profile} />

                <Route path="/app/categories" component={Categories} />
                <Route path="/app/cart" component={Cart} />
                <Route path="/app/orders" component={Orders} />
                <Route path={`/app/order/:id`} component={OrderDetails} />
                <Route path="/app/account" component={Account} />
                
                <Route path="/app/shipping" component={Shipping} />
                <Route path="/app/wishlist" component={Wishlist} />
                <Route path="/app/track/orders" component={Track} />

                <Route path="/app/cards" component={Cards} />
                <Route path="/app/card/add" component={AddCards} />

                <Route path="/app/wallet" component={Wallet} />
                <Route path="/app/genealogy" component={Genealogy} />
                <Route path="/app/notifications" component={Notifications} />
                <Route path="/app/notification/details/:id" component={NotificationDetails} />
                <Route exact path="/app">
                    <Redirect to="/app/home" />
                </Route>
            </IonRouterOutlet>

            {/* Tab Bar */}
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/app/home">
                    <BiHomeAlt className='navigation-icon'/>
                    <IonLabel>Home</IonLabel>
                </IonTabButton>

                <IonTabButton tab="categories" href="/app/categories">
                    <HiOutlineViewGrid className='navigation-icon'/>
                    <IonLabel>Categories</IonLabel>
                </IonTabButton>

                <IonTabButton tab="cart" href="/app/cart">
                    <FiShoppingCart className='navigation-icon'/>
                    <IonLabel>Cart <IonBadge slot='end' color='danger' className='badgeNotification float'>11</IonBadge></IonLabel>
                </IonTabButton>

                <IonTabButton tab="orders" href="/app/orders">
                    <RiShoppingBag3Line className='navigation-icon'/>
                    <IonLabel>Orders</IonLabel>
                </IonTabButton>

                <IonTabButton tab="account" href="/app/account">
                    <RxPerson className='navigation-icon'/>
                    <IonLabel>Account</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default Navigation;
  