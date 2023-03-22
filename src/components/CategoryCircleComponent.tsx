import { IonAvatar, IonLabel } from '@ionic/react';
import { Link } from 'react-router-dom';

interface CategoryCircleProps {
  img?: string | null,
  label?: string | null
}

const CategoryCircle: React.FC<CategoryCircleProps> = ({img, label}) => {
  return (
    <Link to={`/app/product/filtered/`+label} className="categoryCircles">
      <div className="categoryGroup">
        <IonAvatar className="categoryCircle">
            {img && <img alt="Silhouette of a person's head" src={img} />}
        </IonAvatar>
        <IonLabel>{label}</IonLabel>
      </div>
    </Link>
  );
};

export default CategoryCircle;
