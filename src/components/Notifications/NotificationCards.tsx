import { IonAvatar, IonCard, IonCardContent, IonItem, IonLabel } from "@ionic/react"
import { Link } from "react-router-dom"

interface NotificationCardProps {
    id: number,
    status: string,
    date: string,
    product_name: string,
    title: string,
    description: string,
    img: string
}
const NotificationCards: React.FC<NotificationCardProps> = (props: NotificationCardProps) => {
    return (
        <Link to={`/app/notification/`+props.id} style={{textDecoration: 'none'}}>
            <IonCard>
                <IonCardContent>
                    <div className="d-flex space-between">
                        <IonLabel>{props.status}</IonLabel>
                        <IonLabel>{props.date}</IonLabel>
                    </div>
                    <IonItem>
                        <IonAvatar slot="start">
                            <img alt={props.product_name} src={props.img} />
                        </IonAvatar>
                        <IonLabel>
                            <div className="title">
                                {props.title}
                            </div>
                            <div className="description" dangerouslySetInnerHTML={{__html: props.description}}>                                
                            </div>
                        </IonLabel>
                    </IonItem>
                </IonCardContent>
            </IonCard>
        </Link>
    );
}

export default NotificationCards;