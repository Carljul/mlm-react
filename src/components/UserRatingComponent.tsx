import { IonAvatar, IonCol, IonRow } from "@ionic/react";
import StarRatingComponent from "./StarRatingComponent";
import { RatingProps } from "../models/Ratings";

const UserRatingComponent: React.FC<RatingProps> = (props: RatingProps) => {
    return (
        <IonRow className="mb-3">
            <IonCol size='3'>
                <IonAvatar>
                    <img src={props.user.profile_image} alt=""/>
                </IonAvatar>
            </IonCol>
            <IonCol size='9'>
                <StarRatingComponent rating={props.rating}/>
                <strong>{props.user.person.fullname}</strong>
                <div className='text-ellips-more'>
                    <p>{props.message}</p>
                </div>
            </IonCol>
        </IonRow>
    );
}

export default UserRatingComponent;