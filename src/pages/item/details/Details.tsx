import { IonButton, IonCol, IonContent, IonGrid, IonLabel, IonPage, IonRouterLink, IonRow } from '@ionic/react';
import { useParams } from 'react-router';
import Header from '../../../components/HeaderComponent';
// import UserRatingComponent from '../../../components/UserRatingComponent';
import VariationDropdownComponent from '../../../components/VariationDropdownComponent';
import products from '../../../models/Products';
import UserRatingComponent from '../../../components/UserRatingComponent';

const Details: React.FC = () => {
  // Parameter from URL
  const {id} = useParams<{id: string}>();
  let product = products.find(item => item.id === parseInt(id));
  let ratings = product?.ratings || [];
  let variations = product?.variations || [];

  function filters() {
    const grouped = variations.reduce((result: {[key: string]: any[]}, item) => {
      if (item.variation.size !== null && item.variation.size !== undefined) {
        const groupKey = "sizes";
        if (!result[groupKey]) {
          result[groupKey] = [];
        }
        result[groupKey].push({index: item.variation.id, value: item.variation.size});
      } else if (item.variation.color !== null && item.variation.color !== undefined) {
        const groupKey = "colors";
        if (!result[groupKey]) {
          result[groupKey] = [];
        }
        result[groupKey].push({index: item.variation.id, value: item.variation.color, display: item.variation.colorName});
      }
      return result;
    }, {});
    
    const output = Object.keys(grouped).map((key) => {
      return { [key]: grouped[key] };
    });
    
    return output;
  }
  filters();

  return (
    <IonPage>
        <Header/>
        <IonContent className='ion-padding'>
            <IonGrid className='mb-3'>
              <IonRow>
                <IonCol>
                  <h1 className='center bold'>{product?.details.name}</h1>
                </IonCol>
              </IonRow>
              <IonRow>
                {
                  filters().map((item, value) => (
                    <IonCol>
                      <VariationDropdownComponent
                        key={value}
                        type={Object.keys(item)[0]}
                        list={item[Object.keys(item)[0]]}
                      />
                    </IonCol>
                  ))
                }
              </IonRow>
              <IonRow>
                <IonCol>
                  <h4 className='bold'>Details</h4>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <p className='text-justify'>{product?.details.description}</p>
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
                  {
                    ratings.map((item, value) => (
                      <UserRatingComponent 
                        key={value}
                        id={item.id}
                        user_id={item.user_id}
                        product_id={item.product_id}
                        rating={item.rating}
                        message={item.message}
                        user={item.user}
                      />
                    ))
                  }
                </IonCol>
              </IonRow>
            </IonGrid>
            {/* Add to Cart */}
            <IonGrid className='fixedAddToCart'>
              <IonRow>
                <IonCol>
                  <IonLabel>Price</IonLabel>
                  <br />
                  <IonLabel color='success'>${product?.details.price}</IonLabel>
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
