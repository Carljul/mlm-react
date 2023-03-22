import { IonContent, IonPage } from "@ionic/react";
import Header from "../../components/HeaderComponent";

const Profile: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding">
                <h1>Profile</h1>
            </IonContent>
        </IonPage>
    );
}

export default Profile;