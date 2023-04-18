import { IonAvatar, IonItem, IonLabel, useIonRouter } from "@ionic/react";
import '../css/TransactionItemComponent.modules.css';
import { TransactionItemProps } from "../models/Transactions";
import TransactionClass from "../models/Transactions";


const TransactionItemComponent: React.FC<TransactionItemProps> = (props: TransactionItemProps) => {
    const navigation = useIonRouter();
    const transactionClass = new TransactionClass();

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
                <span className='transactionDateTime'>{props.datetime.toDateString()}</span>
            </div>
            <IonLabel slot='end' color={transactionClass.getStatusString(props.status)} className='transactionAmount'>
                {props.amount}
            </IonLabel>
        </IonItem>
    );
}

export default TransactionItemComponent;