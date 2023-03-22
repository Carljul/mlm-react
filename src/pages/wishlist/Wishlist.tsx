import { IonContent, IonPage } from "@ionic/react";
import Header from "../../components/HeaderComponent";

const Wishlist: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding">
                <h1>Wishlist</h1>
            </IonContent>
        </IonPage>
    );
}

export default Wishlist;