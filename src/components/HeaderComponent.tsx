import { IonBadge, IonButton, IonButtons, IonHeader, IonLabel, IonTitle, IonToolbar } from '@ionic/react';
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";

const Header: React.FC = () => {
  return (
      <IonHeader>
        <IonToolbar className='epa-toolbar'>
          <IonTitle>
            <div className="d-flex">
              <RxPerson className='navigation-icon'/>
              <IonLabel>Guest</IonLabel>
            </div>
          </IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/app/wishlist">
              <AiOutlineHeart className='navigation-icon'/>
            </IonButton>
            <IonButton routerLink="/app/cart">
              <FiShoppingCart className='navigation-icon'/>
              <IonBadge slot='end' color='danger' className='badgeNotification'>11</IonBadge>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
  );
};

export default Header;
