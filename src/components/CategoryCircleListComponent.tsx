import { IonList, IonItem } from '@ionic/react';
import CategoryCircle from './CategoryCircleComponent';
import menCategory from '../assets/img/men_category.jpg';
import womenCategory from '../assets/img/women_category.jpg';
import deviceCategory from '../assets/img/device_category.jpg';
import gamingCategory from '../assets/img/gaming_category.jpg';
import gadgetsCategory from '../assets/img/gadgets_category.jpg';

const Notification: React.FC = () => {
    const categories = [{
        id: 1,
        label: 'Men',
        img: menCategory,
    },{
        id: 2,
        label: 'Women',
        img: womenCategory,
    },{
        id: 3,
        label: 'Devices',
        img: deviceCategory,
    },{
        id: 4,
        label: 'Gaming',
        img: gamingCategory,
    },{
        id: 5,
        label: 'Gadget',
        img: gadgetsCategory,
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
