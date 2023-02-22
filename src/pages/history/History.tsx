import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../../components/HeaderComponent';

const History: React.FC = () => {
  return (
    <IonPage>
        <Header />
        <IonContent fullscreen>
            <p>History Form</p>
        </IonContent>
    </IonPage>
  );
};

export default History;
