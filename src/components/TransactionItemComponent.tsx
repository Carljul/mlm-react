import { IonAvatar, IonItem, IonLabel } from "@ionic/react";

interface TransactionItemProps {
    id: number,
    img?: string | null,
    name: string, 
    datetime: string,
    amount: string,
    transaction: string
}

const TransactionItemComponent: React.FC<TransactionItemProps> = ({
    id,
    img,
    name,
    datetime,
    amount,
    transaction = "success"
}) => {

    return (        
        <IonItem button className='transactionItems'>
            {
                img == null ?
                <div className="transactionCircle ion-color-success"></div>
                :
                <IonAvatar slot='start'>
                    <img src={img} alt="Nathaniel" />
                </IonAvatar>
            }
            <div className="d-block">
                <IonLabel className='transactionName'>{name}</IonLabel>
                <span className='transactionDateTime'>{datetime}</span>
            </div>
            <IonLabel slot='end' color={transaction} className='transactionAmount'>
                {amount}
            </IonLabel>
        </IonItem>
    );
}

export default TransactionItemComponent;