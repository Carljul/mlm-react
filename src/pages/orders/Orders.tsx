import { IonCol, IonContent, IonGrid, IonLabel, IonList, IonPage, IonRow } from '@ionic/react';
import { TbSquareRoundedArrowDown } from 'react-icons/tb';
import Header from '../../components/HeaderComponent';
import TransactionItemComponent from '../../components/TransactionItemComponent';
import manCategory from '../../assets/img/men_category.jpg';

const Orders: React.FC = () => {
  const transactions = [{
      id: 1,
      img: manCategory,
      name: 'Nathaniel', 
      datetime: '19 Jan 2023 05:30 pm',
      amount: '$15.00',
      transaction: 'success'
  },{
      id: 2,
      img: null,
      name: 'Ordered Potato', 
      datetime: '19 Jan 2023 05:30 pm',
      amount: '$5.00',
      transaction: 'danger'
  },{
      id: 3,
      img: null,
      name: 'Ordered Potato', 
      datetime: '19 Jan 2023 05:30 pm',
      amount: '$5.00',
      transaction: 'danger'
  },{
    id: 4,
    img: manCategory,
    name: 'Nathaniel', 
    datetime: '19 Jan 2023 05:30 pm',
    amount: '$15.00',
    transaction: 'success'
  }];


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
                transactions.map((item, index) => (
                    <TransactionItemComponent key={index}
                      id={item.id}
                      name={item.name}
                      datetime={item.datetime}
                      amount={item.amount}
                      transaction={item.transaction}
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
