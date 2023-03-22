import { IonIcon } from '@ionic/react';
import { chevronForward } from 'ionicons/icons';

import { GrLocation } from 'react-icons/gr';

const Notification: React.FC = () => {
  return (
    <p className="greenNotification">
        <GrLocation />
        <span>Delivering to</span>
        <b>Delhi - 324423</b> 
        <IonIcon icon={chevronForward} />
    </p>
  );
};

export default Notification;
