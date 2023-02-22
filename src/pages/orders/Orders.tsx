import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../../components/HeaderComponent';

const Orders: React.FC = () => {
  return (
    <IonPage>
        <Header />
        <IonContent fullscreen>
            <p>Orders Testing</p>
        </IonContent>
    </IonPage>
  );
};

export default Orders;
