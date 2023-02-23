import { IonList, IonItem } from '@ionic/react';
import CategoryCircle from './CategoryCircleComponent';

const Notification: React.FC = () => {
    return (
        <div className="categoryScroll">
            <IonList className='cicrcleCategoryList'>
                <IonItem>
                    <CategoryCircle label="Men" img="https://www.nicepng.com/png/detail/4-46270_mini-naruto-naruto-chibi-render.png" />
                </IonItem>
                <IonItem>
                    <CategoryCircle label="Women" img="https://wallpapers-clan.com/wp-content/uploads/2023/01/chibi-naruto-pfp-1.jpg" />
                </IonItem>
                <IonItem>
                    <CategoryCircle label="Devices" img="https://i.pinimg.com/originals/b5/46/0c/b5460c1046d91d3060bac5cccd800529.jpg" />
                </IonItem>
                <IonItem>
                    <CategoryCircle label="Gaming" img="https://www.pngkey.com/png/detail/127-1271692_anime-chibi-and-kawai-image-anime-chibi-naruto.png" />
                </IonItem>
                <IonItem>
                    <CategoryCircle label="Gadget" img="https://www.pngkey.com/png/detail/127-1271692_anime-chibi-and-kawai-image-anime-chibi-naruto.png" />
                </IonItem>
            </IonList>
        </div>
    );
};

export default Notification;
