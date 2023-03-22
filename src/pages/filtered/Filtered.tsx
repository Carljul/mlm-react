import { IonContent, IonPage } from "@ionic/react"
import Header from "../../components/HeaderComponent"

const Filtered: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding">
                <h1>Filtered Product</h1>
            </IonContent>
        </IonPage>
    )
}

export default Filtered;