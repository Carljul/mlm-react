import { IonButton, IonCol, IonContent, IonLabel, IonList, IonPage, IonRow } from '@ionic/react';
import CartItemComponent from '../../components/CartItemComponent';
import Header from '../../components/HeaderComponent';

const Cart: React.FC = () => {
  return (
    <IonPage>
        <Header />
        <IonContent className='ion-padding'>
            {/* Cart List */}
            <IonList>
              <CartItemComponent />
              <CartItemComponent />
              <CartItemComponent />
              <CartItemComponent />
              <CartItemComponent />
              <CartItemComponent />
              <CartItemComponent />
            </IonList>

            {/* Checkout */}
            <div className="checkoutContainer">
              <IonRow>
                <IonCol>
                  <div className="center center-align">
                    <IonLabel>Price</IonLabel>
                    <br />
                    <IonLabel color='success'>$100.59</IonLabel>
                  </div>
                </IonCol>
                <IonCol>
                  <IonButton color='success' className='checkoutButton'>CHECKOUT</IonButton>
                </IonCol>
              </IonRow>
            </div>
        </IonContent>
    </IonPage>
  );
};

export default Cart;
