import { IonIcon } from '@ionic/react';
import { chevronForward } from 'ionicons/icons';

import { GrLocation } from 'react-icons/gr';
import { BsFillEnvelopeExclamationFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


interface NotificationProps {
  id: number,
  icon?: string | null | 'notfication' | 'message',
  goal: string,
  message: string
}

const Notification: React.FC<NotificationProps> = (props: NotificationProps) => {
  return (
    <Link to="/app/notification/details/1" className='linkNoDesign'>
      <p className="greenNotification">
          { !props.icon || props.icon === 'location' ? <GrLocation /> : <BsFillEnvelopeExclamationFill />}
          <span>{props.goal}</span>
          <b>{props.message}</b> 
          <IonIcon icon={chevronForward} />
      </p>
    </Link>
  );
};

export default Notification;
