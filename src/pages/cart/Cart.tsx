import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../../components/HeaderComponent';

const Cart: React.FC = () => {
  return (
    <IonPage>
        <Header />
        <IonContent fullscreen>
            <p>Cart Testing</p>
        </IonContent>
    </IonPage>
  );
};

export default Cart;
