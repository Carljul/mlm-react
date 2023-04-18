import { IonCol, IonContent, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSearchbar, RefresherEventDetail } from '@ionic/react';
import CardItemListComponent from '../../components/Cards/CardItemListComponent';
import CategoryCircleListComponent from '../../components/Category/CategoryCircleListComponent';
import FilterComponent from '../../components/FilterComponent';
import Header from '../../components/HeaderComponent';
import Notification from '../../components/NotificationComponent';
import { HiOutlineLightningBolt } from 'react-icons/hi';

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
        <IonSearchbar className='searchBar sticky' />
        
        {/* Notification */}
        <Notification
          id={1}
          goal="Delivering to"
          message='Delhi - 324423'
        />

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
            <div className="d-flex center-align">
              <h1>Offer Zone</h1>
              <HiOutlineLightningBolt className='offerZoneIcon' />
            </div>
          </IonCol>
        </IonRow>

        {/* Card Items */}
        <CardItemListComponent />

      </IonContent>
    </IonPage>
  );
};

export default Home;
