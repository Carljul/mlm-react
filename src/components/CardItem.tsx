import { IonAvatar, IonCard, IonCardContent, IonItem, IonLabel, IonText, IonThumbnail } from '@ionic/react';

interface CardItemProps {
  img?: string,
  name?: string,
  price?: string
}

const CardItem: React.FC<CardItemProps> = ({img, name, price}) => {
  return (
    <IonItem>
        <IonCard>
            <IonCardContent>
                <IonThumbnail>
                    <img alt={name} src={img} />
                </IonThumbnail>
                <IonText>{name}</IonText>
                <br />
                <IonText>{price}</IonText>
            </IonCardContent>
        </IonCard>
    </IonItem>
  );
};

export default CardItem;
