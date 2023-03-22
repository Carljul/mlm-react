import { IonContent, IonPage } from "@ionic/react";
import Header from "../../../components/HeaderComponent";

const Track: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding">
                <h1>Track Orders</h1>
            </IonContent>
        </IonPage>
    );
}

export default Track;