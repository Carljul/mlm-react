import { IonButton, IonCol, IonContent, IonLabel, IonList, IonPage, IonRow } from '@ionic/react';
import CartItemComponent from '../../components/CartItemComponent';
import Header from '../../components/HeaderComponent';
import carts from '../../models/Cart';

const Cart: React.FC = () => {
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
                    name={items.name}
                    img={items.img}
                    quantity={items.quantity}
                    price={items.price}
                    description={items.description}
                  />
                ))
              }
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
