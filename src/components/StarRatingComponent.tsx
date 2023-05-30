import { IonIcon } from '@ionic/react';
import {star, starOutline} from 'ionicons/icons';


interface Props {
  rating: number;
}

const StarRatingComponent: React.FC<Props> = ({ rating }) => {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="star-rating float-right">
      {[...Array(filledStars)].map((_, i) => (
        <IonIcon key={`filled-${i}`} icon={star} className="filled star-rating-yellow" />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <IonIcon key={`empty-${i}`} icon={starOutline} className="empty" />
      ))}
    </div>
  );
};

export default StarRatingComponent;