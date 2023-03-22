import { IonAvatar, IonCol, IonRow } from "@ionic/react";
import StarRatingComponent from "./StarRatingComponent";

const UserRatingComponent: React.FC = () => {
    return (
        <IonRow className="mb-3">
            <IonCol size='3'>
                <IonAvatar>
                    <img src='https://www.nicepng.com/png/detail/4-46270_mini-naruto-naruto-chibi-render.png' alt=""/>
                </IonAvatar>
            </IonCol>
            <IonCol size='9'>
                <StarRatingComponent rating={2}/>
                <strong>Juls</strong>
                <div className='text-ellips-more'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae perspiciatis adipisci eligendi accusamus. Repudiandae fugiat alias ratione sequi sunt excepturi perspiciatis debitis unde vero ut repellendus facere labore, provident animi.</p>
                </div>
            </IonCol>
        </IonRow>
    );
}

export default UserRatingComponent;