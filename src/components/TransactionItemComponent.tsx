import { IonAvatar, IonItem, IonLabel, useIonRouter } from "@ionic/react";
import '../css/TransactionItemComponent.modules.css';

interface TransactionItemProps {
    id: number,
    img?: string | null,
    name: string, 
    datetime: string,
    amount: string,
    transaction?: string | "success"
}

const TransactionItemComponent: React.FC<TransactionItemProps> = (props: TransactionItemProps) => {
    const navigation = useIonRouter();

    const viewHistory = (idToVisit: number) => {
        navigation.push('/app/order/'+idToVisit, 'root', 'replace');
    }

    return (        
        <IonItem button className='transactionItems transparent-bg' onClick={() => {viewHistory(props.id)}}>
            {
                props.img == null ?
                <div className="transactionCircle ion-color-success"></div>
                :
                <IonAvatar slot='start'>
                    <img src={props.img} alt="Nathaniel" />
                </IonAvatar>
            }
            <div className="d-block">
                <IonLabel className='transactionName'>{props.name}</IonLabel>
                <span className='transactionDateTime'>{props.datetime}</span>
            </div>
            <IonLabel slot='end' color={props.transaction} className='transactionAmount'>
                {props.amount}
            </IonLabel>
        </IonItem>
    );
}

export default TransactionItemComponent;