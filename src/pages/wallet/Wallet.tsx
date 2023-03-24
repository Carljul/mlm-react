import { IonContent, IonPage } from "@ionic/react";
import Header from "../../components/HeaderComponent";

const Wallet: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding">
                <h1>Wallet</h1>
            </IonContent>
        </IonPage>
    );
}

export default Wallet;