import { IonCol, IonContent, IonGrid, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonSearchbar, IonVirtualScroll } from '@ionic/react';
import { locationOutline, chevronForward, cashOutline, personOutline, thunderstormOutline } from 'ionicons/icons';
import CardItem from '../../components/CardItem';
import CategoryCircle from '../../components/CategoryCircleComponent';
import Header from '../../components/HeaderComponent';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        {/* Search Bar */}
        <IonSearchbar />
        {/* Notification */}
        <p className="greenNotification">
            <IonIcon
              icon={locationOutline}
              className="locationIconNotification" />
            Delivering to <b>Delhi - 324423</b> 
            <IonIcon icon={chevronForward} />
        </p>
        {/* Category */}
        <IonRow>
            <IonCol>
              <div className="categoryScroll">
                <IonList className='cicrcleCategoryList'>
                  <IonItem>
                    <CategoryCircle label="Men" img="https://www.nicepng.com/png/detail/4-46270_mini-naruto-naruto-chibi-render.png" />
                  </IonItem>
                  <IonItem>
                    <CategoryCircle label="Women" img="https://wallpapers-clan.com/wp-content/uploads/2023/01/chibi-naruto-pfp-1.jpg" />
                  </IonItem>
                  <IonItem>
                    <CategoryCircle label="Devices" img="https://i.pinimg.com/originals/b5/46/0c/b5460c1046d91d3060bac5cccd800529.jpg" />
                  </IonItem>
                  <IonItem>
                    <CategoryCircle label="Gaming" img="https://www.pngkey.com/png/detail/127-1271692_anime-chibi-and-kawai-image-anime-chibi-naruto.png" />
                  </IonItem>
                  <IonItem>
                    <CategoryCircle label="Gadget" img="https://www.pngkey.com/png/detail/127-1271692_anime-chibi-and-kawai-image-anime-chibi-naruto.png" />
                  </IonItem>
                </IonList>
              </div>
            </IonCol>
        </IonRow>
        {/* Filter */}
        <IonRow className='filterRow'>
            <IonCol>
              <IonRow className="withWhiteLine">
                <IonCol size='3'>
                  <IonIcon icon={cashOutline} size="large"></IonIcon>
                </IonCol>
                <IonCol>
                  <IonLabel>Cash on <br /> Delivery</IonLabel>
                </IonCol>
              </IonRow>
            </IonCol>
            <IonCol>
              <IonRow className="withWhiteLine">
                <IonCol size='3'>
                  <IonIcon icon={cashOutline} size="large"></IonIcon>
                </IonCol>
                <IonCol>
                  <IonLabel>Free Delivery <br /> Free Return</IonLabel>
                </IonCol>
              </IonRow>
            </IonCol>
            <IonCol>
              <IonRow>
                <IonCol size='3'>
                  <IonIcon icon={personOutline} size="large"></IonIcon>
                </IonCol>
                <IonCol>
                  <IonLabel>Lowest <br />Price</IonLabel>
                </IonCol>
              </IonRow>
            </IonCol>
        </IonRow>

        {/* Offer Zone */}
        <IonRow>
          <IonCol>
            <h1>Offer Zone <IonIcon icon={thunderstormOutline} color="primary"></IonIcon></h1>
          </IonCol>
        </IonRow>

        <IonList className='d-flex'>
          <CardItem name="Fjallraven - Fo" price="$109.95" img="https://www.nicepng.com/png/detail/4-46270_mini-naruto-naruto-chibi-render.png" />
          <CardItem name="Fjallraven - Fo" price="$109.95" img="https://www.nicepng.com/png/detail/4-46270_mini-naruto-naruto-chibi-render.png" />
          <CardItem name="Fjallraven - Fo" price="$109.95" img="https://www.nicepng.com/png/detail/4-46270_mini-naruto-naruto-chibi-render.png" />
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Home;