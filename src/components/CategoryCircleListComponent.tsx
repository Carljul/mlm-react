import { IonList, IonItem } from '@ionic/react';
import CategoryCircle from './CategoryCircleComponent';
import menCategory from '../assets/img/men_category.jpg';

const Notification: React.FC = () => {
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
