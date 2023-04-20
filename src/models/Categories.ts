import menCategory from '../assets/img/men_category.jpg';
import womenCategory from '../assets/img/women_category.jpg';
import deviceCategory from '../assets/img/device_category.jpg';
import gamingCategory from '../assets/img/gaming_category.jpg';
import gadgetsCategory from '../assets/img/gadgets_category.jpg';

export interface CategoryProps {
    id: number,
    label: string,
    img: string,
    details?: string,
}

const categories: CategoryProps[] = [{
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
    }
];

export default categories;