import { IonContent, IonPage } from '@ionic/react';
import CategoryBoxComponent from '../../components/Category/CategoryBoxComponent';
import Header from '../../components/HeaderComponent';
import categories from '../../models/Categories';

const Categories: React.FC = () => {
  return (
    <IonPage>
        <Header />
        <IonContent fullscreen>  
          <div className='d-grid template-3-columns'>
            {
              categories.map((item, index) => (
                <CategoryBoxComponent key={index} id={item.id} category={item.label} img={item.img}/>
              ))
            }
          </div>
        </IonContent>
    </IonPage>
  );
};

export default Categories;
