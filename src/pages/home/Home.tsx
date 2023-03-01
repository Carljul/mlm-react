import { IonCol, IonContent, IonIcon, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, RefresherEventDetail, useIonRouter } from '@ionic/react';
import { thunderstormOutline } from 'ionicons/icons';
import CardItemListComponent from '../../components/CardItemListComponent';
import CategoryCircleListComponent from '../../components/CategoryCircleListComponent';
import FilterComponent from '../../components/FilterComponent';
import Header from '../../components/HeaderComponent';
import Notification from '../../components/NotificationComponent';

const Home: React.FC = () => {
  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      // Any calls to load data go here
      event.detail.complete();
    }, 2000);
  }

  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        {/* Refresher */}
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        
        {/* Search Bar */}
        <IonSearchbar className='sticky' />
        
        {/* Notification */}
        <Notification />

        {/* Category */}
        <IonRow>
            <IonCol>
              <CategoryCircleListComponent />
            </IonCol>
        </IonRow>

        {/* Filter */}
        <FilterComponent />

        {/* Offer Zone */}
        <IonRow>
          <IonCol>
            <h1>Offer Zone <IonIcon icon={thunderstormOutline} color="primary"></IonIcon></h1>
          </IonCol>
        </IonRow>

        {/* Card Items */}
        <CardItemListComponent />

      </IonContent>
    </IonPage>
  );
};

export default Home;
