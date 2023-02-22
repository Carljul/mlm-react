import {
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs
} from '@ionic/react';
  
import { Route, Redirect } from 'react-router-dom';
import Home from './home/Home';
import Cart from './cart/Cart';
import Categories from './categories/Categories';
import Orders from './orders/Orders';
import Account from './account/Account';
import { homeOutline, gridOutline, cartOutline, receiptOutline, personOutline } from 'ionicons/icons';
  
const Navigation: React.FC = () => {
    return (
        <IonTabs>
            {/* Routes */}
            <IonRouterOutlet>
                <Route path="/app/home" component={Home} />
                <Route path="/app/categories" component={Categories} />
                <Route path="/app/cart" component={Cart} />
                <Route path="/app/orders" component={Orders} />
                <Route path="/app/account" component={Account} />
                <Route exact path="/app">
                    <Redirect to="/app/home" />
                </Route>
            </IonRouterOutlet>

            {/* Tab Bar */}
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/app/home">
                    <IonIcon icon={homeOutline}></IonIcon>
                    <IonLabel>Home</IonLabel>
                </IonTabButton>

                <IonTabButton tab="categories" href="/app/categories">
                    <IonIcon icon={gridOutline}></IonIcon>
                    <IonLabel>Categories</IonLabel>
                </IonTabButton>

                <IonTabButton tab="cart" href="/app/cart">
                    <IonIcon icon={cartOutline}></IonIcon>
                    <IonLabel>Cart</IonLabel>
                </IonTabButton>

                <IonTabButton tab="orders" href="/app/orders">
                    <IonIcon icon={receiptOutline}></IonIcon>
                    <IonLabel>Orders</IonLabel>
                </IonTabButton>

                <IonTabButton tab="account" href="/app/account">
                    <IonIcon icon={personOutline}></IonIcon>
                    <IonLabel>Account</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default Navigation;
  