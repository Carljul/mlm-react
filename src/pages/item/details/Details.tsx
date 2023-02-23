import { IonContent, IonPage} from '@ionic/react';
import Header from '../../../components/HeaderComponent';


const Details: React.FC = () => {
  return (
    <IonPage>
        <Header/>
        <IonContent fullscreen>
            <p>Item Details</p>
        </IonContent>
    </IonPage>
  );
};

export default Details;
