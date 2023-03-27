import { IonContent, IonPage } from "@ionic/react"
import Header from "../../components/HeaderComponent"
import NotificationCards from "../../components/Notifications/NotificationCards";

const Notifications: React.FC = () => {
    const notifications = [{
        id: 1,
        status: 'Delivered',
        product_name: 'Some Item',
        date: '06/23/2023',
        title: 'Your Parcel has been delivered',
        description: `<span>Order # 6123987215489213</span>
        <br />
        <span>Tracking # MP243234</span>`,
        img: "https://ionicframework.com/docs/img/demos/avatar.svg"
    },{
        id: 2,
        status: 'Pending',
        date: '02/23/2023',
        product_name: 'Some Item',
        title: 'Your Parcel is pending',
        description: `<span>Order # 6123987215489213</span>
        <br />
        <span>Tracking # MP243234</span>`,
        img: "https://ionicframework.com/docs/img/demos/avatar.svg"
    }];
    return (
        <IonPage>
            <Header />
            <IonContent className="ion-padding">
                {
                    notifications.map((item, value) => (
                        <NotificationCards key={value}
                            id = {item.id}
                            status = {item.status}
                            date = {item.date}
                            title = {item.title}
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