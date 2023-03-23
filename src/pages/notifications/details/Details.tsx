import { IonContent, IonPage } from "@ionic/react";
import Header from "../../../components/HeaderComponent";

const Details: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding">
                <h1>Notification Details</h1>
            </IonContent>
        </IonPage>
    );
}

export default Details;