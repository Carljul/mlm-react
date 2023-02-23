import { IonIcon } from '@ionic/react';
import { locationOutline, chevronForward } from 'ionicons/icons';

const Notification: React.FC = () => {
  return (
    <p className="greenNotification">
        <IonIcon
          icon={locationOutline}
          className="locationIconNotification" />
        Delivering to <b>Delhi - 324423</b> 
        <IonIcon icon={chevronForward} />
    </p>
  );
};

export default Notification;
