import { IonContent, IonPage } from "@ionic/react"
import Header from "../../components/HeaderComponent"

const Notifications: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding">
                <h1>Notifications</h1>
            </IonContent>
        </IonPage>
    )
}

export default Notifications;