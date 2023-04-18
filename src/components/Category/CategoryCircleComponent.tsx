import { IonAvatar, IonLabel } from '@ionic/react';
import { Link } from 'react-router-dom';

interface CategoryCircleProps {
  id: number,
  img?: string | null,
  label?: string | null
}

const CategoryCircle: React.FC<CategoryCircleProps> = (props: CategoryCircleProps) => {
  return (
    <Link to={`/app/product/filtered/`+props.id} className="categoryCircles">
      <div className="categoryGroup">
        <IonAvatar className="categoryCircle">
            {props.img && <img alt="Silhouette of a person's head" src={props.img} />}
        </IonAvatar>
        <IonLabel>{props.label}</IonLabel>
      </div>
    </Link>
  );
};

export default CategoryCircle;
