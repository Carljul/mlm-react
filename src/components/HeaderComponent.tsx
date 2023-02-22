import { IonButton, IonButtons, IonHeader, IonIcon, IonLabel, IonTitle, IonToolbar } from '@ionic/react';
import { cartOutline, personOutline, heartOutline } from 'ionicons/icons';

const Header: React.FC = () => {
  return (
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <IonIcon icon={personOutline} />
            <IonLabel>Guest</IonLabel>
          </IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/app/cart">
              <IonIcon icon={heartOutline} />
            </IonButton>
            <IonButton routerLink="/app/cart">
              <IonIcon icon={cartOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
  );
};

export default Header;
