import { IonContent, IonPage } from "@ionic/react"
import Header from "../../../components/HeaderComponent"

const Review: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding">
                <h1>Review Product</h1>
            </IonContent>
        </IonPage>
    )
}

export default Review;