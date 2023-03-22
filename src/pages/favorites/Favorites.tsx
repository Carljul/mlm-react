import { IonContent, IonPage } from "@ionic/react";
import Header from "../../components/HeaderComponent";

const Favorites: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent className='ion-padding'>
                <h1>Favorites</h1>
            </IonContent>
        </IonPage>
    );
}

export default Favorites;