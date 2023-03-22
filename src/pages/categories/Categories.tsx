import { IonContent, IonPage } from '@ionic/react';
import CategoryBoxComponent from '../../components/CategoryBoxComponent';
import Header from '../../components/HeaderComponent';

const Categories: React.FC = () => {
  return (
    <IonPage>
        <Header />
        <IonContent fullscreen>  
          <div className='d-grid template-3-columns'>
            <CategoryBoxComponent category='Men' img="https://ionicframework.com/docs/img/demos/card-media.png"/>
            <CategoryBoxComponent category='Women' img="https://ionicframework.com/docs/img/demos/card-media.png"/>
            <CategoryBoxComponent category='Devices' img="https://ionicframework.com/docs/img/demos/card-media.png"/>
            <CategoryBoxComponent category='Gaming' img="https://ionicframework.com/docs/img/demos/card-media.png"/>
            <CategoryBoxComponent category='Gadget' img="https://ionicframework.com/docs/img/demos/card-media.png"/>
            <CategoryBoxComponent category='Men' img="https://ionicframework.com/docs/img/demos/card-media.png"/>
            <CategoryBoxComponent category='Women' img="https://ionicframework.com/docs/img/demos/card-media.png"/>
            <CategoryBoxComponent category='Devices' img="https://ionicframework.com/docs/img/demos/card-media.png"/>
            <CategoryBoxComponent category='Gaming' img="https://ionicframework.com/docs/img/demos/card-media.png"/>
            <CategoryBoxComponent category='Gadget' img="https://ionicframework.com/docs/img/demos/card-media.png"/>
          </div>
        </IonContent>
    </IonPage>
  );
};

export default Categories;
