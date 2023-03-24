import { IonContent, IonPage } from "@ionic/react";
import Header from "../../components/HeaderComponent";

const Genealogy: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding">
                <h1>Genealogy</h1>
            </IonContent>
        </IonPage>
    );
}

export default Genealogy;