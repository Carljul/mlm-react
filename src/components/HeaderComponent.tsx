import { IonBadge, IonButton, IonButtons, IonHeader, IonLabel, IonTitle, IonToolbar } from '@ionic/react';
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { ContextProvider, useStateContext } from '../provider/ContextProvider';
import CartClass from '../models/Cart';

const Header: React.FC = () => {
  const { user } = useStateContext();
  const cart = new CartClass();
  let cartCount = cart.cartCount();

  return (
      <IonHeader>
        <IonToolbar className='epa-toolbar'>
          <IonTitle>
            <ContextProvider>
              <div className="d-flex center-align">
                { user ? <img src={user.profile_image ?? ''} className='avatar'/> : <RxPerson className='navigation-icon'/> }
                <IonLabel>{ user ? user.name : 'Guests'}</IonLabel>
              </div>
            </ContextProvider>
          </IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/app/wishlist">
              <AiOutlineHeart className='navigation-icon'/>
            </IonButton>
            <IonButton routerLink="/app/cart">
              <FiShoppingCart className='navigation-icon'/>
              {cartCount > 0 ? <IonBadge slot='end' color='danger' className='badgeNotification'>{cartCount}</IonBadge>:<></>}
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
  );
};

export default Header;
