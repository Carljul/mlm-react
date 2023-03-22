import { IonCard, IonLabel } from "@ionic/react";
import { Link } from "react-router-dom";

interface CategoryBoxProps {
    category: string,
    img: string
}

const CategoryBoxComponent: React.FC<CategoryBoxProps> = (props: CategoryBoxProps) => {
    return (
        <Link to={`/app/product/filtered/`+props.category} className="router-category">
            <div className='d-block center'>
                <IonCard className='h-100px'>
                    <img alt={props.category} src={props.img} className='h-100'/>
                    </IonCard>
                <IonLabel>{props.category}</IonLabel>
            </div>
        </Link>
    );
}

export default CategoryBoxComponent;