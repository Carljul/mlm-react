import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../../components/HeaderComponent';

const Shipping: React.FC = () => {
  return (
    <IonPage>
        <Header />
        <IonContent fullscreen>
            <p>Shipping Form</p>
        </IonContent>
    </IonPage>
  );
};

export default Shipping;
