import {IonRow, IonCol, IonIcon, IonLabel} from '@ionic/react';
import {cashOutline, boatOutline, personOutline} from 'ionicons/icons'

const FilterComponent: React.FC = () => {
    return (
        <IonRow className='filterRow'>
            <IonCol>
              <IonRow className="withWhiteLine h-100 center-align">
                <IonCol size='3' className='mr-1 p-0'>
                  <IonIcon icon={cashOutline} size="large"></IonIcon>
                </IonCol>
                <IonCol>
                  <IonLabel className='filterLabel'>Cash on <br /> Delivery</IonLabel>
                </IonCol>
              </IonRow>
            </IonCol>
            <IonCol>
              <IonRow className="withWhiteLine h-100 center-align">
                <IonCol size='3' className='mr-1 p-0'>
                  <IonIcon icon={boatOutline} size="large"></IonIcon>
                </IonCol>
                <IonCol>
                  <IonLabel className='filterLabel'>Free Delivery <br /> Free Return</IonLabel>
                </IonCol>
              </IonRow>
            </IonCol>
            <IonCol>
              <IonRow class='h-100 center-align'>
                <IonCol size='3' className='mr-1 p-0'>
                  <IonIcon icon={personOutline} size="large"></IonIcon>
                </IonCol>
                <IonCol>
                  <IonLabel className='filterLabel'>Lowest <br />Price</IonLabel>
                </IonCol>
              </IonRow>
            </IonCol>
        </IonRow>
    );
}

export default FilterComponent