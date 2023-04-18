import { IonCard, IonCardContent, IonCol, IonGrid, IonItem, IonLabel, IonRow, IonThumbnail } from "@ionic/react";
import { GrDeliver } from 'react-icons/gr';
import { TbCurrencyPeso } from 'react-icons/tb';
import { Link } from "react-router-dom";

interface OrdersTrackCardProps {
    id: number,
    courier: string,
    status: string,
    date_to_get: string,
    img: string,
    name: string,
    variations?: object,
    quantity: number,
    product_id: number,
    product_price: number,
    delivery_price: number,
    total_price: number,
    delivery_address: string,
    item_current_address: string
}

const OrdersTrackCard: React.FC<OrdersTrackCardProps> = (props: OrdersTrackCardProps) => {
    const variations = props.variations ? JSON.stringify(props.variations)
        .replace(/[{}"]/g, '')
        .replace(/:/g, ': ')
        .replace(/,/g, ', ') : '';

    const moneyFormatter = (num: number) => {
        return num.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="order-track-card">
            <IonGrid>
                <IonRow className="order-track-courier-status">
                    <IonCol>
                        <IonLabel>{props.courier}</IonLabel>
                    </IonCol>
                    <IonCol>
                        <IonLabel className="float-right">{props.status}</IonLabel>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <Link to="#" style={{textDecoration: 'none'}}>
                            <IonCard className="delivery_date">
                                <IonCardContent>
                                    <div className="d-flex center-align">
                                        <GrDeliver />&nbsp;
                                        <IonLabel>{props.date_to_get}</IonLabel>
                                    </div>
                                </IonCardContent>
                            </IonCard>
                        </Link>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem className="order-track-details">
                            <IonThumbnail slot="start">
                                <img src={props.img} alt={props.name} />
                            </IonThumbnail>
                            <IonLabel>
                                <Link to="#" style={{textDecoration: 'none'}}>
                                    <span className="product_name">{props.name}</span>
                                </Link>
                                {
                                    variations ?
                                    <span className="variation">{variations}</span>
                                    :
                                    <></>
                                }
                                <br />
                                <div className="d-flex space-between">
                                    <span><TbCurrencyPeso style={{fontSize: '12px'}} className="grey-color" />{moneyFormatter(props.product_price)}</span>
                                    <span className="float-right"><small className="grey-color">QTY:</small> {props.quantity}</span>
                                </div>
                                <span className="float-right"><small className="grey-color">Delivery:</small> <TbCurrencyPeso style={{fontSize: '12px'}} />{moneyFormatter(props.delivery_price)}</span>
                                <br />
                                <span className="float-right"><small className="grey-color">Total:</small> <TbCurrencyPeso style={{fontSize: '12px'}} />{moneyFormatter(props.total_price)}</span>
                            </IonLabel>
                        </IonItem>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
}

export default OrdersTrackCard;