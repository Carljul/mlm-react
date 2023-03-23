import { IonContent, IonPage } from '@ionic/react';
import CategoryBoxComponent from '../../components/CategoryBoxComponent';
import Header from '../../components/HeaderComponent';
import menCategory from '../../assets/img/men_category.jpg';

const Categories: React.FC = () => {
  const categories = [{
      id: 1,
      label: 'Men',
      img: menCategory,
  },{
      id: 2,
      label: 'Women',
      img: menCategory,
  },{
      id: 3,
      label: 'Devices',
      img: menCategory,
  },{
      id: 4,
      label: 'Gaming',
      img: menCategory,
  },{
      id: 5,
      label: 'Gadget',
      img: menCategory,
  }];
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
