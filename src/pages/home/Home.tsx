import { IonCol, IonContent, IonGrid, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, IonSearchbar, IonVirtualScroll } from '@ionic/react';
import { locationOutline, chevronForward, cashOutline, personOutline, thunderstormOutline, boatOutline } from 'ionicons/icons';
import CardItem from '../../components/CardItem';
import CategoryCircle from '../../components/CategoryCircleComponent';
import Header from '../../components/HeaderComponent';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        {/* Search Bar */}
        <IonSearchbar className='sticky' />
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
              <IonRow className="withWhiteLine h-100">
                <IonCol size='3' className='mr-1 p-0'>
                  <IonIcon icon={cashOutline} size="large"></IonIcon>
                </IonCol>
                <IonCol>
                  <IonLabel className='filterLabel'>Cash on <br /> Delivery</IonLabel>
                </IonCol>
              </IonRow>
            </IonCol>
            <IonCol>
              <IonRow className="withWhiteLine h-100">
                <IonCol size='3' className='mr-1 p-0'>
                  <IonIcon icon={boatOutline} size="large"></IonIcon>
                </IonCol>
                <IonCol>
                  <IonLabel className='filterLabel'>Free Delivery <br /> Free Return</IonLabel>
                </IonCol>
              </IonRow>
            </IonCol>
            <IonCol>
              <IonRow class='h-100'>
                <IonCol size='3' className='mr-1 p-0'>
                  <IonIcon icon={personOutline} size="large"></IonIcon>
                </IonCol>
                <IonCol>
                  <IonLabel className='filterLabel'>Lowest <br />Price</IonLabel>
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

        {/* Card Items */}
        <div className='d-grid template-3-columns'>
          <CardItem name="Fjallraven - Fo" price="$109.95" img="https://www.nicepng.com/png/detail/4-46270_mini-naruto-naruto-chibi-render.png" />
          <CardItem name="Fjallraven - Fo" price="$109.95" img="https://www.nicepng.com/png/detail/4-46270_mini-naruto-naruto-chibi-render.png" />
          <CardItem name="Fjallraven - Fo" price="$109.95" img="https://www.nicepng.com/png/detail/4-46270_mini-naruto-naruto-chibi-render.png" />
          <CardItem name="Fjallraven - Fo" price="$109.95" img="https://www.nicepng.com/png/detail/4-46270_mini-naruto-naruto-chibi-render.png" />
          <CardItem name="Fjallraven - Fo" price="$109.95" img="https://www.nicepng.com/png/detail/4-46270_mini-naruto-naruto-chibi-render.png" />
          <CardItem name="Fjallraven - Fo" price="$109.95" img="https://www.nicepng.com/png/detail/4-46270_mini-naruto-naruto-chibi-render.png" />
          <CardItem name="Fjallraven - Fo" price="$109.95" img="https://www.nicepng.com/png/detail/4-46270_mini-naruto-naruto-chibi-render.png" />
          <CardItem name="Fjallraven - Fo" price="$109.95" img="https://www.nicepng.com/png/detail/4-46270_mini-naruto-naruto-chibi-render.png" />
          <CardItem name="Fjallraven - Fo" price="$109.95" img="https://www.nicepng.com/png/detail/4-46270_mini-naruto-naruto-chibi-render.png" />
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Home;
