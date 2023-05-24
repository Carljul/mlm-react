import { IonButton, IonCol, IonContent, IonLabel, IonList, IonPage, IonRow, useIonAlert } from '@ionic/react';
import CartItemComponent from '../../components/CartItemComponent';
import Header from '../../components/HeaderComponent';
import CartClass from '../../models/Cart';
import { useStateContext } from '../../provider/ContextProvider';
import { useHistory } from 'react-router';

const Cart: React.FC = () => {
  let cartsClass = new CartClass();
  let carts = cartsClass.cartList();
  const navigation = useHistory();
  const {user} = useStateContext();
  const [alertCheckout] = useIonAlert();

  const doCheckout = (event: React.KeyboardEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (user) {
      alertCheckout({
        header: 'Oh oh!',
        message: 'Sorry! Checkout page is not ready yet',
        buttons: ['OK']
      })
    } else {
      alertCheckout({
        header: 'Please create account or login first',
        message: 'You will be redirected to login page',
        buttons: ['OK'],
        onDidDismiss(event) {
          navigation.replace('/login', 'root');
        },
      })
    }
  }

  return (
    <IonPage>
        <Header />
        <IonContent className='ion-padding'>
            {/* Cart List */}
            <IonList>
              {
                carts.map((items, value) => (
                  <CartItemComponent 
                    key={value}
                    id={items.id}
                    quantity={items.quantity}
                    product={items.product}
                  />
                ))
              }
            </IonList>

            {/* Checkout */}
            <div className="checkoutContainer">
              <form onSubmit={doCheckout}>
                <IonRow>
                  <IonCol>
                    <div className="center center-align">
                      <IonLabel>Price</IonLabel>
                      <br />
                      <IonLabel color='success'>{cartsClass.showTotal()}</IonLabel>
                    </div>
                  </IonCol>
                  <IonCol>
                    <IonButton color='success' className='checkoutButton' type='submit'>CHECKOUT</IonButton>
                  </IonCol>
                </IonRow>
              </form>
            </div>
        </IonContent>
    </IonPage>
  );
};

export default Cart;
