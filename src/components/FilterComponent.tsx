import {IonRow, IonCol, IonLabel} from '@ionic/react';
import { FiDollarSign } from 'react-icons/fi';
import { TbTruckDelivery } from 'react-icons/tb';
import { RxPerson } from "react-icons/rx";
import { Link } from 'react-router-dom';

const FilterComponent: React.FC = () => {
    return (
        <IonRow className='filterRow'>
            <IonCol className="withWhiteLine">
                <Link to="/app/product/filtered/cod">
                  <div className="d-flex h-100 center-align space-evenly">
                    <FiDollarSign className='filterIconSize'/>
                    <IonLabel className='filterLabel'>Cash on <br /> Delivery</IonLabel>
                  </div>
                </Link>
            </IonCol>
            <IonCol className="withWhiteLine">
                <Link to="/app/product/filtered/fdfr">
                  <div className="d-flex h-100 center-align space-evenly">
                    <TbTruckDelivery className='filterIconSize'/>
                    <IonLabel className='filterLabel'>Free&nbsp;Delivery <br /> Free&nbsp;Return</IonLabel>
                  </div>
                </Link>
            </IonCol>
            <IonCol className="center-align">
                <Link to="/app/product/filtered/lprice">
                  <div className="d-flex h-100 center-align space-evenly">
                    <RxPerson className='filterIconSize'/>
                    <IonLabel className='filterLabel'>Lowest <br />Price</IonLabel>
                  </div>
                </Link>
            </IonCol>
        </IonRow>
    );
}

export default FilterComponent