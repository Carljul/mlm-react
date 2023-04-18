import { IonList, IonItem } from '@ionic/react';
import CategoryCircle from './CategoryCircleComponent';
import categories from '../../models/Categories';

const Notification: React.FC = () => {
    return (
        <div className="categoryScroll">
            <IonList className='cicrcleCategoryList'>
                {
                    categories.map((item, index) => (
                        <IonItem key={index}>
                            <CategoryCircle id={item.id} label={item.label} img={item.img} />
                        </IonItem>
                    ))
                }
            </IonList>
        </div>
    );
};

export default Notification;
