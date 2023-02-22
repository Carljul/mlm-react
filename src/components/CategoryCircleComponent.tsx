import { IonAvatar, IonLabel } from '@ionic/react';

interface CategoryCircleProps {
  img?: string | null,
  label?: string | null
}

const CategoryCircle: React.FC<CategoryCircleProps> = ({img, label}) => {
  return (
    <>
      <div className="categoryGroup">
        <IonAvatar className="categoryCircle">
            {img && <img alt="Silhouette of a person's head" src={img} />}
        </IonAvatar>
        <IonLabel>{label}</IonLabel>
      </div>
    </>
  );
};

export default CategoryCircle;
