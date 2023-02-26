import { IonCard, IonLabel } from "@ionic/react";

interface CategoryBoxProps {
    category: string,
    img: string
}

const CategoryBoxComponent: React.FC<CategoryBoxProps> = (props: CategoryBoxProps) => {
    return (
        <div className='d-block center'>
            <IonCard className='h-100px'>
                <img alt={props.category} src={props.img} className='h-100'/>
                </IonCard>
            <IonLabel>{props.category}</IonLabel>
        </div>
    );
}

export default CategoryBoxComponent;