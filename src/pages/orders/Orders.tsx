import { IonCol, IonContent, IonGrid, IonLabel, IonList, IonPage, IonRow } from '@ionic/react';
import { TbSquareRoundedArrowDown } from 'react-icons/tb';
import Header from '../../components/HeaderComponent';
import TransactionItemComponent from '../../components/TransactionItemComponent';
import TransactionClass from '../../models/Transactions';


const Orders: React.FC = () => {
  const transactionClass = new TransactionClass();
  return (
    <IonPage>
        <Header />
        <IonContent color="light" className='ion-padding'>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonLabel color='success'>Balance: </IonLabel>
                  <IonLabel color='success' className='walletBalance'>$98.5</IonLabel>
                </IonCol>
                <IonCol>
                  <TbSquareRoundedArrowDown className='success orders-arrow-icon' />
                </IonCol>
              </IonRow>
            </IonGrid>
            
            <IonList className='transparent-bg'>
              {
                transactionClass.transactionList().map((item, index) => (
                    <TransactionItemComponent key={index}
                      id={item.id}
                      name={item.name}
                      datetime={item.datetime}
                      amount={item.amount}
                      status={item.status}
                      img={item.img}
                    />
                ))
              }
            </IonList>
        </IonContent>
    </IonPage>
  );
};

export default Orders;
