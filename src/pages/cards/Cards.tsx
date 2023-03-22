import { IonContent, IonPage } from "@ionic/react";
import Header from "../../components/HeaderComponent";

const Cards: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding">
                <h1>Cards</h1>
            </IonContent>
        </IonPage>
    );
}

export default Cards;