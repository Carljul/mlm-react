import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { chevronBack } from 'ionicons/icons';
import Header from '../../components/HeaderComponent';
import ShippingAddress from '../../components/ShippingAddressComponent';

const Shipping: React.FC = () => {
  const toAccountNavigation = useIonRouter();

  const goToAccount = () => {
    toAccountNavigation.push('/app/account', 'root', 'replace');
  }

  return (
    <IonPage>
        <Header />
        <IonContent className='ion-padding'>
            <IonGrid>
              <h3>
                <IonRow>
                  <IonCol size='1'>
                    <IonIcon icon={chevronBack} onClick={goToAccount}></IonIcon>
                  </IonCol>
                  <IonCol className='center'>
                    <IonLabel>Shipping Address</IonLabel>
                  </IonCol>
                </IonRow>
              </h3>
              <IonRow>
                <IonCol>
                  <IonRadioGroup>
                    <IonList>
                      <ShippingAddress
                        id={1}
                        value={1}
                        name="EPA Home"
                        address='A-127, Mittal Paradise, Shivalik City, Sahibzada Ajit Singh Nagar, Punjab 140301'
                      />
                      <ShippingAddress
                        id={2}
                        value={2}
                        name="Work Address"
                        address='A-127, Mittal Paradise, Shivalik City, Sahibzada Ajit Singh Nagar, Punjab 140301'
                      />
                    </IonList>
                  </IonRadioGroup>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonButton className='newShippingAddress' color='success'>
              New
            </IonButton>
        </IonContent>
    </IonPage>
  );
};

export default Shipping;
