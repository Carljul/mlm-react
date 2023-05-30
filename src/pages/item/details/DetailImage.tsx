import { chevronBackOutline, starOutline } from 'ionicons/icons';
import detailImageStyle from '../../../css/DetailImage.module.css'
import { IonIcon } from '@ionic/react';
interface DetailImageProp {
    image?: undefined | string
}

const DetailImage: React.FC<DetailImageProp> = ({image}) => {
    return (
        <>
            <div className={detailImageStyle['detail-image-wrapper']} style={{backgroundImage: `url(${image})`}}>
                <div className={detailImageStyle['icon-cont']}>
                    <span className={detailImageStyle['rating-icon-pad']}>
                        <IonIcon icon={starOutline}></IonIcon>
                    </span>
                    <span className={detailImageStyle['cheveron-icon-pad']}>
                        <IonIcon icon={chevronBackOutline}></IonIcon>
                    </span>
                </div>
            </div>
        </>
    )
}

export default DetailImage;
