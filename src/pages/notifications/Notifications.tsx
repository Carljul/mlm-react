import { IonContent, IonPage } from "@ionic/react"
import Header from "../../components/HeaderComponent"
import NotificationCards from "../../components/Notifications/NotificationCards";
import NotificationClass from "../../models/Notifications";

const Notifications: React.FC = () => {
    const notification = new NotificationClass();
    const notifications = notification.notificationList();
    
    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding">
                {
                    notifications.map((item, value) => (
                        <NotificationCards key={value}
                            id = {item.id}
                            status = {notification.getStatusString(item.status)}
                            date = {item.date.toDateString()}
                            title = {item.notificaiton_title}
                            description = {item.description}
                            img = {item.img}
                            product_name = {item.product_name}
                        />
                    ))
                }
            </IonContent>
        </IonPage>
    )
}

export default Notifications;