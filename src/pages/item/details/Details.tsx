import { IonButton, IonCol, IonContent, IonGrid, IonLabel, IonPage, IonRouterLink, IonRow } from '@ionic/react';
import { useParams } from 'react-router';
import Header from '../../../components/HeaderComponent';
import UserRatingComponent from '../../../components/UserRatingComponent';
import VariationDropdownComponent from '../../../components/VariationDropdownComponent';


const Details: React.FC = () => {
  // Parameter from URL
  const {id} = useParams<{id: string}>();

  const sizes = [{
      index: 'xs',
      value: 'XS'
    },{
      index: 's',
      value: 'S'
    },{
      index: 'm',
      value: 'M'
    },{
      index: 'l',
      value: 'L'
    },{
      index: 'xl',
      value: 'XL'
    },{
      index: 'xxl',
      value: 'XXL'
  }];
  
  const colors = [{
    index: 'green',
    value: 'Green'
  },{
    index: 'blue',
    value: 'Blue'
  },{
    index: 'yellow',
    value: 'Yellow'
  },{
    index: 'black',
    value: 'Black'
  }]


  return (
    <IonPage>
        <Header/>
        <IonContent className='ion-padding'>
            <IonGrid className='mb-3'>
              <IonRow>
                <IonCol>
                  <h1 className='center bold'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <VariationDropdownComponent
                    type='sizes'
                    list={sizes}
                  />
                </IonCol>
                <IonCol>
                  <VariationDropdownComponent
                    type='colors'
                    list={colors}
                  />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <h4 className='bold'>Details</h4>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda a corporis totam, necessitatibus minus animi deserunt magnam eligendi nisi perspiciatis, dolores harum quia atque sunt! Minima necessitatibus debitis a molestiae.</p>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <h4 className='bold'>Reviews</h4>
                  <IonRouterLink color='success' href={`/app/review/`+id}>Write your review</IonRouterLink>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <UserRatingComponent />
                  <UserRatingComponent />
                  <UserRatingComponent />
                </IonCol>
              </IonRow>
            </IonGrid>
            {/* Add to Cart */}
            <IonGrid className='fixedAddToCart'>
              <IonRow>
                <IonCol>
                  <IonLabel>Price</IonLabel>
                  <br />
                  <IonLabel color='success'>$109.95</IonLabel>
                </IonCol>
                <IonCol>
                  <IonButton color='success' className='fixedAddToCartButton'>ADD</IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
  );
};

export default Details;
