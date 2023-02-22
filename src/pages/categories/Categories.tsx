import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../../components/HeaderComponent';

const Categories: React.FC = () => {
  return (
    <IonPage>
        <Header />
        <IonContent fullscreen>
            <p>Categories Testing</p>
        </IonContent>
    </IonPage>
  );
};

export default Categories;
