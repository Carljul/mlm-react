import { IonCol, IonContent, IonGrid, IonPage, IonRow, IonSelect, IonSelectOption} from '@ionic/react';
import Header from '../../../components/HeaderComponent';


const Details: React.FC = () => {
  return (
    <IonPage>
        <Header/>
        <IonContent fullscreen>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <h1 className='center bold'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonSelect placeholder='Select Size' className='variationDropdown'>
                    <IonSelectOption value='extra_small'>XS</IonSelectOption>
                    <IonSelectOption value='small'>S</IonSelectOption>
                    <IonSelectOption value='medium'>M</IonSelectOption>
                    <IonSelectOption value='large'>L</IonSelectOption>
                    <IonSelectOption value='extra_large'>XL</IonSelectOption>
                    <IonSelectOption value='double_extra_large'>XL</IonSelectOption>
                  </IonSelect>
                </IonCol>
                <IonCol>
                  <IonSelect placeholder='Select Size' className='variationDropdown'>
                    <IonSelectOption value='extra_small'>XS</IonSelectOption>
                    <IonSelectOption value='small'>S</IonSelectOption>
                    <IonSelectOption value='medium'>M</IonSelectOption>
                    <IonSelectOption value='large'>L</IonSelectOption>
                    <IonSelectOption value='extra_large'>XL</IonSelectOption>
                    <IonSelectOption value='double_extra_large'>XL</IonSelectOption>
                  </IonSelect>
                </IonCol>
              </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
  );
};

export default Details;
